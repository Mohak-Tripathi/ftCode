/* This file is auto-generated by mos build, do not edit! */

#include <stdbool.h>
#include <stdio.h>

#include "common/cs_dbg.h"

#include "mgos_app.h"

extern bool mgos_freertos_init(void);
extern bool mgos_lwip_init(void);
extern bool mgos_mongoose_init(void);
extern bool mgos_ota_common_init(void);
extern bool mgos_vfs_common_init(void);
extern bool mgos_vfs_fs_lfs_init(void);
extern bool mgos_vfs_fs_spiffs_init(void);
extern bool mgos_core_init(void);
extern bool mgos_ethernet_init(void);
extern bool mgos_wifi_init(void);
extern bool mgos_http_server_init(void);
extern bool mgos_rpc_common_init(void);
extern bool mgos_file_logger_init(void);
extern bool mgos_i2c_init(void);
extern bool mgos_mbedtls_init(void);
extern bool mgos_mqtt_init(void);
extern bool mgos_ota_http_client_init(void);
extern bool mgos_ota_http_server_init(void);
extern bool mgos_rpc_service_config_init(void);
extern bool mgos_rpc_service_fs_init(void);
extern bool mgos_rpc_service_i2c_init(void);
extern bool mgos_rpc_uart_init(void);
extern bool mgos_sntp_init(void);


#ifndef MGOS_LIB_INFO_VERSION
struct mgos_lib_info {
  const char *name;
  const char *version;
  const char *repo_version;
  const char *binary_libs;
  bool (*init)(void);
};
#define MGOS_LIB_INFO_VERSION 2
#endif

#ifndef MGOS_MODULE_INFO_VERSION
struct mgos_module_info {
  const char *name;
  const char *repo_version;
};
#define MGOS_MODULE_INFO_VERSION 1
#endif

