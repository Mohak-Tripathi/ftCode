#ifndef ICS43434_ICS43434_H_
#define ICS43434_ICS43434_H_
#include <PCA9548ADWR.h>
#include "esp_log.h"
#include "esp_system.h"
#include "driver/i2s.h"
#include "driver/gpio.h"

uint8_t ics43434Init(void);
float measureNoise();

#endif