

#include "iaq_globals.h"
#include "PCA9548ADWR.h"
#include "ms5637.h"
#include "sps30.h"
#include "sgp40.h"
#include "sgp40_voc_index.h"
#include "shtc3.h"
#include "scd30.h"
#include "veml770.h"
#include "ics43434.h"

#include "mgos_timers.h"
#include "mgos_gpio.h"
#include "mgos_system.h"

#include "websocket.h"

#include <math.h>
#include <string.h>
/**********************
 * MACROS
 * */

/*PIR GPIO*/
#define PIR_SIG 35 // GPIO_35 IN

/*INVALID DATA*/
#define INVALID_DATA 0
/*Sensor not initalized */
#define ERROR_CODE 0

#define PERIODIC_RESET_MIN 30
#define PERIODIC_RESET_MAX 180

/*********************************
 * LOCAL VARIABLES
 *
 * */
/******* Timer variables *******/
mgos_timer_id pirTimerID = MGOS_INVALID_TIMER_ID;
/*********************** PAY LOAD VARIABLES ************************************/

/****** IAQ DATA VARIABLES ******/
/*Temp limit values */
static uint8_t tempLowLimit = 0;
static uint8_t tempHighLimit = 50;

/*Pressure limit values */
static uint16_t pressureLowLimit = 300;
static uint16_t pressureHighLimit = 1200;
/*rh limit values */
static uint8_t rhLowLimit = 0;
static uint8_t rhHighLimit = 100;

/*voc limit values */
static uint16_t vocLowLimit = 0;
static uint16_t vocHighLimit = 500;

/*Ethonal limit values*/
static uint8_t etohLowLimit = 0;
static uint16_t etohHighLimit = 1000;

/*TVOC limit values */
static uint8_t tvocLowLimit = 0;
static uint8_t tvocHighLimit = 50;

/*Ec02 limit values*/
static uint16_t eco2LowLimit = 400;
static uint16_t eco2HighLimit = 10000;

/*IAQ limit values*/
static uint8_t iaqLowLimit = 0;
static uint8_t iaqHighLimit = 5;

/*Lux limit values*/
static uint8_t luxLowLimit = 0;
static uint32_t luxHighLimit = 120000;

/*Noise limit values */
static uint8_t noiseLowLimit = 0;
static uint8_t noiseHighLimit = 110;

/*C02 limit values */
static uint16_t co2LowLimit = 400;
static uint16_t co2HighLimit = 10000;

/*PM1 && PM2.5 && PM4, PM10 limit values*/
static uint8_t pmLowLimit = 0;
static uint16_t pmHighLimit = 1000;

/* Sensor target variables */
static uint8_t adc_result[32] = {0};
/***********GLOBAL VARIABLES************/
static float alscorrectionFactor = 4.4;

/* scd30 varibales */
float co2_ppm, temperature, relative_humidity;
int16_t err;
uint16_t interval_in_seconds = 2;

/* sps30 varibales */
struct sps30_measurement m;
int16_t ret;
uint16_t data_ready;

/* pir variables */
#ifndef PIR
static uint16_t pirCbDuration = 30000; // 30 seconds;
static uint8_t Lop = 0;
// to set un coupancy cycle
static uint8_t LoopCount = 0;
// variable to check 8pir hit
static uint8_t occupancyStateStatus = 0x05; // edited by abhash
// variables to store Occupancy state
static uint8_t occupancyState = 0x05;
// used to save the current occupancyState and act as a flag.
static uint8_t previousOccupancyState = 0x05;
// variables to count the number of hits from sensors.
static uint8_t pirHits = 0;
// Occupancy timer flag (0 is inactive 1 is active)
// static uint8 occupancyTimerState = 0;
// count value unocupancy to occupay
static uint8_t pirUpperLimit = 4;
////count value ocupancy to occupay
static uint8_t pirLowerLimit = 2;
// add no of unOccupancy cycle which can be change throug level control  1 == uunoccupancy 2 min 2 == unoccupancy for 4 min
static uint8_t unOccupancyLevel = 4;
#endif

/*OFFSET Variables*/
int16_t temperature_offset;
int16_t humidity_offset;
int16_t lux_offset;
int16_t co2_offset;
int16_t pm_1_offset;
int16_t pm_2_5_offset;
int16_t pm_4_offset;
int16_t pm_10_offset;
int16_t Tvoc_offset;
int16_t noise_offset;
int16_t co2_force_calibration_refernce;
int16_t fan_fc_calibration;
int16_t air_pressure_offset;

