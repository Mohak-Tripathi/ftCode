/**
 * main.c
 *
 * Created on: 05/01/2023
 *      Author: Sharath U
 */

/*
 * Copyright (c) 2014-2018 Cesanta Software Limited
 * All rights reserved
 *
 * Licensed under the Apache License, Version 2.0 (the ""License"");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an ""AS IS"" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "mgos.h"
#include "mgos_http_server.h"
#include "mgos_mqtt.h"
#include "mgos_wifi.h"
#include "mgos_sys_config.h"
#include "mgos_rpc.h"
#include "mgos_ro_vars.h"
#include "mgos_timers.h"
#include "mgos_system.h"

#include "rpcCallback.h"
#include "iaq_globals.h"
#include "websocket.h"

#include "PCA9548ADWR.h"
#include "network.h"

#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "driver/i2c.h"

#define AP_MODE_ENABLE 1
#define AP_MODE_DISABLE 0

#define PERIODIC_RESET_MIN 10
#define PERIODIC_RESET_MAX 180

#define MESUREMENT_INTERVEL_MIN 10
#define MESUREMENT_INTERVEL_MAX 60

static int i2c_master_port = 0;

/******* MAC address variables *******/
const char *mac_string;
// unsigned long long int macId;

static void gpioInit();
static void iaqDataEventCb(void *arg);
static void periodicIntervalCb(void *arg);
static void ics43434TaskCb(void *arg);

/********** MQTT PUBLISH ************/
static void sendingDataToMqttCb(void *arg);
void i2cScanner();

enum mgos_app_init_result mgos_app_init(void)
{
  /*Clock streching*/
  i2c_set_timeout(i2c_master_port, 12500 * 10);

  i2cScanner();
  iaqData.deviceVersion = 150920230205; // Date+version
  /* Read mac address of the device */
  mac_string = mgos_sys_ro_vars_get_mac_address();
  // macId =  strtoull(mac_string, NULL, 16);
  // printf("mac:%llu",macId);
  /* Set mac address as device ID */
  mgos_sys_config_set_device_id(mac_string);

  /*Initialize necessary gpio's*/
  gpioInit();

  /*Initialize all sensors*/
  intailiseIaqSensors();

  /*Load necessary fileds*/
  loadConfigurablefileds();

  // if (mgos_sys_config_get_iaq_pir())
  // {
  //   /*Init PIR*/
  //   pirInit();
  // }
  /* Initilization web socket connection */
  web_sockets_connection();

  /*RPC callbacks*/
  rpcCallBacksInit();

  /*Register timer for IAQ Data Measurement*/
  if (measurement_intervel >= MESUREMENT_INTERVEL_MIN && measurement_intervel <= MESUREMENT_INTERVEL_MAX)
  {

    mgos_set_timer(measurement_intervel * 1000, MGOS_TIMER_REPEAT, iaqDataEventCb, NULL);
  }

  /*Register timer for IAQ Data Publishintevel*/
  if (publish_intervel == 0)
  {
    mgos_set_timer((30 * 1000), MGOS_TIMER_REPEAT, sendingDataToMqttCb, NULL);
  }
  else
  {
    mgos_set_timer((publish_intervel * 1000) * 60, MGOS_TIMER_REPEAT, sendingDataToMqttCb, NULL);
  }
  if (periodic_interval >= PERIODIC_RESET_MIN && periodic_interval <= PERIODIC_RESET_MAX)
  {
    /*Register timer for periodic resetintevel*/
    mgos_set_timer((periodic_interval * 1000) * 60, MGOS_TIMER_REPEAT, periodicIntervalCb, NULL);
  }
  BaseType_t xReturned;
  /*Create a task for Noise MAIN TASK*/
  xReturned = xTaskCreate(ics43434TaskCb, "NoiseLevel", 2600, NULL, 2, NULL);
  if (xReturned == pdPASS)
  {
#ifdef DEBUG
    // The task was created.
    printf("task was created\n");
#endif
  }
  for (uint8_t i = 0; i < 5; i++)
  {
    mgos_gpio_write(GLED, true);
    mgos_gpio_write(YLED, true);
    mgos_msleep(500);
    mgos_gpio_write(GLED, false);
    mgos_gpio_write(YLED, false);
    mgos_msleep(500);
  }

  return MGOS_APP_INIT_SUCCESS;
}

void i2cScanner()
{
  uint8_t result;
  uint8_t nDevices = 0;
  uint8_t Buffer[1];
  Buffer[0] = 0;
  for (uint8_t j = 0; j < 8; j++)
  {
    selectI2cChannel(j);
#ifdef DEBUG
    printf("Channel:%d\n", j);
#endif
    for (uint8_t i = 0; i < 127; i++)
    {
      result = mgos_i2c_write(mgos_i2c_get_global(), i, &Buffer, sizeof(Buffer), true);
      if (result)
      {
        nDevices++;
#ifdef DEBUG
        printf("Address %x\n", i);
#endif
        if (i != PCA9543A_ADDRESS)
        {
          i2cScannerSensorStatus[j] = i;
        }
      }
      mgos_msleep(10);
    }
#ifdef DEBUG
    printf("Detected %d devices\n", nDevices);
#endif
    nDevices = 0;
  }
}

