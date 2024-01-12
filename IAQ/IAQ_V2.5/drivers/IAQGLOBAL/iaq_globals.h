#ifndef IAQ_GLOBALS_H
#define IAQ_GLOBALS_H

#include <stdint.h>

/*Bit field width*/
#define WIDTH_ONE 1

#define SIZE 2
/*****************************
 * GLOBAL VARIABLES
 * */

/*Bit Filed Declaration*/
typedef struct sensor_init_status
{
  // ms5637
  uint8_t ms5637Status : WIDTH_ONE;
  uint8_t Sgp40AndShtc3Status : WIDTH_ONE;
  uint8_t vmlStatus : WIDTH_ONE;
  uint8_t scd30Status : WIDTH_ONE;
  uint8_t sps30Status : WIDTH_ONE;
  uint8_t icsStatus : WIDTH_ONE;
  uint8_t zmodStatus : WIDTH_ONE;

} sensor_init_status;
sensor_init_status sensorInitStatus;

/*IAQ Payload Structure*/
typedef struct Iaq_Data
{
  long long int deviceVersion;

  /* MS5637 sensor - pressure data */
  float ms5637Temperature;
  float ms5637Pressure;

  /* SCD30 - CO2 Sensor */
  float scd30Co2;
  float scd30Temperature;
  float scd30Humidity;

  /* SGP40 and SHCT3 data - VOC index and temperature */
  float sgp40VocIndex;
  float shct3RelativeHumidity;
  float shct3Temperature;
  float Tvoc;

  /* Ambient light sensor Veml7700 */
  float veml7700Lux;
  /* I2S-43434 NOISE Level */
  float ics4343NoiseLevel;

  /* SPS30 - PM Sensor */
  float sps30Pm1;
  float sps30Pm2_5;
  float sps30Pm4;
  float sps30Pm10;

  /*Pir Variable*/
  uint8_t occupancy;
} __attribute__((packed)) iaq_data;

iaq_data iaqData;

/*Tempararly storing Sensor Data*/
typedef struct Sensor_data
{
  /* MS5637 sensor - pressure data */
  float ms5637Temperature;
  float ms5637Pressure;

  /* SCD30 - CO2 Sensor */
  float scd30Co2;
  float scd30Temperature;
  float scd30Humidity;

  /* SGP40 and SHCT3 data - VOC index and temperature */
  float sgp40VocIndex;
  float shct3RelativeHumidity;
  float shct3Temperature;
  float Tvoc;

  /* Ambient light sensor Veml7700 */
  float veml7700Lux;
  /* I2S-43434 NOISE Level */
  float ics4343NoiseLevel;

  /* SPS30 - PM Sensor */
  float sps30Pm1;
  float sps30Pm2_5;
  float sps30Pm4;
  float sps30Pm10;

  /*Pir Variable*/
  uint8_t occupancy;
} __attribute__((packed)) sensor_data;
sensor_data sensorData;

typedef struct DEFAULTDATA
{

  float Temperature;
  float RelativeHumidity;
  float Pressure;
  /* SCD30 - CO2 Sensor */
  float Co2;

  /* SGP40 and SHCT3 data - VOC index and temperature */
  float Tvoc;

  /* Ambient light sensor Veml7700 */
  float Lux;

  /* SPS30 - PM Sensor */
  float Pm1;
  float Pm2_5;
  float Pm4;
  float Pm10;

  float Noise;

} __attribute__((packed))defaultdata;
defaultdata iaqDefault;


/*Timer variables*/
int16_t measurement_intervel;
int16_t publish_intervel;
int16_t periodic_interval;
uint8_t output_type;

uint8_t i2cScannerSensorStatus[10];

void intailiseIaqSensors();
void runMs5637();
void runSgp40AndShtc3();
void runVeml7700();
void runScd30();
void runSps30();
void runZmod4xx();
void noiseLevel();
void pirInit();
void webConsole();
void loadConfigurablefileds();
#endif