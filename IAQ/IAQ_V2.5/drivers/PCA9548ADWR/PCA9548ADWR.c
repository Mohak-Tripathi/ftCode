

#include <PCA9548ADWR.h>

/*********************************************************************
 * LOCAL FUNCTIONS
 *
 * i2cWrite
 *
 * i2cRead
 */

/*******************************************************************************
 * @fn          i2cWrite
 *
 * @brief       Writes the data over I2C bus for specified device or register address
 *
 * @param       Dev - Device address or register address of the particular device
 *
 * @param       pdata - data to write
 *
 * @return      int
 */
static int i2cWrite(uint16_t Dev, uint8_t *pdata,
                    uint32_t count)
{
    int status;
    // Initialize slave address of transaction
    status = mgos_i2c_write(mgos_i2c_get_global(),Dev,pdata,count,true);
    return status;
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
//static int i2cRead(I2C_Handle i2cHandle, uint16_t Dev, uint8_t *pdata,
//                   uint32_t count)
//{
//    int status;
//// Initialize slave address of transaction
//    I2C_Transaction transaction = { 0 };
//    transaction.slaveAddress = Dev;
//    transaction.writeBuf = NULL;
//    transaction.writeCount = 0;
//// Read from I2C slave device
//    transaction.readBuf = pdata;
//    transaction.readCount = count;
//    status = I2C_transfer(i2cHandle, &transaction);
//    return !status;
//}

/*******************************************************************************
 * @fn          selectChannel
 *
 * @brief       Switch between the I2C slaves(channels) to read or write data
 *
 * @param       I2C_Handle - I2C communication bus handle instance
 *
 * @param       channel - to select the particular slave(channel)
 *
 * @return      none
 */
void selectI2cChannel(uint8_t channel)
{
    uint8_t data = 0;
    data = 1 << channel;
    i2cWrite(PCA9543A_ADDRESS, &data, sizeof(data));
}
