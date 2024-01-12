#include "rpcCallback.h"
#include "websocket.h"
#include "scd30.h"
#include "iaq_globals.h"
#include "PCA9548ADWR.h"
#include "sensirion_common.h"
#include "mgos_i2c.h"
#include "sps30.h"
#include <string.h>

static uint8_t SCD30_I2C_ADDRESS = 0x61;
static uint8_t SGP40_I2C_ADDRESS = 0x59;
static uint8_t SHTC3_I2C_ADDRESS = 0x70;

static uint8_t asc_enable_status = 0;

typedef struct getStatus
{
  uint8_t speed_status : WIDTH_ONE;
  uint8_t laser_status : WIDTH_ONE;
  uint8_t fan_status : WIDTH_ONE;
} status;
status deviceStatus;
char *data = "{result:success}";
char *health = "{\"time\":%llu,\"heapSize\":%d,\"Freeheap_Size\":%d,\"min_Freeheap_Size\":%d,\"Fs_size\":%d,\"free_fs_size\":%d,\"cpu_freq\":%d,\"uptime\":%f,\"sdkversion\":\"%s\",\"MAC\":\"%s\"}";
char *sensor_status = "{\"MS_Status\":%d,\"SGP_Status\":%d,\"vml_Status\":%d,\"scd_Status\":%d,\"sps_status\":%d,\"ics_status\":%d}";
char *i2cScannerData = "{\"SCD30_Address\":%x,\"SHTC3_Address\":%x,\"MS_Address\":%x,\"vml_Address\":%x,\"sps_Address\":%x,\"SGP40_Address\":%x,\"Zmod_Address\":%x}";

void rpcCallBacksInit()
{
  /* Registering RPC callback for rebooting the sensor */
  mg_rpc_add_handler(mgos_rpc_get_global(), "rebootSensor", "{}", rebootSensor, NULL);
  /* Registering RPC callback for resetting the sensor count*/
  mg_rpc_add_handler(mgos_rpc_get_global(), "softReset", "{}", sensirion_soft_reset, NULL);
  /* Registering RPC callback for sensor calibration */
  mg_rpc_add_handler(mgos_rpc_get_global(), "co2calibration", "{}", Co2Calibration, NULL);
  /* Registering RPC callback for getting system info*/
  mg_rpc_add_handler(mgos_rpc_get_global(), "sysGetInfo", "{}", getSysInfo, NULL);
  /* Registering RPC callback for getting Macid  info*/
  mg_rpc_add_handler(mgos_rpc_get_global(), "spsManual", "{}", FanManuval, NULL);
  /* Registering RPC callback for getting device status info*/
  mg_rpc_add_handler(mgos_rpc_get_global(), "deviceStatus", "{}", device_status, NULL);
  /*Registering RPC Enable/Disable debug console*/
  mg_rpc_add_handler(mgos_rpc_get_global(), "debug", "{}", debugWrapper, NULL);
}

/*******************************************************************************
 * @fn      rebootSensor
 *
 * @brief   The device will be rebooted
 *
 * @param   None.
 *
 * @return  None.
 */
void rebootSensor(struct mg_rpc_request_info *ri, void *cb_arg, struct mg_rpc_frame_info *fi, struct mg_str args)
{
  mgos_system_restart_after(100);
  mg_rpc_send_responsef(ri, data);
  (void)cb_arg;
  (void)fi;
}
/*******************************************************************************
 * @fn      co2Calibration
 *
 * @brief   Run FC ans ASC calibration
 *
 * @param   None.
 *
 * @return  None.
 */
void Co2Calibration(struct mg_rpc_request_info *ri, void *cb_arg, struct mg_rpc_frame_info *fi, struct mg_str args)
{
  uint8_t status = NO_ERROR;
  char str[55] = "";
  asc_enable_status ^= 1;
  if (asc_enable_status)
  {
    status = scd30_enable_automatic_self_calibration(asc_enable_status);
    if (!status)
    {
      if (debug)
        send_message_to_webui("\"Automatic_self_calibration Enabled!\"");
    }
    else
    {
      sprintf(str, "\"Failed to Enable AUtomatic self calibration:%d\"", status);
      if (debug)
        send_message_to_webui(str);
      strcpy(str, "");
    }
  }
  else
  {
    status = scd30_enable_automatic_self_calibration(asc_enable_status);
    if (!status)
    {
      if (debug)
        send_message_to_webui("\"Automatic_self_calibration Disabled!\"");
    }
    else
    {
      sprintf(str, "\"Failed to disable Automatic self calibration:%d\"", status);
      if (debug)
        send_message_to_webui(str);
      strcpy(str, "");
    }
  }
  selectI2cChannel(SCD30_I2C_CHANNEL);

  scd30_stop_periodic_measurement();

  status = scd30_set_forced_recalibration(mgos_sys_config_get_iaq_co2FCReference());
  if (!status)
  {
    if (debug)
      send_message_to_webui("\"Force_recalibration Successfull!\"");
  }
  else
  {
    sprintf(str, "\"Error to set forced Recalibration:%d\"", status);
    if (debug)
      send_message_to_webui(str);
    strcpy(str, "");
  }
  scd30_start_periodic_measurement(0);
  mg_rpc_send_responsef(ri, data);
  (void)cb_arg;
  (void)fi;
}

