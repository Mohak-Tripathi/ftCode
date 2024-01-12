/* Static global varibales */
#include <veml770.h>
#include <math.h>
#include "mgos_system.h"
//static uint16_t _address;
//static uint8_t _width, _addrwidth, _byteorder;
//static uint8_t _buffer[4];
//static uint8_t gains[4] = {
//VEML7700_GAIN_1_8,
//                            VEML7700_GAIN_1_4,
//                            VEML7700_GAIN_1,
//                            VEML7700_GAIN_2 };
//
//static int8_t itimes[6] = {
//VEML7700_IT_25MS,
//                            VEML7700_IT_50MS,
//                            VEML7700_IT_100MS,
//                            VEML7700_IT_200MS,
//                            VEML7700_IT_400MS,
//                            VEML7700_IT_800MS };

enum
{
    STATUS_OK = 0, STATUS_ERROR = 0xff
};
enum
{
    VEML_I2C_ADDRESS = 0x10
};
enum
{
    COMMAND_ALS_SM = 0x00, ALS_SM_MASK = 0x1800, ALS_SM_SHIFT = 11
};
enum
{
    COMMAND_ALS_IT = 0x00, ALS_IT_MASK = 0x03c0, ALS_IT_SHIFT = 6
};
enum
{
    COMMAND_ALS_PERS = 0x00, ALS_PERS_MASK = 0x0030, ALS_PERS_SHIFT = 4
};
enum
{
    COMMAND_ALS_INT_EN = 0x00, ALS_INT_EN_MASK = 0x0002, ALS_INT_EN_SHIFT = 1
};
enum
{
    COMMAND_ALS_SD = 0x00, ALS_SD_MASK = 0x0001, ALS_SD_SHIFT = 0
};
enum
{
    COMMAND_ALS_WH = 0x01
};
enum
{
    COMMAND_ALS_WL = 0x02
};
enum
{
    COMMAND_PSM = 0x03, PSM_MASK = 0x0006, PSM_SHIFT = 1
};
enum
{
    COMMAND_PSM_EN = 0x03, PSM_EN_MASK = 0x0001, PSM_EN_SHIFT = 0
};
enum
{
    COMMAND_ALS = 0x04
};
enum
{
    COMMAND_WHITE = 0x05
};
enum
{
    COMMAND_ALS_IF_L = 0x06, ALS_IF_L_MASK = 0x8000, ALS_IF_L_SHIFT = 15
};
enum
{
    COMMAND_ALS_IF_H = 0x06, ALS_IF_H_MASK = 0x4000, ALS_IF_H_SHIFT = 14
};

enum als_powmode_t
{
    ALS_POWER_MODE_1 = 0x0,
    ALS_POWER_MODE_2 = 0x1,
    ALS_POWER_MODE_3 = 0x2,
    ALS_POWER_MODE_4 = 0x3
};
uint16_t register_cache[4];

/*******************************************************************************
 * @fn          i2cWrite
 *
 * @brief       Writes the data over I2C bus for specified device or register address
 *
 * @param       I2C_Handle - I2C communication bus handle instance
 *
 * @param       Dev - Device address or register address of the particular device
 *
 * @param       pdata - data to write
 *
 * @return      int
 */
static int vemlI2cWrite(uint8_t command, uint16_t data)
{
    uint8_t dataBuff[3] = { command };
    dataBuff[1] = (uint8_t) data & 0xff;
    dataBuff[2] = (uint8_t) data >> 8;
    int status;
    // Initialize slave address of transaction
    status = mgos_i2c_write(mgos_i2c_get_global(),VEML_I2C_ADDRESS,dataBuff,sizeof(dataBuff),true);
    return !status;
}

/*******************************************************************************
 * @fn          i2cRead
 *
 * @brief       Reads the data over I2C bus for specified device or register address
 *
 * @param       I2C_Handle - I2C communication bus handle instance
 *
 * @param       Dev - Device address or register address of the particular device
 *
 * @param       pdata - data read
 *
 * @return      int
 */
static int vemlI2cRead(uint8_t command, uint16_t *data)
{
    int status;
// Initialize slave address of transaction
    status = mgos_i2c_write(mgos_i2c_get_global(),VEML_I2C_ADDRESS,&command,1,false);
// Read from I2C slave device
    status = mgos_i2c_read(mgos_i2c_get_global(),VEML_I2C_ADDRESS,data,2,true);
    // temp_data=data;
    return !status;
}

