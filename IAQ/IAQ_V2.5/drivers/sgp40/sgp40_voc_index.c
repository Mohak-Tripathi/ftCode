
#include <sgp40_voc_index.h>


#ifdef __cplusplus
extern "C" {
#endif

VocAlgorithmParams voc_algorithm_params;

int16_t initSgp40Shtc30()
{
    int16_t ret;

    /* select shtc3 sensor */
    selectI2cChannel(SHTC3_I2C_CHANNEL);
    ret = shtc3_probe();
    #ifdef DEBUG
    printf("shtc3_probe status:%d\n",ret);
    #endif
    if (ret)
        return SENSIRION_SHT_PROBE_FAILED;

    /* select sgp40 sensor */
    selectI2cChannel( SGP40_I2C_CHANNEL);
    ret = sgp40_probe();

    #ifdef DEBUG
    printf("sgp40_probe status:%d\n",ret);
    #endif

    if (ret)
        return SENSIRION_SGP_PROBE_FAILED;

    VocAlgorithm_init(&voc_algorithm_params);
    return 0;
}

int16_t sensirion_measure_voc_index(int32_t *voc_index)
{
    return sensirion_measure_voc_index_with_rh_t(voc_index, NULL,
                                                 NULL);
}

int16_t sensirion_measure_voc_index_with_rh_t(int32_t *voc_index,
                                              int32_t *relative_humidity,
                                              int32_t *temperature)
{
    int32_t int_temperature, int_humidity;
    int16_t ret;
    uint16_t sraw;
    /* select shtc3 sensor */
    selectI2cChannel(SHTC3_I2C_CHANNEL);
    ret = shtc3_measure_blocking_read(&int_temperature,
                                      &int_humidity);

    if (ret)
        return SENSIRION_GET_RHT_SIGNAL_FAILED;

    if (temperature)
    {
        *temperature = int_temperature;
    }
    if (relative_humidity)
    {
        *relative_humidity = int_humidity;
    }
    /* select sgp40 sensor */
    selectI2cChannel(SGP40_I2C_CHANNEL);
    ret = sgp40_measure_raw_with_rht_blocking_read(int_humidity,
                                                   int_temperature, &sraw);
    if (ret)
    {
        return SENSIRION_GET_SGP_SIGNAL_FAILED;
    }

    VocAlgorithm_process(&voc_algorithm_params, sraw, voc_index);
    return 0;
}

#ifdef __cplusplus
}
#endif