/*******************************************************************************
 * @fn      sensirion_soft_reset
 *
 * @brief   Reset all sensirion sensors
 *
 * @param   None.
 *
 * @return  None.
 */
void sensirion_soft_reset(struct mg_rpc_request_info *ri, void *cb_arg, struct mg_rpc_frame_info *fi, struct mg_str args)
{
  selectI2cChannel(SCD30_I2C_CHANNEL);
  /*Reset SCD30  0xD304 - cmd for reset*/
  if (sensirion_i2c_write_cmd(SCD30_I2C_ADDRESS, 0xD304) == NO_ERROR)
  {
    if (debug)
      send_message_to_webui("\"SCD30 Reset Successfull!\"");
  }
  selectI2cChannel(SPS30_I2C_CHANNEL);
  /*Reset SPS30  0xD3 - cmd for reset*/
  if (sensirion_i2c_write_cmd(SPS30_I2C_ADDRESS, 0xD3) == NO_ERROR)
  {
    if (debug)
      send_message_to_webui("\"SPS30 Reset Successfull!\"");
  }
  selectI2cChannel(SGP40_I2C_CHANNEL);
  /*Reset SGP40  0x0006 - cmd for reset*/
  if (sensirion_i2c_write_cmd(SGP40_I2C_ADDRESS, 0x0006) == NO_ERROR)
  {
    if (debug)
      send_message_to_webui("\"SGP40 Reset Successfull!\"");
  }
  selectI2cChannel(SHTC3_I2C_CHANNEL);
  /*Reset SHTC3  0x805D - cmd for reset*/
  if (sensirion_i2c_write_cmd(SHTC3_I2C_ADDRESS, 0x850D) == NO_ERROR)
  {
    if (debug)
      send_message_to_webui("\"SHTC3 Reset Successfull!\"");
  }
  mg_rpc_send_responsef(ri, data);
  (void)cb_arg;
  (void)fi;
}

/*******************************************************************************
 * @fn      getSysInfp
 *
 * @brief   Getting system information
 *
 * @param   None.
 *
 * @return  None.
 */
void getSysInfo(struct mg_rpc_request_info *ri, void *cb_arg, struct mg_rpc_frame_info *fi, struct mg_str args)
{
  int heapSize, Freeheap_Size, min_Freeheap_Size, Fs_size, free_fs_size, cpu_freq;
  float uptime;
  struct mg_mgr *mgr = mgos_get_mgr();

  /* Creating char buffer to store mac*/
  char str[20];
  /******* MAC address variables *******/
  const char *mac_string;
  /* Read mac address of the device */
  mac_string = mgos_sys_ro_vars_get_mac_address();
  /* copy the mac string */
  sprintf(str, "%s", mac_string);

  heapSize = mgos_get_heap_size();
  Freeheap_Size = mgos_get_free_heap_size();
  min_Freeheap_Size = mgos_get_min_free_heap_size();
  Fs_size = mgos_get_fs_size();
  free_fs_size = mgos_get_free_fs_size();
  uptime = mgos_uptime();
  cpu_freq = mgos_get_cpu_freq();

#ifdef DEBUG
  // const char *response = mgos_rpc_call("Sys.GetInfo", NULL);
  printf("\nheapSize:%d\n", mgos_get_heap_size());
  printf("\nFreeheap_Size:%d\n", mgos_get_free_heap_size());
  printf("\nmin_Freeheap_Size:%d\n", mgos_get_min_free_heap_size());

  printf("\nFs_size:%d\n", mgos_get_fs_size());
  printf("\nfree_fs_size:%d\n", mgos_get_free_fs_size());
  printf("\nuptime:%f\n", mgos_uptime());
#endif

  for (struct mg_connection *c = mg_next(mgr, NULL); c != NULL;
       c = mg_next(mgr, c))
  {
    if (c->flags & MG_F_IS_WEBSOCKET)
    {
      // time_t epochTime = time(0);
      maintime = time(0);
      epochTime = (uint64_t)time(&maintime);
      epochTime = epochTime * 1000;
      mg_printf_websocket_frame(c, WEBSOCKET_OP_TEXT, health, epochTime, heapSize, Freeheap_Size, min_Freeheap_Size, Fs_size, free_fs_size, cpu_freq, uptime, mgos_sys_config_get_admin_version(), str);
    }
  }

  mg_rpc_send_responsef(ri, data);
  (void)cb_arg;
  (void)fi;
}