static uint8_t sendData(uint8_t command, uint16_t data)
{
    if (vemlI2cWrite(command, data))
    {
        return STATUS_ERROR;
    }
    return STATUS_OK;
}

/*!
 @brief  IIC receive data
 @return Status_OK or STATUS_ERROR
 */
uint8_t receiveData(uint8_t command, uint16_t *data)
{
//    if (vemlI2cWrite(command, data))
//    {
//#ifdef DEBUG
//        printf("receiveData error\n");
//#endif
//        return STATUS_ERROR;
//    }

    vemlI2cRead(command, data);

    return STATUS_OK;
}

/*!
 *    @brief  Setups the hardware for talking to the VEML7700
 *    @param  theWire An optional pointer to an I2C interface
 *    @return True if initialization was successful, otherwise false.
 */
bool veml7700Begin()
{
    // write initial state to VEML7700
    // write initial state to VEML7700
    register_cache[0] = ((uint16_t) (VEML7700_GAIN_1) << ALS_SM_SHIFT)
            | ((uint16_t) (VEML7700_IT_100MS) << ALS_IT_SHIFT)
            | ((uint16_t) (VEML7700_PERS_1) << ALS_PERS_SHIFT)
            | ((uint16_t) (0) << ALS_INT_EN_SHIFT)
            | ((uint16_t) (0) << ALS_SD_SHIFT);

    register_cache[1] = 0x0000;
    register_cache[2] = 0xffff;
    register_cache[3] = ((uint16_t) (ALS_POWER_MODE_3) << PSM_SHIFT)
            | ((uint16_t) (0) << PSM_EN_SHIFT);
    for (uint8_t i = 0; i < 4; i++)
    {
        if (sendData(i, register_cache[i])) //send successfully
        {
            return false;
        }
    }
    // wait at least 2.5ms as per datasheet
    mgos_msleep(3);
    return true;
}

/*!
 A@brief Set ALS gain
 @param gain Can be VEML7700_GAIN_1, VEML7700_GAIN_2, VEML7700_GAIN_1_8 or
 VEML7700_GAIN_1_4
 */
uint8_t setGain(uint8_t gain)
{
//    uint16_t reg = (register_cache[COMMAND_ALS_SM] & ~ALS_SM_MASK) | ((uint16_t) (gain) << ALS_SM_SHIFT) & ALS_SM_MASK;
    uint16_t reg = ((uint16_t) (gain) << ALS_SM_SHIFT) & ALS_SM_MASK;

    register_cache[COMMAND_ALS_SM] = reg;

    return sendData(COMMAND_ALS_SM, reg);
}

/*!
 @brief Get ALS gain
 @returns Gain index, can be VEML7700_GAIN_1, VEML7700_GAIN_2,
 VEML7700_GAIN_1_8 or VEML7700_GAIN_1_4
 */
uint8_t getGain()
{
    uint16_t GetGainData = 0;
    if (receiveData(COMMAND_ALS_SM, &GetGainData))
    {
#ifdef DEBUG
        printf("receiveData error returning 0XFF\n");
#endif
        return 0XFF;
    }
    return (uint8_t) (GetGainData >> ALS_SM_SHIFT) & 0x0F;
}
/*!
 @brief Set ALS integration time
 @param it Can be VEML7700_IT_100MS, VEML7700_IT_200MS, VEML7700_IT_400MS,
 VEML7700_IT_800MS, VEML7700_IT_50MS or VEML7700_IT_25MS
 */
uint8_t setIntegrationTime(uint8_t it)
{
    uint16_t reg = ((register_cache[COMMAND_ALS_IT] & ~ALS_IT_MASK)
            | (((uint16_t)it << ALS_IT_SHIFT) & ALS_IT_MASK));
    register_cache[COMMAND_ALS_IT] = reg;
    return sendData(COMMAND_ALS_IT, reg);
}

/*!
 @brief Get ALS integration time
 @returns IT index, can be VEML7700_IT_100MS, VEML7700_IT_200MS,
 VEML7700_IT_400MS, VEML7700_IT_800MS, VEML7700_IT_50MS or VEML7700_IT_25MS
 */
uint8_t getIntegrationTime()
{
    uint16_t GetTimeData = 0;
    if (receiveData(COMMAND_ALS_IT, &GetTimeData))
    {
        return 0XFF;
    }
    return (uint8_t) (GetTimeData >> ALS_IT_SHIFT) & 0x0F;
}

