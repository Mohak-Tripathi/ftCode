
#include <sensirion_i2c.h>
#include <unistd.h>
#include "mgos_i2c.h"
#include "mgos_system.h"

/*Local Variables*/
/**
 * Select the current i2c bus by index.
 * All following i2c operations will be directed at that bus.
 *
 * THE IMPLEMENTATION IS OPTIONAL ON SINGLE-BUS SETUPS (all sensors on the same
 * bus)
 *
 * @param bus_idx   Bus index to select
 * @returns         0 on success, an error code otherwise
 *
 */
int16_t sensirion_i2c_select_bus(uint8_t bus_idx)
{
    return 0;
}

/**
 * Initialize all hard- and software components that are needed for the I2C
 * communication.
 */
void sensirion_i2c_init()
{
}

/**
 * Release all resources initialized by sensirion_i2c_init().
 */
void sensirion_i2c_release()
{
}

/**
 * Execute one read transaction on the I2C bus, reading a given number of bytes.
 * If the device does not acknowledge the read command, an error shall be
 * returned.
 *
 * @param address 7-bit I2C address to read from
 * @param data    pointer to the buffer where the data is to be stored
 * @param count   number of bytes to read from I2C and store in the buffer
 * @returns 0 on success, error code otherwise
 */
int8_t sensirion_i2c_read(uint8_t address, uint8_t *data, uint16_t count)
{
    int status;
// Initialize slave address of transaction
    status = mgos_i2c_read(mgos_i2c_get_global(),address,data,count,true);
    return !status;
}

/**
 * Execute one write transaction on the I2C bus, sending a given number of
 * bytes. The bytes in the supplied buffer must be sent to the given address. If
 * the slave device does not acknowledge any of the bytes, an error shall be
 * returned.
 *
 * @param address 7-bit I2C address to write to
 * @param data    pointer to the buffer containing the data to write
 * @param count   number of bytes to read from the buffer and send over I2C
 * @returns 0 on success, error code otherwise
 */
int8_t sensirion_i2c_write(uint8_t address,   uint8_t *data,
                           uint16_t count)
{
    int status;
       // Initialize slave address of transaction
       status = mgos_i2c_write(mgos_i2c_get_global(),address,data,count,true);
       return !status;
}

/**
 * Sleep for a given number of microseconds. The function should delay the
 * execution approximately, but no less than, the given time.
 *
 * When using hardware i2c:
 * Despite the unit, a <10 millisecond precision is sufficient.
 *
 * When using software i2c:
 * The precision needed depends on the desired i2c frequency, i.e. should be
 * exact to about half a clock cycle (defined in
 * `SENSIRION_I2C_CLOCK_PERIOD_USEC` in `sensirion_arch_config.h`).
 *
 * Example with 400kHz requires a precision of 1 / (2 * 400kHz) == 1.25usec.
 *
 * @param useconds the sleep time in microseconds
 */

void sensirion_sleep_usec(uint32_t useconds)
{
   mgos_usleep(useconds);

}

///*********************************************************************
// * @fn      i2cScanner
// *
// * @brief   scans the i2c bus for devices
// *
// * @param   i2cHandle
// *
// * @return  none
// */
//
//static void i2cScanner(I2C_Handle i2cHandle)
//{
//    //Scan the bus for I2c devices.
//    uint8_t result;
//    uint8_t nDevices = 0;
//    uint8_t Buffer[1];
//    Buffer[0] = 0;
//    I2C_Transaction i2cTransaction = { 0 };
//#ifdef DEBUG
//    printf("Scanning i2c bus\n");
//#endif
//    for (uint8_t i = 1; i < 127; i++)
//    {
//        i2cTransaction.slaveAddress = i;
//        i2cTransaction.writeBuf = Buffer;
//        i2cTransaction.writeCount = 1;
//        i2cTransaction.readBuf = NULL;
//        i2cTransaction.readCount = 0;
//        result = I2C_transfer(i2cHandle, &i2cTransaction);
////        printf("I2C Transfer: %d\n", result);
//        if (result)
//        {
//            nDevices++;
//#ifdef DEBUG
//            printf("Address %x\n", i);
//#endif
//        }
//    }
//#ifdef DEBUG
//    printf("Detected %d devices\n", nDevices);
//#endif
//}