/**********LOCAL FUNCTIONS***********/

uint8_t initMs5637();
uint8_t initSgp40AndShtc3();
uint8_t initVeml7700();
uint8_t initScd30();
uint8_t initSps30();
uint8_t initZmod4xx();

void pirTimerCb();
void pirBtnIntrptCb();
void stateChange(uint8_t currentLoopCount);
static float dataValidator(float data, uint16_t lowLimit, uint32_t highLimit, float defaultValue);
float get_avarage(float *array, uint8_t count);

void loadConfigurablefileds()
{
  temperature_offset = mgos_sys_config_get_iaq_temperature();
  humidity_offset = mgos_sys_config_get_iaq_humidiy();
  lux_offset = mgos_sys_config_get_iaq_lux();
  co2_offset = mgos_sys_config_get_iaq_co2();
  pm_1_offset = mgos_sys_config_get_iaq_pm_1();
  pm_2_5_offset = mgos_sys_config_get_iaq_pm_2_5();
  pm_4_offset = mgos_sys_config_get_iaq_pm_4();
  pm_10_offset = mgos_sys_config_get_iaq_pm_10();
  Tvoc_offset = mgos_sys_config_get_iaq_Tvoc_offset();
  noise_offset = mgos_sys_config_get_iaq_noise_offset();
  air_pressure_offset = mgos_sys_config_get_iaq_air_pressure_offset();
  output_type = mgos_sys_config_get_iaq_output_type();

  /*Timer interval fileds*/
  if (mgos_sys_config_get_iaq_measurementinterval() == 0)
  {
    mgos_sys_config_set_iaq_measurementinterval(10);
  }
  else if (mgos_sys_config_get_iaq_measurementinterval() > 60)
  {
    mgos_sys_config_set_iaq_measurementinterval(60);
  }
  if ((mgos_sys_config_get_iaq_periodicinterval() >= PERIODIC_RESET_MIN) && (mgos_sys_config_get_iaq_periodicinterval() <= PERIODIC_RESET_MAX))
  {
    periodic_interval = mgos_sys_config_get_iaq_periodicinterval();
  }
  else
  {
    periodic_interval = 30;
  }
  measurement_intervel = mgos_sys_config_get_iaq_measurementinterval();
  publish_intervel = mgos_sys_config_get_iaq_publishinterval();

  /*IAQ Default values */
  iaqDefault.Temperature = 25.00;
  iaqDefault.RelativeHumidity = 50.00;
  iaqDefault.Co2 = 600.00;
  iaqDefault.Pressure = 910.0;
  iaqDefault.Lux = 310.00;
  iaqDefault.Tvoc = 25.0;
  iaqDefault.Pm1 = 5.0;
  iaqDefault.Pm2_5 =5.0;
  iaqDefault.Pm4 = 10.0;
  iaqDefault.Pm10 = 10.0;
  iaqDefault.Noise = 45.0;

}

/*********************************************************************
 * @fn    initMs5637
 *
 * @brief initialize ms5637 I2C using mux
 *
 * @prams - none
 *
 * @return  1 if Successful else 0.
 */
uint8_t initMs5637()
{
  selectI2cChannel(MS5637_I2C_CHANNEL);
#ifdef DEBUG
  printf("ms5637_init:%d\n", ms5637_init());
  return 1;
#else
  if (!(ms5637_init()))
  {
    return 0;
  }
  return 1;
#endif
}
/*********************************************************************
 * @fn    initSgp40AndShtc3
 *
 * @brief initialize both SGP40 and SHTC3 over I2C using mux
 *
 * @param  - None
 *
 * @return  1 if Successful else 0.
 */
uint8_t initSgp40AndShtc3()
{
  if (initSgp40Shtc30() == NO_ERROR)
  {
#ifdef DEBUG
    printf("SGP40 and SHTC3 probing success..!!\n");
#endif
    return 1;
  }
  else
  {
#ifdef DEBUG
    printf("SGP40 and SHTC3 probing failed..!!\n");
#endif
    return 0;
  }
}

/*********************************************************************
 * @fn    initVeml7700
 *
 * @brief intailize veml7700over I2C using mux
 *
 * @param  - None
 *
 * @return 1 if Successful else 0
 */
