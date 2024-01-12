

#ifndef PCA9548ADWR_PCA9548ADWR_H_
#define PCA9548ADWR_PCA9548ADWR_H_
#include <stdio.h>
#include "mgos_i2c.h"

/*********************************************************************
 * MACROS
 */
/* I2C Multiplexer Address */
#define PCA9543A_ADDRESS 0x77

/**** I2C MUX Channels  ****/
/* I2C Address 0x32 */
#define ZMOD4XX_I2C_CHANNEL 7
/* I2C Address 0x61 */
#define SCD30_I2C_CHANNEL 0
/* I2C Address 0x69 */
#define SPS30_I2C_CHANNEL 5
/* I2C Address 0x59 */
#define SGP40_I2C_CHANNEL 6
/* I2C Address 0x70 */
#define SHTC3_I2C_CHANNEL 1
/* I2C Address 0x10 */
#define VEML7700_I2C_CHANNEL 3
/*********************************************************************
 * GLOBAL FUNCTIONS
 */
/* Function prototypes */
void selectI2cChannel(uint8_t channel);

#endif /* PCA9548ADWR_PCA9548ADWR_H_ */