/*******************************************************************************
 * @fn      getMacIds
 *
 * @brief   Getting system mac Id's
 *
 * @param   None.
 *
 * @return  None.
 */
void FanManuval(struct mg_rpc_request_info *ri, void *cb_arg, struct mg_rpc_frame_info *fi, struct mg_str args)
{
  uint8_t status = 0;
  char str[40] = "";
  status = sps30_start_manual_fan_cleaning();
  if (!status)
  {
    if (debug)
      send_message_to_webui("\"start_manual_fan_cleaning success!!\"");
  }
  else
  {
    sprintf(str, "\"start_manual_fan_cleaning failed:%d\"", status);
    if (debug)
      send_message_to_webui(str);
    strcpy(str, "");
  }
  mg_rpc_send_responsef(ri, data);
  (void)cb_arg;
  (void)fi;
}

/*******************************************************************************
 * @fn      device_status
 *
 * @brief   get sensor status wether it is available or not
 *
 * @param   None.
 *
 * @return  None.
 */
void device_status(struct mg_rpc_request_info *ri, void *cb_arg, struct mg_rpc_frame_info *fi, struct mg_str args)
{
  uint32_t read_data = 0;
  uint16_t num_words = 0;
  char str[50] = "";
  selectI2cChannel(SPS30_I2C_CHANNEL);
  sensirion_i2c_read_cmd(SPS30_I2C_ADDRESS, 0xD206, (uint16_t *)read_data, num_words);
  mgos_msleep(20);
  // printf("read_data:%d\n", read_data);
  deviceStatus.fan_status = (read_data << 3 & 0x8) != 0 ? 1 : 0;           // 4th bit
  deviceStatus.laser_status = (read_data << 4 & 0x10) != 0 ? 1 : 0;        // 5th bit
  deviceStatus.speed_status = (read_data << 20 & 0x00000001) != 0 ? 1 : 0; // 21 bit
  sprintf(str, "\"FAN_STATUS:%d,LASER_STATUS:%d,SPEED_STATUS;%d\"", deviceStatus.fan_status, deviceStatus.laser_status, deviceStatus.speed_status);
  if (debug)
    send_message_to_webui(str);
  strcpy(str, "");
  mg_rpc_send_responsef(ri, data);
  (void)cb_arg;
  (void)fi;
}

void debugWrapper(struct mg_rpc_request_info *ri, void *cb_arg, struct mg_rpc_frame_info *fi, struct mg_str args)
{

  debug ^= 1;
  struct mg_mgr *mgr = mgos_get_mgr();

  for (struct mg_connection *c = mg_next(mgr, NULL); c != NULL;
       c = mg_next(mgr, c))
  {
    if (c->flags & MG_F_IS_WEBSOCKET)
    {
      mg_printf_websocket_frame(c, WEBSOCKET_OP_TEXT, sensor_status, sensorInitStatus.ms5637Status, sensorInitStatus.Sgp40AndShtc3Status, sensorInitStatus.vmlStatus, sensorInitStatus.scd30Status, sensorInitStatus.sps30Status, sensorInitStatus.icsStatus);
      mgos_msleep(10);
      mg_printf_websocket_frame(c, WEBSOCKET_OP_TEXT, i2cScannerData, i2cScannerSensorStatus[0], i2cScannerSensorStatus[1], i2cScannerSensorStatus[2], i2cScannerSensorStatus[3], i2cScannerSensorStatus[5], i2cScannerSensorStatus[6],i2cScannerSensorStatus[7]);
    }
  }

  mg_rpc_send_responsef(ri, data);
  (void)cb_arg;
  (void)fi;
}