uint8_t initVeml7700()
{
  selectI2cChannel(VEML7700_I2C_CHANNEL);
  if (veml7700Begin())
  {

#ifdef DEBUG
    printf("veml7700 init success..!!\n");
#endif
    /* Setting gain */
    setGain(VEML7700_GAIN_1);
    /* Setting integration time */
    if (!setIntegrationTime(VEML7700_IT_25MS))
    {
#ifdef DEBUG
      printf("setIntegrationTime ok\n");
#endif
    }
    switch (getGain())
    {
#ifdef DEBUG
    case VEML7700_GAIN_1:
      printf("Gain: 1\n");
      break;
    case VEML7700_GAIN_2:
      printf("Gain: 2\n");
      break;
    case VEML7700_GAIN_1_4:
      printf("Gain: 1/4\n");
      break;
    case VEML7700_GAIN_1_8:
      printf("Gain: 1/8\n");
      break;
#endif
    }

    switch (getIntegrationTime())
    {
#ifdef DEBUG
    case VEML7700_IT_25MS:
      printf("Integration Time (ms): 25\n");
      break;
    case VEML7700_IT_50MS:
      printf("Integration Time (ms): 50\n");
      break;
    case VEML7700_IT_100MS:
      printf("Integration Time (ms): 100\n");
      break;
    case VEML7700_IT_200MS:
      printf("Integration Time (ms): 200\n");
      break;
    case VEML7700_IT_400MS:
      printf("Integration Time (ms): 400\n");
      break;
    case VEML7700_IT_800MS:
      printf("Integration Time (ms): 800\n");
      break;
#endif
    }

    if (setLowThreshold(10000) == 0)
    {
#ifdef DEBUG
      printf("setLowThreshold ok\n");
#endif
    }
    if (setHighThreshold(20000) == 0)
    {
#ifdef DEBUG
      printf("setHighThreshold ok\n");
#endif
    }
    if (interruptEnable(true) == 0)
    {
#ifdef DEBUG
      printf("interruptEnable ok\n");
#endif
    }
    return 1;
  }
  else
  {
#ifdef DEBUG
    printf("veml7700 init failed..!!\n");
#endif
    return 0;
  }
}

/*********************************************************************
 * @fn    initScd30
 *
 * @brief initialize SCD30 sensor over I2C using mux
 *
 * @param - None
 *
 * @return  1 if Successful.
 */
uint8_t initScd30()
{
  selectI2cChannel(SCD30_I2C_CHANNEL);
  if (NO_ERROR == scd30_probe())
  {
#ifdef DEBUG
    printf("scd30 probing successful\n");
#endif
  }
  else
  {
    return 0;
  }
  scd30_set_measurement_interval(interval_in_seconds);
  sensirion_sleep_usec(20000u);
  scd30_start_periodic_measurement(0);

  return 1;
}
/*********************************************************************
 * @fn    initSps30
 *
 * @brief intailize sps30 over I2C using mux
 *
 * @param  - None
 *
 * @return  1 if Successful else 0.
 */
uint8_t initSps30()
{
  uint8_t count = 0;
  selectI2cChannel(SPS30_I2C_CHANNEL);
  while (sps30_probe() != NO_ERROR)
  {
    count++;
#ifdef DEBUG
    printf("SPS sensor probing failed\n");
#endif
    sensirion_sleep_usec(1000000); /* wait 1s */
    if (count > 5)
    {

      return 0;
    }
  }
#ifdef DEBUG
  printf("SPS sensor probing successful\n");
#endif
  ret = sps30_start_measurement();
  if (ret < 0)
  {
#ifdef DEBUG
    printf("error starting measurement\n");
#endif
  }
  return 1;
}
/*********************************************************************
 * @fn    intailiseIaqSensors
 *
 * @brief initializes all the sensors required
 *
 *
 * @param data - None
 *
 * @return None.
 */

void intailiseIaqSensors()
{
  sensorInitStatus.ms5637Status = initMs5637(); // Init pressure sensor
  mgos_msleep(10);
  sensorInitStatus.Sgp40AndShtc3Status = initSgp40AndShtc3(); // Init Voc Sensor
  mgos_msleep(10);
  sensorInitStatus.vmlStatus = initVeml7700(); // Init Lux Sesnor
  mgos_msleep(10);

  sensorInitStatus.scd30Status = initScd30(); // Init Co2 Sensor
  mgos_msleep(10);
  sensorInitStatus.sps30Status = initSps30(); // Init Pm sensor
  mgos_msleep(10);
  sensorInitStatus.icsStatus = ics43434Init();
}
/*********************************************************************
 * Version : v2.0.0
 * @fn    dataValidator
 *
 * @brief Validate the sensor data
 *
 *
 *@param data - Data which is coming from sensor
 *
 *
 *@param lowLimit- lower value in range of data.
 *
 *
 *@param highLimit- Higher value in Range of Data
 *
 *
 * @return If data is not in range Return INVALID else data.
 */