const struct mgos_lib_info mgos_libs_info[] = {

    // "freertos". deps: [ ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "freertos", .version = "10.2.0", .init = mgos_freertos_init},
#else
    {.name = "freertos", .version = "10.2.0", .repo_version = "f4b5ba5336f2f0fe3b183527790cf82e0644364e", .binary_libs = NULL, .init = mgos_freertos_init},
#endif

    // "lwip". deps: [ "freertos" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "lwip", .version = "2.1.2", .init = mgos_lwip_init},
#else
    {.name = "lwip", .version = "2.1.2", .repo_version = "417e07ea1b5d37f59428caee93b6730798090460", .binary_libs = NULL, .init = mgos_lwip_init},
#endif

    // "mongoose". deps: [ "lwip" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "mongoose", .version = "6.18", .init = mgos_mongoose_init},
#else
    {.name = "mongoose", .version = "6.18", .repo_version = "24f3c520fdfd5d7c33ff2734d4be42aab75107e9", .binary_libs = "libmongoose-esp32-2.20.0.a:64626338306435633139343333326165336536616265616530313637333535396433346562386566383431333030326435306435316661396138346338313735", .init = mgos_mongoose_init},
#endif

    // "ota-common". deps: [ ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "ota-common", .version = "1.4.0", .init = mgos_ota_common_init},
#else
    {.name = "ota-common", .version = "1.4.0", .repo_version = "a164ef6cf5f815b8ddd51b637f68f809a4840647", .binary_libs = "libota-common-esp32-2.20.0.a:34343830326632616131613139336263393831356238653236383235393030376336653533653634333031653232626233353065653733316439616533346330", .init = mgos_ota_common_init},
#endif

    // "vfs-common". deps: [ ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "vfs-common", .version = "1.0", .init = mgos_vfs_common_init},
#else
    {.name = "vfs-common", .version = "1.0", .repo_version = "23525d042fe865dbc8088513f510e26c62ae4800", .binary_libs = NULL, .init = mgos_vfs_common_init},
#endif

    // "vfs-fs-lfs". deps: [ "vfs-common" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "vfs-fs-lfs", .version = "2.4.0", .init = mgos_vfs_fs_lfs_init},
#else
    {.name = "vfs-fs-lfs", .version = "2.4.0", .repo_version = "b611462e03d431f9541f50763b3153552db81861", .binary_libs = NULL, .init = mgos_vfs_fs_lfs_init},
#endif

    // "vfs-fs-spiffs". deps: [ "vfs-common" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "vfs-fs-spiffs", .version = "1.0", .init = mgos_vfs_fs_spiffs_init},
#else
    {.name = "vfs-fs-spiffs", .version = "1.0", .repo_version = "0c1d9d07a4bf900f08ca4a250e29e7f5931301c5", .binary_libs = NULL, .init = mgos_vfs_fs_spiffs_init},
#endif

    // "core". deps: [ "freertos" "lwip" "mongoose" "ota-common" "vfs-common" "vfs-fs-lfs" "vfs-fs-spiffs" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "core", .version = "1.0", .init = mgos_core_init},
#else
    {.name = "core", .version = "1.0", .repo_version = "9cbb8437919696a4a8779ebb4d0cd78d99890ac6", .binary_libs = NULL, .init = mgos_core_init},
#endif

    // "ca-bundle". deps: [ "core" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "ca-bundle", .version = "1.0", .init = NULL},
#else
    {.name = "ca-bundle", .version = "1.0", .repo_version = "82ddde1a7e95d316f0ef6a43ecfc265b0fbdaf4c", .binary_libs = NULL, .init = NULL},
#endif

    // "ethernet". deps: [ ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "ethernet", .version = "1.0", .init = mgos_ethernet_init},
#else
    {.name = "ethernet", .version = "1.0", .repo_version = "b7f158955341083d120d7f0fffce49e0838cd089", .binary_libs = NULL, .init = mgos_ethernet_init},
#endif

    // "wifi". deps: [ "core" "lwip" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "wifi", .version = "1.0", .init = mgos_wifi_init},
#else
    {.name = "wifi", .version = "1.0", .repo_version = "51febec3070cd40a6ce8aa18e76cc4bb20101149", .binary_libs = NULL, .init = mgos_wifi_init},
#endif

    // "http-server". deps: [ "core" "ethernet" "wifi" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "http-server", .version = "1.0", .init = mgos_http_server_init},
#else
    {.name = "http-server", .version = "1.0", .repo_version = "5b4c77fb71e151625470b09fe52a1b0dbddadc77", .binary_libs = NULL, .init = mgos_http_server_init},
#endif

    // "rpc-common". deps: [ "core" "http-server" "mongoose" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "rpc-common", .version = "1.0", .init = mgos_rpc_common_init},
#else
    {.name = "rpc-common", .version = "1.0", .repo_version = "9f25f5900c1ac39eaa79e5e30c679de502eb1953", .binary_libs = NULL, .init = mgos_rpc_common_init},
#endif

    // "file-logger". deps: [ "core" "rpc-common" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "file-logger", .version = "1.0", .init = mgos_file_logger_init},
#else
    {.name = "file-logger", .version = "1.0", .repo_version = "4864745a06c656a9563e812c9e0368490c0da923", .binary_libs = NULL, .init = mgos_file_logger_init},
#endif

    // "i2c". deps: [ "core" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "i2c", .version = "1.0", .init = mgos_i2c_init},
#else
    {.name = "i2c", .version = "1.0", .repo_version = "cd740fa1b33b4b01bacc5a86a51fbe5d27c33f9c", .binary_libs = NULL, .init = mgos_i2c_init},
#endif

    // "mbedtls". deps: [ ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "mbedtls", .version = "2.16.11-cesanta1", .init = mgos_mbedtls_init},
#else
    {.name = "mbedtls", .version = "2.16.11-cesanta1", .repo_version = "9971208d45aed1aec5b9e064145c3c8a7bb180f8", .binary_libs = NULL, .init = mgos_mbedtls_init},
#endif

    // "mqtt". deps: [ "core" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "mqtt", .version = "1.0", .init = mgos_mqtt_init},
#else
    {.name = "mqtt", .version = "1.0", .repo_version = "f578d546d70844fdddd1809030d3fe44d11e6d9b", .binary_libs = NULL, .init = mgos_mqtt_init},
#endif

    // "ota-http-client". deps: [ "core" "ota-common" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "ota-http-client", .version = "1.0.1", .init = mgos_ota_http_client_init},
#else
    {.name = "ota-http-client", .version = "1.0.1", .repo_version = "d6088c559c603f74a645a8b0dff135723c994f2d", .binary_libs = "libota-http-client-esp32-2.20.0.a:31656261306638323938376133383561383766363735653231653630303563396333316161623137366563666137336432346539306339616137366433663733", .init = mgos_ota_http_client_init},
#endif

    // "ota-http-server". deps: [ "core" "http-server" "ota-common" "ota-http-client" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "ota-http-server", .version = "1.0", .init = mgos_ota_http_server_init},
#else
    {.name = "ota-http-server", .version = "1.0", .repo_version = "6adb6f6bf66390a6adf7defb2f85c1f7d3aaea60", .binary_libs = "libota-http-server-esp32-2.20.0.a:61663431653437633337333739323132393463633337663933306130353064356162646166313134623265363164633132383137323039306438353163383334", .init = mgos_ota_http_server_init},
#endif

    // "rpc-service-config". deps: [ "core" "rpc-common" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "rpc-service-config", .version = "1.0", .init = mgos_rpc_service_config_init},
#else
    {.name = "rpc-service-config", .version = "1.0", .repo_version = "821db3ffb8104de17bd511c67e423a4db6f59d44", .binary_libs = NULL, .init = mgos_rpc_service_config_init},
#endif

    // "rpc-service-fs". deps: [ "core" "rpc-common" "vfs-common" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "rpc-service-fs", .version = "1.0", .init = mgos_rpc_service_fs_init},
#else
    {.name = "rpc-service-fs", .version = "1.0", .repo_version = "39437663b14759671a37e9670a46c65e5519c369", .binary_libs = NULL, .init = mgos_rpc_service_fs_init},
#endif

    // "rpc-service-i2c". deps: [ "core" "i2c" "rpc-common" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "rpc-service-i2c", .version = "1.0", .init = mgos_rpc_service_i2c_init},
#else
    {.name = "rpc-service-i2c", .version = "1.0", .repo_version = "242b3041b8c4f1772204dde3f2df5c2cd99abbb8", .binary_libs = NULL, .init = mgos_rpc_service_i2c_init},
#endif

    // "rpc-uart". deps: [ "core" "rpc-common" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "rpc-uart", .version = "1.0", .init = mgos_rpc_uart_init},
#else
    {.name = "rpc-uart", .version = "1.0", .repo_version = "d58fee363e9e7176d9079b37c8ecfde1d5a2a3dd", .binary_libs = NULL, .init = mgos_rpc_uart_init},
#endif

    // "sntp". deps: [ "core" ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "sntp", .version = "1.1.0", .init = mgos_sntp_init},
#else
    {.name = "sntp", .version = "1.1.0", .repo_version = "77765613c8720d5a22be23bd410d1465c4606581", .binary_libs = NULL, .init = mgos_sntp_init},
#endif

    // "zz_boards". deps: [ ]
#if MGOS_LIB_INFO_VERSION == 1
    {.name = "zz_boards", .version = NULL, .init = NULL},
#else
    {.name = "zz_boards", .version = NULL, .repo_version = "a317361ee008969b8a96a2e7fa7eb243442dcb93", .binary_libs = NULL, .init = NULL},
#endif

    // Last entry.
    {.name = NULL},
};

const struct mgos_module_info mgos_modules_info[] = {

    {.name = "mbedtls_module", .repo_version = "74d761821fd23ea220eb552ece941908c2f48a39"},

    {.name = "mongoose-os", .repo_version = "1885c0fdb1302f3c9ddfbedd84351d7662fbf183"},

    // Last entry.
    {.name = NULL},
};

bool mgos_deps_init(void) {
  for (const struct mgos_lib_info *l = mgos_libs_info; l->name != NULL; l++) {
#if MGOS_LIB_INFO_VERSION == 1
    LOG(LL_DEBUG, ("Init %s %s...", l->name, (l->version ? l->version : "")));
#else
    LOG(LL_DEBUG, ("Init %s %s (%s)...",
          l->name,
          (l->version ? l->version : ""),
          (l->repo_version ? l->repo_version : "")));
#endif
    if (l->init != NULL && !l->init()) {
      LOG(LL_ERROR, ("%s init failed", l->name));
      return false;
    }
  }
  for (const struct mgos_module_info *m = mgos_modules_info; m->name != NULL; m++) {
    LOG(LL_DEBUG, ("Module %s %s", m->name, (m->repo_version ? m->repo_version : "")));
  }
  return true;
}