static void ics43434TaskCb(void *arg)
{
  const TickType_t xDelay = 25 / portTICK_PERIOD_MS;
  for (;;)
  {
    if (sensorInitStatus.icsStatus)
    {
      noiseLevel();
    }
    else
    {
      iaqData.ics4343NoiseLevel = iaqDefault.Noise;
      break;
    }
    vTaskDelay(xDelay);
  }
  (void)arg;
}

/*******************************************************************************
 * @fn      iaq_dataEvent_task
 *
 * @brief   initialize all sensors and algorithm to measure sensor data
 *
 * @param   arg -> unused.
 *
 * @return  None.
 */
void iaqDataEventCb(void *arg)
{
  mgos_gpio_blink(GLED, 1000, 29000);
  mgos_gpio_write(YLED, 0);
  if (sensorInitStatus.ms5637Status)
  {
    runMs5637();
  }
  else
  {
    /*Error status*/
    iaqData.ms5637Temperature = iaqDefault.Temperature;
    iaqData.ms5637Pressure = iaqDefault.Pressure;
  }
  mgos_msleep(10);
  if (sensorInitStatus.Sgp40AndShtc3Status)
  {

    runSgp40AndShtc3();
  }
  else
  {
    /*Error status*/
    iaqData.sgp40VocIndex = 1;
    iaqData.shct3RelativeHumidity = iaqDefault.RelativeHumidity;
    iaqData.shct3Temperature = iaqDefault.Temperature;
    iaqData.Tvoc = iaqDefault.Tvoc;
  }
  mgos_msleep(50);
  if (sensorInitStatus.vmlStatus)
  {

    runVeml7700();
  }
  else
  {
    /*Error status*/
    iaqData.veml7700Lux = iaqDefault.Lux;
  }

  if (sensorInitStatus.scd30Status)
  {

    runScd30();
  }
  else
  {
    /*Error status*/
    iaqData.scd30Co2 = iaqDefault.Co2;
    iaqData.scd30Humidity = iaqDefault.RelativeHumidity;
    iaqData.scd30Temperature = iaqDefault.Temperature;
  }
  mgos_msleep(20);
  if (sensorInitStatus.sps30Status)
  {

    runSps30();
  }
  else
  {
    /*Error status*/
    iaqData.sps30Pm1 = iaqDefault.Pm1;
    iaqData.sps30Pm2_5 = iaqDefault.Pm2_5;
    iaqData.sps30Pm4 = iaqDefault.Pm4;
    iaqData.sps30Pm10 = iaqDefault.Pm10;
  }
  mgos_msleep(20);
  if (debug)
  {
    webConsole();
  }
  (void)arg;
}

/*******************************************************************************
 * @fn      sendingDataToMqtt
 *
 * @brief   Sending sensor Data over Mqtt
 *
 * @param   None.
 *
 * @return  None.
 */
static void sendingDataToMqttCb(void *arg)
{

  if (mgos_mqtt_global_is_connected())
  {
    maintime = time(0);
    epochTime = (uint64_t)time(&maintime);
    epochTime = epochTime * 1000;
    mgos_sys_config_set_mqtt_status("Connected");
    mgos_mqtt_pubf(mgos_sys_config_get_mqtt_pub(), 0, false, "{DeviceVersion:%llu,Time:%llu,MAC :%Q, Temperature_R1:%0.2f, Pressure:%0.2f, Co2:%0.2f, Temperature:%0.2f, Humidity_R1:%0.2f, TVoc:%0.2f, RelativeHumidity:%0.2f, Temperature_R2:%0.2f, Lux:%0.2f, Pm1:%0.2f, Pm2_5:%0.2f, Pm4:%0.2f, Pm10:%0.2f,NoiseLevel:%0.2f,OccupancyState:%d,PktId:24,DeviceType:24}",
                   iaqData.deviceVersion, epochTime, mac_string, iaqData.ms5637Temperature, iaqData.ms5637Pressure, iaqData.scd30Co2, iaqData.scd30Temperature, iaqData.scd30Humidity,
                   iaqData.Tvoc, iaqData.shct3RelativeHumidity, iaqData.shct3Temperature, iaqData.veml7700Lux,
                   iaqData.sps30Pm1, iaqData.sps30Pm2_5, iaqData.sps30Pm4, iaqData.sps30Pm10, iaqData.ics4343NoiseLevel, iaqData.occupancy);

    mgos_gpio_write(GLED, 0);
    mgos_gpio_blink(YLED, 1000, 29000);
  }
  else
  {
    if (mgos_mqtt_global_connect()) // This function will force immediate connection attempt if disconnected from broker
    {
      mgos_sys_config_set_mqtt_status("Connected");
    }
    else
    {

      mgos_sys_config_set_mqtt_status("Not Connected");
    }
  }
  broadcast();
}

static void periodicIntervalCb(void *arg)
{
  /*ApMode Off*/
  // turnOffApMode();
}

/*******************************************************************************
 * @fn      gpioInit
 *
 * @brief   initialize necessary gpio's
 *
 * @param   None.
 *
 * @return  None.
 */
static void gpioInit()
{
  mgos_gpio_set_mode(GLED, MGOS_GPIO_MODE_OUTPUT);
  mgos_gpio_set_mode(YLED, MGOS_GPIO_MODE_OUTPUT);
}