float dataValidator(float data, uint16_t lowLimit, uint32_t highLimit, float defaultValue)
{
  if (!(data > lowLimit && data < highLimit))
  {
    return defaultValue;
  }
  else
  {
    return data;
  }
}
/*********************************************************************
 * @fn    runMs5637
 *
 * @brief collects data from ms5637 sensor over I2C using mux
 *
 * @param  - None
 *
 * @return None.
 */
void runMs5637()
{
  sensorData.ms5637Temperature = getTemperature();
  sensorData.ms5637Pressure = getPressure();

  /*adding Offset*/
  sensorData.ms5637Temperature += temperature_offset;
  sensorData.ms5637Pressure += air_pressure_offset;

  /*Checking for Valid data*/
  iaqData.ms5637Temperature = dataValidator(sensorData.ms5637Temperature,
                                            tempLowLimit, tempHighLimit, iaqDefault.Temperature);
  iaqData.ms5637Pressure = dataValidator(sensorData.ms5637Pressure,
                                         pressureLowLimit, pressureHighLimit, iaqDefault.Pressure);

  /*Add Offset*/
#ifdef DEBUG
  printf("MS5637 -> temperature: %0.2f and Pressure: %0.2f\n \n",
         sensorData.ms5637Temperature, sensorData.ms5637Pressure);
#endif
}

/*********************************************************************
 * @fn    runSgp40AndShtc3
 *
 * @brief collects data from both sgp410 and shtc3  sensor over I2C using mux
 *
 *
 * @param data - None
 *
 * @return None.
 */
void runSgp40AndShtc3()
{
  int16_t err;
  /* max value form the sensor is 500  */
  int32_t voc_index;
  int32_t temperature_celsius;
  int32_t relative_humidity_percent;
  err = sensirion_measure_voc_index_with_rh_t(&voc_index,
                                              &relative_humidity_percent,
                                              &temperature_celsius);
  // printf("err:%d\n",err);
  if (err == NO_ERROR)
  {
#ifdef DEBUG
    printf("RAW values: VOCindex: %d Humidity[RH]: %d Temperature[degC]:%d\n \n",
           voc_index, relative_humidity_percent, temperature_celsius);
#endif

    sensorData.sgp40VocIndex = voc_index * 0.001 + 1;
    sensorData.shct3RelativeHumidity = relative_humidity_percent * 0.001;
    sensorData.shct3Temperature = temperature_celsius * 0.001;

    /*TVOC */
    sensorData.Tvoc = (log(501 - sensorData.sgp40VocIndex) - 6.24) * (-996.94);

    /*Adding Offset*/
    sensorData.shct3RelativeHumidity += humidity_offset;
    sensorData.shct3Temperature += temperature_offset;
    sensorData.Tvoc += Tvoc_offset;

    /*Checking for InValid data*/
    iaqData.sgp40VocIndex = dataValidator(sensorData.sgp40VocIndex,vocLowLimit,vocHighLimit,1.0);
    iaqData.shct3RelativeHumidity = dataValidator(sensorData.shct3RelativeHumidity, rhLowLimit, rhHighLimit, iaqDefault.RelativeHumidity);
    iaqData.shct3Temperature = dataValidator(sensorData.shct3Temperature,
                                             tempLowLimit, tempHighLimit, iaqDefault.Temperature);
    iaqData.Tvoc = dataValidator(sensorData.Tvoc, tvocLowLimit, tvocHighLimit, iaqDefault.Tvoc);

#ifdef DEBUG
    printf("VOCindex: %0.2f Humidity[RH]: %0.2f Temperature[degC]: %0.2f\n TVOC:%0.2f\n",
           sensorData.sgp40VocIndex, sensorData.shct3RelativeHumidity,
           sensorData.shct3Temperature, sensorData.Tvoc);
#endif
  }
  else
  {
#ifdef DEBUG
    printf("something went wrong\n");
#endif
  }
}

