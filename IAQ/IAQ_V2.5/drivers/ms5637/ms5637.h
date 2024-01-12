

#ifndef MS5637_MS5637_H_
#define MS5637_MS5637_H_
#include <PCA9548ADWR.h>

#define MS5637_I2C_CHANNEL 2
#define MS5637_COEFFICIENT_COUNT 7

#define MS5637_CONVERSION_TIME_OSR_256 1
#define MS5637_CONVERSION_TIME_OSR_512 2
#define MS5637_CONVERSION_TIME_OSR_1024 3
#define MS5637_CONVERSION_TIME_OSR_2048 5
#define MS5637_CONVERSION_TIME_OSR_4096 9
#define MS5637_CONVERSION_TIME_OSR_8192 17

// Enum
enum ms5637_resolution_osr
{
    ms5637_resolution_osr_256 = 0,
    ms5637_resolution_osr_512,
    ms5637_resolution_osr_1024,
    ms5637_resolution_osr_2048,
    ms5637_resolution_osr_4096,
    ms5637_resolution_osr_8192 //5
};

enum ms5637_status
{
    ms5637_status_ok,
    ms5637_status_no_i2c_acknowledge,
    ms5637_status_i2c_transfer_error,
    ms5637_status_crc_error
};

enum ms5637_status_code
{
    ms5637_STATUS_OK = 0,
    ms5637_STATUS_ERR_OVERFLOW = 1,
    ms5637_STATUS_ERR_TIMEOUT = 4
};


bool ms5637_init();

bool isConnected();
enum ms5637_status reset(void);
void setResolution(enum ms5637_resolution_osr res);
enum ms5637_status read_temperature_and_pressure(float *temperature,
                                                 float *pressure);
float getPressure(); //Returns the latest pressure measurement
float getTemperature(); //Returns the latest temperature measurement
double adjustToSeaLevel(double absolutePressure, double actualAltitude);
double altitudeChange(double currentPressure, double baselinePressure);

enum ms5637_status write_command(uint8_t cmd);
enum ms5637_status read_eeprom_coeff(uint8_t command, uint16_t *coeff);
bool crc_check(uint16_t *n_prom, uint8_t crc);
enum ms5637_status conversion_and_read_adc(uint8_t cmd, uint32_t *adc);
enum ms5637_status read_eeprom(void);


//bool coeff_read = false;
enum ms5637_status ms5637_read_eeprom_coeff(uint8_t, uint16_t*);
enum ms5637_status ms5637_write_command(uint8_t);
enum ms5637_status ms5637_read_eeprom(void);
enum ms5637_status ms5637_conversion_and_read_adc(uint8_t, uint32_t*);

#endif /* MS5637_MS5637_H_ */