/*!
 @brief Assign the low threshold register data
 @param value The 16-bit data to write to VEML7700_ALS_THREHOLD_LOW
 */
uint8_t setLowThreshold(uint16_t value)
{

    return sendData(COMMAND_ALS_WL, value);
}

/*!
 @brief Assign the high threshold register data
 @param value The 16-bit data to write to VEML7700_ALS_THREHOLD_HIGH
 */
uint8_t setHighThreshold(uint16_t value)
{
    return sendData(COMMAND_ALS_WH, value);
}

/*!
 @brief  Retrieve the low threshold register data
 @return 16-bit data from VEML7700_ALS_THREHOLD_LOW
 */
uint16_t getLowThreshold(void)
{

    uint16_t getLowThresholdData = 0;
    if (receiveData(COMMAND_ALS_WL, &getLowThresholdData))
    {
        return 0XFF;
    }
    return getLowThresholdData;
}
/*!
 @brief Assign the high threshold register data
 @param value The 16-bit data to write to VEML7700_ALS_THREHOLD_HIGH
 */

/*!
 @brief  Retrieve the high threshold register data
 @return 16-bit data from VEML7700_ALS_THREHOLD_HIGH
 */
uint16_t getHighThreshold(void)
{
    uint16_t getHighThresholdData = 0;
    if (receiveData(COMMAND_ALS_WH, &getHighThresholdData))
    {
        return 0XFF;
    }
    return getHighThresholdData;
}

/*!
 @brief Enable or disable the interrupt
 @param enable The flag to enable/disable
 */
uint8_t interruptEnable(bool enable)
{
    uint8_t interruptData;
    if (enable)
    {
        interruptData = 1;
    }
    else
    {
        interruptData = 0;
    }
    uint16_t reg =
            ((register_cache[COMMAND_ALS_INT_EN] & (~ALS_INT_EN_MASK))
                    | (((uint16_t)interruptData << ALS_INT_EN_SHIFT)
                            & (ALS_INT_EN_MASK)));
    register_cache[COMMAND_ALS_INT_EN] = reg;
    return sendData(COMMAND_ALS_INT_EN, reg);
}

/*!
 @brief  Retrieve the interrupt status register data
 @return 16-bit data from VEML7700_INTERRUPTSTATUS
 */
uint16_t interruptStatus(void)
{
    uint16_t interruptStatusData = 0;
    if (receiveData(COMMAND_ALS_IF_H, &interruptStatusData))
    {
        return 0XFF;
    }
    return interruptStatusData;
}

/*!
 @brief Set the ALS IRQ
 setting
 @param pers Persistance constant, can be VEML7700_PERS_1, VEML7700_PERS_2,
 VEML7700_PERS_4 or VEML7700_PERS_8
 */
uint8_t setPersistence(uint8_t pers)
{

    uint16_t reg = ((register_cache[COMMAND_ALS_PERS] & (~ALS_PERS_MASK))
            | (((uint16_t)pers << ALS_PERS_SHIFT)& (ALS_PERS_MASK)));
    register_cache[COMMAND_ALS_PERS] = reg;
    return sendData(COMMAND_ALS_PERS, reg);
}

/*!
 @brief Enable power save mode
 @param enable True if power save should be enabled
 */
uint8_t powerSaveEnable(bool enable)
{
    uint8_t PowerData;
    if (enable)
    {
        PowerData = 1;
    }
    else
    {
        PowerData = 0;
    }
    uint16_t reg = ((register_cache[COMMAND_PSM_EN] & (~PSM_EN_MASK))
            | (((uint16_t)PowerData << PSM_EN_SHIFT) & PSM_EN_MASK));
    register_cache[COMMAND_PSM_EN] = reg;
    return sendData(COMMAND_PSM_EN, reg);
}

/*!
 @brief Assign the power save register data
 @param mode The 16-bit data to write to VEML7700_ALS_POWER_SAVE
 */
uint8_t setPowerSaveMode(uint8_t mode)
{

    uint16_t reg = ((register_cache[COMMAND_PSM] & ~PSM_MASK)
            | (((uint16_t)mode << PSM_SHIFT) & PSM_MASK));
    register_cache[COMMAND_PSM] = reg;
    return sendData(COMMAND_PSM, reg);
}

/*!
 @brief  Retrieve the power save register data
 @return 16-bit data from VEML7700_ALS_POWER_SAVE
 */