/*********************************************************************
 * @fn    runVeml7700
 *
 * @brief collects data from veml7700 sensor over I2C using mux
 *
 *
 * @param data - None
 *
 * @return None.
 */
void runVeml7700()
{
  selectI2cChannel(VEML7700_I2C_CHANNEL);

  sensorData.veml7700Lux = alscorrectionFactor * readLux();

  /*OFFSET*/
  sensorData.veml7700Lux += lux_offset;
  // Checking For Invalid Data.
  iaqData.veml7700Lux = dataValidator(sensorData.veml7700Lux, luxLowLimit,
                                      luxHighLimit, iaqDefault.Lux);
  /*Adding Offset*/

#ifdef DEBUG
  printf("Lux: %0.2f\n \n", sensorData.veml7700Lux);
#endif
}

/*********************************************************************
 * @fn    runScd30
 *
 * @brief collects data from scd30 sensor over I2C using mux
 *
 *
 * @param data - None
 *
 * @return None.
 */
void runScd30()
{
  uint16_t data_ready = 0;
  uint16_t timeout = 0;
  selectI2cChannel(SCD30_I2C_CHANNEL);
  /* Poll data_ready flag until data is available. Allow 20% more than
   * the measurement interval to account for clock imprecision of the
   * sensor.
   */
  for (timeout = 0; (100000 * timeout) < (interval_in_seconds * 1200000);
       ++timeout)
  {
    err = scd30_get_data_ready(&data_ready);
    if (err != NO_ERROR)
    {
#ifdef DEBUG
      printf("Error reading data_ready flag: %i\n", err);
#endif
    }
    if (data_ready)
    {
      break;
    }
    sensirion_sleep_usec(100000);
  }
  if (!data_ready)
  {
#ifdef DEBUG
    printf("Timeout waiting for data_ready flag\n");
#endif
    return;
  }
  /* Measure co2, temperature and relative humidity and store into
   * variables.
   */
  err = scd30_read_measurement(&co2_ppm, &temperature,
                               &relative_humidity);
  if (err != NO_ERROR)
  {
#ifdef DEBUG

    printf("error reading measurement\n");
#endif
  }
  else
  {
#ifdef DEBUG
    printf("measured co2 concentration: %0.2f ppm, "
           "measured temperature: %0.2f degreeCelsius, "
           "measured humidity: %0.2f %%RH\n \n",
           co2_ppm, temperature, relative_humidity);
#endif

    sensorData.scd30Co2 = co2_ppm;
    sensorData.scd30Temperature = temperature;
    sensorData.scd30Humidity = relative_humidity;

    sensorData.scd30Co2 += co2_offset;
    sensorData.scd30Temperature += temperature_offset;
    sensorData.scd30Humidity += humidity_offset;

    /*##### Added by Sharath #####*/
    /*Checking for InValid data*/
    iaqData.scd30Co2 = dataValidator(sensorData.scd30Co2, co2LowLimit,
                                     co2HighLimit, iaqDefault.Co2);
    iaqData.scd30Temperature = dataValidator(sensorData.scd30Temperature,
                                             tempLowLimit, tempHighLimit, iaqDefault.Temperature);
    iaqData.scd30Humidity = dataValidator(sensorData.scd30Humidity, rhLowLimit,
                                          rhHighLimit, iaqDefault.RelativeHumidity);

    /*Adding Offset */
  }
}

/*********************************************************************
 * @fn    runSps30
 *
 * @brief collects data from sps30 sensor over I2C using mux
 *
 *
 * @param data - None
 *
 * @return None.
 */
