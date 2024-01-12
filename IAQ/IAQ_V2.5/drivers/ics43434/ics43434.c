#include <stdio.h>
#include "ics43434.h"

#include <stdint.h>

#include <math.h>
#define LOG printf

#define I2S_NUM I2S_NUM_0
#define I2S_SAMPLE_RATE 44100
#define I2S_SAMPLE_BITS 24
#define WINDOW_SIZE 30

// Constants for calibration
const float referenceVoltage = 3.3; // Reference voltage of the microphone
const float sensitivity = -26;

int32_t *buffer;
size_t buffer_len = 1024;

float calculateSPL(int16_t *samples, size_t numSamples);
static float convert_little_endian(uint32_t value);
void showbits(int n);
uint8_t ics43434Init(void)
{
    esp_err_t err;
    // I2S configuration
    i2s_config_t i2s_config = {
        .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
        .sample_rate = I2S_SAMPLE_RATE,
        .bits_per_sample = I2S_SAMPLE_BITS,
        .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,
        .communication_format = I2S_COMM_FORMAT_STAND_I2S,
        .intr_alloc_flags = 0,
        .dma_buf_count = 4,
        .dma_buf_len = buffer_len,
        .use_apll = false,
        .tx_desc_auto_clear = false,
        .fixed_mclk = 0};

    i2s_pin_config_t pin_config = {
        .bck_io_num = GPIO_NUM_4,  // BCLK pin 4
        .ws_io_num = GPIO_NUM_16,  // LRCLK pin 16
        .data_out_num = -1,        // Not used (only for output)
        .data_in_num = GPIO_NUM_14 // DOUT pin 14
    };

    // Install and start the I2S driver
    err = i2s_driver_install(I2S_NUM, &i2s_config, 0, NULL);
    if (err != ESP_OK)
    {
        LOG("Failed to install I2S driver. Error: %d", err);
        return 0;
    }
    i2s_set_pin(I2S_NUM, &pin_config);

    return 1;
}

void showbits(int n)
{
    int result;
    for (int8_t i = 31; i >= 0; i--)
    {
        result = n & (1 << i);
        result == 0 ? printf("0") : printf("1");
    }
    printf("\t\t");
}
static float convert_little_endian(uint32_t value)
{
    uint32_t converted = 0;
    //  move msb
    converted |= ((0xff & value) << 16);
    //  leave the middle value as it is
    converted |= ((0xff << 8) & value);
    //  move lsb
    converted |= (((0xff << 16) & value) >> 16);
    return converted;
}

// Function to calculate Sound Pressure Level (SPL) in dB
float calculateSPL(int16_t *samples, size_t numSamples)
{
    uint16_t valid_samples=0;
    double sumSquared = 0.0;
    int32_t *sample = (int32_t *)malloc(numSamples * sizeof(int32_t));
    for (size_t i = 0; i < numSamples; i++)
    {
        // printf("raw:%d \t\t", samples[i]);

        sample[i] = convert_little_endian(samples[i]);
        if (samples[i] != 0)
        {
            valid_samples++;
            // Check if the sample is negative (sign bit is set)
            // showbits(sample[i]);
            if (sample[i] & 0x00800000)
            {
                // perform 2's complement
                sample[i] = (~(sample[i]) & 0x00FFFFFF) + 1;
                sample[i] = ~(sample[i]);
                sample[i] |= 0xFF0000000;
                // printf("After signed bit shift:");
                // showbits(sample[i]);
            }
            // printf("decimal:%ld\n", (long)sample[i]);
            double voltage = (sample[i] * referenceVoltage) / 8388607.0; // Convert digital output to voltage
            double soundPressure = voltage / sensitivity;
            sumSquared += soundPressure * soundPressure;
            // printf("\n\n");
        }
    }
    double rms = sqrt(sumSquared / valid_samples);
    float spl = 20.0 * log10f(rms / 20.0) + 94.0; // Apply sensitivity adjustment
    free(sample);
    return spl;
}

float measureNoise()
{
    uint8_t i;
    float max = 0;
    float min = 255;

    esp_err_t err;

    /*Alloocate the I2s buffer*/
    buffer = (int32_t *)malloc(buffer_len * sizeof(int32_t));
    if (buffer == NULL)
    {
        LOG("Failed to allocate memory\n");
        return 0;
    }
    // Start the I2S port
    err = i2s_start(I2S_NUM);
    if (err != ESP_OK)
    {
        LOG("Failed to start I2S. Error: %d", err);
    }

    // Read I2S data
    size_t bytes_read = 0;
    err = i2s_read(I2S_NUM, buffer, sizeof(int32_t) * buffer_len, &bytes_read, portMAX_DELAY);
    if (err != ESP_OK)
    {
        LOG("Failed to read data from I2S driver. Error: %d\n", err);
        return 0;
    }
    int samples_read = bytes_read / sizeof(int32_t);
    /*calculated sound level Pressure(spl)*/
    float spl = calculateSPL((int16_t *)buffer, samples_read);
    // printf("\nSoundLevelPressure:%0.2f,\n", spl);

    free(buffer);

    return spl;
}