uint8_t getPowerSaveMode(void)
{
    uint16_t getPowerSaveData = 0;
    if (receiveData(COMMAND_PSM, &getPowerSaveData))
    {
        return 0XFF;
    }
    return (uint8_t) (getPowerSaveData >> PSM_SHIFT) & 0x0F;
}

/*!
 @brief  choose different resolution
 @return Status_OK or STATUS_ERROR
 */
static float normalize_resolution(float value)
{
    // adjust for gain (1x is normalized)
    switch (getGain())
    {
    case VEML7700_GAIN_2:
        value /= 2.0;
        break;
    case VEML7700_GAIN_1_4:
        value *= 4;
        break;
    case VEML7700_GAIN_1_8:
        value *= 8;
        break;
    }
    // adjust for integrationtime (100ms is normalized)
    switch (getIntegrationTime())
    {
    case VEML7700_IT_25MS:
        value *= 4;
        break;
    case VEML7700_IT_50MS:
        value *= 2;
        break;
    case VEML7700_IT_200MS:
        value /= 2.0;
        break;
    case VEML7700_IT_400MS:
        value /= 4.0;
        break;
    case VEML7700_IT_800MS:
        value /= 8.0;
        break;
    }
    return value;
}

/*!
 @brief Read the calibrated lux value. See app note lux table on page 5
 @returns Floating point Lux data (ALS multiplied by 0.0576)
 */
float readLux()
{
    uint16_t als = 0;
    
    if (receiveData(COMMAND_ALS, &als))
    {
#ifdef DEBUG
        printf("readLux receiveData failed..!!\n");
#endif
        return 0;
    }
    if ((getGain() == VEML7700_GAIN_1_8)
            && (getIntegrationTime() == VEML7700_IT_25MS))
    {

        float lux = normalize_resolution(als) * 0.0576;
        lux = (6.0135e-13 * pow(lux, 4)) - (9.3924e-9 * pow(lux, 3))
                + (8.1488e-5 * pow(lux, 2)) + (1.0023 * lux);
        printf("LUX :%f\n",lux);
        return lux;
    }
    else
    {
        return (normalize_resolution(als) * 0.0576); // see app note lux table on page 5
    }
}

/*!
 @brief Read the lux value with correction for non-linearity at high-lux
 settings
 @returns Floating point Lux data (ALS multiplied by 0.0576 and corrected
 for high-lux settings)
 */
float readLuxNormalized()
{
    float lux = readLux();
    // user-provided correction for non-linearities at high lux/white values:
    // https://forums.adafruit.com/viewtopic.php?f=19&t=152997&p=758582#p759346
    if ((getGain() == VEML7700_GAIN_1_8)
            && (getIntegrationTime() == VEML7700_IT_25MS))
    {
        lux = 6.0135e-13 * pow(lux, 4) - 9.3924e-9 * pow(lux, 3)
                + 8.1488e-5 * pow(lux, 2) + 1.0023 * lux;
    }
    return lux;
}

/*!
 @brief Read the raw ALS data
 @returns 16-bit data value from the ALS register
 */
uint16_t readALS()
{
    uint16_t alsData = 0;
    if (receiveData(COMMAND_ALS, &alsData))
    {
        return 0;
    }
    return alsData;
}

/*!
 @brief Read the white light data
 @returns Floating point 'white light' data multiplied by 0.0576
 */
float readWhite()
{
    uint16_t whiteData = 0;
    if (receiveData(COMMAND_WHITE, &whiteData))
    {
        return 0;
    }
    return (normalize_resolution(whiteData) * 0.0576); // see app note lux table on page 5
}

/*!
 @brief Read the 'white light' value with correction for non-linearity at
 high-lux settings
 @returns Floating point 'white light' data multiplied by 0.0576 and
 corrected for high-lux settings
 */
float readWhiteNormalized()
{
    float white = readWhite();
    // user-provided correction for non-linearities at high lux values:
    // https://forums.adafruit.com/viewtopic.php?f=19&t=152997&p=758582#p759346
    if ((getGain() == VEML7700_GAIN_1_8)
            && (getIntegrationTime() == VEML7700_IT_25MS))
    {
        white = 2E-15 * pow(white, 4) + 4E-12 * pow(white, 3)
                + 9E-06 * pow(white, 2) + 1.0179 * white - 11.052;
    }
    return white;
}