void runSps30()
{

  selectI2cChannel(SPS30_I2C_CHANNEL);
  ret = sps30_read_data_ready(&data_ready);
  if (ret < 0)
  {
#ifdef DEBUG
    printf("error reading data-ready flag: %d\n", ret);
#endif
  }
  else if (!data_ready)
  {
#ifdef DEBUG
    printf("data not ready, no new measurement available\n");
#endif
  }
  ret = sps30_read_measurement(&m);
  if (ret < 0)
  {
#ifdef DEBUG
    printf("error reading measurement\n");
#endif
  }
  else
  {

    sensorData.sps30Pm1 = m.mc_1p0;
    sensorData.sps30Pm2_5 = m.mc_2p5;
    sensorData.sps30Pm4 = m.mc_4p0;
    sensorData.sps30Pm10 = m.mc_10p0;

    /*Offset */
    sensorData.sps30Pm1 += pm_1_offset;
    sensorData.sps30Pm2_5 += pm_2_5_offset;
    sensorData.sps30Pm4 += pm_4_offset;
    sensorData.sps30Pm10 += pm_10_offset;
    /*Checking for InValid data*/

    iaqData.sps30Pm1 = dataValidator(sensorData.sps30Pm1, pmLowLimit,
                                     pmHighLimit, iaqDefault.Pm1);
    iaqData.sps30Pm2_5 = dataValidator(sensorData.sps30Pm2_5, pmLowLimit,
                                       pmHighLimit, iaqDefault.Pm2_5);
    iaqData.sps30Pm4 = dataValidator(sensorData.sps30Pm4, pmLowLimit,
                                     pmHighLimit, iaqDefault.Pm4);
    iaqData.sps30Pm10 = dataValidator(sensorData.sps30Pm10, pmLowLimit,
                                      pmHighLimit, iaqDefault.Pm10);
    /*Adding Offset*/

#ifdef DEBUG
    printf("measured values:\n"
           "\t%0.2f pm1.0\n"
           "\t%0.2f pm2.5\n"
           "\t%0.2f pm4.0\n"
           "\t%0.2f pm10.0\n",
           m.mc_1p0, m.mc_2p5, m.mc_4p0, m.mc_10p0);
#endif
  }
}

/*********************************************************************
 * @fn    noiseLeve
 *
 * @brief Reading Noise data from Ics43434 sensor over I2C using mux
 *
 *
 * @param  - None
 *
 * @return None.
 */
void noiseLevel()
{
  sensorData.ics4343NoiseLevel = measureNoise();

  /*Add offset*/
  sensorData.ics4343NoiseLevel += noise_offset;

  /*Data validate*/
  iaqData.ics4343NoiseLevel = dataValidator(sensorData.ics4343NoiseLevel, noiseLowLimit, noiseHighLimit, iaqDefault.Noise);

  // printf("Sound Pressure level:%0.2f dB\n", sensorData.ics4343NoiseLevel);
}

void webConsole()
{
  char *str;
  str = (char*)malloc(11000*sizeof(char));
  sprintf(str, "\"Sensor              | status | SensorData | PublishData |\", \n\t  \"Ms5637Temperature     |\": \" %d | %f | %f |\",\n\t  \"Ms5637Pressure        |\": \" %d | %f | %f |\",\n\t  \"scd30Co2              |\": \" %d | %f | %f |\",\n\t  \"scd30Temperature      |\": \" %d | %f | %f |\",\n\t  \"scd30Humidity         |\": \" %d | %f | %f |\",\n\t  \"sgp40VocIndex         |\": \" %d | %f | %f |\",\n\t  \"shct3Temperature      |\": \" %d | %f | %f |\",\n\t  \"shct3RelativeHumidity |\": \" %d | %f | %f |\",\n\t  \"TVOC                  |\": \" %d | %f | %f |\",\n\t  \"veml7700Lux           |\": \" %d | %f | %f |\", \n\t  \"ics4343NoiseLevel     |\": \" %d | %f | %f |\", \n\t  \"Sps30Pm1              |\": \" %d | %f | %f |\",\n\t  \"Sps30Pm2.5            |\": \" %d | %f | %f |\",\n\t  \"Sps30Pm4              |\": \" %d | %f | %f |\",\n\t  \"Sps30Pm10             |\": \" %d | %f | %f |\"",
          sensorInitStatus.ms5637Status, sensorData.ms5637Temperature, iaqData.ms5637Temperature, sensorInitStatus.ms5637Status, sensorData.ms5637Pressure, iaqData.ms5637Pressure, sensorInitStatus.scd30Status, sensorData.scd30Co2, iaqData.scd30Co2, sensorInitStatus.scd30Status, sensorData.scd30Temperature, iaqData.scd30Temperature, sensorInitStatus.scd30Status, sensorData.scd30Humidity, iaqData.scd30Humidity, sensorInitStatus.Sgp40AndShtc3Status, sensorData.sgp40VocIndex, iaqData.sgp40VocIndex, sensorInitStatus.Sgp40AndShtc3Status, sensorData.shct3Temperature, iaqData.shct3Temperature,
          sensorInitStatus.Sgp40AndShtc3Status, sensorData.shct3RelativeHumidity, iaqData.shct3RelativeHumidity, sensorInitStatus.Sgp40AndShtc3Status, sensorData.Tvoc, iaqData.Tvoc,
          sensorInitStatus.vmlStatus, sensorData.veml7700Lux, iaqData.veml7700Lux, sensorInitStatus.icsStatus, sensorData.ics4343NoiseLevel, iaqData.ics4343NoiseLevel,
          sensorInitStatus.sps30Status, sensorData.sps30Pm1, iaqData.sps30Pm1, sensorInitStatus.sps30Status, sensorData.sps30Pm2_5, iaqData.sps30Pm2_5, sensorInitStatus.sps30Status, sensorData.sps30Pm4, iaqData.sps30Pm4, sensorInitStatus.sps30Status, sensorData.sps30Pm10, iaqData.sps30Pm10);
  send_message_to_webui(str);
  free(str);
}

// void dataProcessing()
// {
//   static uint8_t count;

//   /*Temparature*/
//   tempFiled.TemperatureReserve[count] = sensorData.ms5637Temperature;
//   iaqData.ms5637Temperature = get_avarage(tempFiled.TemperatureReserve, count);

//   /*Pressure*/
//   tempFiled.Pressure[count] = sensorData.ms5637Pressure;
//   iaqData.ms5637Pressure = get_avarage(tempFiled.Pressure, count);

//   /*CO2*/
//   if(sensorData.scd30Co2 > 0)
//   {
//   tempFiled.Co2[count] = sensorData.scd30Co2;
//   iaqData.scd30Co2 = get_avarage(tempFiled.Co2, count);
//   }

//   /*Scd30 Humidity*/
//   tempFiled.HumidityReserved[count] = sensorData.scd30Humidity;
//   iaqData.scd30Humidity = get_avarage(tempFiled.HumidityReserved, count);

//   /*Scd30 Temperature*/
//   tempFiled.TemperatureReserve2[count] = sensorData.scd30Temperature;
//   iaqData.scd30Temperature = get_avarage(tempFiled.TemperatureReserve2, count);

//   /*TVOC*/
//   tempFiled.Tvoc[count] = sensorData.Tvoc;
//   iaqData.Tvoc = get_avarage(tempFiled.Tvoc, count);

//   /*Shtc3 Relative Humidity*/
//   tempFiled.RelativeHumidity[count] = sensorData.shct3RelativeHumidity;
//   iaqData.shct3RelativeHumidity = get_avarage(tempFiled.RelativeHumidity, count);

//   /*Shtc3 temperature*/
//   tempFiled.Temperature[count] = sensorData.shct3Temperature;
//   iaqData.shct3Temperature = get_avarage(tempFiled.Temperature, count);

//   /*Lux*/
//   tempFiled.Lux[count] = sensorData.veml7700Lux;
//   iaqData.veml7700Lux = get_avarage(tempFiled.Lux, count);

//   /*PM*/
//   tempFiled.Pm1[count] = sensorData.sps30Pm1;
//   iaqData.sps30Pm1 = get_avarage(tempFiled.Pm1, count);

//   tempFiled.Pm2_5[count] = sensorData.sps30Pm2_5;
//   iaqData.sps30Pm2_5 = get_avarage(tempFiled.Pm2_5, count);

//   tempFiled.Pm4[count] = sensorData.sps30Pm4;
//   iaqData.sps30Pm4 = get_avarage(tempFiled.Pm4, count);

//   tempFiled.Pm10[count] = sensorData.sps30Pm10;
//   iaqData.sps30Pm10 = get_avarage(tempFiled.Pm10, count);

//   tempFiled.Noise[count] = sensorData.ics4343NoiseLevel;
//   iaqData.ics4343NoiseLevel = get_avarage(tempFiled.Noise, count);

//   count++;
//   if (count == SIZE)
//   {
//     count = 0;
//   }
// }

// float get_avarage(float *array, uint8_t count)
// {
//   float sum = 0, result = 0;
//   if (count == SIZE - 1)
//   {
//     for (uint8_t i = 0; i < SIZE; i++)
//     {
//       sum += array[i];
//     }
//     result = sum / SIZE;
// #ifdef DEBUG
//     // printf("Avg_result:%f\n", result);
// #endif
//     return result;
//   }
//   else
//   {
// #ifdef DEBUG
//     // printf("Latest value:%f\n", array[count]);
// #endif
//     return array[count];
//   }
// }
/************************
 * PIR
 * */

/*********************************************************************
 * @fn      pirInit
 *
 * @brief  Initialise Pir
 *
 * @param   NULL
 *
 * @return  none
 */

void pirInit()
{
  mgos_gpio_set_button_handler(PIR_SIG, MGOS_GPIO_PULL_DOWN, MGOS_GPIO_INT_EDGE_POS, 150, pirBtnIntrptCb, NULL);
  pirTimerID = mgos_set_timer(pirCbDuration, 0, pirTimerCb, NULL);
}

/*******************************************************************************
 * @fn      pirTimerCb
 *
 * @brief   Timeout handler function
 *
 * @param   a0 - unsed
 *
 * @return  none
 */
void pirTimerCb()
{
  LoopCount = LoopCount + 1;
#ifdef DEBUG
  printf("loop count:%d\n", LoopCount);
#endif
  stateChange(LoopCount); // State_Change_Task();
}
/*********************************************************************
 * @fn      pirBtnIntrptCb
 *
 * @brief   call back triggers when pir interrupt occurs
 *
 * @param   NULL
 *
 * @return  none
 */
void pirBtnIntrptCb()
{
  pirHits++;

  // if pir gives more than 4 set state to occupied
  if ((pirHits >= pirUpperLimit) || (occupancyState == 0x0F && pirHits >= pirLowerLimit)) // MODIFIED BY DHANRAJ previously pirHits>8 or already occupaied and pir hit greater than 2
  {

    // Set occupancyState to 0x0f.
    occupancyStateStatus = 0x0F;
    stateChange(Lop);
  }
}

/*********************************************************************
 * @fn      stateChange
 *
 * @brief   declares occupancy or un ocuupancy based on the loop counts and pir hits
 *
 * @param   currentLoopCount - current loop iterations count to delare ocuupied or unoccupied
 *
 * @return  none
 */
void stateChange(uint8_t currentLoopCount)
{

  // set the occupancy state as per the hits recieved from PIR
  if (pirHits >= pirUpperLimit || ((pirHits >= pirLowerLimit) && (occupancyStateStatus == 0x0F))) // MODIFIED BY DHANRAJ previously pirHits>=8,pirHits>2
  {

    // Set occupancyState to 0x0F.
    occupancyState = 0x0F;
    // Start the one shot periodic Occupancy clock to check for occupancy for next 2 min
    if (pirTimerID != MGOS_INVALID_TIMER_ID)
    {
      mgos_clear_timer(pirTimerID);
    }
    pirTimerID = mgos_set_timer(pirCbDuration, MGOS_TIMER_REPEAT, pirTimerCb, NULL);
    LoopCount = 0;
#ifdef DEBUG
    printf("checking condition 1\n");
#endif
  }
  else if (currentLoopCount >= unOccupancyLevel)
  {
    // clear the global loop count flag
    LoopCount = 0;
    // Set occupancyState to 0x00.
    occupancyState = 0x00;
    occupancyStateStatus = 0;
#ifdef DEBUG
    printf("checking condition 2\n");
#endif
    //        printf("condition 2 occupancyState: %d and loopcount: %d \n", occupancyState, loopCount);
  }
  // start timer  again after 1 //this used if unOccupancyLevel set
  else if (currentLoopCount <= unOccupancyLevel)
  {
    // check timer is off then start again
    if (pirTimerID == MGOS_INVALID_TIMER_ID)
    {
      // Start the one shot periodic Occupancy clock to check for occupancy for next 2 min
      pirTimerID = mgos_set_timer(pirCbDuration, MGOS_TIMER_REPEAT, pirTimerCb, NULL);
#ifdef DEBUG
      printf("condition 3 timer started\n");
#endif
    }
#ifdef DEBUG
    printf("checking condition 3\n");
#endif
  }
  // Check for state change and send data if true
  if (previousOccupancyState != occupancyState)
  {
#ifdef DEBUG
    printf("previousOccupancyState: %d ", previousOccupancyState);
#endif
    // Update the current Occupancy Sate
    previousOccupancyState = occupancyState;
    sensorData.occupancy = occupancyState;
#ifdef DEBUG
    printf("occupancyState: %d and sensorData.occupancy: %d \n",
           occupancyState, sensorData.occupancy);
#endif
  }
  pirHits = 0;
}