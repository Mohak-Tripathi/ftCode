/* clang-format off */
/*
 * Generated file - do not edit.
 * Command: /mongoose-os/tools/mgos_gen_config.py --c_name=mgos_config --c_global_name=mgos_sys_config --dest_dir=/data/fwbuild-volumes/2.20.0/apps/DWPC_V2.5/esp32/build_contexts/build_ctx_169217482/build/gen/ /mongoose-os/src/mgos_debug_udp_config.yaml /mongoose-os/platforms/esp32/src/esp32_sys_config.yaml /data/fwbuild-volumes/2.20.0/apps/DWPC_V2.5/esp32/build_contexts/build_ctx_169217482/build/gen/mos_conf_schema.yml
 */

#include "mgos_config.h"

#include <stdbool.h>

#include "common/cs_file.h"

#include "mgos_config_util.h"


/* struct mgos_config */
static const struct mgos_conf_entry mgos_config_schema_[] = {
    {.type = CONF_TYPE_OBJECT, .key = "", .offset = 0, .num_desc = 371},
    {.type = CONF_TYPE_OBJECT, .key = "debug", .offset = offsetof(struct mgos_config, debug), .num_desc = 12},
    {.type = CONF_TYPE_STRING, .key = "udp_log_addr", .offset = offsetof(struct mgos_config, debug.udp_log_addr)},
    {.type = CONF_TYPE_INT, .key = "udp_log_level", .offset = offsetof(struct mgos_config, debug.udp_log_level)},
    {.type = CONF_TYPE_INT, .key = "mbedtls_level", .offset = offsetof(struct mgos_config, debug.mbedtls_level)},
    {.type = CONF_TYPE_INT, .key = "level", .offset = offsetof(struct mgos_config, debug.level)},
    {.type = CONF_TYPE_STRING, .key = "file_level", .offset = offsetof(struct mgos_config, debug.file_level)},
    {.type = CONF_TYPE_INT, .key = "event_level", .offset = offsetof(struct mgos_config, debug.event_level)},
    {.type = CONF_TYPE_INT, .key = "stdout_uart", .offset = offsetof(struct mgos_config, debug.stdout_uart)},
    {.type = CONF_TYPE_INT, .key = "stderr_uart", .offset = offsetof(struct mgos_config, debug.stderr_uart)},
    {.type = CONF_TYPE_INT, .key = "factory_reset_gpio", .offset = offsetof(struct mgos_config, debug.factory_reset_gpio)},
    {.type = CONF_TYPE_STRING, .key = "mg_mgr_hexdump_file", .offset = offsetof(struct mgos_config, debug.mg_mgr_hexdump_file)},
    {.type = CONF_TYPE_STRING, .key = "stdout_topic", .offset = offsetof(struct mgos_config, debug.stdout_topic)},
    {.type = CONF_TYPE_STRING, .key = "stderr_topic", .offset = offsetof(struct mgos_config, debug.stderr_topic)},
    {.type = CONF_TYPE_OBJECT, .key = "device", .offset = offsetof(struct mgos_config, device), .num_desc = 8},
    {.type = CONF_TYPE_STRING, .key = "id", .offset = offsetof(struct mgos_config, device.id)},
    {.type = CONF_TYPE_STRING, .key = "license", .offset = offsetof(struct mgos_config, device.license)},
    {.type = CONF_TYPE_STRING, .key = "mac", .offset = offsetof(struct mgos_config, device.mac)},
    {.type = CONF_TYPE_STRING, .key = "public_key", .offset = offsetof(struct mgos_config, device.public_key)},
    {.type = CONF_TYPE_STRING, .key = "sn", .offset = offsetof(struct mgos_config, device.sn)},
    {.type = CONF_TYPE_OBJECT, .key = "location", .offset = offsetof(struct mgos_config, device.location), .num_desc = 2},
    {.type = CONF_TYPE_DOUBLE, .key = "lat", .offset = offsetof(struct mgos_config, device.location.lat)},
    {.type = CONF_TYPE_DOUBLE, .key = "lon", .offset = offsetof(struct mgos_config, device.location.lon)},
    {.type = CONF_TYPE_OBJECT, .key = "sys", .offset = offsetof(struct mgos_config, sys), .num_desc = 3},
    {.type = CONF_TYPE_STRING, .key = "tz_spec", .offset = offsetof(struct mgos_config, sys.tz_spec)},
    {.type = CONF_TYPE_INT, .key = "wdt_timeout", .offset = offsetof(struct mgos_config, sys.wdt_timeout)},
    {.type = CONF_TYPE_STRING, .key = "pref_ota_lib", .offset = offsetof(struct mgos_config, sys.pref_ota_lib)},
    {.type = CONF_TYPE_STRING, .key = "conf_acl", .offset = offsetof(struct mgos_config, conf_acl)},
    {.type = CONF_TYPE_OBJECT, .key = "sntp", .offset = offsetof(struct mgos_config, sntp), .num_desc = 5},
    {.type = CONF_TYPE_BOOL, .key = "enable", .offset = offsetof(struct mgos_config, sntp.enable)},
    {.type = CONF_TYPE_STRING, .key = "server", .offset = offsetof(struct mgos_config, sntp.server)},
    {.type = CONF_TYPE_INT, .key = "retry_min", .offset = offsetof(struct mgos_config, sntp.retry_min)},
    {.type = CONF_TYPE_INT, .key = "retry_max", .offset = offsetof(struct mgos_config, sntp.retry_max)},
    {.type = CONF_TYPE_INT, .key = "update_interval", .offset = offsetof(struct mgos_config, sntp.update_interval)},
    {.type = CONF_TYPE_OBJECT, .key = "eth", .offset = offsetof(struct mgos_config, eth), .num_desc = 11},
    {.type = CONF_TYPE_BOOL, .key = "enable", .offset = offsetof(struct mgos_config, eth.enable)},
    {.type = CONF_TYPE_INT, .key = "phy_addr", .offset = offsetof(struct mgos_config, eth.phy_addr)},
    {.type = CONF_TYPE_STRING, .key = "ip", .offset = offsetof(struct mgos_config, eth.ip)},
    {.type = CONF_TYPE_STRING, .key = "netmask", .offset = offsetof(struct mgos_config, eth.netmask)},
    {.type = CONF_TYPE_STRING, .key = "gw", .offset = offsetof(struct mgos_config, eth.gw)},
    {.type = CONF_TYPE_STRING, .key = "nameserver", .offset = offsetof(struct mgos_config, eth.nameserver)},
    {.type = CONF_TYPE_STRING, .key = "dhcp_hostname", .offset = offsetof(struct mgos_config, eth.dhcp_hostname)},
    {.type = CONF_TYPE_INT, .key = "clk_mode", .offset = offsetof(struct mgos_config, eth.clk_mode)},
    {.type = CONF_TYPE_INT, .key = "mdc_gpio", .offset = offsetof(struct mgos_config, eth.mdc_gpio)},
    {.type = CONF_TYPE_INT, .key = "mdio_gpio", .offset = offsetof(struct mgos_config, eth.mdio_gpio)},
    {.type = CONF_TYPE_INT, .key = "phy_pwr_gpio", .offset = offsetof(struct mgos_config, eth.phy_pwr_gpio)},
    {.type = CONF_TYPE_OBJECT, .key = "http", .offset = offsetof(struct mgos_config, http), .num_desc = 13},
    {.type = CONF_TYPE_BOOL, .key = "enable", .offset = offsetof(struct mgos_config, http.enable)},
    {.type = CONF_TYPE_STRING, .key = "listen_addr", .offset = offsetof(struct mgos_config, http.listen_addr)},
    {.type = CONF_TYPE_STRING, .key = "document_root", .offset = offsetof(struct mgos_config, http.document_root)},
    {.type = CONF_TYPE_STRING, .key = "index_files", .offset = offsetof(struct mgos_config, http.index_files)},
    {.type = CONF_TYPE_STRING, .key = "ssl_cert", .offset = offsetof(struct mgos_config, http.ssl_cert)},
    {.type = CONF_TYPE_STRING, .key = "ssl_key", .offset = offsetof(struct mgos_config, http.ssl_key)},
    {.type = CONF_TYPE_STRING, .key = "ssl_ca_cert", .offset = offsetof(struct mgos_config, http.ssl_ca_cert)},
    {.type = CONF_TYPE_STRING, .key = "upload_acl", .offset = offsetof(struct mgos_config, http.upload_acl)},
    {.type = CONF_TYPE_STRING, .key = "hidden_files", .offset = offsetof(struct mgos_config, http.hidden_files)},
    {.type = CONF_TYPE_STRING, .key = "auth_domain", .offset = offsetof(struct mgos_config, http.auth_domain)},
    {.type = CONF_TYPE_STRING, .key = "auth_file", .offset = offsetof(struct mgos_config, http.auth_file)},
    {.type = CONF_TYPE_INT, .key = "auth_algo", .offset = offsetof(struct mgos_config, http.auth_algo)},
    {.type = CONF_TYPE_STRING, .key = "extra_headers", .offset = offsetof(struct mgos_config, http.extra_headers)},
    {.type = CONF_TYPE_OBJECT, .key = "i2c", .offset = offsetof(struct mgos_config, i2c), .num_desc = 6},
    {.type = CONF_TYPE_INT, .key = "unit_no", .offset = offsetof(struct mgos_config, i2c.unit_no)},
    {.type = CONF_TYPE_BOOL, .key = "enable", .offset = offsetof(struct mgos_config, i2c.enable)},
    {.type = CONF_TYPE_INT, .key = "freq", .offset = offsetof(struct mgos_config, i2c.freq)},
    {.type = CONF_TYPE_BOOL, .key = "debug", .offset = offsetof(struct mgos_config, i2c.debug)},
    {.type = CONF_TYPE_INT, .key = "sda_gpio", .offset = offsetof(struct mgos_config, i2c.sda_gpio)},
    {.type = CONF_TYPE_INT, .key = "scl_gpio", .offset = offsetof(struct mgos_config, i2c.scl_gpio)},
    {.type = CONF_TYPE_OBJECT, .key = "i2c1", .offset = offsetof(struct mgos_config, i2c1), .num_desc = 6},
    {.type = CONF_TYPE_INT, .key = "unit_no", .offset = offsetof(struct mgos_config, i2c1.unit_no)},
    {.type = CONF_TYPE_BOOL, .key = "enable", .offset = offsetof(struct mgos_config, i2c1.enable)},
    {.type = CONF_TYPE_INT, .key = "freq", .offset = offsetof(struct mgos_config, i2c1.freq)},
    {.type = CONF_TYPE_BOOL, .key = "debug", .offset = offsetof(struct mgos_config, i2c1.debug)},
    {.type = CONF_TYPE_INT, .key = "sda_gpio", .offset = offsetof(struct mgos_config, i2c1.sda_gpio)},
    {.type = CONF_TYPE_INT, .key = "scl_gpio", .offset = offsetof(struct mgos_config, i2c1.scl_gpio)},
    {.type = CONF_TYPE_OBJECT, .key = "mqtt", .offset = offsetof(struct mgos_config, mqtt), .num_desc = 29},
    {.type = CONF_TYPE_BOOL, .key = "enable", .offset = offsetof(struct mgos_config, mqtt.enable)},
    {.type = CONF_TYPE_STRING, .key = "server", .offset = offsetof(struct mgos_config, mqtt.server)},
    {.type = CONF_TYPE_STRING, .key = "client_id", .offset = offsetof(struct mgos_config, mqtt.client_id)},
    {.type = CONF_TYPE_STRING, .key = "user", .offset = offsetof(struct mgos_config, mqtt.user)},
    {.type = CONF_TYPE_STRING, .key = "pass", .offset = offsetof(struct mgos_config, mqtt.pass)},
    {.type = CONF_TYPE_DOUBLE, .key = "reconnect_timeout_min", .offset = offsetof(struct mgos_config, mqtt.reconnect_timeout_min)},
    {.type = CONF_TYPE_DOUBLE, .key = "reconnect_timeout_max", .offset = offsetof(struct mgos_config, mqtt.reconnect_timeout_max)},
    {.type = CONF_TYPE_STRING, .key = "ssl_cert", .offset = offsetof(struct mgos_config, mqtt.ssl_cert)},
    {.type = CONF_TYPE_STRING, .key = "ssl_key", .offset = offsetof(struct mgos_config, mqtt.ssl_key)},
    {.type = CONF_TYPE_STRING, .key = "ssl_ca_cert", .offset = offsetof(struct mgos_config, mqtt.ssl_ca_cert)},
    {.type = CONF_TYPE_STRING, .key = "ssl_cipher_suites", .offset = offsetof(struct mgos_config, mqtt.ssl_cipher_suites)},
    {.type = CONF_TYPE_STRING, .key = "ssl_psk_identity", .offset = offsetof(struct mgos_config, mqtt.ssl_psk_identity)},
    {.type = CONF_TYPE_STRING, .key = "ssl_psk_key", .offset = offsetof(struct mgos_config, mqtt.ssl_psk_key)},
    {.type = CONF_TYPE_BOOL, .key = "clean_session", .offset = offsetof(struct mgos_config, mqtt.clean_session)},
    {.type = CONF_TYPE_INT, .key = "keep_alive", .offset = offsetof(struct mgos_config, mqtt.keep_alive)},
    {.type = CONF_TYPE_STRING, .key = "will_topic", .offset = offsetof(struct mgos_config, mqtt.will_topic)},
    {.type = CONF_TYPE_STRING, .key = "will_message", .offset = offsetof(struct mgos_config, mqtt.will_message)},
    {.type = CONF_TYPE_BOOL, .key = "will_retain", .offset = offsetof(struct mgos_config, mqtt.will_retain)},
    {.type = CONF_TYPE_INT, .key = "max_qos", .offset = offsetof(struct mgos_config, mqtt.max_qos)},
    {.type = CONF_TYPE_INT, .key = "recv_mbuf_limit", .offset = offsetof(struct mgos_config, mqtt.recv_mbuf_limit)},
    {.type = CONF_TYPE_BOOL, .key = "require_time", .offset = offsetof(struct mgos_config, mqtt.require_time)},
    {.type = CONF_TYPE_BOOL, .key = "cloud_events", .offset = offsetof(struct mgos_config, mqtt.cloud_events)},
    {.type = CONF_TYPE_INT, .key = "max_queue_length", .offset = offsetof(struct mgos_config, mqtt.max_queue_length)},
    {.type = CONF_TYPE_BOOL, .key = "ws_enable", .offset = offsetof(struct mgos_config, mqtt.ws_enable)},
    {.type = CONF_TYPE_STRING, .key = "ws_path", .offset = offsetof(struct mgos_config, mqtt.ws_path)},
    {.type = CONF_TYPE_STRING, .key = "pub", .offset = offsetof(struct mgos_config, mqtt.pub)},
    {.type = CONF_TYPE_STRING, .key = "sub", .offset = offsetof(struct mgos_config, mqtt.sub)},
    {.type = CONF_TYPE_STRING, .key = "device_health", .offset = offsetof(struct mgos_config, mqtt.device_health)},
    {.type = CONF_TYPE_STRING, .key = "status", .offset = offsetof(struct mgos_config, mqtt.status)},
    {.type = CONF_TYPE_OBJECT, .key = "mqtt1", .offset = offsetof(struct mgos_config, mqtt1), .num_desc = 29},
    {.type = CONF_TYPE_BOOL, .key = "enable", .offset = offsetof(struct mgos_config, mqtt1.enable)},
    {.type = CONF_TYPE_STRING, .key = "server", .offset = offsetof(struct mgos_config, mqtt1.server)},
    {.type = CONF_TYPE_STRING, .key = "client_id", .offset = offsetof(struct mgos_config, mqtt1.client_id)},
    {.type = CONF_TYPE_STRING, .key = "user", .offset = offsetof(struct mgos_config, mqtt1.user)},
    {.type = CONF_TYPE_STRING, .key = "pass", .offset = offsetof(struct mgos_config, mqtt1.pass)},
    {.type = CONF_TYPE_DOUBLE, .key = "reconnect_timeout_min", .offset = offsetof(struct mgos_config, mqtt1.reconnect_timeout_min)},
    {.type = CONF_TYPE_DOUBLE, .key = "reconnect_timeout_max", .offset = offsetof(struct mgos_config, mqtt1.reconnect_timeout_max)},
    {.type = CONF_TYPE_STRING, .key = "ssl_cert", .offset = offsetof(struct mgos_config, mqtt1.ssl_cert)},
    {.type = CONF_TYPE_STRING, .key = "ssl_key", .offset = offsetof(struct mgos_config, mqtt1.ssl_key)},
    {.type = CONF_TYPE_STRING, .key = "ssl_ca_cert", .offset = offsetof(struct mgos_config, mqtt1.ssl_ca_cert)},
    {.type = CONF_TYPE_STRING, .key = "ssl_cipher_suites", .offset = offsetof(struct mgos_config, mqtt1.ssl_cipher_suites)},
    {.type = CONF_TYPE_STRING, .key = "ssl_psk_identity", .offset = offsetof(struct mgos_config, mqtt1.ssl_psk_identity)},
    {.type = CONF_TYPE_STRING, .key = "ssl_psk_key", .offset = offsetof(struct mgos_config, mqtt1.ssl_psk_key)},
    {.type = CONF_TYPE_BOOL, .key = "clean_session", .offset = offsetof(struct mgos_config, mqtt1.clean_session)},
    {.type = CONF_TYPE_INT, .key = "keep_alive", .offset = offsetof(struct mgos_config, mqtt1.keep_alive)},
    {.type = CONF_TYPE_STRING, .key = "will_topic", .offset = offsetof(struct mgos_config, mqtt1.will_topic)},
    {.type = CONF_TYPE_STRING, .key = "will_message", .offset = offsetof(struct mgos_config, mqtt1.will_message)},
    {.type = CONF_TYPE_BOOL, .key = "will_retain", .offset = offsetof(struct mgos_config, mqtt1.will_retain)},
    {.type = CONF_TYPE_INT, .key = "max_qos", .offset = offsetof(struct mgos_config, mqtt1.max_qos)},
    {.type = CONF_TYPE_INT, .key = "recv_mbuf_limit", .offset = offsetof(struct mgos_config, mqtt1.recv_mbuf_limit)},
    {.type = CONF_TYPE_BOOL, .key = "require_time", .offset = offsetof(struct mgos_config, mqtt1.require_time)},
    {.type = CONF_TYPE_BOOL, .key = "cloud_events", .offset = offsetof(struct mgos_config, mqtt1.cloud_events)},
    {.type = CONF_TYPE_INT, .key = "max_queue_length", .offset = offsetof(struct mgos_config, mqtt1.max_queue_length)},
    {.type = CONF_TYPE_BOOL, .key = "ws_enable", .offset = offsetof(struct mgos_config, mqtt1.ws_enable)},
    {.type = CONF_TYPE_STRING, .key = "ws_path", .offset = offsetof(struct mgos_config, mqtt1.ws_path)},
    {.type = CONF_TYPE_STRING, .key = "pub", .offset = offsetof(struct mgos_config, mqtt1.pub)},
    {.type = CONF_TYPE_STRING, .key = "sub", .offset = offsetof(struct mgos_config, mqtt1.sub)},
    {.type = CONF_TYPE_STRING, .key = "device_health", .offset = offsetof(struct mgos_config, mqtt1.device_health)},
    {.type = CONF_TYPE_STRING, .key = "status", .offset = offsetof(struct mgos_config, mqtt1.status)},
    {.type = CONF_TYPE_OBJECT, .key = "update", .offset = offsetof(struct mgos_config, update), .num_desc = 18},
    {.type = CONF_TYPE_INT, .key = "timeout", .offset = offsetof(struct mgos_config, update.timeout)},
    {.type = CONF_TYPE_INT, .key = "commit_timeout", .offset = offsetof(struct mgos_config, update.commit_timeout)},
    {.type = CONF_TYPE_STRING, .key = "key0", .offset = offsetof(struct mgos_config, update.key0)},
    {.type = CONF_TYPE_STRING, .key = "key1", .offset = offsetof(struct mgos_config, update.key1)},
    {.type = CONF_TYPE_STRING, .key = "key2", .offset = offsetof(struct mgos_config, update.key2)},
    {.type = CONF_TYPE_STRING, .key = "key3", .offset = offsetof(struct mgos_config, update.key3)},
    {.type = CONF_TYPE_STRING, .key = "key4", .offset = offsetof(struct mgos_config, update.key4)},
    {.type = CONF_TYPE_STRING, .key = "key5", .offset = offsetof(struct mgos_config, update.key5)},
    {.type = CONF_TYPE_STRING, .key = "key6", .offset = offsetof(struct mgos_config, update.key6)},
    {.type = CONF_TYPE_STRING, .key = "key7", .offset = offsetof(struct mgos_config, update.key7)},
    {.type = CONF_TYPE_INT, .key = "sig_req_mask", .offset = offsetof(struct mgos_config, update.sig_req_mask)},
    {.type = CONF_TYPE_STRING, .key = "url", .offset = offsetof(struct mgos_config, update.url)},
    {.type = CONF_TYPE_INT, .key = "interval", .offset = offsetof(struct mgos_config, update.interval)},
    {.type = CONF_TYPE_STRING, .key = "extra_http_headers", .offset = offsetof(struct mgos_config, update.extra_http_headers)},
    {.type = CONF_TYPE_STRING, .key = "ssl_ca_file", .offset = offsetof(struct mgos_config, update.ssl_ca_file)},
    {.type = CONF_TYPE_STRING, .key = "ssl_client_cert_file", .offset = offsetof(struct mgos_config, update.ssl_client_cert_file)},
    {.type = CONF_TYPE_STRING, .key = "ssl_server_name", .offset = offsetof(struct mgos_config, update.ssl_server_name)},
    {.type = CONF_TYPE_BOOL, .key = "enable_post", .offset = offsetof(struct mgos_config, update.enable_post)},
    {.type = CONF_TYPE_OBJECT, .key = "rpc", .offset = offsetof(struct mgos_config, rpc), .num_desc = 17},
    {.type = CONF_TYPE_BOOL, .key = "enable", .offset = offsetof(struct mgos_config, rpc.enable)},
    {.type = CONF_TYPE_BOOL, .key = "http_enable", .offset = offsetof(struct mgos_config, rpc.http_enable)},
    {.type = CONF_TYPE_BOOL, .key = "service_sys_enable", .offset = offsetof(struct mgos_config, rpc.service_sys_enable)},
    {.type = CONF_TYPE_INT, .key = "max_frame_size", .offset = offsetof(struct mgos_config, rpc.max_frame_size)},
    {.type = CONF_TYPE_INT, .key = "max_queue_length", .offset = offsetof(struct mgos_config, rpc.max_queue_length)},
    {.type = CONF_TYPE_INT, .key = "max_non_persistent_channels", .offset = offsetof(struct mgos_config, rpc.max_non_persistent_channels)},
    {.type = CONF_TYPE_INT, .key = "default_out_channel_idle_close_timeout", .offset = offsetof(struct mgos_config, rpc.default_out_channel_idle_close_timeout)},
    {.type = CONF_TYPE_STRING, .key = "acl", .offset = offsetof(struct mgos_config, rpc.acl)},
    {.type = CONF_TYPE_STRING, .key = "acl_file", .offset = offsetof(struct mgos_config, rpc.acl_file)},
    {.type = CONF_TYPE_STRING, .key = "auth_domain", .offset = offsetof(struct mgos_config, rpc.auth_domain)},
    {.type = CONF_TYPE_STRING, .key = "auth_file", .offset = offsetof(struct mgos_config, rpc.auth_file)},
    {.type = CONF_TYPE_INT, .key = "auth_algo", .offset = offsetof(struct mgos_config, rpc.auth_algo)},
    {.type = CONF_TYPE_OBJECT, .key = "uart", .offset = offsetof(struct mgos_config, rpc.uart), .num_desc = 4},
    {.type = CONF_TYPE_INT, .key = "uart_no", .offset = offsetof(struct mgos_config, rpc.uart.uart_no)},
    {.type = CONF_TYPE_INT, .key = "baud_rate", .offset = offsetof(struct mgos_config, rpc.uart.baud_rate)},
    {.type = CONF_TYPE_INT, .key = "fc_type", .offset = offsetof(struct mgos_config, rpc.uart.fc_type)},
    {.type = CONF_TYPE_STRING, .key = "dst", .offset = offsetof(struct mgos_config, rpc.uart.dst)},
    {.type = CONF_TYPE_OBJECT, .key = "wifi", .offset = offsetof(struct mgos_config, wifi), .num_desc = 82},
    {.type = CONF_TYPE_OBJECT, .key = "ap", .offset = offsetof(struct mgos_config, wifi.ap), .num_desc = 16},
    {.type = CONF_TYPE_BOOL, .key = "enable", .offset = offsetof(struct mgos_config, wifi.ap.enable)},
    {.type = CONF_TYPE_STRING, .key = "ssid", .offset = offsetof(struct mgos_config, wifi.ap.ssid)},
    {.type = CONF_TYPE_STRING, .key = "pass", .offset = offsetof(struct mgos_config, wifi.ap.pass)},
    {.type = CONF_TYPE_BOOL, .key = "hidden", .offset = offsetof(struct mgos_config, wifi.ap.hidden)},
    {.type = CONF_TYPE_INT, .key = "channel", .offset = offsetof(struct mgos_config, wifi.ap.channel)},
    {.type = CONF_TYPE_INT, .key = "max_connections", .offset = offsetof(struct mgos_config, wifi.ap.max_connections)},
    {.type = CONF_TYPE_STRING, .key = "ip", .offset = offsetof(struct mgos_config, wifi.ap.ip)},
    {.type = CONF_TYPE_STRING, .key = "netmask", .offset = offsetof(struct mgos_config, wifi.ap.netmask)},
    {.type = CONF_TYPE_STRING, .key = "gw", .offset = offsetof(struct mgos_config, wifi.ap.gw)},
    {.type = CONF_TYPE_STRING, .key = "dhcp_start", .offset = offsetof(struct mgos_config, wifi.ap.dhcp_start)},
    {.type = CONF_TYPE_STRING, .key = "dhcp_end", .offset = offsetof(struct mgos_config, wifi.ap.dhcp_end)},
    {.type = CONF_TYPE_INT, .key = "trigger_on_gpio", .offset = offsetof(struct mgos_config, wifi.ap.trigger_on_gpio)},
    {.type = CONF_TYPE_INT, .key = "disable_after", .offset = offsetof(struct mgos_config, wifi.ap.disable_after)},
    {.type = CONF_TYPE_STRING, .key = "hostname", .offset = offsetof(struct mgos_config, wifi.ap.hostname)},
    {.type = CONF_TYPE_BOOL, .key = "bandwidth_20mhz", .offset = offsetof(struct mgos_config, wifi.ap.bandwidth_20mhz)},
    {.type = CONF_TYPE_STRING, .key = "protocol", .offset = offsetof(struct mgos_config, wifi.ap.protocol)},
    {.type = CONF_TYPE_OBJECT, .key = "sta", .offset = offsetof(struct mgos_config, wifi.sta), .num_desc = 19},
    {.type = CONF_TYPE_BOOL, .key = "enable", .offset = offsetof(struct mgos_config, wifi.sta.enable)},
    {.type = CONF_TYPE_STRING, .key = "ssid", .offset = offsetof(struct mgos_config, wifi.sta.ssid)},
    {.type = CONF_TYPE_STRING, .key = "pass", .offset = offsetof(struct mgos_config, wifi.sta.pass)},
    {.type = CONF_TYPE_STRING, .key = "bssid", .offset = offsetof(struct mgos_config, wifi.sta.bssid)},
    {.type = CONF_TYPE_INT, .key = "channel", .offset = offsetof(struct mgos_config, wifi.sta.channel)},
    {.type = CONF_TYPE_STRING, .key = "last_bssid", .offset = offsetof(struct mgos_config, wifi.sta.last_bssid)},
    {.type = CONF_TYPE_INT, .key = "last_channel", .offset = offsetof(struct mgos_config, wifi.sta.last_channel)},
    {.type = CONF_TYPE_STRING, .key = "user", .offset = offsetof(struct mgos_config, wifi.sta.user)},
    {.type = CONF_TYPE_STRING, .key = "anon_identity", .offset = offsetof(struct mgos_config, wifi.sta.anon_identity)},
    {.type = CONF_TYPE_STRING, .key = "cert", .offset = offsetof(struct mgos_config, wifi.sta.cert)},
    {.type = CONF_TYPE_STRING, .key = "key", .offset = offsetof(struct mgos_config, wifi.sta.key)},
    {.type = CONF_TYPE_STRING, .key = "ca_cert", .offset = offsetof(struct mgos_config, wifi.sta.ca_cert)},
    {.type = CONF_TYPE_STRING, .key = "ip", .offset = offsetof(struct mgos_config, wifi.sta.ip)},
    {.type = CONF_TYPE_STRING, .key = "netmask", .offset = offsetof(struct mgos_config, wifi.sta.netmask)},
    {.type = CONF_TYPE_STRING, .key = "gw", .offset = offsetof(struct mgos_config, wifi.sta.gw)},
    {.type = CONF_TYPE_STRING, .key = "nameserver", .offset = offsetof(struct mgos_config, wifi.sta.nameserver)},
    {.type = CONF_TYPE_STRING, .key = "dhcp_hostname", .offset = offsetof(struct mgos_config, wifi.sta.dhcp_hostname)},
    {.type = CONF_TYPE_STRING, .key = "protocol", .offset = offsetof(struct mgos_config, wifi.sta.protocol)},
    {.type = CONF_TYPE_INT, .key = "listen_interval_ms", .offset = offsetof(struct mgos_config, wifi.sta.listen_interval_ms)},
    {.type = CONF_TYPE_OBJECT, .key = "sta1", .offset = offsetof(struct mgos_config, wifi.sta1), .num_desc = 19},
    {.type = CONF_TYPE_BOOL, .key = "enable", .offset = offsetof(struct mgos_config, wifi.sta1.enable)},
    {.type = CONF_TYPE_STRING, .key = "ssid", .offset = offsetof(struct mgos_config, wifi.sta1.ssid)},
    {.type = CONF_TYPE_STRING, .key = "pass", .offset = offsetof(struct mgos_config, wifi.sta1.pass)},
    {.type = CONF_TYPE_STRING, .key = "bssid", .offset = offsetof(struct mgos_config, wifi.sta1.bssid)},
    {.type = CONF_TYPE_INT, .key = "channel", .offset = offsetof(struct mgos_config, wifi.sta1.channel)},
    {.type = CONF_TYPE_STRING, .key = "last_bssid", .offset = offsetof(struct mgos_config, wifi.sta1.last_bssid)},
    {.type = CONF_TYPE_INT, .key = "last_channel", .offset = offsetof(struct mgos_config, wifi.sta1.last_channel)},
    {.type = CONF_TYPE_STRING, .key = "user", .offset = offsetof(struct mgos_config, wifi.sta1.user)},
    {.type = CONF_TYPE_STRING, .key = "anon_identity", .offset = offsetof(struct mgos_config, wifi.sta1.anon_identity)},
    {.type = CONF_TYPE_STRING, .key = "cert", .offset = offsetof(struct mgos_config, wifi.sta1.cert)},
    {.type = CONF_TYPE_STRING, .key = "key", .offset = offsetof(struct mgos_config, wifi.sta1.key)},
    {.type = CONF_TYPE_STRING, .key = "ca_cert", .offset = offsetof(struct mgos_config, wifi.sta1.ca_cert)},
    {.type = CONF_TYPE_STRING, .key = "ip", .offset = offsetof(struct mgos_config, wifi.sta1.ip)},
    {.type = CONF_TYPE_STRING, .key = "netmask", .offset = offsetof(struct mgos_config, wifi.sta1.netmask)},
    {.type = CONF_TYPE_STRING, .key = "gw", .offset = offsetof(struct mgos_config, wifi.sta1.gw)},
    {.type = CONF_TYPE_STRING, .key = "nameserver", .offset = offsetof(struct mgos_config, wifi.sta1.nameserver)},
    {.type = CONF_TYPE_STRING, .key = "dhcp_hostname", .offset = offsetof(struct mgos_config, wifi.sta1.dhcp_hostname)},
    {.type = CONF_TYPE_STRING, .key = "protocol", .offset = offsetof(struct mgos_config, wifi.sta1.protocol)},
    {.type = CONF_TYPE_INT, .key = "listen_interval_ms", .offset = offsetof(struct mgos_config, wifi.sta1.listen_interval_ms)},
    {.type = CONF_TYPE_OBJECT, .key = "sta2", .offset = offsetof(struct mgos_config, wifi.sta2), .num_desc = 19},
    {.type = CONF_TYPE_BOOL, .key = "enable", .offset = offsetof(struct mgos_config, wifi.sta2.enable)},
    {.type = CONF_TYPE_STRING, .key = "ssid", .offset = offsetof(struct mgos_config, wifi.sta2.ssid)},
    {.type = CONF_TYPE_STRING, .key = "pass", .offset = offsetof(struct mgos_config, wifi.sta2.pass)},
    {.type = CONF_TYPE_STRING, .key = "bssid", .offset = offsetof(struct mgos_config, wifi.sta2.bssid)},
    {.type = CONF_TYPE_INT, .key = "channel", .offset = offsetof(struct mgos_config, wifi.sta2.channel)},
    {.type = CONF_TYPE_STRING, .key = "last_bssid", .offset = offsetof(struct mgos_config, wifi.sta2.last_bssid)},
    {.type = CONF_TYPE_INT, .key = "last_channel", .offset = offsetof(struct mgos_config, wifi.sta2.last_channel)},
    {.type = CONF_TYPE_STRING, .key = "user", .offset = offsetof(struct mgos_config, wifi.sta2.user)},
    {.type = CONF_TYPE_STRING, .key = "anon_identity", .offset = offsetof(struct mgos_config, wifi.sta2.anon_identity)},
    {.type = CONF_TYPE_STRING, .key = "cert", .offset = offsetof(struct mgos_config, wifi.sta2.cert)},
    {.type = CONF_TYPE_STRING, .key = "key", .offset = offsetof(struct mgos_config, wifi.sta2.key)},
    {.type = CONF_TYPE_STRING, .key = "ca_cert", .offset = offsetof(struct mgos_config, wifi.sta2.ca_cert)},
    {.type = CONF_TYPE_STRING, .key = "ip", .offset = offsetof(struct mgos_config, wifi.sta2.ip)},
    {.type = CONF_TYPE_STRING, .key = "netmask", .offset = offsetof(struct mgos_config, wifi.sta2.netmask)},
    {.type = CONF_TYPE_STRING, .key = "gw", .offset = offsetof(struct mgos_config, wifi.sta2.gw)},
    {.type = CONF_TYPE_STRING, .key = "nameserver", .offset = offsetof(struct mgos_config, wifi.sta2.nameserver)},
    {.type = CONF_TYPE_STRING, .key = "dhcp_hostname", .offset = offsetof(struct mgos_config, wifi.sta2.dhcp_hostname)},
    {.type = CONF_TYPE_STRING, .key = "protocol", .offset = offsetof(struct mgos_config, wifi.sta2.protocol)},
    {.type = CONF_TYPE_INT, .key = "listen_interval_ms", .offset = offsetof(struct mgos_config, wifi.sta2.listen_interval_ms)},
    {.type = CONF_TYPE_INT, .key = "sta_rssi_thr", .offset = offsetof(struct mgos_config, wifi.sta_rssi_thr)},
    {.type = CONF_TYPE_INT, .key = "sta_connect_timeout", .offset = offsetof(struct mgos_config, wifi.sta_connect_timeout)},
    {.type = CONF_TYPE_INT, .key = "sta_roam_rssi_thr", .offset = offsetof(struct mgos_config, wifi.sta_roam_rssi_thr)},
    {.type = CONF_TYPE_INT, .key = "sta_roam_interval", .offset = offsetof(struct mgos_config, wifi.sta_roam_interval)},
    {.type = CONF_TYPE_INT, .key = "sta_ps_mode", .offset = offsetof(struct mgos_config, wifi.sta_ps_mode)},
    {.type = CONF_TYPE_OBJECT, .key = "board", .offset = offsetof(struct mgos_config, board), .num_desc = 18},
    {.type = CONF_TYPE_OBJECT, .key = "led1", .offset = offsetof(struct mgos_config, board.led1), .num_desc = 2},
    {.type = CONF_TYPE_INT, .key = "pin", .offset = offsetof(struct mgos_config, board.led1.pin)},
    {.type = CONF_TYPE_BOOL, .key = "active_high", .offset = offsetof(struct mgos_config, board.led1.active_high)},
    {.type = CONF_TYPE_OBJECT, .key = "led2", .offset = offsetof(struct mgos_config, board.led2), .num_desc = 2},
    {.type = CONF_TYPE_INT, .key = "pin", .offset = offsetof(struct mgos_config, board.led2.pin)},
    {.type = CONF_TYPE_BOOL, .key = "active_high", .offset = offsetof(struct mgos_config, board.led2.active_high)},
    {.type = CONF_TYPE_OBJECT, .key = "led3", .offset = offsetof(struct mgos_config, board.led3), .num_desc = 2},
    {.type = CONF_TYPE_INT, .key = "pin", .offset = offsetof(struct mgos_config, board.led3.pin)},
    {.type = CONF_TYPE_BOOL, .key = "active_high", .offset = offsetof(struct mgos_config, board.led3.active_high)},
    {.type = CONF_TYPE_OBJECT, .key = "btn1", .offset = offsetof(struct mgos_config, board.btn1), .num_desc = 2},
    {.type = CONF_TYPE_INT, .key = "pin", .offset = offsetof(struct mgos_config, board.btn1.pin)},
    {.type = CONF_TYPE_BOOL, .key = "pull_up", .offset = offsetof(struct mgos_config, board.btn1.pull_up)},
    {.type = CONF_TYPE_OBJECT, .key = "btn2", .offset = offsetof(struct mgos_config, board.btn2), .num_desc = 2},
    {.type = CONF_TYPE_INT, .key = "pin", .offset = offsetof(struct mgos_config, board.btn2.pin)},
    {.type = CONF_TYPE_BOOL, .key = "pull_up", .offset = offsetof(struct mgos_config, board.btn2.pull_up)},
    {.type = CONF_TYPE_OBJECT, .key = "btn3", .offset = offsetof(struct mgos_config, board.btn3), .num_desc = 2},
    {.type = CONF_TYPE_INT, .key = "pin", .offset = offsetof(struct mgos_config, board.btn3.pin)},
    {.type = CONF_TYPE_BOOL, .key = "pull_up", .offset = offsetof(struct mgos_config, board.btn3.pull_up)},
    {.type = CONF_TYPE_OBJECT, .key = "admin", .offset = offsetof(struct mgos_config, admin), .num_desc = 2},
    {.type = CONF_TYPE_STRING, .key = "variant", .offset = offsetof(struct mgos_config, admin.variant)},
    {.type = CONF_TYPE_STRING, .key = "version", .offset = offsetof(struct mgos_config, admin.version)},
    {.type = CONF_TYPE_OBJECT, .key = "dwpc", .offset = offsetof(struct mgos_config, dwpc), .num_desc = 21},
    {.type = CONF_TYPE_INT, .key = "interval", .offset = offsetof(struct mgos_config, dwpc.interval)},
    {.type = CONF_TYPE_INT, .key = "function_mode", .offset = offsetof(struct mgos_config, dwpc.function_mode)},
    {.type = CONF_TYPE_INT, .key = "periodic_reset", .offset = offsetof(struct mgos_config, dwpc.periodic_reset)},
    {.type = CONF_TYPE_INT, .key = "capacity", .offset = offsetof(struct mgos_config, dwpc.capacity)},
    {.type = CONF_TYPE_INT, .key = "sensor_freq", .offset = offsetof(struct mgos_config, dwpc.sensor_freq)},
    {.type = CONF_TYPE_INT, .key = "resolution", .offset = offsetof(struct mgos_config, dwpc.resolution)},
    {.type = CONF_TYPE_INT, .key = "min_floor_distance", .offset = offsetof(struct mgos_config, dwpc.min_floor_distance)},
    {.type = CONF_TYPE_INT, .key = "max_distance_delta", .offset = offsetof(struct mgos_config, dwpc.max_distance_delta)},
    {.type = CONF_TYPE_INT, .key = "TotalSamplesForRangeCalibration", .offset = offsetof(struct mgos_config, dwpc.TotalSamplesForRangeCalibration)},
    {.type = CONF_TYPE_INT, .key = "validSamplesForRangeCalibration", .offset = offsetof(struct mgos_config, dwpc.validSamplesForRangeCalibration)},
    {.type = CONF_TYPE_INT, .key = "numberOfTargetPerZone", .offset = offsetof(struct mgos_config, dwpc.numberOfTargetPerZone)},
    {.type = CONF_TYPE_INT, .key = "min_consecutive_count", .offset = offsetof(struct mgos_config, dwpc.min_consecutive_count)},
    {.type = CONF_TYPE_INT, .key = "min_signal", .offset = offsetof(struct mgos_config, dwpc.min_signal)},
    {.type = CONF_TYPE_INT, .key = "threshold", .offset = offsetof(struct mgos_config, dwpc.threshold)},
    {.type = CONF_TYPE_INT, .key = "direction", .offset = offsetof(struct mgos_config, dwpc.direction)},
    {.type = CONF_TYPE_INT, .key = "enable_low_confidence_target", .offset = offsetof(struct mgos_config, dwpc.enable_low_confidence_target)},
    {.type = CONF_TYPE_INT, .key = "enter_or_exit_middle_ok", .offset = offsetof(struct mgos_config, dwpc.enter_or_exit_middle_ok)},
    {.type = CONF_TYPE_INT, .key = "person_count_threshold", .offset = offsetof(struct mgos_config, dwpc.person_count_threshold)},
    {.type = CONF_TYPE_INT, .key = "reflectance_percent", .offset = offsetof(struct mgos_config, dwpc.reflectance_percent)},
    {.type = CONF_TYPE_INT, .key = "nb_samples", .offset = offsetof(struct mgos_config, dwpc.nb_samples)},
    {.type = CONF_TYPE_INT, .key = "distance_mm", .offset = offsetof(struct mgos_config, dwpc.distance_mm)},
    {.type = CONF_TYPE_OBJECT, .key = "service", .offset = offsetof(struct mgos_config, service), .num_desc = 3},
    {.type = CONF_TYPE_STRING, .key = "xtalkcalibration_status", .offset = offsetof(struct mgos_config, service.xtalkcalibration_status)},
    {.type = CONF_TYPE_STRING, .key = "livestream_toggle_status", .offset = offsetof(struct mgos_config, service.livestream_toggle_status)},
    {.type = CONF_TYPE_STRING, .key = "thresholdCalibration_status", .offset = offsetof(struct mgos_config, service.thresholdCalibration_status)},
    {.type = CONF_TYPE_OBJECT, .key = "diagnostic", .offset = offsetof(struct mgos_config, diagnostic), .num_desc = 1},
    {.type = CONF_TYPE_STRING, .key = "topic", .offset = offsetof(struct mgos_config, diagnostic.topic)},
    {.type = CONF_TYPE_OBJECT, .key = "pathzone", .offset = offsetof(struct mgos_config, pathzone), .num_desc = 16},
    {.type = CONF_TYPE_INT, .key = "index0", .offset = offsetof(struct mgos_config, pathzone.index0)},
    {.type = CONF_TYPE_INT, .key = "index1", .offset = offsetof(struct mgos_config, pathzone.index1)},
    {.type = CONF_TYPE_INT, .key = "index2", .offset = offsetof(struct mgos_config, pathzone.index2)},
    {.type = CONF_TYPE_INT, .key = "index3", .offset = offsetof(struct mgos_config, pathzone.index3)},
    {.type = CONF_TYPE_INT, .key = "index4", .offset = offsetof(struct mgos_config, pathzone.index4)},
    {.type = CONF_TYPE_INT, .key = "index5", .offset = offsetof(struct mgos_config, pathzone.index5)},
    {.type = CONF_TYPE_INT, .key = "index6", .offset = offsetof(struct mgos_config, pathzone.index6)},
    {.type = CONF_TYPE_INT, .key = "index7", .offset = offsetof(struct mgos_config, pathzone.index7)},
    {.type = CONF_TYPE_INT, .key = "index8", .offset = offsetof(struct mgos_config, pathzone.index8)},
    {.type = CONF_TYPE_INT, .key = "index9", .offset = offsetof(struct mgos_config, pathzone.index9)},
    {.type = CONF_TYPE_INT, .key = "index10", .offset = offsetof(struct mgos_config, pathzone.index10)},
    {.type = CONF_TYPE_INT, .key = "index11", .offset = offsetof(struct mgos_config, pathzone.index11)},
    {.type = CONF_TYPE_INT, .key = "index12", .offset = offsetof(struct mgos_config, pathzone.index12)},
    {.type = CONF_TYPE_INT, .key = "index13", .offset = offsetof(struct mgos_config, pathzone.index13)},
    {.type = CONF_TYPE_INT, .key = "index14", .offset = offsetof(struct mgos_config, pathzone.index14)},
    {.type = CONF_TYPE_INT, .key = "index15", .offset = offsetof(struct mgos_config, pathzone.index15)},
    {.type = CONF_TYPE_OBJECT, .key = "InnerOuterZone", .offset = offsetof(struct mgos_config, InnerOuterZone), .num_desc = 16},
    {.type = CONF_TYPE_INT, .key = "index0", .offset = offsetof(struct mgos_config, InnerOuterZone.index0)},
    {.type = CONF_TYPE_INT, .key = "index1", .offset = offsetof(struct mgos_config, InnerOuterZone.index1)},
    {.type = CONF_TYPE_INT, .key = "index2", .offset = offsetof(struct mgos_config, InnerOuterZone.index2)},
    {.type = CONF_TYPE_INT, .key = "index3", .offset = offsetof(struct mgos_config, InnerOuterZone.index3)},
    {.type = CONF_TYPE_INT, .key = "index4", .offset = offsetof(struct mgos_config, InnerOuterZone.index4)},
    {.type = CONF_TYPE_INT, .key = "index5", .offset = offsetof(struct mgos_config, InnerOuterZone.index5)},
    {.type = CONF_TYPE_INT, .key = "index6", .offset = offsetof(struct mgos_config, InnerOuterZone.index6)},
    {.type = CONF_TYPE_INT, .key = "index7", .offset = offsetof(struct mgos_config, InnerOuterZone.index7)},
    {.type = CONF_TYPE_INT, .key = "index8", .offset = offsetof(struct mgos_config, InnerOuterZone.index8)},
    {.type = CONF_TYPE_INT, .key = "index9", .offset = offsetof(struct mgos_config, InnerOuterZone.index9)},
    {.type = CONF_TYPE_INT, .key = "index10", .offset = offsetof(struct mgos_config, InnerOuterZone.index10)},
    {.type = CONF_TYPE_INT, .key = "index11", .offset = offsetof(struct mgos_config, InnerOuterZone.index11)},
    {.type = CONF_TYPE_INT, .key = "index12", .offset = offsetof(struct mgos_config, InnerOuterZone.index12)},
    {.type = CONF_TYPE_INT, .key = "index13", .offset = offsetof(struct mgos_config, InnerOuterZone.index13)},
    {.type = CONF_TYPE_INT, .key = "index14", .offset = offsetof(struct mgos_config, InnerOuterZone.index14)},
    {.type = CONF_TYPE_INT, .key = "index15", .offset = offsetof(struct mgos_config, InnerOuterZone.index15)},
    {.type = CONF_TYPE_OBJECT, .key = "distanceThreshold", .offset = offsetof(struct mgos_config, distanceThreshold), .num_desc = 16},
    {.type = CONF_TYPE_INT, .key = "index0", .offset = offsetof(struct mgos_config, distanceThreshold.index0)},
    {.type = CONF_TYPE_INT, .key = "index1", .offset = offsetof(struct mgos_config, distanceThreshold.index1)},
    {.type = CONF_TYPE_INT, .key = "index2", .offset = offsetof(struct mgos_config, distanceThreshold.index2)},
    {.type = CONF_TYPE_INT, .key = "index3", .offset = offsetof(struct mgos_config, distanceThreshold.index3)},
    {.type = CONF_TYPE_INT, .key = "index4", .offset = offsetof(struct mgos_config, distanceThreshold.index4)},
    {.type = CONF_TYPE_INT, .key = "index5", .offset = offsetof(struct mgos_config, distanceThreshold.index5)},
    {.type = CONF_TYPE_INT, .key = "index6", .offset = offsetof(struct mgos_config, distanceThreshold.index6)},
    {.type = CONF_TYPE_INT, .key = "index7", .offset = offsetof(struct mgos_config, distanceThreshold.index7)},
    {.type = CONF_TYPE_INT, .key = "index8", .offset = offsetof(struct mgos_config, distanceThreshold.index8)},
    {.type = CONF_TYPE_INT, .key = "index9", .offset = offsetof(struct mgos_config, distanceThreshold.index9)},
    {.type = CONF_TYPE_INT, .key = "index10", .offset = offsetof(struct mgos_config, distanceThreshold.index10)},
    {.type = CONF_TYPE_INT, .key = "index11", .offset = offsetof(struct mgos_config, distanceThreshold.index11)},
    {.type = CONF_TYPE_INT, .key = "index12", .offset = offsetof(struct mgos_config, distanceThreshold.index12)},
    {.type = CONF_TYPE_INT, .key = "index13", .offset = offsetof(struct mgos_config, distanceThreshold.index13)},
    {.type = CONF_TYPE_INT, .key = "index14", .offset = offsetof(struct mgos_config, distanceThreshold.index14)},
    {.type = CONF_TYPE_INT, .key = "index15", .offset = offsetof(struct mgos_config, distanceThreshold.index15)},
    {.type = CONF_TYPE_OBJECT, .key = "mindistance", .offset = offsetof(struct mgos_config, mindistance), .num_desc = 16},
    {.type = CONF_TYPE_INT, .key = "index0", .offset = offsetof(struct mgos_config, mindistance.index0)},
    {.type = CONF_TYPE_INT, .key = "index1", .offset = offsetof(struct mgos_config, mindistance.index1)},
    {.type = CONF_TYPE_INT, .key = "index2", .offset = offsetof(struct mgos_config, mindistance.index2)},
    {.type = CONF_TYPE_INT, .key = "index3", .offset = offsetof(struct mgos_config, mindistance.index3)},
    {.type = CONF_TYPE_INT, .key = "index4", .offset = offsetof(struct mgos_config, mindistance.index4)},
    {.type = CONF_TYPE_INT, .key = "index5", .offset = offsetof(struct mgos_config, mindistance.index5)},
    {.type = CONF_TYPE_INT, .key = "index6", .offset = offsetof(struct mgos_config, mindistance.index6)},
    {.type = CONF_TYPE_INT, .key = "index7", .offset = offsetof(struct mgos_config, mindistance.index7)},
    {.type = CONF_TYPE_INT, .key = "index8", .offset = offsetof(struct mgos_config, mindistance.index8)},
    {.type = CONF_TYPE_INT, .key = "index9", .offset = offsetof(struct mgos_config, mindistance.index9)},
    {.type = CONF_TYPE_INT, .key = "index10", .offset = offsetof(struct mgos_config, mindistance.index10)},
    {.type = CONF_TYPE_INT, .key = "index11", .offset = offsetof(struct mgos_config, mindistance.index11)},
    {.type = CONF_TYPE_INT, .key = "index12", .offset = offsetof(struct mgos_config, mindistance.index12)},
    {.type = CONF_TYPE_INT, .key = "index13", .offset = offsetof(struct mgos_config, mindistance.index13)},
    {.type = CONF_TYPE_INT, .key = "index14", .offset = offsetof(struct mgos_config, mindistance.index14)},
    {.type = CONF_TYPE_INT, .key = "index15", .offset = offsetof(struct mgos_config, mindistance.index15)},
};

/* struct mgos_config_debug */
const struct mgos_conf_entry *mgos_config_debug_get_schema(void) {
  return &mgos_config_schema_[1];
}

void mgos_config_debug_set_defaults(struct mgos_config_debug *cfg) {
  cfg->udp_log_addr = NULL;
  cfg->udp_log_level = 3;
  cfg->mbedtls_level = 1;
  cfg->level = 2;
  cfg->file_level = NULL;
  cfg->event_level = 2;
  cfg->stdout_uart = 0;
  cfg->stderr_uart = 0;
  cfg->factory_reset_gpio = -1;
  cfg->mg_mgr_hexdump_file = NULL;
  cfg->stdout_topic = NULL;
  cfg->stderr_topic = NULL;
}
bool mgos_config_debug_parse_f(const char *fname, struct mgos_config_debug *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_debug_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_device_location */
const struct mgos_conf_entry *mgos_config_device_location_get_schema(void) {
  return &mgos_config_schema_[20];
}

void mgos_config_device_location_set_defaults(struct mgos_config_device_location *cfg) {
  cfg->lat = 999.0;
  cfg->lon = 999.0;
}
bool mgos_config_device_location_parse_f(const char *fname, struct mgos_config_device_location *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_device_location_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_device */
const struct mgos_conf_entry *mgos_config_device_get_schema(void) {
  return &mgos_config_schema_[14];
}

void mgos_config_device_set_defaults(struct mgos_config_device *cfg) {
  cfg->id = "esp32_??????";
  cfg->license = NULL;
  cfg->mac = NULL;
  cfg->public_key = NULL;
  cfg->sn = NULL;
  mgos_config_device_location_set_defaults(&cfg->location);
}
bool mgos_config_device_parse_f(const char *fname, struct mgos_config_device *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_device_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_sys */
const struct mgos_conf_entry *mgos_config_sys_get_schema(void) {
  return &mgos_config_schema_[23];
}

void mgos_config_sys_set_defaults(struct mgos_config_sys *cfg) {
  cfg->tz_spec = NULL;
  cfg->wdt_timeout = 30;
  cfg->pref_ota_lib = NULL;
}
bool mgos_config_sys_parse_f(const char *fname, struct mgos_config_sys *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_sys_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_sntp */
const struct mgos_conf_entry *mgos_config_sntp_get_schema(void) {
  return &mgos_config_schema_[28];
}

void mgos_config_sntp_set_defaults(struct mgos_config_sntp *cfg) {
  cfg->enable = true;
  cfg->server = "time.google.com";
  cfg->retry_min = 1;
  cfg->retry_max = 30;
  cfg->update_interval = 7200;
}
bool mgos_config_sntp_parse_f(const char *fname, struct mgos_config_sntp *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_sntp_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_eth */
const struct mgos_conf_entry *mgos_config_eth_get_schema(void) {
  return &mgos_config_schema_[34];
}

void mgos_config_eth_set_defaults(struct mgos_config_eth *cfg) {
  cfg->enable = false;
  cfg->phy_addr = 0;
  cfg->ip = NULL;
  cfg->netmask = NULL;
  cfg->gw = NULL;
  cfg->nameserver = NULL;
  cfg->dhcp_hostname = NULL;
  cfg->clk_mode = 3;
  cfg->mdc_gpio = 23;
  cfg->mdio_gpio = 18;
  cfg->phy_pwr_gpio = -1;
}
bool mgos_config_eth_parse_f(const char *fname, struct mgos_config_eth *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_eth_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_http */
const struct mgos_conf_entry *mgos_config_http_get_schema(void) {
  return &mgos_config_schema_[46];
}

void mgos_config_http_set_defaults(struct mgos_config_http *cfg) {
  cfg->enable = true;
  cfg->listen_addr = "80";
  cfg->document_root = "/";
  cfg->index_files = NULL;
  cfg->ssl_cert = NULL;
  cfg->ssl_key = NULL;
  cfg->ssl_ca_cert = NULL;
  cfg->upload_acl = "*";
  cfg->hidden_files = NULL;
  cfg->auth_domain = NULL;
  cfg->auth_file = NULL;
  cfg->auth_algo = 0;
  cfg->extra_headers = NULL;
}
bool mgos_config_http_parse_f(const char *fname, struct mgos_config_http *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_http_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_i2c */
const struct mgos_conf_entry *mgos_config_i2c_get_schema(void) {
  return &mgos_config_schema_[67];
}

void mgos_config_i2c_set_defaults(struct mgos_config_i2c *cfg) {
  cfg->unit_no = 0;
  cfg->enable = true;
  cfg->freq = 400000;
  cfg->debug = false;
  cfg->sda_gpio = 33;
  cfg->scl_gpio = 32;
}
bool mgos_config_i2c_parse_f(const char *fname, struct mgos_config_i2c *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_i2c_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_i2c */
const struct mgos_conf_entry *mgos_config_i2c1_get_schema(void) {
  return &mgos_config_schema_[67];
}

void mgos_config_i2c1_set_defaults(struct mgos_config_i2c *cfg) {
  cfg->unit_no = 1;
  cfg->enable = false;
  cfg->freq = 400000;
  cfg->debug = false;
  cfg->sda_gpio = 22;
  cfg->scl_gpio = 23;
}
bool mgos_config_i2c1_parse_f(const char *fname, struct mgos_config_i2c *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_i2c1_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_mqtt */
const struct mgos_conf_entry *mgos_config_mqtt_get_schema(void) {
  return &mgos_config_schema_[104];
}

void mgos_config_mqtt_set_defaults(struct mgos_config_mqtt *cfg) {
  cfg->enable = true;
  cfg->server = "test.mosquitto.org";
  cfg->client_id = NULL;
  cfg->user = NULL;
  cfg->pass = NULL;
  cfg->reconnect_timeout_min = 2.0;
  cfg->reconnect_timeout_max = 60.0;
  cfg->ssl_cert = NULL;
  cfg->ssl_key = NULL;
  cfg->ssl_ca_cert = NULL;
  cfg->ssl_cipher_suites = NULL;
  cfg->ssl_psk_identity = NULL;
  cfg->ssl_psk_key = NULL;
  cfg->clean_session = true;
  cfg->keep_alive = 60;
  cfg->will_topic = NULL;
  cfg->will_message = NULL;
  cfg->will_retain = false;
  cfg->max_qos = 0;
  cfg->recv_mbuf_limit = 3072;
  cfg->require_time = false;
  cfg->cloud_events = true;
  cfg->max_queue_length = 5;
  cfg->ws_enable = false;
  cfg->ws_path = "/mqtt";
  cfg->pub = "/dwpc/1";
  cfg->sub = NULL;
  cfg->device_health = "/health/1";
  cfg->status = NULL;
}
bool mgos_config_mqtt_parse_f(const char *fname, struct mgos_config_mqtt *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_mqtt_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_mqtt */
const struct mgos_conf_entry *mgos_config_mqtt1_get_schema(void) {
  return &mgos_config_schema_[104];
}

void mgos_config_mqtt1_set_defaults(struct mgos_config_mqtt *cfg) {
  cfg->enable = true;
  cfg->server = "test.mosquitto.org";
  cfg->client_id = NULL;
  cfg->user = NULL;
  cfg->pass = NULL;
  cfg->reconnect_timeout_min = 2.0;
  cfg->reconnect_timeout_max = 60.0;
  cfg->ssl_cert = NULL;
  cfg->ssl_key = NULL;
  cfg->ssl_ca_cert = NULL;
  cfg->ssl_cipher_suites = NULL;
  cfg->ssl_psk_identity = NULL;
  cfg->ssl_psk_key = NULL;
  cfg->clean_session = true;
  cfg->keep_alive = 60;
  cfg->will_topic = NULL;
  cfg->will_message = NULL;
  cfg->will_retain = false;
  cfg->max_qos = 0;
  cfg->recv_mbuf_limit = 3072;
  cfg->require_time = false;
  cfg->cloud_events = true;
  cfg->max_queue_length = 5;
  cfg->ws_enable = false;
  cfg->ws_path = "/mqtt";
  cfg->pub = "/dwpc/1";
  cfg->sub = NULL;
  cfg->device_health = "/health/1";
  cfg->status = NULL;
}
bool mgos_config_mqtt1_parse_f(const char *fname, struct mgos_config_mqtt *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_mqtt1_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_update */
const struct mgos_conf_entry *mgos_config_update_get_schema(void) {
  return &mgos_config_schema_[134];
}

void mgos_config_update_set_defaults(struct mgos_config_update *cfg) {
  cfg->timeout = 600;
  cfg->commit_timeout = 0;
  cfg->key0 = NULL;
  cfg->key1 = NULL;
  cfg->key2 = NULL;
  cfg->key3 = NULL;
  cfg->key4 = NULL;
  cfg->key5 = NULL;
  cfg->key6 = NULL;
  cfg->key7 = NULL;
  cfg->sig_req_mask = -1;
  cfg->url = NULL;
  cfg->interval = 0;
  cfg->extra_http_headers = NULL;
  cfg->ssl_ca_file = "ca.pem";
  cfg->ssl_client_cert_file = NULL;
  cfg->ssl_server_name = NULL;
  cfg->enable_post = true;
}
bool mgos_config_update_parse_f(const char *fname, struct mgos_config_update *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_update_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_rpc_uart */
const struct mgos_conf_entry *mgos_config_rpc_uart_get_schema(void) {
  return &mgos_config_schema_[166];
}

void mgos_config_rpc_uart_set_defaults(struct mgos_config_rpc_uart *cfg) {
  cfg->uart_no = 0;
  cfg->baud_rate = 115200;
  cfg->fc_type = 2;
  cfg->dst = NULL;
}
bool mgos_config_rpc_uart_parse_f(const char *fname, struct mgos_config_rpc_uart *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_rpc_uart_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_rpc */
const struct mgos_conf_entry *mgos_config_rpc_get_schema(void) {
  return &mgos_config_schema_[153];
}

void mgos_config_rpc_set_defaults(struct mgos_config_rpc *cfg) {
  cfg->enable = true;
  cfg->http_enable = true;
  cfg->service_sys_enable = true;
  cfg->max_frame_size = 4096;
  cfg->max_queue_length = 25;
  cfg->max_non_persistent_channels = 20;
  cfg->default_out_channel_idle_close_timeout = 10;
  cfg->acl = NULL;
  cfg->acl_file = NULL;
  cfg->auth_domain = "RPC";
  cfg->auth_file = NULL;
  cfg->auth_algo = 0;
  mgos_config_rpc_uart_set_defaults(&cfg->uart);
}
bool mgos_config_rpc_parse_f(const char *fname, struct mgos_config_rpc *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_rpc_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_wifi_ap */
const struct mgos_conf_entry *mgos_config_wifi_ap_get_schema(void) {
  return &mgos_config_schema_[172];
}

void mgos_config_wifi_ap_set_defaults(struct mgos_config_wifi_ap *cfg) {
  cfg->enable = true;
  cfg->ssid = "DWPC_IP_UART_V2";
  cfg->pass = "12345678";
  cfg->hidden = false;
  cfg->channel = 6;
  cfg->max_connections = 5;
  cfg->ip = "192.168.4.1";
  cfg->netmask = "255.255.255.0";
  cfg->gw = "192.168.4.1";
  cfg->dhcp_start = "192.168.4.2";
  cfg->dhcp_end = "192.168.4.10";
  cfg->trigger_on_gpio = -1;
  cfg->disable_after = 0;
  cfg->hostname = NULL;
  cfg->bandwidth_20mhz = false;
  cfg->protocol = "BGN";
}
bool mgos_config_wifi_ap_parse_f(const char *fname, struct mgos_config_wifi_ap *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_wifi_ap_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_wifi_sta */
const struct mgos_conf_entry *mgos_config_wifi_sta_get_schema(void) {
  return &mgos_config_schema_[229];
}

void mgos_config_wifi_sta_set_defaults(struct mgos_config_wifi_sta *cfg) {
  cfg->enable = false;
  cfg->ssid = "INBLRFTWIFI";
  cfg->pass = "Flamenco#abcd)";
  cfg->bssid = NULL;
  cfg->channel = 0;
  cfg->last_bssid = NULL;
  cfg->last_channel = 0;
  cfg->user = NULL;
  cfg->anon_identity = NULL;
  cfg->cert = NULL;
  cfg->key = NULL;
  cfg->ca_cert = NULL;
  cfg->ip = NULL;
  cfg->netmask = NULL;
  cfg->gw = NULL;
  cfg->nameserver = NULL;
  cfg->dhcp_hostname = NULL;
  cfg->protocol = "BGN";
  cfg->listen_interval_ms = 0;
}
bool mgos_config_wifi_sta_parse_f(const char *fname, struct mgos_config_wifi_sta *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_wifi_sta_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_wifi_sta */
const struct mgos_conf_entry *mgos_config_wifi_sta1_get_schema(void) {
  return &mgos_config_schema_[229];
}

void mgos_config_wifi_sta1_set_defaults(struct mgos_config_wifi_sta *cfg) {
  cfg->enable = false;
  cfg->ssid = "INBLRFTWIFI";
  cfg->pass = "Flamenco#abcd)";
  cfg->bssid = NULL;
  cfg->channel = 0;
  cfg->last_bssid = NULL;
  cfg->last_channel = 0;
  cfg->user = NULL;
  cfg->anon_identity = NULL;
  cfg->cert = NULL;
  cfg->key = NULL;
  cfg->ca_cert = NULL;
  cfg->ip = NULL;
  cfg->netmask = NULL;
  cfg->gw = NULL;
  cfg->nameserver = NULL;
  cfg->dhcp_hostname = NULL;
  cfg->protocol = "BGN";
  cfg->listen_interval_ms = 0;
}
bool mgos_config_wifi_sta1_parse_f(const char *fname, struct mgos_config_wifi_sta *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_wifi_sta1_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_wifi_sta */
const struct mgos_conf_entry *mgos_config_wifi_sta2_get_schema(void) {
  return &mgos_config_schema_[229];
}

void mgos_config_wifi_sta2_set_defaults(struct mgos_config_wifi_sta *cfg) {
  cfg->enable = false;
  cfg->ssid = "INBLRFTWIFI";
  cfg->pass = "Flamenco#abcd)";
  cfg->bssid = NULL;
  cfg->channel = 0;
  cfg->last_bssid = NULL;
  cfg->last_channel = 0;
  cfg->user = NULL;
  cfg->anon_identity = NULL;
  cfg->cert = NULL;
  cfg->key = NULL;
  cfg->ca_cert = NULL;
  cfg->ip = NULL;
  cfg->netmask = NULL;
  cfg->gw = NULL;
  cfg->nameserver = NULL;
  cfg->dhcp_hostname = NULL;
  cfg->protocol = "BGN";
  cfg->listen_interval_ms = 0;
}
bool mgos_config_wifi_sta2_parse_f(const char *fname, struct mgos_config_wifi_sta *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_wifi_sta2_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_wifi */
const struct mgos_conf_entry *mgos_config_wifi_get_schema(void) {
  return &mgos_config_schema_[171];
}

void mgos_config_wifi_set_defaults(struct mgos_config_wifi *cfg) {
  mgos_config_wifi_ap_set_defaults(&cfg->ap);
  mgos_config_wifi_sta_set_defaults(&cfg->sta);
  mgos_config_wifi_sta1_set_defaults(&cfg->sta1);
  mgos_config_wifi_sta2_set_defaults(&cfg->sta2);
  cfg->sta_rssi_thr = -95;
  cfg->sta_connect_timeout = 15;
  cfg->sta_roam_rssi_thr = -80;
  cfg->sta_roam_interval = 0;
  cfg->sta_ps_mode = 0;
}
bool mgos_config_wifi_parse_f(const char *fname, struct mgos_config_wifi *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_wifi_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_board_led1 */
const struct mgos_conf_entry *mgos_config_board_led1_get_schema(void) {
  return &mgos_config_schema_[255];
}

void mgos_config_board_led1_set_defaults(struct mgos_config_board_led1 *cfg) {
  cfg->pin = 13;
  cfg->active_high = true;
}
bool mgos_config_board_led1_parse_f(const char *fname, struct mgos_config_board_led1 *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_board_led1_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_board_led2 */
const struct mgos_conf_entry *mgos_config_board_led2_get_schema(void) {
  return &mgos_config_schema_[258];
}

void mgos_config_board_led2_set_defaults(struct mgos_config_board_led2 *cfg) {
  cfg->pin = -1;
  cfg->active_high = true;
}
bool mgos_config_board_led2_parse_f(const char *fname, struct mgos_config_board_led2 *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_board_led2_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_board_led3 */
const struct mgos_conf_entry *mgos_config_board_led3_get_schema(void) {
  return &mgos_config_schema_[261];
}

void mgos_config_board_led3_set_defaults(struct mgos_config_board_led3 *cfg) {
  cfg->pin = -1;
  cfg->active_high = true;
}
bool mgos_config_board_led3_parse_f(const char *fname, struct mgos_config_board_led3 *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_board_led3_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_board_btn1 */
const struct mgos_conf_entry *mgos_config_board_btn1_get_schema(void) {
  return &mgos_config_schema_[264];
}

void mgos_config_board_btn1_set_defaults(struct mgos_config_board_btn1 *cfg) {
  cfg->pin = 0;
  cfg->pull_up = true;
}
bool mgos_config_board_btn1_parse_f(const char *fname, struct mgos_config_board_btn1 *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_board_btn1_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_board_btn2 */
const struct mgos_conf_entry *mgos_config_board_btn2_get_schema(void) {
  return &mgos_config_schema_[267];
}

void mgos_config_board_btn2_set_defaults(struct mgos_config_board_btn2 *cfg) {
  cfg->pin = -1;
  cfg->pull_up = false;
}
bool mgos_config_board_btn2_parse_f(const char *fname, struct mgos_config_board_btn2 *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_board_btn2_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_board_btn3 */
const struct mgos_conf_entry *mgos_config_board_btn3_get_schema(void) {
  return &mgos_config_schema_[270];
}

void mgos_config_board_btn3_set_defaults(struct mgos_config_board_btn3 *cfg) {
  cfg->pin = -1;
  cfg->pull_up = false;
}
bool mgos_config_board_btn3_parse_f(const char *fname, struct mgos_config_board_btn3 *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_board_btn3_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_board */
const struct mgos_conf_entry *mgos_config_board_get_schema(void) {
  return &mgos_config_schema_[254];
}

void mgos_config_board_set_defaults(struct mgos_config_board *cfg) {
  mgos_config_board_led1_set_defaults(&cfg->led1);
  mgos_config_board_led2_set_defaults(&cfg->led2);
  mgos_config_board_led3_set_defaults(&cfg->led3);
  mgos_config_board_btn1_set_defaults(&cfg->btn1);
  mgos_config_board_btn2_set_defaults(&cfg->btn2);
  mgos_config_board_btn3_set_defaults(&cfg->btn3);
}
bool mgos_config_board_parse_f(const char *fname, struct mgos_config_board *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_board_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_admin */
const struct mgos_conf_entry *mgos_config_admin_get_schema(void) {
  return &mgos_config_schema_[273];
}

void mgos_config_admin_set_defaults(struct mgos_config_admin *cfg) {
  cfg->variant = "ZIGBEE";
  cfg->version = "v2.5_07-09-23";
}
bool mgos_config_admin_parse_f(const char *fname, struct mgos_config_admin *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_admin_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_dwpc */
const struct mgos_conf_entry *mgos_config_dwpc_get_schema(void) {
  return &mgos_config_schema_[276];
}

void mgos_config_dwpc_set_defaults(struct mgos_config_dwpc *cfg) {
  cfg->interval = 30;
  cfg->function_mode = 2;
  cfg->periodic_reset = 45;
  cfg->capacity = 0;
  cfg->sensor_freq = 10;
  cfg->resolution = 16;
  cfg->min_floor_distance = 1500;
  cfg->max_distance_delta = 300;
  cfg->TotalSamplesForRangeCalibration = 500;
  cfg->validSamplesForRangeCalibration = 450;
  cfg->numberOfTargetPerZone = 1;
  cfg->min_consecutive_count = 4;
  cfg->min_signal = 1;
  cfg->threshold = 200;
  cfg->direction = 0;
  cfg->enable_low_confidence_target = 0;
  cfg->enter_or_exit_middle_ok = 0;
  cfg->person_count_threshold = 0;
  cfg->reflectance_percent = 50;
  cfg->nb_samples = 8;
  cfg->distance_mm = 2000;
}
bool mgos_config_dwpc_parse_f(const char *fname, struct mgos_config_dwpc *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_dwpc_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_service */
const struct mgos_conf_entry *mgos_config_service_get_schema(void) {
  return &mgos_config_schema_[298];
}

void mgos_config_service_set_defaults(struct mgos_config_service *cfg) {
  cfg->xtalkcalibration_status = "Not started";
  cfg->livestream_toggle_status = "Not started";
  cfg->thresholdCalibration_status = "Not started";
}
bool mgos_config_service_parse_f(const char *fname, struct mgos_config_service *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_service_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_diagnostic */
const struct mgos_conf_entry *mgos_config_diagnostic_get_schema(void) {
  return &mgos_config_schema_[302];
}

void mgos_config_diagnostic_set_defaults(struct mgos_config_diagnostic *cfg) {
  cfg->topic = "/diagnostics";
}
bool mgos_config_diagnostic_parse_f(const char *fname, struct mgos_config_diagnostic *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_diagnostic_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_pathzone */
const struct mgos_conf_entry *mgos_config_pathzone_get_schema(void) {
  return &mgos_config_schema_[304];
}

void mgos_config_pathzone_set_defaults(struct mgos_config_pathzone *cfg) {
  cfg->index0 = 2;
  cfg->index1 = 2;
  cfg->index2 = 2;
  cfg->index3 = 2;
  cfg->index4 = 2;
  cfg->index5 = 2;
  cfg->index6 = 2;
  cfg->index7 = 2;
  cfg->index8 = 2;
  cfg->index9 = 2;
  cfg->index10 = 2;
  cfg->index11 = 2;
  cfg->index12 = 2;
  cfg->index13 = 2;
  cfg->index14 = 2;
  cfg->index15 = 2;
}
bool mgos_config_pathzone_parse_f(const char *fname, struct mgos_config_pathzone *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_pathzone_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_InnerOuterZone */
const struct mgos_conf_entry *mgos_config_InnerOuterZone_get_schema(void) {
  return &mgos_config_schema_[321];
}

void mgos_config_InnerOuterZone_set_defaults(struct mgos_config_InnerOuterZone *cfg) {
  cfg->index0 = 3;
  cfg->index1 = 3;
  cfg->index2 = 1;
  cfg->index3 = 1;
  cfg->index4 = 3;
  cfg->index5 = 3;
  cfg->index6 = 1;
  cfg->index7 = 1;
  cfg->index8 = 3;
  cfg->index9 = 3;
  cfg->index10 = 1;
  cfg->index11 = 1;
  cfg->index12 = 3;
  cfg->index13 = 3;
  cfg->index14 = 1;
  cfg->index15 = 1;
}
bool mgos_config_InnerOuterZone_parse_f(const char *fname, struct mgos_config_InnerOuterZone *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_InnerOuterZone_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_distanceThreshold */
const struct mgos_conf_entry *mgos_config_distanceThreshold_get_schema(void) {
  return &mgos_config_schema_[338];
}

void mgos_config_distanceThreshold_set_defaults(struct mgos_config_distanceThreshold *cfg) {
  cfg->index0 = 1500;
  cfg->index1 = 1500;
  cfg->index2 = 1500;
  cfg->index3 = 1500;
  cfg->index4 = 1500;
  cfg->index5 = 1500;
  cfg->index6 = 1500;
  cfg->index7 = 1500;
  cfg->index8 = 1500;
  cfg->index9 = 1500;
  cfg->index10 = 1500;
  cfg->index11 = 1500;
  cfg->index12 = 1500;
  cfg->index13 = 1500;
  cfg->index14 = 1500;
  cfg->index15 = 1500;
}
bool mgos_config_distanceThreshold_parse_f(const char *fname, struct mgos_config_distanceThreshold *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_distanceThreshold_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config_mindistance */
const struct mgos_conf_entry *mgos_config_mindistance_get_schema(void) {
  return &mgos_config_schema_[355];
}

void mgos_config_mindistance_set_defaults(struct mgos_config_mindistance *cfg) {
  cfg->index0 = 50;
  cfg->index1 = 50;
  cfg->index2 = 50;
  cfg->index3 = 50;
  cfg->index4 = 50;
  cfg->index5 = 50;
  cfg->index6 = 50;
  cfg->index7 = 50;
  cfg->index8 = 50;
  cfg->index9 = 50;
  cfg->index10 = 50;
  cfg->index11 = 50;
  cfg->index12 = 50;
  cfg->index13 = 50;
  cfg->index14 = 50;
  cfg->index15 = 50;
}
bool mgos_config_mindistance_parse_f(const char *fname, struct mgos_config_mindistance *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_mindistance_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* struct mgos_config */
const struct mgos_conf_entry *mgos_config_get_schema(void) {
  return &mgos_config_schema_[0];
}

void mgos_config_set_defaults(struct mgos_config *cfg) {
  mgos_config_debug_set_defaults(&cfg->debug);
  mgos_config_device_set_defaults(&cfg->device);
  mgos_config_sys_set_defaults(&cfg->sys);
  cfg->conf_acl = "*";
  mgos_config_sntp_set_defaults(&cfg->sntp);
  mgos_config_eth_set_defaults(&cfg->eth);
  mgos_config_http_set_defaults(&cfg->http);
  mgos_config_i2c_set_defaults(&cfg->i2c);
  mgos_config_i2c1_set_defaults(&cfg->i2c1);
  mgos_config_mqtt_set_defaults(&cfg->mqtt);
  mgos_config_mqtt1_set_defaults(&cfg->mqtt1);
  mgos_config_update_set_defaults(&cfg->update);
  mgos_config_rpc_set_defaults(&cfg->rpc);
  mgos_config_wifi_set_defaults(&cfg->wifi);
  mgos_config_board_set_defaults(&cfg->board);
  mgos_config_admin_set_defaults(&cfg->admin);
  mgos_config_dwpc_set_defaults(&cfg->dwpc);
  mgos_config_service_set_defaults(&cfg->service);
  mgos_config_diagnostic_set_defaults(&cfg->diagnostic);
  mgos_config_pathzone_set_defaults(&cfg->pathzone);
  mgos_config_InnerOuterZone_set_defaults(&cfg->InnerOuterZone);
  mgos_config_distanceThreshold_set_defaults(&cfg->distanceThreshold);
  mgos_config_mindistance_set_defaults(&cfg->mindistance);
}
bool mgos_config_parse_f(const char *fname, struct mgos_config *cfg) {
  size_t len;
  char *data = cs_read_file(fname, &len);
  if (data == NULL) return false;
  bool res = mgos_config_parse(mg_mk_str_n(data, len), cfg);
  free(data);
  return res;
}

/* Global instance */
struct mgos_config mgos_sys_config;

/* Accessors */

/* debug */
const struct mgos_config_debug *mgos_config_get_debug(const struct mgos_config *cfg) { return &cfg->debug; }

/* debug.udp_log_addr */
const char * mgos_config_get_debug_udp_log_addr(const struct mgos_config *cfg) { return cfg->debug.udp_log_addr; }
const char * mgos_config_get_default_debug_udp_log_addr(void) { return NULL; }
void mgos_config_set_debug_udp_log_addr(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->debug.udp_log_addr, v); }

/* debug.udp_log_level */
int mgos_config_get_debug_udp_log_level(const struct mgos_config *cfg) { return cfg->debug.udp_log_level; }
int mgos_config_get_default_debug_udp_log_level(void) { return 3; }
void mgos_config_set_debug_udp_log_level(struct mgos_config *cfg, int v) { cfg->debug.udp_log_level = v; }

/* debug.mbedtls_level */
int mgos_config_get_debug_mbedtls_level(const struct mgos_config *cfg) { return cfg->debug.mbedtls_level; }
int mgos_config_get_default_debug_mbedtls_level(void) { return 1; }
void mgos_config_set_debug_mbedtls_level(struct mgos_config *cfg, int v) { cfg->debug.mbedtls_level = v; }

/* debug.level */
int mgos_config_get_debug_level(const struct mgos_config *cfg) { return cfg->debug.level; }
int mgos_config_get_default_debug_level(void) { return 2; }
void mgos_config_set_debug_level(struct mgos_config *cfg, int v) { cfg->debug.level = v; }

/* debug.file_level */
const char * mgos_config_get_debug_file_level(const struct mgos_config *cfg) { return cfg->debug.file_level; }
const char * mgos_config_get_default_debug_file_level(void) { return NULL; }
void mgos_config_set_debug_file_level(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->debug.file_level, v); }

/* debug.event_level */
int mgos_config_get_debug_event_level(const struct mgos_config *cfg) { return cfg->debug.event_level; }
int mgos_config_get_default_debug_event_level(void) { return 2; }
void mgos_config_set_debug_event_level(struct mgos_config *cfg, int v) { cfg->debug.event_level = v; }

/* debug.stdout_uart */
int mgos_config_get_debug_stdout_uart(const struct mgos_config *cfg) { return cfg->debug.stdout_uart; }
int mgos_config_get_default_debug_stdout_uart(void) { return 0; }
void mgos_config_set_debug_stdout_uart(struct mgos_config *cfg, int v) { cfg->debug.stdout_uart = v; }

/* debug.stderr_uart */
int mgos_config_get_debug_stderr_uart(const struct mgos_config *cfg) { return cfg->debug.stderr_uart; }
int mgos_config_get_default_debug_stderr_uart(void) { return 0; }
void mgos_config_set_debug_stderr_uart(struct mgos_config *cfg, int v) { cfg->debug.stderr_uart = v; }

/* debug.factory_reset_gpio */
int mgos_config_get_debug_factory_reset_gpio(const struct mgos_config *cfg) { return cfg->debug.factory_reset_gpio; }
int mgos_config_get_default_debug_factory_reset_gpio(void) { return -1; }
void mgos_config_set_debug_factory_reset_gpio(struct mgos_config *cfg, int v) { cfg->debug.factory_reset_gpio = v; }

/* debug.mg_mgr_hexdump_file */
const char * mgos_config_get_debug_mg_mgr_hexdump_file(const struct mgos_config *cfg) { return cfg->debug.mg_mgr_hexdump_file; }
const char * mgos_config_get_default_debug_mg_mgr_hexdump_file(void) { return NULL; }
void mgos_config_set_debug_mg_mgr_hexdump_file(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->debug.mg_mgr_hexdump_file, v); }

/* debug.stdout_topic */
const char * mgos_config_get_debug_stdout_topic(const struct mgos_config *cfg) { return cfg->debug.stdout_topic; }
const char * mgos_config_get_default_debug_stdout_topic(void) { return NULL; }
void mgos_config_set_debug_stdout_topic(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->debug.stdout_topic, v); }

/* debug.stderr_topic */
const char * mgos_config_get_debug_stderr_topic(const struct mgos_config *cfg) { return cfg->debug.stderr_topic; }
const char * mgos_config_get_default_debug_stderr_topic(void) { return NULL; }
void mgos_config_set_debug_stderr_topic(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->debug.stderr_topic, v); }

/* device */
const struct mgos_config_device *mgos_config_get_device(const struct mgos_config *cfg) { return &cfg->device; }

/* device.id */
const char * mgos_config_get_device_id(const struct mgos_config *cfg) { return cfg->device.id; }
const char * mgos_config_get_default_device_id(void) { return "esp32_??????"; }
void mgos_config_set_device_id(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->device.id, v); }

/* device.license */
const char * mgos_config_get_device_license(const struct mgos_config *cfg) { return cfg->device.license; }
const char * mgos_config_get_default_device_license(void) { return NULL; }
void mgos_config_set_device_license(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->device.license, v); }

/* device.mac */
const char * mgos_config_get_device_mac(const struct mgos_config *cfg) { return cfg->device.mac; }
const char * mgos_config_get_default_device_mac(void) { return NULL; }
void mgos_config_set_device_mac(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->device.mac, v); }

/* device.public_key */
const char * mgos_config_get_device_public_key(const struct mgos_config *cfg) { return cfg->device.public_key; }
const char * mgos_config_get_default_device_public_key(void) { return NULL; }
void mgos_config_set_device_public_key(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->device.public_key, v); }

/* device.sn */
const char * mgos_config_get_device_sn(const struct mgos_config *cfg) { return cfg->device.sn; }
const char * mgos_config_get_default_device_sn(void) { return NULL; }
void mgos_config_set_device_sn(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->device.sn, v); }

/* device.location */
const struct mgos_config_device_location *mgos_config_get_device_location(const struct mgos_config *cfg) { return &cfg->device.location; }

/* device.location.lat */
double mgos_config_get_device_location_lat(const struct mgos_config *cfg) { return cfg->device.location.lat; }
double mgos_config_get_default_device_location_lat(void) { return 999.0; }
void mgos_config_set_device_location_lat(struct mgos_config *cfg, double v) { cfg->device.location.lat = v; }

/* device.location.lon */
double mgos_config_get_device_location_lon(const struct mgos_config *cfg) { return cfg->device.location.lon; }
double mgos_config_get_default_device_location_lon(void) { return 999.0; }
void mgos_config_set_device_location_lon(struct mgos_config *cfg, double v) { cfg->device.location.lon = v; }

/* sys */
const struct mgos_config_sys *mgos_config_get_sys(const struct mgos_config *cfg) { return &cfg->sys; }

/* sys.tz_spec */
const char * mgos_config_get_sys_tz_spec(const struct mgos_config *cfg) { return cfg->sys.tz_spec; }
const char * mgos_config_get_default_sys_tz_spec(void) { return NULL; }
void mgos_config_set_sys_tz_spec(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->sys.tz_spec, v); }

/* sys.wdt_timeout */
int mgos_config_get_sys_wdt_timeout(const struct mgos_config *cfg) { return cfg->sys.wdt_timeout; }
int mgos_config_get_default_sys_wdt_timeout(void) { return 30; }
void mgos_config_set_sys_wdt_timeout(struct mgos_config *cfg, int v) { cfg->sys.wdt_timeout = v; }

/* sys.pref_ota_lib */
const char * mgos_config_get_sys_pref_ota_lib(const struct mgos_config *cfg) { return cfg->sys.pref_ota_lib; }
const char * mgos_config_get_default_sys_pref_ota_lib(void) { return NULL; }
void mgos_config_set_sys_pref_ota_lib(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->sys.pref_ota_lib, v); }

/* conf_acl */
const char * mgos_config_get_conf_acl(const struct mgos_config *cfg) { return cfg->conf_acl; }
const char * mgos_config_get_default_conf_acl(void) { return "*"; }
void mgos_config_set_conf_acl(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->conf_acl, v); }

/* sntp */
const struct mgos_config_sntp *mgos_config_get_sntp(const struct mgos_config *cfg) { return &cfg->sntp; }

/* sntp.enable */
int mgos_config_get_sntp_enable(const struct mgos_config *cfg) { return cfg->sntp.enable; }
int mgos_config_get_default_sntp_enable(void) { return true; }
void mgos_config_set_sntp_enable(struct mgos_config *cfg, int v) { cfg->sntp.enable = v; }

/* sntp.server */
const char * mgos_config_get_sntp_server(const struct mgos_config *cfg) { return cfg->sntp.server; }
const char * mgos_config_get_default_sntp_server(void) { return "time.google.com"; }
void mgos_config_set_sntp_server(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->sntp.server, v); }

/* sntp.retry_min */
int mgos_config_get_sntp_retry_min(const struct mgos_config *cfg) { return cfg->sntp.retry_min; }
int mgos_config_get_default_sntp_retry_min(void) { return 1; }
void mgos_config_set_sntp_retry_min(struct mgos_config *cfg, int v) { cfg->sntp.retry_min = v; }

/* sntp.retry_max */
int mgos_config_get_sntp_retry_max(const struct mgos_config *cfg) { return cfg->sntp.retry_max; }
int mgos_config_get_default_sntp_retry_max(void) { return 30; }
void mgos_config_set_sntp_retry_max(struct mgos_config *cfg, int v) { cfg->sntp.retry_max = v; }

/* sntp.update_interval */
int mgos_config_get_sntp_update_interval(const struct mgos_config *cfg) { return cfg->sntp.update_interval; }
int mgos_config_get_default_sntp_update_interval(void) { return 7200; }
void mgos_config_set_sntp_update_interval(struct mgos_config *cfg, int v) { cfg->sntp.update_interval = v; }

/* eth */
const struct mgos_config_eth *mgos_config_get_eth(const struct mgos_config *cfg) { return &cfg->eth; }

/* eth.enable */
int mgos_config_get_eth_enable(const struct mgos_config *cfg) { return cfg->eth.enable; }
int mgos_config_get_default_eth_enable(void) { return false; }
void mgos_config_set_eth_enable(struct mgos_config *cfg, int v) { cfg->eth.enable = v; }

/* eth.phy_addr */
int mgos_config_get_eth_phy_addr(const struct mgos_config *cfg) { return cfg->eth.phy_addr; }
int mgos_config_get_default_eth_phy_addr(void) { return 0; }
void mgos_config_set_eth_phy_addr(struct mgos_config *cfg, int v) { cfg->eth.phy_addr = v; }

/* eth.ip */
const char * mgos_config_get_eth_ip(const struct mgos_config *cfg) { return cfg->eth.ip; }
const char * mgos_config_get_default_eth_ip(void) { return NULL; }
void mgos_config_set_eth_ip(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->eth.ip, v); }

/* eth.netmask */
const char * mgos_config_get_eth_netmask(const struct mgos_config *cfg) { return cfg->eth.netmask; }
const char * mgos_config_get_default_eth_netmask(void) { return NULL; }
void mgos_config_set_eth_netmask(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->eth.netmask, v); }

/* eth.gw */
const char * mgos_config_get_eth_gw(const struct mgos_config *cfg) { return cfg->eth.gw; }
const char * mgos_config_get_default_eth_gw(void) { return NULL; }
void mgos_config_set_eth_gw(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->eth.gw, v); }

/* eth.nameserver */
const char * mgos_config_get_eth_nameserver(const struct mgos_config *cfg) { return cfg->eth.nameserver; }
const char * mgos_config_get_default_eth_nameserver(void) { return NULL; }
void mgos_config_set_eth_nameserver(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->eth.nameserver, v); }

/* eth.dhcp_hostname */
const char * mgos_config_get_eth_dhcp_hostname(const struct mgos_config *cfg) { return cfg->eth.dhcp_hostname; }
const char * mgos_config_get_default_eth_dhcp_hostname(void) { return NULL; }
void mgos_config_set_eth_dhcp_hostname(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->eth.dhcp_hostname, v); }

/* eth.clk_mode */
int mgos_config_get_eth_clk_mode(const struct mgos_config *cfg) { return cfg->eth.clk_mode; }
int mgos_config_get_default_eth_clk_mode(void) { return 3; }
void mgos_config_set_eth_clk_mode(struct mgos_config *cfg, int v) { cfg->eth.clk_mode = v; }

/* eth.mdc_gpio */
int mgos_config_get_eth_mdc_gpio(const struct mgos_config *cfg) { return cfg->eth.mdc_gpio; }
int mgos_config_get_default_eth_mdc_gpio(void) { return 23; }
void mgos_config_set_eth_mdc_gpio(struct mgos_config *cfg, int v) { cfg->eth.mdc_gpio = v; }

/* eth.mdio_gpio */
int mgos_config_get_eth_mdio_gpio(const struct mgos_config *cfg) { return cfg->eth.mdio_gpio; }
int mgos_config_get_default_eth_mdio_gpio(void) { return 18; }
void mgos_config_set_eth_mdio_gpio(struct mgos_config *cfg, int v) { cfg->eth.mdio_gpio = v; }

/* eth.phy_pwr_gpio */
int mgos_config_get_eth_phy_pwr_gpio(const struct mgos_config *cfg) { return cfg->eth.phy_pwr_gpio; }
int mgos_config_get_default_eth_phy_pwr_gpio(void) { return -1; }
void mgos_config_set_eth_phy_pwr_gpio(struct mgos_config *cfg, int v) { cfg->eth.phy_pwr_gpio = v; }

/* http */
const struct mgos_config_http *mgos_config_get_http(const struct mgos_config *cfg) { return &cfg->http; }

/* http.enable */
int mgos_config_get_http_enable(const struct mgos_config *cfg) { return cfg->http.enable; }
int mgos_config_get_default_http_enable(void) { return true; }
void mgos_config_set_http_enable(struct mgos_config *cfg, int v) { cfg->http.enable = v; }

/* http.listen_addr */
const char * mgos_config_get_http_listen_addr(const struct mgos_config *cfg) { return cfg->http.listen_addr; }
const char * mgos_config_get_default_http_listen_addr(void) { return "80"; }
void mgos_config_set_http_listen_addr(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->http.listen_addr, v); }

/* http.document_root */
const char * mgos_config_get_http_document_root(const struct mgos_config *cfg) { return cfg->http.document_root; }
const char * mgos_config_get_default_http_document_root(void) { return "/"; }
void mgos_config_set_http_document_root(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->http.document_root, v); }

/* http.index_files */
const char * mgos_config_get_http_index_files(const struct mgos_config *cfg) { return cfg->http.index_files; }
const char * mgos_config_get_default_http_index_files(void) { return NULL; }
void mgos_config_set_http_index_files(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->http.index_files, v); }

/* http.ssl_cert */
const char * mgos_config_get_http_ssl_cert(const struct mgos_config *cfg) { return cfg->http.ssl_cert; }
const char * mgos_config_get_default_http_ssl_cert(void) { return NULL; }
void mgos_config_set_http_ssl_cert(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->http.ssl_cert, v); }

/* http.ssl_key */
const char * mgos_config_get_http_ssl_key(const struct mgos_config *cfg) { return cfg->http.ssl_key; }
const char * mgos_config_get_default_http_ssl_key(void) { return NULL; }
void mgos_config_set_http_ssl_key(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->http.ssl_key, v); }

/* http.ssl_ca_cert */
const char * mgos_config_get_http_ssl_ca_cert(const struct mgos_config *cfg) { return cfg->http.ssl_ca_cert; }
const char * mgos_config_get_default_http_ssl_ca_cert(void) { return NULL; }
void mgos_config_set_http_ssl_ca_cert(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->http.ssl_ca_cert, v); }

/* http.upload_acl */
const char * mgos_config_get_http_upload_acl(const struct mgos_config *cfg) { return cfg->http.upload_acl; }
const char * mgos_config_get_default_http_upload_acl(void) { return "*"; }
void mgos_config_set_http_upload_acl(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->http.upload_acl, v); }

/* http.hidden_files */
const char * mgos_config_get_http_hidden_files(const struct mgos_config *cfg) { return cfg->http.hidden_files; }
const char * mgos_config_get_default_http_hidden_files(void) { return NULL; }
void mgos_config_set_http_hidden_files(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->http.hidden_files, v); }

/* http.auth_domain */
const char * mgos_config_get_http_auth_domain(const struct mgos_config *cfg) { return cfg->http.auth_domain; }
const char * mgos_config_get_default_http_auth_domain(void) { return NULL; }
void mgos_config_set_http_auth_domain(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->http.auth_domain, v); }

/* http.auth_file */
const char * mgos_config_get_http_auth_file(const struct mgos_config *cfg) { return cfg->http.auth_file; }
const char * mgos_config_get_default_http_auth_file(void) { return NULL; }
void mgos_config_set_http_auth_file(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->http.auth_file, v); }

/* http.auth_algo */
int mgos_config_get_http_auth_algo(const struct mgos_config *cfg) { return cfg->http.auth_algo; }
int mgos_config_get_default_http_auth_algo(void) { return 0; }
void mgos_config_set_http_auth_algo(struct mgos_config *cfg, int v) { cfg->http.auth_algo = v; }

/* http.extra_headers */
const char * mgos_config_get_http_extra_headers(const struct mgos_config *cfg) { return cfg->http.extra_headers; }
const char * mgos_config_get_default_http_extra_headers(void) { return NULL; }
void mgos_config_set_http_extra_headers(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->http.extra_headers, v); }

/* i2c */
const struct mgos_config_i2c *mgos_config_get_i2c(const struct mgos_config *cfg) { return &cfg->i2c; }

/* i2c.unit_no */
int mgos_config_get_i2c_unit_no(const struct mgos_config *cfg) { return cfg->i2c.unit_no; }
int mgos_config_get_default_i2c_unit_no(void) { return 0; }
void mgos_config_set_i2c_unit_no(struct mgos_config *cfg, int v) { cfg->i2c.unit_no = v; }

/* i2c.enable */
int mgos_config_get_i2c_enable(const struct mgos_config *cfg) { return cfg->i2c.enable; }
int mgos_config_get_default_i2c_enable(void) { return true; }
void mgos_config_set_i2c_enable(struct mgos_config *cfg, int v) { cfg->i2c.enable = v; }

/* i2c.freq */
int mgos_config_get_i2c_freq(const struct mgos_config *cfg) { return cfg->i2c.freq; }
int mgos_config_get_default_i2c_freq(void) { return 400000; }
void mgos_config_set_i2c_freq(struct mgos_config *cfg, int v) { cfg->i2c.freq = v; }

/* i2c.debug */
int mgos_config_get_i2c_debug(const struct mgos_config *cfg) { return cfg->i2c.debug; }
int mgos_config_get_default_i2c_debug(void) { return false; }
void mgos_config_set_i2c_debug(struct mgos_config *cfg, int v) { cfg->i2c.debug = v; }

/* i2c.sda_gpio */
int mgos_config_get_i2c_sda_gpio(const struct mgos_config *cfg) { return cfg->i2c.sda_gpio; }
int mgos_config_get_default_i2c_sda_gpio(void) { return 33; }
void mgos_config_set_i2c_sda_gpio(struct mgos_config *cfg, int v) { cfg->i2c.sda_gpio = v; }

/* i2c.scl_gpio */
int mgos_config_get_i2c_scl_gpio(const struct mgos_config *cfg) { return cfg->i2c.scl_gpio; }
int mgos_config_get_default_i2c_scl_gpio(void) { return 32; }
void mgos_config_set_i2c_scl_gpio(struct mgos_config *cfg, int v) { cfg->i2c.scl_gpio = v; }

/* i2c1 */
const struct mgos_config_i2c *mgos_config_get_i2c1(const struct mgos_config *cfg) { return &cfg->i2c1; }

/* i2c1.unit_no */
int mgos_config_get_i2c1_unit_no(const struct mgos_config *cfg) { return cfg->i2c1.unit_no; }
int mgos_config_get_default_i2c1_unit_no(void) { return 1; }
void mgos_config_set_i2c1_unit_no(struct mgos_config *cfg, int v) { cfg->i2c1.unit_no = v; }

/* i2c1.enable */
int mgos_config_get_i2c1_enable(const struct mgos_config *cfg) { return cfg->i2c1.enable; }
int mgos_config_get_default_i2c1_enable(void) { return false; }
void mgos_config_set_i2c1_enable(struct mgos_config *cfg, int v) { cfg->i2c1.enable = v; }

/* i2c1.freq */
int mgos_config_get_i2c1_freq(const struct mgos_config *cfg) { return cfg->i2c1.freq; }
int mgos_config_get_default_i2c1_freq(void) { return 400000; }
void mgos_config_set_i2c1_freq(struct mgos_config *cfg, int v) { cfg->i2c1.freq = v; }

/* i2c1.debug */
int mgos_config_get_i2c1_debug(const struct mgos_config *cfg) { return cfg->i2c1.debug; }
int mgos_config_get_default_i2c1_debug(void) { return false; }
void mgos_config_set_i2c1_debug(struct mgos_config *cfg, int v) { cfg->i2c1.debug = v; }

/* i2c1.sda_gpio */
int mgos_config_get_i2c1_sda_gpio(const struct mgos_config *cfg) { return cfg->i2c1.sda_gpio; }
int mgos_config_get_default_i2c1_sda_gpio(void) { return 22; }
void mgos_config_set_i2c1_sda_gpio(struct mgos_config *cfg, int v) { cfg->i2c1.sda_gpio = v; }

/* i2c1.scl_gpio */
int mgos_config_get_i2c1_scl_gpio(const struct mgos_config *cfg) { return cfg->i2c1.scl_gpio; }
int mgos_config_get_default_i2c1_scl_gpio(void) { return 23; }
void mgos_config_set_i2c1_scl_gpio(struct mgos_config *cfg, int v) { cfg->i2c1.scl_gpio = v; }

/* mqtt */
const struct mgos_config_mqtt *mgos_config_get_mqtt(const struct mgos_config *cfg) { return &cfg->mqtt; }

/* mqtt.enable */
int mgos_config_get_mqtt_enable(const struct mgos_config *cfg) { return cfg->mqtt.enable; }
int mgos_config_get_default_mqtt_enable(void) { return true; }
void mgos_config_set_mqtt_enable(struct mgos_config *cfg, int v) { cfg->mqtt.enable = v; }

/* mqtt.server */
const char * mgos_config_get_mqtt_server(const struct mgos_config *cfg) { return cfg->mqtt.server; }
const char * mgos_config_get_default_mqtt_server(void) { return "test.mosquitto.org"; }
void mgos_config_set_mqtt_server(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.server, v); }

/* mqtt.client_id */
const char * mgos_config_get_mqtt_client_id(const struct mgos_config *cfg) { return cfg->mqtt.client_id; }
const char * mgos_config_get_default_mqtt_client_id(void) { return NULL; }
void mgos_config_set_mqtt_client_id(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.client_id, v); }

/* mqtt.user */
const char * mgos_config_get_mqtt_user(const struct mgos_config *cfg) { return cfg->mqtt.user; }
const char * mgos_config_get_default_mqtt_user(void) { return NULL; }
void mgos_config_set_mqtt_user(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.user, v); }

/* mqtt.pass */
const char * mgos_config_get_mqtt_pass(const struct mgos_config *cfg) { return cfg->mqtt.pass; }
const char * mgos_config_get_default_mqtt_pass(void) { return NULL; }
void mgos_config_set_mqtt_pass(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.pass, v); }

/* mqtt.reconnect_timeout_min */
double mgos_config_get_mqtt_reconnect_timeout_min(const struct mgos_config *cfg) { return cfg->mqtt.reconnect_timeout_min; }
double mgos_config_get_default_mqtt_reconnect_timeout_min(void) { return 2.0; }
void mgos_config_set_mqtt_reconnect_timeout_min(struct mgos_config *cfg, double v) { cfg->mqtt.reconnect_timeout_min = v; }

/* mqtt.reconnect_timeout_max */
double mgos_config_get_mqtt_reconnect_timeout_max(const struct mgos_config *cfg) { return cfg->mqtt.reconnect_timeout_max; }
double mgos_config_get_default_mqtt_reconnect_timeout_max(void) { return 60.0; }
void mgos_config_set_mqtt_reconnect_timeout_max(struct mgos_config *cfg, double v) { cfg->mqtt.reconnect_timeout_max = v; }

/* mqtt.ssl_cert */
const char * mgos_config_get_mqtt_ssl_cert(const struct mgos_config *cfg) { return cfg->mqtt.ssl_cert; }
const char * mgos_config_get_default_mqtt_ssl_cert(void) { return NULL; }
void mgos_config_set_mqtt_ssl_cert(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.ssl_cert, v); }

/* mqtt.ssl_key */
const char * mgos_config_get_mqtt_ssl_key(const struct mgos_config *cfg) { return cfg->mqtt.ssl_key; }
const char * mgos_config_get_default_mqtt_ssl_key(void) { return NULL; }
void mgos_config_set_mqtt_ssl_key(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.ssl_key, v); }

/* mqtt.ssl_ca_cert */
const char * mgos_config_get_mqtt_ssl_ca_cert(const struct mgos_config *cfg) { return cfg->mqtt.ssl_ca_cert; }
const char * mgos_config_get_default_mqtt_ssl_ca_cert(void) { return NULL; }
void mgos_config_set_mqtt_ssl_ca_cert(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.ssl_ca_cert, v); }

/* mqtt.ssl_cipher_suites */
const char * mgos_config_get_mqtt_ssl_cipher_suites(const struct mgos_config *cfg) { return cfg->mqtt.ssl_cipher_suites; }
const char * mgos_config_get_default_mqtt_ssl_cipher_suites(void) { return NULL; }
void mgos_config_set_mqtt_ssl_cipher_suites(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.ssl_cipher_suites, v); }

/* mqtt.ssl_psk_identity */
const char * mgos_config_get_mqtt_ssl_psk_identity(const struct mgos_config *cfg) { return cfg->mqtt.ssl_psk_identity; }
const char * mgos_config_get_default_mqtt_ssl_psk_identity(void) { return NULL; }
void mgos_config_set_mqtt_ssl_psk_identity(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.ssl_psk_identity, v); }

/* mqtt.ssl_psk_key */
const char * mgos_config_get_mqtt_ssl_psk_key(const struct mgos_config *cfg) { return cfg->mqtt.ssl_psk_key; }
const char * mgos_config_get_default_mqtt_ssl_psk_key(void) { return NULL; }
void mgos_config_set_mqtt_ssl_psk_key(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.ssl_psk_key, v); }

/* mqtt.clean_session */
int mgos_config_get_mqtt_clean_session(const struct mgos_config *cfg) { return cfg->mqtt.clean_session; }
int mgos_config_get_default_mqtt_clean_session(void) { return true; }
void mgos_config_set_mqtt_clean_session(struct mgos_config *cfg, int v) { cfg->mqtt.clean_session = v; }

/* mqtt.keep_alive */
int mgos_config_get_mqtt_keep_alive(const struct mgos_config *cfg) { return cfg->mqtt.keep_alive; }
int mgos_config_get_default_mqtt_keep_alive(void) { return 60; }
void mgos_config_set_mqtt_keep_alive(struct mgos_config *cfg, int v) { cfg->mqtt.keep_alive = v; }

/* mqtt.will_topic */
const char * mgos_config_get_mqtt_will_topic(const struct mgos_config *cfg) { return cfg->mqtt.will_topic; }
const char * mgos_config_get_default_mqtt_will_topic(void) { return NULL; }
void mgos_config_set_mqtt_will_topic(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.will_topic, v); }

/* mqtt.will_message */
const char * mgos_config_get_mqtt_will_message(const struct mgos_config *cfg) { return cfg->mqtt.will_message; }
const char * mgos_config_get_default_mqtt_will_message(void) { return NULL; }
void mgos_config_set_mqtt_will_message(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.will_message, v); }

/* mqtt.will_retain */
int mgos_config_get_mqtt_will_retain(const struct mgos_config *cfg) { return cfg->mqtt.will_retain; }
int mgos_config_get_default_mqtt_will_retain(void) { return false; }
void mgos_config_set_mqtt_will_retain(struct mgos_config *cfg, int v) { cfg->mqtt.will_retain = v; }

/* mqtt.max_qos */
int mgos_config_get_mqtt_max_qos(const struct mgos_config *cfg) { return cfg->mqtt.max_qos; }
int mgos_config_get_default_mqtt_max_qos(void) { return 0; }
void mgos_config_set_mqtt_max_qos(struct mgos_config *cfg, int v) { cfg->mqtt.max_qos = v; }

/* mqtt.recv_mbuf_limit */
int mgos_config_get_mqtt_recv_mbuf_limit(const struct mgos_config *cfg) { return cfg->mqtt.recv_mbuf_limit; }
int mgos_config_get_default_mqtt_recv_mbuf_limit(void) { return 3072; }
void mgos_config_set_mqtt_recv_mbuf_limit(struct mgos_config *cfg, int v) { cfg->mqtt.recv_mbuf_limit = v; }

/* mqtt.require_time */
int mgos_config_get_mqtt_require_time(const struct mgos_config *cfg) { return cfg->mqtt.require_time; }
int mgos_config_get_default_mqtt_require_time(void) { return false; }
void mgos_config_set_mqtt_require_time(struct mgos_config *cfg, int v) { cfg->mqtt.require_time = v; }

/* mqtt.cloud_events */
int mgos_config_get_mqtt_cloud_events(const struct mgos_config *cfg) { return cfg->mqtt.cloud_events; }
int mgos_config_get_default_mqtt_cloud_events(void) { return true; }
void mgos_config_set_mqtt_cloud_events(struct mgos_config *cfg, int v) { cfg->mqtt.cloud_events = v; }

/* mqtt.max_queue_length */
int mgos_config_get_mqtt_max_queue_length(const struct mgos_config *cfg) { return cfg->mqtt.max_queue_length; }
int mgos_config_get_default_mqtt_max_queue_length(void) { return 5; }
void mgos_config_set_mqtt_max_queue_length(struct mgos_config *cfg, int v) { cfg->mqtt.max_queue_length = v; }

/* mqtt.ws_enable */
int mgos_config_get_mqtt_ws_enable(const struct mgos_config *cfg) { return cfg->mqtt.ws_enable; }
int mgos_config_get_default_mqtt_ws_enable(void) { return false; }
void mgos_config_set_mqtt_ws_enable(struct mgos_config *cfg, int v) { cfg->mqtt.ws_enable = v; }

/* mqtt.ws_path */
const char * mgos_config_get_mqtt_ws_path(const struct mgos_config *cfg) { return cfg->mqtt.ws_path; }
const char * mgos_config_get_default_mqtt_ws_path(void) { return "/mqtt"; }
void mgos_config_set_mqtt_ws_path(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.ws_path, v); }

/* mqtt.pub */
const char * mgos_config_get_mqtt_pub(const struct mgos_config *cfg) { return cfg->mqtt.pub; }
const char * mgos_config_get_default_mqtt_pub(void) { return "/dwpc/1"; }
void mgos_config_set_mqtt_pub(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.pub, v); }

/* mqtt.sub */
const char * mgos_config_get_mqtt_sub(const struct mgos_config *cfg) { return cfg->mqtt.sub; }
const char * mgos_config_get_default_mqtt_sub(void) { return NULL; }
void mgos_config_set_mqtt_sub(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.sub, v); }

/* mqtt.device_health */
const char * mgos_config_get_mqtt_device_health(const struct mgos_config *cfg) { return cfg->mqtt.device_health; }
const char * mgos_config_get_default_mqtt_device_health(void) { return "/health/1"; }
void mgos_config_set_mqtt_device_health(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.device_health, v); }

/* mqtt.status */
const char * mgos_config_get_mqtt_status(const struct mgos_config *cfg) { return cfg->mqtt.status; }
const char * mgos_config_get_default_mqtt_status(void) { return NULL; }
void mgos_config_set_mqtt_status(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt.status, v); }

/* mqtt1 */
const struct mgos_config_mqtt *mgos_config_get_mqtt1(const struct mgos_config *cfg) { return &cfg->mqtt1; }

/* mqtt1.enable */
int mgos_config_get_mqtt1_enable(const struct mgos_config *cfg) { return cfg->mqtt1.enable; }
int mgos_config_get_default_mqtt1_enable(void) { return true; }
void mgos_config_set_mqtt1_enable(struct mgos_config *cfg, int v) { cfg->mqtt1.enable = v; }

/* mqtt1.server */
const char * mgos_config_get_mqtt1_server(const struct mgos_config *cfg) { return cfg->mqtt1.server; }
const char * mgos_config_get_default_mqtt1_server(void) { return "test.mosquitto.org"; }
void mgos_config_set_mqtt1_server(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.server, v); }

/* mqtt1.client_id */
const char * mgos_config_get_mqtt1_client_id(const struct mgos_config *cfg) { return cfg->mqtt1.client_id; }
const char * mgos_config_get_default_mqtt1_client_id(void) { return NULL; }
void mgos_config_set_mqtt1_client_id(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.client_id, v); }

/* mqtt1.user */
const char * mgos_config_get_mqtt1_user(const struct mgos_config *cfg) { return cfg->mqtt1.user; }
const char * mgos_config_get_default_mqtt1_user(void) { return NULL; }
void mgos_config_set_mqtt1_user(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.user, v); }

/* mqtt1.pass */
const char * mgos_config_get_mqtt1_pass(const struct mgos_config *cfg) { return cfg->mqtt1.pass; }
const char * mgos_config_get_default_mqtt1_pass(void) { return NULL; }
void mgos_config_set_mqtt1_pass(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.pass, v); }

/* mqtt1.reconnect_timeout_min */
double mgos_config_get_mqtt1_reconnect_timeout_min(const struct mgos_config *cfg) { return cfg->mqtt1.reconnect_timeout_min; }
double mgos_config_get_default_mqtt1_reconnect_timeout_min(void) { return 2.0; }
void mgos_config_set_mqtt1_reconnect_timeout_min(struct mgos_config *cfg, double v) { cfg->mqtt1.reconnect_timeout_min = v; }

/* mqtt1.reconnect_timeout_max */
double mgos_config_get_mqtt1_reconnect_timeout_max(const struct mgos_config *cfg) { return cfg->mqtt1.reconnect_timeout_max; }
double mgos_config_get_default_mqtt1_reconnect_timeout_max(void) { return 60.0; }
void mgos_config_set_mqtt1_reconnect_timeout_max(struct mgos_config *cfg, double v) { cfg->mqtt1.reconnect_timeout_max = v; }

/* mqtt1.ssl_cert */
const char * mgos_config_get_mqtt1_ssl_cert(const struct mgos_config *cfg) { return cfg->mqtt1.ssl_cert; }
const char * mgos_config_get_default_mqtt1_ssl_cert(void) { return NULL; }
void mgos_config_set_mqtt1_ssl_cert(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.ssl_cert, v); }

/* mqtt1.ssl_key */
const char * mgos_config_get_mqtt1_ssl_key(const struct mgos_config *cfg) { return cfg->mqtt1.ssl_key; }
const char * mgos_config_get_default_mqtt1_ssl_key(void) { return NULL; }
void mgos_config_set_mqtt1_ssl_key(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.ssl_key, v); }

/* mqtt1.ssl_ca_cert */
const char * mgos_config_get_mqtt1_ssl_ca_cert(const struct mgos_config *cfg) { return cfg->mqtt1.ssl_ca_cert; }
const char * mgos_config_get_default_mqtt1_ssl_ca_cert(void) { return NULL; }
void mgos_config_set_mqtt1_ssl_ca_cert(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.ssl_ca_cert, v); }

/* mqtt1.ssl_cipher_suites */
const char * mgos_config_get_mqtt1_ssl_cipher_suites(const struct mgos_config *cfg) { return cfg->mqtt1.ssl_cipher_suites; }
const char * mgos_config_get_default_mqtt1_ssl_cipher_suites(void) { return NULL; }
void mgos_config_set_mqtt1_ssl_cipher_suites(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.ssl_cipher_suites, v); }

/* mqtt1.ssl_psk_identity */
const char * mgos_config_get_mqtt1_ssl_psk_identity(const struct mgos_config *cfg) { return cfg->mqtt1.ssl_psk_identity; }
const char * mgos_config_get_default_mqtt1_ssl_psk_identity(void) { return NULL; }
void mgos_config_set_mqtt1_ssl_psk_identity(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.ssl_psk_identity, v); }

/* mqtt1.ssl_psk_key */
const char * mgos_config_get_mqtt1_ssl_psk_key(const struct mgos_config *cfg) { return cfg->mqtt1.ssl_psk_key; }
const char * mgos_config_get_default_mqtt1_ssl_psk_key(void) { return NULL; }
void mgos_config_set_mqtt1_ssl_psk_key(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.ssl_psk_key, v); }

/* mqtt1.clean_session */
int mgos_config_get_mqtt1_clean_session(const struct mgos_config *cfg) { return cfg->mqtt1.clean_session; }
int mgos_config_get_default_mqtt1_clean_session(void) { return true; }
void mgos_config_set_mqtt1_clean_session(struct mgos_config *cfg, int v) { cfg->mqtt1.clean_session = v; }

/* mqtt1.keep_alive */
int mgos_config_get_mqtt1_keep_alive(const struct mgos_config *cfg) { return cfg->mqtt1.keep_alive; }
int mgos_config_get_default_mqtt1_keep_alive(void) { return 60; }
void mgos_config_set_mqtt1_keep_alive(struct mgos_config *cfg, int v) { cfg->mqtt1.keep_alive = v; }

/* mqtt1.will_topic */
const char * mgos_config_get_mqtt1_will_topic(const struct mgos_config *cfg) { return cfg->mqtt1.will_topic; }
const char * mgos_config_get_default_mqtt1_will_topic(void) { return NULL; }
void mgos_config_set_mqtt1_will_topic(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.will_topic, v); }

/* mqtt1.will_message */
const char * mgos_config_get_mqtt1_will_message(const struct mgos_config *cfg) { return cfg->mqtt1.will_message; }
const char * mgos_config_get_default_mqtt1_will_message(void) { return NULL; }
void mgos_config_set_mqtt1_will_message(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.will_message, v); }

/* mqtt1.will_retain */
int mgos_config_get_mqtt1_will_retain(const struct mgos_config *cfg) { return cfg->mqtt1.will_retain; }
int mgos_config_get_default_mqtt1_will_retain(void) { return false; }
void mgos_config_set_mqtt1_will_retain(struct mgos_config *cfg, int v) { cfg->mqtt1.will_retain = v; }

/* mqtt1.max_qos */
int mgos_config_get_mqtt1_max_qos(const struct mgos_config *cfg) { return cfg->mqtt1.max_qos; }
int mgos_config_get_default_mqtt1_max_qos(void) { return 0; }
void mgos_config_set_mqtt1_max_qos(struct mgos_config *cfg, int v) { cfg->mqtt1.max_qos = v; }

/* mqtt1.recv_mbuf_limit */
int mgos_config_get_mqtt1_recv_mbuf_limit(const struct mgos_config *cfg) { return cfg->mqtt1.recv_mbuf_limit; }
int mgos_config_get_default_mqtt1_recv_mbuf_limit(void) { return 3072; }
void mgos_config_set_mqtt1_recv_mbuf_limit(struct mgos_config *cfg, int v) { cfg->mqtt1.recv_mbuf_limit = v; }

/* mqtt1.require_time */
int mgos_config_get_mqtt1_require_time(const struct mgos_config *cfg) { return cfg->mqtt1.require_time; }
int mgos_config_get_default_mqtt1_require_time(void) { return false; }
void mgos_config_set_mqtt1_require_time(struct mgos_config *cfg, int v) { cfg->mqtt1.require_time = v; }

/* mqtt1.cloud_events */
int mgos_config_get_mqtt1_cloud_events(const struct mgos_config *cfg) { return cfg->mqtt1.cloud_events; }
int mgos_config_get_default_mqtt1_cloud_events(void) { return true; }
void mgos_config_set_mqtt1_cloud_events(struct mgos_config *cfg, int v) { cfg->mqtt1.cloud_events = v; }

/* mqtt1.max_queue_length */
int mgos_config_get_mqtt1_max_queue_length(const struct mgos_config *cfg) { return cfg->mqtt1.max_queue_length; }
int mgos_config_get_default_mqtt1_max_queue_length(void) { return 5; }
void mgos_config_set_mqtt1_max_queue_length(struct mgos_config *cfg, int v) { cfg->mqtt1.max_queue_length = v; }

/* mqtt1.ws_enable */
int mgos_config_get_mqtt1_ws_enable(const struct mgos_config *cfg) { return cfg->mqtt1.ws_enable; }
int mgos_config_get_default_mqtt1_ws_enable(void) { return false; }
void mgos_config_set_mqtt1_ws_enable(struct mgos_config *cfg, int v) { cfg->mqtt1.ws_enable = v; }

/* mqtt1.ws_path */
const char * mgos_config_get_mqtt1_ws_path(const struct mgos_config *cfg) { return cfg->mqtt1.ws_path; }
const char * mgos_config_get_default_mqtt1_ws_path(void) { return "/mqtt"; }
void mgos_config_set_mqtt1_ws_path(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.ws_path, v); }

/* mqtt1.pub */
const char * mgos_config_get_mqtt1_pub(const struct mgos_config *cfg) { return cfg->mqtt1.pub; }
const char * mgos_config_get_default_mqtt1_pub(void) { return "/dwpc/1"; }
void mgos_config_set_mqtt1_pub(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.pub, v); }

/* mqtt1.sub */
const char * mgos_config_get_mqtt1_sub(const struct mgos_config *cfg) { return cfg->mqtt1.sub; }
const char * mgos_config_get_default_mqtt1_sub(void) { return NULL; }
void mgos_config_set_mqtt1_sub(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.sub, v); }

/* mqtt1.device_health */
const char * mgos_config_get_mqtt1_device_health(const struct mgos_config *cfg) { return cfg->mqtt1.device_health; }
const char * mgos_config_get_default_mqtt1_device_health(void) { return "/health/1"; }
void mgos_config_set_mqtt1_device_health(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.device_health, v); }

/* mqtt1.status */
const char * mgos_config_get_mqtt1_status(const struct mgos_config *cfg) { return cfg->mqtt1.status; }
const char * mgos_config_get_default_mqtt1_status(void) { return NULL; }
void mgos_config_set_mqtt1_status(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->mqtt1.status, v); }

/* update */
const struct mgos_config_update *mgos_config_get_update(const struct mgos_config *cfg) { return &cfg->update; }

/* update.timeout */
int mgos_config_get_update_timeout(const struct mgos_config *cfg) { return cfg->update.timeout; }
int mgos_config_get_default_update_timeout(void) { return 600; }
void mgos_config_set_update_timeout(struct mgos_config *cfg, int v) { cfg->update.timeout = v; }

/* update.commit_timeout */
int mgos_config_get_update_commit_timeout(const struct mgos_config *cfg) { return cfg->update.commit_timeout; }
int mgos_config_get_default_update_commit_timeout(void) { return 0; }
void mgos_config_set_update_commit_timeout(struct mgos_config *cfg, int v) { cfg->update.commit_timeout = v; }

/* update.key0 */
const char * mgos_config_get_update_key0(const struct mgos_config *cfg) { return cfg->update.key0; }
const char * mgos_config_get_default_update_key0(void) { return NULL; }
void mgos_config_set_update_key0(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->update.key0, v); }

/* update.key1 */
const char * mgos_config_get_update_key1(const struct mgos_config *cfg) { return cfg->update.key1; }
const char * mgos_config_get_default_update_key1(void) { return NULL; }
void mgos_config_set_update_key1(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->update.key1, v); }

/* update.key2 */
const char * mgos_config_get_update_key2(const struct mgos_config *cfg) { return cfg->update.key2; }
const char * mgos_config_get_default_update_key2(void) { return NULL; }
void mgos_config_set_update_key2(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->update.key2, v); }

/* update.key3 */
const char * mgos_config_get_update_key3(const struct mgos_config *cfg) { return cfg->update.key3; }
const char * mgos_config_get_default_update_key3(void) { return NULL; }
void mgos_config_set_update_key3(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->update.key3, v); }

/* update.key4 */
const char * mgos_config_get_update_key4(const struct mgos_config *cfg) { return cfg->update.key4; }
const char * mgos_config_get_default_update_key4(void) { return NULL; }
void mgos_config_set_update_key4(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->update.key4, v); }

/* update.key5 */
const char * mgos_config_get_update_key5(const struct mgos_config *cfg) { return cfg->update.key5; }
const char * mgos_config_get_default_update_key5(void) { return NULL; }
void mgos_config_set_update_key5(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->update.key5, v); }

/* update.key6 */
const char * mgos_config_get_update_key6(const struct mgos_config *cfg) { return cfg->update.key6; }
const char * mgos_config_get_default_update_key6(void) { return NULL; }
void mgos_config_set_update_key6(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->update.key6, v); }

/* update.key7 */
const char * mgos_config_get_update_key7(const struct mgos_config *cfg) { return cfg->update.key7; }
const char * mgos_config_get_default_update_key7(void) { return NULL; }
void mgos_config_set_update_key7(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->update.key7, v); }

/* update.sig_req_mask */
int mgos_config_get_update_sig_req_mask(const struct mgos_config *cfg) { return cfg->update.sig_req_mask; }
int mgos_config_get_default_update_sig_req_mask(void) { return -1; }
void mgos_config_set_update_sig_req_mask(struct mgos_config *cfg, int v) { cfg->update.sig_req_mask = v; }

/* update.url */
const char * mgos_config_get_update_url(const struct mgos_config *cfg) { return cfg->update.url; }
const char * mgos_config_get_default_update_url(void) { return NULL; }
void mgos_config_set_update_url(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->update.url, v); }

/* update.interval */
int mgos_config_get_update_interval(const struct mgos_config *cfg) { return cfg->update.interval; }
int mgos_config_get_default_update_interval(void) { return 0; }
void mgos_config_set_update_interval(struct mgos_config *cfg, int v) { cfg->update.interval = v; }

/* update.extra_http_headers */
const char * mgos_config_get_update_extra_http_headers(const struct mgos_config *cfg) { return cfg->update.extra_http_headers; }
const char * mgos_config_get_default_update_extra_http_headers(void) { return NULL; }
void mgos_config_set_update_extra_http_headers(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->update.extra_http_headers, v); }

/* update.ssl_ca_file */
const char * mgos_config_get_update_ssl_ca_file(const struct mgos_config *cfg) { return cfg->update.ssl_ca_file; }
const char * mgos_config_get_default_update_ssl_ca_file(void) { return "ca.pem"; }
void mgos_config_set_update_ssl_ca_file(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->update.ssl_ca_file, v); }

/* update.ssl_client_cert_file */
const char * mgos_config_get_update_ssl_client_cert_file(const struct mgos_config *cfg) { return cfg->update.ssl_client_cert_file; }
const char * mgos_config_get_default_update_ssl_client_cert_file(void) { return NULL; }
void mgos_config_set_update_ssl_client_cert_file(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->update.ssl_client_cert_file, v); }

/* update.ssl_server_name */
const char * mgos_config_get_update_ssl_server_name(const struct mgos_config *cfg) { return cfg->update.ssl_server_name; }
const char * mgos_config_get_default_update_ssl_server_name(void) { return NULL; }
void mgos_config_set_update_ssl_server_name(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->update.ssl_server_name, v); }

/* update.enable_post */
int mgos_config_get_update_enable_post(const struct mgos_config *cfg) { return cfg->update.enable_post; }
int mgos_config_get_default_update_enable_post(void) { return true; }
void mgos_config_set_update_enable_post(struct mgos_config *cfg, int v) { cfg->update.enable_post = v; }

/* rpc */
const struct mgos_config_rpc *mgos_config_get_rpc(const struct mgos_config *cfg) { return &cfg->rpc; }

/* rpc.enable */
int mgos_config_get_rpc_enable(const struct mgos_config *cfg) { return cfg->rpc.enable; }
int mgos_config_get_default_rpc_enable(void) { return true; }
void mgos_config_set_rpc_enable(struct mgos_config *cfg, int v) { cfg->rpc.enable = v; }

/* rpc.http_enable */
int mgos_config_get_rpc_http_enable(const struct mgos_config *cfg) { return cfg->rpc.http_enable; }
int mgos_config_get_default_rpc_http_enable(void) { return true; }
void mgos_config_set_rpc_http_enable(struct mgos_config *cfg, int v) { cfg->rpc.http_enable = v; }

/* rpc.service_sys_enable */
int mgos_config_get_rpc_service_sys_enable(const struct mgos_config *cfg) { return cfg->rpc.service_sys_enable; }
int mgos_config_get_default_rpc_service_sys_enable(void) { return true; }
void mgos_config_set_rpc_service_sys_enable(struct mgos_config *cfg, int v) { cfg->rpc.service_sys_enable = v; }

/* rpc.max_frame_size */
int mgos_config_get_rpc_max_frame_size(const struct mgos_config *cfg) { return cfg->rpc.max_frame_size; }
int mgos_config_get_default_rpc_max_frame_size(void) { return 4096; }
void mgos_config_set_rpc_max_frame_size(struct mgos_config *cfg, int v) { cfg->rpc.max_frame_size = v; }

/* rpc.max_queue_length */
int mgos_config_get_rpc_max_queue_length(const struct mgos_config *cfg) { return cfg->rpc.max_queue_length; }
int mgos_config_get_default_rpc_max_queue_length(void) { return 25; }
void mgos_config_set_rpc_max_queue_length(struct mgos_config *cfg, int v) { cfg->rpc.max_queue_length = v; }

/* rpc.max_non_persistent_channels */
int mgos_config_get_rpc_max_non_persistent_channels(const struct mgos_config *cfg) { return cfg->rpc.max_non_persistent_channels; }
int mgos_config_get_default_rpc_max_non_persistent_channels(void) { return 20; }
void mgos_config_set_rpc_max_non_persistent_channels(struct mgos_config *cfg, int v) { cfg->rpc.max_non_persistent_channels = v; }

/* rpc.default_out_channel_idle_close_timeout */
int mgos_config_get_rpc_default_out_channel_idle_close_timeout(const struct mgos_config *cfg) { return cfg->rpc.default_out_channel_idle_close_timeout; }
int mgos_config_get_default_rpc_default_out_channel_idle_close_timeout(void) { return 10; }
void mgos_config_set_rpc_default_out_channel_idle_close_timeout(struct mgos_config *cfg, int v) { cfg->rpc.default_out_channel_idle_close_timeout = v; }

/* rpc.acl */
const char * mgos_config_get_rpc_acl(const struct mgos_config *cfg) { return cfg->rpc.acl; }
const char * mgos_config_get_default_rpc_acl(void) { return NULL; }
void mgos_config_set_rpc_acl(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->rpc.acl, v); }

/* rpc.acl_file */
const char * mgos_config_get_rpc_acl_file(const struct mgos_config *cfg) { return cfg->rpc.acl_file; }
const char * mgos_config_get_default_rpc_acl_file(void) { return NULL; }
void mgos_config_set_rpc_acl_file(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->rpc.acl_file, v); }

/* rpc.auth_domain */
const char * mgos_config_get_rpc_auth_domain(const struct mgos_config *cfg) { return cfg->rpc.auth_domain; }
const char * mgos_config_get_default_rpc_auth_domain(void) { return "RPC"; }
void mgos_config_set_rpc_auth_domain(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->rpc.auth_domain, v); }

/* rpc.auth_file */
const char * mgos_config_get_rpc_auth_file(const struct mgos_config *cfg) { return cfg->rpc.auth_file; }
const char * mgos_config_get_default_rpc_auth_file(void) { return NULL; }
void mgos_config_set_rpc_auth_file(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->rpc.auth_file, v); }

/* rpc.auth_algo */
int mgos_config_get_rpc_auth_algo(const struct mgos_config *cfg) { return cfg->rpc.auth_algo; }
int mgos_config_get_default_rpc_auth_algo(void) { return 0; }
void mgos_config_set_rpc_auth_algo(struct mgos_config *cfg, int v) { cfg->rpc.auth_algo = v; }

/* rpc.uart */
const struct mgos_config_rpc_uart *mgos_config_get_rpc_uart(const struct mgos_config *cfg) { return &cfg->rpc.uart; }

/* rpc.uart.uart_no */
int mgos_config_get_rpc_uart_uart_no(const struct mgos_config *cfg) { return cfg->rpc.uart.uart_no; }
int mgos_config_get_default_rpc_uart_uart_no(void) { return 0; }
void mgos_config_set_rpc_uart_uart_no(struct mgos_config *cfg, int v) { cfg->rpc.uart.uart_no = v; }

/* rpc.uart.baud_rate */
int mgos_config_get_rpc_uart_baud_rate(const struct mgos_config *cfg) { return cfg->rpc.uart.baud_rate; }
int mgos_config_get_default_rpc_uart_baud_rate(void) { return 115200; }
void mgos_config_set_rpc_uart_baud_rate(struct mgos_config *cfg, int v) { cfg->rpc.uart.baud_rate = v; }

/* rpc.uart.fc_type */
int mgos_config_get_rpc_uart_fc_type(const struct mgos_config *cfg) { return cfg->rpc.uart.fc_type; }
int mgos_config_get_default_rpc_uart_fc_type(void) { return 2; }
void mgos_config_set_rpc_uart_fc_type(struct mgos_config *cfg, int v) { cfg->rpc.uart.fc_type = v; }

/* rpc.uart.dst */
const char * mgos_config_get_rpc_uart_dst(const struct mgos_config *cfg) { return cfg->rpc.uart.dst; }
const char * mgos_config_get_default_rpc_uart_dst(void) { return NULL; }
void mgos_config_set_rpc_uart_dst(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->rpc.uart.dst, v); }

/* wifi */
const struct mgos_config_wifi *mgos_config_get_wifi(const struct mgos_config *cfg) { return &cfg->wifi; }

/* wifi.ap */
const struct mgos_config_wifi_ap *mgos_config_get_wifi_ap(const struct mgos_config *cfg) { return &cfg->wifi.ap; }

/* wifi.ap.enable */
int mgos_config_get_wifi_ap_enable(const struct mgos_config *cfg) { return cfg->wifi.ap.enable; }
int mgos_config_get_default_wifi_ap_enable(void) { return true; }
void mgos_config_set_wifi_ap_enable(struct mgos_config *cfg, int v) { cfg->wifi.ap.enable = v; }

/* wifi.ap.ssid */
const char * mgos_config_get_wifi_ap_ssid(const struct mgos_config *cfg) { return cfg->wifi.ap.ssid; }
const char * mgos_config_get_default_wifi_ap_ssid(void) { return "DWPC_IP_UART_V2"; }
void mgos_config_set_wifi_ap_ssid(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.ap.ssid, v); }

/* wifi.ap.pass */
const char * mgos_config_get_wifi_ap_pass(const struct mgos_config *cfg) { return cfg->wifi.ap.pass; }
const char * mgos_config_get_default_wifi_ap_pass(void) { return "12345678"; }
void mgos_config_set_wifi_ap_pass(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.ap.pass, v); }

/* wifi.ap.hidden */
int mgos_config_get_wifi_ap_hidden(const struct mgos_config *cfg) { return cfg->wifi.ap.hidden; }
int mgos_config_get_default_wifi_ap_hidden(void) { return false; }
void mgos_config_set_wifi_ap_hidden(struct mgos_config *cfg, int v) { cfg->wifi.ap.hidden = v; }

/* wifi.ap.channel */
int mgos_config_get_wifi_ap_channel(const struct mgos_config *cfg) { return cfg->wifi.ap.channel; }
int mgos_config_get_default_wifi_ap_channel(void) { return 6; }
void mgos_config_set_wifi_ap_channel(struct mgos_config *cfg, int v) { cfg->wifi.ap.channel = v; }

/* wifi.ap.max_connections */
int mgos_config_get_wifi_ap_max_connections(const struct mgos_config *cfg) { return cfg->wifi.ap.max_connections; }
int mgos_config_get_default_wifi_ap_max_connections(void) { return 5; }
void mgos_config_set_wifi_ap_max_connections(struct mgos_config *cfg, int v) { cfg->wifi.ap.max_connections = v; }

/* wifi.ap.ip */
const char * mgos_config_get_wifi_ap_ip(const struct mgos_config *cfg) { return cfg->wifi.ap.ip; }
const char * mgos_config_get_default_wifi_ap_ip(void) { return "192.168.4.1"; }
void mgos_config_set_wifi_ap_ip(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.ap.ip, v); }

/* wifi.ap.netmask */
const char * mgos_config_get_wifi_ap_netmask(const struct mgos_config *cfg) { return cfg->wifi.ap.netmask; }
const char * mgos_config_get_default_wifi_ap_netmask(void) { return "255.255.255.0"; }
void mgos_config_set_wifi_ap_netmask(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.ap.netmask, v); }

/* wifi.ap.gw */
const char * mgos_config_get_wifi_ap_gw(const struct mgos_config *cfg) { return cfg->wifi.ap.gw; }
const char * mgos_config_get_default_wifi_ap_gw(void) { return "192.168.4.1"; }
void mgos_config_set_wifi_ap_gw(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.ap.gw, v); }

/* wifi.ap.dhcp_start */
const char * mgos_config_get_wifi_ap_dhcp_start(const struct mgos_config *cfg) { return cfg->wifi.ap.dhcp_start; }
const char * mgos_config_get_default_wifi_ap_dhcp_start(void) { return "192.168.4.2"; }
void mgos_config_set_wifi_ap_dhcp_start(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.ap.dhcp_start, v); }

/* wifi.ap.dhcp_end */
const char * mgos_config_get_wifi_ap_dhcp_end(const struct mgos_config *cfg) { return cfg->wifi.ap.dhcp_end; }
const char * mgos_config_get_default_wifi_ap_dhcp_end(void) { return "192.168.4.10"; }
void mgos_config_set_wifi_ap_dhcp_end(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.ap.dhcp_end, v); }

/* wifi.ap.trigger_on_gpio */
int mgos_config_get_wifi_ap_trigger_on_gpio(const struct mgos_config *cfg) { return cfg->wifi.ap.trigger_on_gpio; }
int mgos_config_get_default_wifi_ap_trigger_on_gpio(void) { return -1; }
void mgos_config_set_wifi_ap_trigger_on_gpio(struct mgos_config *cfg, int v) { cfg->wifi.ap.trigger_on_gpio = v; }

/* wifi.ap.disable_after */
int mgos_config_get_wifi_ap_disable_after(const struct mgos_config *cfg) { return cfg->wifi.ap.disable_after; }
int mgos_config_get_default_wifi_ap_disable_after(void) { return 0; }
void mgos_config_set_wifi_ap_disable_after(struct mgos_config *cfg, int v) { cfg->wifi.ap.disable_after = v; }

/* wifi.ap.hostname */
const char * mgos_config_get_wifi_ap_hostname(const struct mgos_config *cfg) { return cfg->wifi.ap.hostname; }
const char * mgos_config_get_default_wifi_ap_hostname(void) { return NULL; }
void mgos_config_set_wifi_ap_hostname(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.ap.hostname, v); }

/* wifi.ap.bandwidth_20mhz */
int mgos_config_get_wifi_ap_bandwidth_20mhz(const struct mgos_config *cfg) { return cfg->wifi.ap.bandwidth_20mhz; }
int mgos_config_get_default_wifi_ap_bandwidth_20mhz(void) { return false; }
void mgos_config_set_wifi_ap_bandwidth_20mhz(struct mgos_config *cfg, int v) { cfg->wifi.ap.bandwidth_20mhz = v; }

/* wifi.ap.protocol */
const char * mgos_config_get_wifi_ap_protocol(const struct mgos_config *cfg) { return cfg->wifi.ap.protocol; }
const char * mgos_config_get_default_wifi_ap_protocol(void) { return "BGN"; }
void mgos_config_set_wifi_ap_protocol(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.ap.protocol, v); }

/* wifi.sta */
const struct mgos_config_wifi_sta *mgos_config_get_wifi_sta(const struct mgos_config *cfg) { return &cfg->wifi.sta; }

/* wifi.sta.enable */
int mgos_config_get_wifi_sta_enable(const struct mgos_config *cfg) { return cfg->wifi.sta.enable; }
int mgos_config_get_default_wifi_sta_enable(void) { return false; }
void mgos_config_set_wifi_sta_enable(struct mgos_config *cfg, int v) { cfg->wifi.sta.enable = v; }

/* wifi.sta.ssid */
const char * mgos_config_get_wifi_sta_ssid(const struct mgos_config *cfg) { return cfg->wifi.sta.ssid; }
const char * mgos_config_get_default_wifi_sta_ssid(void) { return "INBLRFTWIFI"; }
void mgos_config_set_wifi_sta_ssid(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.ssid, v); }

/* wifi.sta.pass */
const char * mgos_config_get_wifi_sta_pass(const struct mgos_config *cfg) { return cfg->wifi.sta.pass; }
const char * mgos_config_get_default_wifi_sta_pass(void) { return "Flamenco#abcd)"; }
void mgos_config_set_wifi_sta_pass(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.pass, v); }

/* wifi.sta.bssid */
const char * mgos_config_get_wifi_sta_bssid(const struct mgos_config *cfg) { return cfg->wifi.sta.bssid; }
const char * mgos_config_get_default_wifi_sta_bssid(void) { return NULL; }
void mgos_config_set_wifi_sta_bssid(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.bssid, v); }

/* wifi.sta.channel */
int mgos_config_get_wifi_sta_channel(const struct mgos_config *cfg) { return cfg->wifi.sta.channel; }
int mgos_config_get_default_wifi_sta_channel(void) { return 0; }
void mgos_config_set_wifi_sta_channel(struct mgos_config *cfg, int v) { cfg->wifi.sta.channel = v; }

/* wifi.sta.last_bssid */
const char * mgos_config_get_wifi_sta_last_bssid(const struct mgos_config *cfg) { return cfg->wifi.sta.last_bssid; }
const char * mgos_config_get_default_wifi_sta_last_bssid(void) { return NULL; }
void mgos_config_set_wifi_sta_last_bssid(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.last_bssid, v); }

/* wifi.sta.last_channel */
int mgos_config_get_wifi_sta_last_channel(const struct mgos_config *cfg) { return cfg->wifi.sta.last_channel; }
int mgos_config_get_default_wifi_sta_last_channel(void) { return 0; }
void mgos_config_set_wifi_sta_last_channel(struct mgos_config *cfg, int v) { cfg->wifi.sta.last_channel = v; }

/* wifi.sta.user */
const char * mgos_config_get_wifi_sta_user(const struct mgos_config *cfg) { return cfg->wifi.sta.user; }
const char * mgos_config_get_default_wifi_sta_user(void) { return NULL; }
void mgos_config_set_wifi_sta_user(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.user, v); }

/* wifi.sta.anon_identity */
const char * mgos_config_get_wifi_sta_anon_identity(const struct mgos_config *cfg) { return cfg->wifi.sta.anon_identity; }
const char * mgos_config_get_default_wifi_sta_anon_identity(void) { return NULL; }
void mgos_config_set_wifi_sta_anon_identity(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.anon_identity, v); }

/* wifi.sta.cert */
const char * mgos_config_get_wifi_sta_cert(const struct mgos_config *cfg) { return cfg->wifi.sta.cert; }
const char * mgos_config_get_default_wifi_sta_cert(void) { return NULL; }
void mgos_config_set_wifi_sta_cert(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.cert, v); }

/* wifi.sta.key */
const char * mgos_config_get_wifi_sta_key(const struct mgos_config *cfg) { return cfg->wifi.sta.key; }
const char * mgos_config_get_default_wifi_sta_key(void) { return NULL; }
void mgos_config_set_wifi_sta_key(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.key, v); }

/* wifi.sta.ca_cert */
const char * mgos_config_get_wifi_sta_ca_cert(const struct mgos_config *cfg) { return cfg->wifi.sta.ca_cert; }
const char * mgos_config_get_default_wifi_sta_ca_cert(void) { return NULL; }
void mgos_config_set_wifi_sta_ca_cert(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.ca_cert, v); }

/* wifi.sta.ip */
const char * mgos_config_get_wifi_sta_ip(const struct mgos_config *cfg) { return cfg->wifi.sta.ip; }
const char * mgos_config_get_default_wifi_sta_ip(void) { return NULL; }
void mgos_config_set_wifi_sta_ip(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.ip, v); }

/* wifi.sta.netmask */
const char * mgos_config_get_wifi_sta_netmask(const struct mgos_config *cfg) { return cfg->wifi.sta.netmask; }
const char * mgos_config_get_default_wifi_sta_netmask(void) { return NULL; }
void mgos_config_set_wifi_sta_netmask(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.netmask, v); }

/* wifi.sta.gw */
const char * mgos_config_get_wifi_sta_gw(const struct mgos_config *cfg) { return cfg->wifi.sta.gw; }
const char * mgos_config_get_default_wifi_sta_gw(void) { return NULL; }
void mgos_config_set_wifi_sta_gw(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.gw, v); }

/* wifi.sta.nameserver */
const char * mgos_config_get_wifi_sta_nameserver(const struct mgos_config *cfg) { return cfg->wifi.sta.nameserver; }
const char * mgos_config_get_default_wifi_sta_nameserver(void) { return NULL; }
void mgos_config_set_wifi_sta_nameserver(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.nameserver, v); }

/* wifi.sta.dhcp_hostname */
const char * mgos_config_get_wifi_sta_dhcp_hostname(const struct mgos_config *cfg) { return cfg->wifi.sta.dhcp_hostname; }
const char * mgos_config_get_default_wifi_sta_dhcp_hostname(void) { return NULL; }
void mgos_config_set_wifi_sta_dhcp_hostname(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.dhcp_hostname, v); }

/* wifi.sta.protocol */
const char * mgos_config_get_wifi_sta_protocol(const struct mgos_config *cfg) { return cfg->wifi.sta.protocol; }
const char * mgos_config_get_default_wifi_sta_protocol(void) { return "BGN"; }
void mgos_config_set_wifi_sta_protocol(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta.protocol, v); }

/* wifi.sta.listen_interval_ms */
int mgos_config_get_wifi_sta_listen_interval_ms(const struct mgos_config *cfg) { return cfg->wifi.sta.listen_interval_ms; }
int mgos_config_get_default_wifi_sta_listen_interval_ms(void) { return 0; }
void mgos_config_set_wifi_sta_listen_interval_ms(struct mgos_config *cfg, int v) { cfg->wifi.sta.listen_interval_ms = v; }

/* wifi.sta1 */
const struct mgos_config_wifi_sta *mgos_config_get_wifi_sta1(const struct mgos_config *cfg) { return &cfg->wifi.sta1; }

/* wifi.sta1.enable */
int mgos_config_get_wifi_sta1_enable(const struct mgos_config *cfg) { return cfg->wifi.sta1.enable; }
int mgos_config_get_default_wifi_sta1_enable(void) { return false; }
void mgos_config_set_wifi_sta1_enable(struct mgos_config *cfg, int v) { cfg->wifi.sta1.enable = v; }

/* wifi.sta1.ssid */
const char * mgos_config_get_wifi_sta1_ssid(const struct mgos_config *cfg) { return cfg->wifi.sta1.ssid; }
const char * mgos_config_get_default_wifi_sta1_ssid(void) { return "INBLRFTWIFI"; }
void mgos_config_set_wifi_sta1_ssid(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.ssid, v); }

/* wifi.sta1.pass */
const char * mgos_config_get_wifi_sta1_pass(const struct mgos_config *cfg) { return cfg->wifi.sta1.pass; }
const char * mgos_config_get_default_wifi_sta1_pass(void) { return "Flamenco#abcd)"; }
void mgos_config_set_wifi_sta1_pass(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.pass, v); }

/* wifi.sta1.bssid */
const char * mgos_config_get_wifi_sta1_bssid(const struct mgos_config *cfg) { return cfg->wifi.sta1.bssid; }
const char * mgos_config_get_default_wifi_sta1_bssid(void) { return NULL; }
void mgos_config_set_wifi_sta1_bssid(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.bssid, v); }

/* wifi.sta1.channel */
int mgos_config_get_wifi_sta1_channel(const struct mgos_config *cfg) { return cfg->wifi.sta1.channel; }
int mgos_config_get_default_wifi_sta1_channel(void) { return 0; }
void mgos_config_set_wifi_sta1_channel(struct mgos_config *cfg, int v) { cfg->wifi.sta1.channel = v; }

/* wifi.sta1.last_bssid */
const char * mgos_config_get_wifi_sta1_last_bssid(const struct mgos_config *cfg) { return cfg->wifi.sta1.last_bssid; }
const char * mgos_config_get_default_wifi_sta1_last_bssid(void) { return NULL; }
void mgos_config_set_wifi_sta1_last_bssid(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.last_bssid, v); }

/* wifi.sta1.last_channel */
int mgos_config_get_wifi_sta1_last_channel(const struct mgos_config *cfg) { return cfg->wifi.sta1.last_channel; }
int mgos_config_get_default_wifi_sta1_last_channel(void) { return 0; }
void mgos_config_set_wifi_sta1_last_channel(struct mgos_config *cfg, int v) { cfg->wifi.sta1.last_channel = v; }

/* wifi.sta1.user */
const char * mgos_config_get_wifi_sta1_user(const struct mgos_config *cfg) { return cfg->wifi.sta1.user; }
const char * mgos_config_get_default_wifi_sta1_user(void) { return NULL; }
void mgos_config_set_wifi_sta1_user(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.user, v); }

/* wifi.sta1.anon_identity */
const char * mgos_config_get_wifi_sta1_anon_identity(const struct mgos_config *cfg) { return cfg->wifi.sta1.anon_identity; }
const char * mgos_config_get_default_wifi_sta1_anon_identity(void) { return NULL; }
void mgos_config_set_wifi_sta1_anon_identity(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.anon_identity, v); }

/* wifi.sta1.cert */
const char * mgos_config_get_wifi_sta1_cert(const struct mgos_config *cfg) { return cfg->wifi.sta1.cert; }
const char * mgos_config_get_default_wifi_sta1_cert(void) { return NULL; }
void mgos_config_set_wifi_sta1_cert(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.cert, v); }

/* wifi.sta1.key */
const char * mgos_config_get_wifi_sta1_key(const struct mgos_config *cfg) { return cfg->wifi.sta1.key; }
const char * mgos_config_get_default_wifi_sta1_key(void) { return NULL; }
void mgos_config_set_wifi_sta1_key(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.key, v); }

/* wifi.sta1.ca_cert */
const char * mgos_config_get_wifi_sta1_ca_cert(const struct mgos_config *cfg) { return cfg->wifi.sta1.ca_cert; }
const char * mgos_config_get_default_wifi_sta1_ca_cert(void) { return NULL; }
void mgos_config_set_wifi_sta1_ca_cert(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.ca_cert, v); }

/* wifi.sta1.ip */
const char * mgos_config_get_wifi_sta1_ip(const struct mgos_config *cfg) { return cfg->wifi.sta1.ip; }
const char * mgos_config_get_default_wifi_sta1_ip(void) { return NULL; }
void mgos_config_set_wifi_sta1_ip(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.ip, v); }

/* wifi.sta1.netmask */
const char * mgos_config_get_wifi_sta1_netmask(const struct mgos_config *cfg) { return cfg->wifi.sta1.netmask; }
const char * mgos_config_get_default_wifi_sta1_netmask(void) { return NULL; }
void mgos_config_set_wifi_sta1_netmask(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.netmask, v); }

/* wifi.sta1.gw */
const char * mgos_config_get_wifi_sta1_gw(const struct mgos_config *cfg) { return cfg->wifi.sta1.gw; }
const char * mgos_config_get_default_wifi_sta1_gw(void) { return NULL; }
void mgos_config_set_wifi_sta1_gw(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.gw, v); }

/* wifi.sta1.nameserver */
const char * mgos_config_get_wifi_sta1_nameserver(const struct mgos_config *cfg) { return cfg->wifi.sta1.nameserver; }
const char * mgos_config_get_default_wifi_sta1_nameserver(void) { return NULL; }
void mgos_config_set_wifi_sta1_nameserver(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.nameserver, v); }

/* wifi.sta1.dhcp_hostname */
const char * mgos_config_get_wifi_sta1_dhcp_hostname(const struct mgos_config *cfg) { return cfg->wifi.sta1.dhcp_hostname; }
const char * mgos_config_get_default_wifi_sta1_dhcp_hostname(void) { return NULL; }
void mgos_config_set_wifi_sta1_dhcp_hostname(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.dhcp_hostname, v); }

/* wifi.sta1.protocol */
const char * mgos_config_get_wifi_sta1_protocol(const struct mgos_config *cfg) { return cfg->wifi.sta1.protocol; }
const char * mgos_config_get_default_wifi_sta1_protocol(void) { return "BGN"; }
void mgos_config_set_wifi_sta1_protocol(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta1.protocol, v); }

/* wifi.sta1.listen_interval_ms */
int mgos_config_get_wifi_sta1_listen_interval_ms(const struct mgos_config *cfg) { return cfg->wifi.sta1.listen_interval_ms; }
int mgos_config_get_default_wifi_sta1_listen_interval_ms(void) { return 0; }
void mgos_config_set_wifi_sta1_listen_interval_ms(struct mgos_config *cfg, int v) { cfg->wifi.sta1.listen_interval_ms = v; }

/* wifi.sta2 */
const struct mgos_config_wifi_sta *mgos_config_get_wifi_sta2(const struct mgos_config *cfg) { return &cfg->wifi.sta2; }

/* wifi.sta2.enable */
int mgos_config_get_wifi_sta2_enable(const struct mgos_config *cfg) { return cfg->wifi.sta2.enable; }
int mgos_config_get_default_wifi_sta2_enable(void) { return false; }
void mgos_config_set_wifi_sta2_enable(struct mgos_config *cfg, int v) { cfg->wifi.sta2.enable = v; }

/* wifi.sta2.ssid */
const char * mgos_config_get_wifi_sta2_ssid(const struct mgos_config *cfg) { return cfg->wifi.sta2.ssid; }
const char * mgos_config_get_default_wifi_sta2_ssid(void) { return "INBLRFTWIFI"; }
void mgos_config_set_wifi_sta2_ssid(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.ssid, v); }

/* wifi.sta2.pass */
const char * mgos_config_get_wifi_sta2_pass(const struct mgos_config *cfg) { return cfg->wifi.sta2.pass; }
const char * mgos_config_get_default_wifi_sta2_pass(void) { return "Flamenco#abcd)"; }
void mgos_config_set_wifi_sta2_pass(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.pass, v); }

/* wifi.sta2.bssid */
const char * mgos_config_get_wifi_sta2_bssid(const struct mgos_config *cfg) { return cfg->wifi.sta2.bssid; }
const char * mgos_config_get_default_wifi_sta2_bssid(void) { return NULL; }
void mgos_config_set_wifi_sta2_bssid(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.bssid, v); }

/* wifi.sta2.channel */
int mgos_config_get_wifi_sta2_channel(const struct mgos_config *cfg) { return cfg->wifi.sta2.channel; }
int mgos_config_get_default_wifi_sta2_channel(void) { return 0; }
void mgos_config_set_wifi_sta2_channel(struct mgos_config *cfg, int v) { cfg->wifi.sta2.channel = v; }

/* wifi.sta2.last_bssid */
const char * mgos_config_get_wifi_sta2_last_bssid(const struct mgos_config *cfg) { return cfg->wifi.sta2.last_bssid; }
const char * mgos_config_get_default_wifi_sta2_last_bssid(void) { return NULL; }
void mgos_config_set_wifi_sta2_last_bssid(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.last_bssid, v); }

/* wifi.sta2.last_channel */
int mgos_config_get_wifi_sta2_last_channel(const struct mgos_config *cfg) { return cfg->wifi.sta2.last_channel; }
int mgos_config_get_default_wifi_sta2_last_channel(void) { return 0; }
void mgos_config_set_wifi_sta2_last_channel(struct mgos_config *cfg, int v) { cfg->wifi.sta2.last_channel = v; }

/* wifi.sta2.user */
const char * mgos_config_get_wifi_sta2_user(const struct mgos_config *cfg) { return cfg->wifi.sta2.user; }
const char * mgos_config_get_default_wifi_sta2_user(void) { return NULL; }
void mgos_config_set_wifi_sta2_user(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.user, v); }

/* wifi.sta2.anon_identity */
const char * mgos_config_get_wifi_sta2_anon_identity(const struct mgos_config *cfg) { return cfg->wifi.sta2.anon_identity; }
const char * mgos_config_get_default_wifi_sta2_anon_identity(void) { return NULL; }
void mgos_config_set_wifi_sta2_anon_identity(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.anon_identity, v); }

/* wifi.sta2.cert */
const char * mgos_config_get_wifi_sta2_cert(const struct mgos_config *cfg) { return cfg->wifi.sta2.cert; }
const char * mgos_config_get_default_wifi_sta2_cert(void) { return NULL; }
void mgos_config_set_wifi_sta2_cert(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.cert, v); }

/* wifi.sta2.key */
const char * mgos_config_get_wifi_sta2_key(const struct mgos_config *cfg) { return cfg->wifi.sta2.key; }
const char * mgos_config_get_default_wifi_sta2_key(void) { return NULL; }
void mgos_config_set_wifi_sta2_key(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.key, v); }

/* wifi.sta2.ca_cert */
const char * mgos_config_get_wifi_sta2_ca_cert(const struct mgos_config *cfg) { return cfg->wifi.sta2.ca_cert; }
const char * mgos_config_get_default_wifi_sta2_ca_cert(void) { return NULL; }
void mgos_config_set_wifi_sta2_ca_cert(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.ca_cert, v); }

/* wifi.sta2.ip */
const char * mgos_config_get_wifi_sta2_ip(const struct mgos_config *cfg) { return cfg->wifi.sta2.ip; }
const char * mgos_config_get_default_wifi_sta2_ip(void) { return NULL; }
void mgos_config_set_wifi_sta2_ip(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.ip, v); }

/* wifi.sta2.netmask */
const char * mgos_config_get_wifi_sta2_netmask(const struct mgos_config *cfg) { return cfg->wifi.sta2.netmask; }
const char * mgos_config_get_default_wifi_sta2_netmask(void) { return NULL; }
void mgos_config_set_wifi_sta2_netmask(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.netmask, v); }

/* wifi.sta2.gw */
const char * mgos_config_get_wifi_sta2_gw(const struct mgos_config *cfg) { return cfg->wifi.sta2.gw; }
const char * mgos_config_get_default_wifi_sta2_gw(void) { return NULL; }
void mgos_config_set_wifi_sta2_gw(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.gw, v); }

/* wifi.sta2.nameserver */
const char * mgos_config_get_wifi_sta2_nameserver(const struct mgos_config *cfg) { return cfg->wifi.sta2.nameserver; }
const char * mgos_config_get_default_wifi_sta2_nameserver(void) { return NULL; }
void mgos_config_set_wifi_sta2_nameserver(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.nameserver, v); }

/* wifi.sta2.dhcp_hostname */
const char * mgos_config_get_wifi_sta2_dhcp_hostname(const struct mgos_config *cfg) { return cfg->wifi.sta2.dhcp_hostname; }
const char * mgos_config_get_default_wifi_sta2_dhcp_hostname(void) { return NULL; }
void mgos_config_set_wifi_sta2_dhcp_hostname(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.dhcp_hostname, v); }

/* wifi.sta2.protocol */
const char * mgos_config_get_wifi_sta2_protocol(const struct mgos_config *cfg) { return cfg->wifi.sta2.protocol; }
const char * mgos_config_get_default_wifi_sta2_protocol(void) { return "BGN"; }
void mgos_config_set_wifi_sta2_protocol(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->wifi.sta2.protocol, v); }

/* wifi.sta2.listen_interval_ms */
int mgos_config_get_wifi_sta2_listen_interval_ms(const struct mgos_config *cfg) { return cfg->wifi.sta2.listen_interval_ms; }
int mgos_config_get_default_wifi_sta2_listen_interval_ms(void) { return 0; }
void mgos_config_set_wifi_sta2_listen_interval_ms(struct mgos_config *cfg, int v) { cfg->wifi.sta2.listen_interval_ms = v; }

/* wifi.sta_rssi_thr */
int mgos_config_get_wifi_sta_rssi_thr(const struct mgos_config *cfg) { return cfg->wifi.sta_rssi_thr; }
int mgos_config_get_default_wifi_sta_rssi_thr(void) { return -95; }
void mgos_config_set_wifi_sta_rssi_thr(struct mgos_config *cfg, int v) { cfg->wifi.sta_rssi_thr = v; }

/* wifi.sta_connect_timeout */
int mgos_config_get_wifi_sta_connect_timeout(const struct mgos_config *cfg) { return cfg->wifi.sta_connect_timeout; }
int mgos_config_get_default_wifi_sta_connect_timeout(void) { return 15; }
void mgos_config_set_wifi_sta_connect_timeout(struct mgos_config *cfg, int v) { cfg->wifi.sta_connect_timeout = v; }

/* wifi.sta_roam_rssi_thr */
int mgos_config_get_wifi_sta_roam_rssi_thr(const struct mgos_config *cfg) { return cfg->wifi.sta_roam_rssi_thr; }
int mgos_config_get_default_wifi_sta_roam_rssi_thr(void) { return -80; }
void mgos_config_set_wifi_sta_roam_rssi_thr(struct mgos_config *cfg, int v) { cfg->wifi.sta_roam_rssi_thr = v; }

/* wifi.sta_roam_interval */
int mgos_config_get_wifi_sta_roam_interval(const struct mgos_config *cfg) { return cfg->wifi.sta_roam_interval; }
int mgos_config_get_default_wifi_sta_roam_interval(void) { return 0; }
void mgos_config_set_wifi_sta_roam_interval(struct mgos_config *cfg, int v) { cfg->wifi.sta_roam_interval = v; }

/* wifi.sta_ps_mode */
int mgos_config_get_wifi_sta_ps_mode(const struct mgos_config *cfg) { return cfg->wifi.sta_ps_mode; }
int mgos_config_get_default_wifi_sta_ps_mode(void) { return 0; }
void mgos_config_set_wifi_sta_ps_mode(struct mgos_config *cfg, int v) { cfg->wifi.sta_ps_mode = v; }

/* board */
const struct mgos_config_board *mgos_config_get_board(const struct mgos_config *cfg) { return &cfg->board; }

/* board.led1 */
const struct mgos_config_board_led1 *mgos_config_get_board_led1(const struct mgos_config *cfg) { return &cfg->board.led1; }

/* board.led1.pin */
int mgos_config_get_board_led1_pin(const struct mgos_config *cfg) { return cfg->board.led1.pin; }
int mgos_config_get_default_board_led1_pin(void) { return 13; }
void mgos_config_set_board_led1_pin(struct mgos_config *cfg, int v) { cfg->board.led1.pin = v; }

/* board.led1.active_high */
int mgos_config_get_board_led1_active_high(const struct mgos_config *cfg) { return cfg->board.led1.active_high; }
int mgos_config_get_default_board_led1_active_high(void) { return true; }
void mgos_config_set_board_led1_active_high(struct mgos_config *cfg, int v) { cfg->board.led1.active_high = v; }

/* board.led2 */
const struct mgos_config_board_led2 *mgos_config_get_board_led2(const struct mgos_config *cfg) { return &cfg->board.led2; }

/* board.led2.pin */
int mgos_config_get_board_led2_pin(const struct mgos_config *cfg) { return cfg->board.led2.pin; }
int mgos_config_get_default_board_led2_pin(void) { return -1; }
void mgos_config_set_board_led2_pin(struct mgos_config *cfg, int v) { cfg->board.led2.pin = v; }

/* board.led2.active_high */
int mgos_config_get_board_led2_active_high(const struct mgos_config *cfg) { return cfg->board.led2.active_high; }
int mgos_config_get_default_board_led2_active_high(void) { return true; }
void mgos_config_set_board_led2_active_high(struct mgos_config *cfg, int v) { cfg->board.led2.active_high = v; }

/* board.led3 */
const struct mgos_config_board_led3 *mgos_config_get_board_led3(const struct mgos_config *cfg) { return &cfg->board.led3; }

/* board.led3.pin */
int mgos_config_get_board_led3_pin(const struct mgos_config *cfg) { return cfg->board.led3.pin; }
int mgos_config_get_default_board_led3_pin(void) { return -1; }
void mgos_config_set_board_led3_pin(struct mgos_config *cfg, int v) { cfg->board.led3.pin = v; }

/* board.led3.active_high */
int mgos_config_get_board_led3_active_high(const struct mgos_config *cfg) { return cfg->board.led3.active_high; }
int mgos_config_get_default_board_led3_active_high(void) { return true; }
void mgos_config_set_board_led3_active_high(struct mgos_config *cfg, int v) { cfg->board.led3.active_high = v; }

/* board.btn1 */
const struct mgos_config_board_btn1 *mgos_config_get_board_btn1(const struct mgos_config *cfg) { return &cfg->board.btn1; }

/* board.btn1.pin */
int mgos_config_get_board_btn1_pin(const struct mgos_config *cfg) { return cfg->board.btn1.pin; }
int mgos_config_get_default_board_btn1_pin(void) { return 0; }
void mgos_config_set_board_btn1_pin(struct mgos_config *cfg, int v) { cfg->board.btn1.pin = v; }

/* board.btn1.pull_up */
int mgos_config_get_board_btn1_pull_up(const struct mgos_config *cfg) { return cfg->board.btn1.pull_up; }
int mgos_config_get_default_board_btn1_pull_up(void) { return true; }
void mgos_config_set_board_btn1_pull_up(struct mgos_config *cfg, int v) { cfg->board.btn1.pull_up = v; }

/* board.btn2 */
const struct mgos_config_board_btn2 *mgos_config_get_board_btn2(const struct mgos_config *cfg) { return &cfg->board.btn2; }

/* board.btn2.pin */
int mgos_config_get_board_btn2_pin(const struct mgos_config *cfg) { return cfg->board.btn2.pin; }
int mgos_config_get_default_board_btn2_pin(void) { return -1; }
void mgos_config_set_board_btn2_pin(struct mgos_config *cfg, int v) { cfg->board.btn2.pin = v; }

/* board.btn2.pull_up */
int mgos_config_get_board_btn2_pull_up(const struct mgos_config *cfg) { return cfg->board.btn2.pull_up; }
int mgos_config_get_default_board_btn2_pull_up(void) { return false; }
void mgos_config_set_board_btn2_pull_up(struct mgos_config *cfg, int v) { cfg->board.btn2.pull_up = v; }

/* board.btn3 */
const struct mgos_config_board_btn3 *mgos_config_get_board_btn3(const struct mgos_config *cfg) { return &cfg->board.btn3; }

/* board.btn3.pin */
int mgos_config_get_board_btn3_pin(const struct mgos_config *cfg) { return cfg->board.btn3.pin; }
int mgos_config_get_default_board_btn3_pin(void) { return -1; }
void mgos_config_set_board_btn3_pin(struct mgos_config *cfg, int v) { cfg->board.btn3.pin = v; }

/* board.btn3.pull_up */
int mgos_config_get_board_btn3_pull_up(const struct mgos_config *cfg) { return cfg->board.btn3.pull_up; }
int mgos_config_get_default_board_btn3_pull_up(void) { return false; }
void mgos_config_set_board_btn3_pull_up(struct mgos_config *cfg, int v) { cfg->board.btn3.pull_up = v; }

/* admin */
const struct mgos_config_admin *mgos_config_get_admin(const struct mgos_config *cfg) { return &cfg->admin; }

/* admin.variant */
const char * mgos_config_get_admin_variant(const struct mgos_config *cfg) { return cfg->admin.variant; }
const char * mgos_config_get_default_admin_variant(void) { return "ZIGBEE"; }
void mgos_config_set_admin_variant(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->admin.variant, v); }

/* admin.version */
const char * mgos_config_get_admin_version(const struct mgos_config *cfg) { return cfg->admin.version; }
const char * mgos_config_get_default_admin_version(void) { return "v2.5_07-09-23"; }
void mgos_config_set_admin_version(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->admin.version, v); }

/* dwpc */
const struct mgos_config_dwpc *mgos_config_get_dwpc(const struct mgos_config *cfg) { return &cfg->dwpc; }

/* dwpc.interval */
int mgos_config_get_dwpc_interval(const struct mgos_config *cfg) { return cfg->dwpc.interval; }
int mgos_config_get_default_dwpc_interval(void) { return 30; }
void mgos_config_set_dwpc_interval(struct mgos_config *cfg, int v) { cfg->dwpc.interval = v; }

/* dwpc.function_mode */
int mgos_config_get_dwpc_function_mode(const struct mgos_config *cfg) { return cfg->dwpc.function_mode; }
int mgos_config_get_default_dwpc_function_mode(void) { return 2; }
void mgos_config_set_dwpc_function_mode(struct mgos_config *cfg, int v) { cfg->dwpc.function_mode = v; }

/* dwpc.periodic_reset */
int mgos_config_get_dwpc_periodic_reset(const struct mgos_config *cfg) { return cfg->dwpc.periodic_reset; }
int mgos_config_get_default_dwpc_periodic_reset(void) { return 45; }
void mgos_config_set_dwpc_periodic_reset(struct mgos_config *cfg, int v) { cfg->dwpc.periodic_reset = v; }

/* dwpc.capacity */
int mgos_config_get_dwpc_capacity(const struct mgos_config *cfg) { return cfg->dwpc.capacity; }
int mgos_config_get_default_dwpc_capacity(void) { return 0; }
void mgos_config_set_dwpc_capacity(struct mgos_config *cfg, int v) { cfg->dwpc.capacity = v; }

/* dwpc.sensor_freq */
int mgos_config_get_dwpc_sensor_freq(const struct mgos_config *cfg) { return cfg->dwpc.sensor_freq; }
int mgos_config_get_default_dwpc_sensor_freq(void) { return 10; }
void mgos_config_set_dwpc_sensor_freq(struct mgos_config *cfg, int v) { cfg->dwpc.sensor_freq = v; }

/* dwpc.resolution */
int mgos_config_get_dwpc_resolution(const struct mgos_config *cfg) { return cfg->dwpc.resolution; }
int mgos_config_get_default_dwpc_resolution(void) { return 16; }
void mgos_config_set_dwpc_resolution(struct mgos_config *cfg, int v) { cfg->dwpc.resolution = v; }

/* dwpc.min_floor_distance */
int mgos_config_get_dwpc_min_floor_distance(const struct mgos_config *cfg) { return cfg->dwpc.min_floor_distance; }
int mgos_config_get_default_dwpc_min_floor_distance(void) { return 1500; }
void mgos_config_set_dwpc_min_floor_distance(struct mgos_config *cfg, int v) { cfg->dwpc.min_floor_distance = v; }

/* dwpc.max_distance_delta */
int mgos_config_get_dwpc_max_distance_delta(const struct mgos_config *cfg) { return cfg->dwpc.max_distance_delta; }
int mgos_config_get_default_dwpc_max_distance_delta(void) { return 300; }
void mgos_config_set_dwpc_max_distance_delta(struct mgos_config *cfg, int v) { cfg->dwpc.max_distance_delta = v; }

/* dwpc.TotalSamplesForRangeCalibration */
int mgos_config_get_dwpc_TotalSamplesForRangeCalibration(const struct mgos_config *cfg) { return cfg->dwpc.TotalSamplesForRangeCalibration; }
int mgos_config_get_default_dwpc_TotalSamplesForRangeCalibration(void) { return 500; }
void mgos_config_set_dwpc_TotalSamplesForRangeCalibration(struct mgos_config *cfg, int v) { cfg->dwpc.TotalSamplesForRangeCalibration = v; }

/* dwpc.validSamplesForRangeCalibration */
int mgos_config_get_dwpc_validSamplesForRangeCalibration(const struct mgos_config *cfg) { return cfg->dwpc.validSamplesForRangeCalibration; }
int mgos_config_get_default_dwpc_validSamplesForRangeCalibration(void) { return 450; }
void mgos_config_set_dwpc_validSamplesForRangeCalibration(struct mgos_config *cfg, int v) { cfg->dwpc.validSamplesForRangeCalibration = v; }

/* dwpc.numberOfTargetPerZone */
int mgos_config_get_dwpc_numberOfTargetPerZone(const struct mgos_config *cfg) { return cfg->dwpc.numberOfTargetPerZone; }
int mgos_config_get_default_dwpc_numberOfTargetPerZone(void) { return 1; }
void mgos_config_set_dwpc_numberOfTargetPerZone(struct mgos_config *cfg, int v) { cfg->dwpc.numberOfTargetPerZone = v; }

/* dwpc.min_consecutive_count */
int mgos_config_get_dwpc_min_consecutive_count(const struct mgos_config *cfg) { return cfg->dwpc.min_consecutive_count; }
int mgos_config_get_default_dwpc_min_consecutive_count(void) { return 4; }
void mgos_config_set_dwpc_min_consecutive_count(struct mgos_config *cfg, int v) { cfg->dwpc.min_consecutive_count = v; }

/* dwpc.min_signal */
int mgos_config_get_dwpc_min_signal(const struct mgos_config *cfg) { return cfg->dwpc.min_signal; }
int mgos_config_get_default_dwpc_min_signal(void) { return 1; }
void mgos_config_set_dwpc_min_signal(struct mgos_config *cfg, int v) { cfg->dwpc.min_signal = v; }

/* dwpc.threshold */
int mgos_config_get_dwpc_threshold(const struct mgos_config *cfg) { return cfg->dwpc.threshold; }
int mgos_config_get_default_dwpc_threshold(void) { return 200; }
void mgos_config_set_dwpc_threshold(struct mgos_config *cfg, int v) { cfg->dwpc.threshold = v; }

/* dwpc.direction */
int mgos_config_get_dwpc_direction(const struct mgos_config *cfg) { return cfg->dwpc.direction; }
int mgos_config_get_default_dwpc_direction(void) { return 0; }
void mgos_config_set_dwpc_direction(struct mgos_config *cfg, int v) { cfg->dwpc.direction = v; }

/* dwpc.enable_low_confidence_target */
int mgos_config_get_dwpc_enable_low_confidence_target(const struct mgos_config *cfg) { return cfg->dwpc.enable_low_confidence_target; }
int mgos_config_get_default_dwpc_enable_low_confidence_target(void) { return 0; }
void mgos_config_set_dwpc_enable_low_confidence_target(struct mgos_config *cfg, int v) { cfg->dwpc.enable_low_confidence_target = v; }

/* dwpc.enter_or_exit_middle_ok */
int mgos_config_get_dwpc_enter_or_exit_middle_ok(const struct mgos_config *cfg) { return cfg->dwpc.enter_or_exit_middle_ok; }
int mgos_config_get_default_dwpc_enter_or_exit_middle_ok(void) { return 0; }
void mgos_config_set_dwpc_enter_or_exit_middle_ok(struct mgos_config *cfg, int v) { cfg->dwpc.enter_or_exit_middle_ok = v; }

/* dwpc.person_count_threshold */
int mgos_config_get_dwpc_person_count_threshold(const struct mgos_config *cfg) { return cfg->dwpc.person_count_threshold; }
int mgos_config_get_default_dwpc_person_count_threshold(void) { return 0; }
void mgos_config_set_dwpc_person_count_threshold(struct mgos_config *cfg, int v) { cfg->dwpc.person_count_threshold = v; }

/* dwpc.reflectance_percent */
int mgos_config_get_dwpc_reflectance_percent(const struct mgos_config *cfg) { return cfg->dwpc.reflectance_percent; }
int mgos_config_get_default_dwpc_reflectance_percent(void) { return 50; }
void mgos_config_set_dwpc_reflectance_percent(struct mgos_config *cfg, int v) { cfg->dwpc.reflectance_percent = v; }

/* dwpc.nb_samples */
int mgos_config_get_dwpc_nb_samples(const struct mgos_config *cfg) { return cfg->dwpc.nb_samples; }
int mgos_config_get_default_dwpc_nb_samples(void) { return 8; }
void mgos_config_set_dwpc_nb_samples(struct mgos_config *cfg, int v) { cfg->dwpc.nb_samples = v; }

/* dwpc.distance_mm */
int mgos_config_get_dwpc_distance_mm(const struct mgos_config *cfg) { return cfg->dwpc.distance_mm; }
int mgos_config_get_default_dwpc_distance_mm(void) { return 2000; }
void mgos_config_set_dwpc_distance_mm(struct mgos_config *cfg, int v) { cfg->dwpc.distance_mm = v; }

/* service */
const struct mgos_config_service *mgos_config_get_service(const struct mgos_config *cfg) { return &cfg->service; }

/* service.xtalkcalibration_status */
const char * mgos_config_get_service_xtalkcalibration_status(const struct mgos_config *cfg) { return cfg->service.xtalkcalibration_status; }
const char * mgos_config_get_default_service_xtalkcalibration_status(void) { return "Not started"; }
void mgos_config_set_service_xtalkcalibration_status(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->service.xtalkcalibration_status, v); }

/* service.livestream_toggle_status */
const char * mgos_config_get_service_livestream_toggle_status(const struct mgos_config *cfg) { return cfg->service.livestream_toggle_status; }
const char * mgos_config_get_default_service_livestream_toggle_status(void) { return "Not started"; }
void mgos_config_set_service_livestream_toggle_status(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->service.livestream_toggle_status, v); }

/* service.thresholdCalibration_status */
const char * mgos_config_get_service_thresholdCalibration_status(const struct mgos_config *cfg) { return cfg->service.thresholdCalibration_status; }
const char * mgos_config_get_default_service_thresholdCalibration_status(void) { return "Not started"; }
void mgos_config_set_service_thresholdCalibration_status(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->service.thresholdCalibration_status, v); }

/* diagnostic */
const struct mgos_config_diagnostic *mgos_config_get_diagnostic(const struct mgos_config *cfg) { return &cfg->diagnostic; }

/* diagnostic.topic */
const char * mgos_config_get_diagnostic_topic(const struct mgos_config *cfg) { return cfg->diagnostic.topic; }
const char * mgos_config_get_default_diagnostic_topic(void) { return "/diagnostics"; }
void mgos_config_set_diagnostic_topic(struct mgos_config *cfg, const char * v) { mgos_conf_set_str(&cfg->diagnostic.topic, v); }

/* pathzone */
const struct mgos_config_pathzone *mgos_config_get_pathzone(const struct mgos_config *cfg) { return &cfg->pathzone; }

/* pathzone.index0 */
int mgos_config_get_pathzone_index0(const struct mgos_config *cfg) { return cfg->pathzone.index0; }
int mgos_config_get_default_pathzone_index0(void) { return 2; }
void mgos_config_set_pathzone_index0(struct mgos_config *cfg, int v) { cfg->pathzone.index0 = v; }

/* pathzone.index1 */
int mgos_config_get_pathzone_index1(const struct mgos_config *cfg) { return cfg->pathzone.index1; }
int mgos_config_get_default_pathzone_index1(void) { return 2; }
void mgos_config_set_pathzone_index1(struct mgos_config *cfg, int v) { cfg->pathzone.index1 = v; }

/* pathzone.index2 */
int mgos_config_get_pathzone_index2(const struct mgos_config *cfg) { return cfg->pathzone.index2; }
int mgos_config_get_default_pathzone_index2(void) { return 2; }
void mgos_config_set_pathzone_index2(struct mgos_config *cfg, int v) { cfg->pathzone.index2 = v; }

/* pathzone.index3 */
int mgos_config_get_pathzone_index3(const struct mgos_config *cfg) { return cfg->pathzone.index3; }
int mgos_config_get_default_pathzone_index3(void) { return 2; }
void mgos_config_set_pathzone_index3(struct mgos_config *cfg, int v) { cfg->pathzone.index3 = v; }

/* pathzone.index4 */
int mgos_config_get_pathzone_index4(const struct mgos_config *cfg) { return cfg->pathzone.index4; }
int mgos_config_get_default_pathzone_index4(void) { return 2; }
void mgos_config_set_pathzone_index4(struct mgos_config *cfg, int v) { cfg->pathzone.index4 = v; }

/* pathzone.index5 */
int mgos_config_get_pathzone_index5(const struct mgos_config *cfg) { return cfg->pathzone.index5; }
int mgos_config_get_default_pathzone_index5(void) { return 2; }
void mgos_config_set_pathzone_index5(struct mgos_config *cfg, int v) { cfg->pathzone.index5 = v; }

/* pathzone.index6 */
int mgos_config_get_pathzone_index6(const struct mgos_config *cfg) { return cfg->pathzone.index6; }
int mgos_config_get_default_pathzone_index6(void) { return 2; }
void mgos_config_set_pathzone_index6(struct mgos_config *cfg, int v) { cfg->pathzone.index6 = v; }

/* pathzone.index7 */
int mgos_config_get_pathzone_index7(const struct mgos_config *cfg) { return cfg->pathzone.index7; }
int mgos_config_get_default_pathzone_index7(void) { return 2; }
void mgos_config_set_pathzone_index7(struct mgos_config *cfg, int v) { cfg->pathzone.index7 = v; }

/* pathzone.index8 */
int mgos_config_get_pathzone_index8(const struct mgos_config *cfg) { return cfg->pathzone.index8; }
int mgos_config_get_default_pathzone_index8(void) { return 2; }
void mgos_config_set_pathzone_index8(struct mgos_config *cfg, int v) { cfg->pathzone.index8 = v; }

/* pathzone.index9 */
int mgos_config_get_pathzone_index9(const struct mgos_config *cfg) { return cfg->pathzone.index9; }
int mgos_config_get_default_pathzone_index9(void) { return 2; }
void mgos_config_set_pathzone_index9(struct mgos_config *cfg, int v) { cfg->pathzone.index9 = v; }

/* pathzone.index10 */
int mgos_config_get_pathzone_index10(const struct mgos_config *cfg) { return cfg->pathzone.index10; }
int mgos_config_get_default_pathzone_index10(void) { return 2; }
void mgos_config_set_pathzone_index10(struct mgos_config *cfg, int v) { cfg->pathzone.index10 = v; }

/* pathzone.index11 */
int mgos_config_get_pathzone_index11(const struct mgos_config *cfg) { return cfg->pathzone.index11; }
int mgos_config_get_default_pathzone_index11(void) { return 2; }
void mgos_config_set_pathzone_index11(struct mgos_config *cfg, int v) { cfg->pathzone.index11 = v; }

/* pathzone.index12 */
int mgos_config_get_pathzone_index12(const struct mgos_config *cfg) { return cfg->pathzone.index12; }
int mgos_config_get_default_pathzone_index12(void) { return 2; }
void mgos_config_set_pathzone_index12(struct mgos_config *cfg, int v) { cfg->pathzone.index12 = v; }

/* pathzone.index13 */
int mgos_config_get_pathzone_index13(const struct mgos_config *cfg) { return cfg->pathzone.index13; }
int mgos_config_get_default_pathzone_index13(void) { return 2; }
void mgos_config_set_pathzone_index13(struct mgos_config *cfg, int v) { cfg->pathzone.index13 = v; }

/* pathzone.index14 */
int mgos_config_get_pathzone_index14(const struct mgos_config *cfg) { return cfg->pathzone.index14; }
int mgos_config_get_default_pathzone_index14(void) { return 2; }
void mgos_config_set_pathzone_index14(struct mgos_config *cfg, int v) { cfg->pathzone.index14 = v; }

/* pathzone.index15 */
int mgos_config_get_pathzone_index15(const struct mgos_config *cfg) { return cfg->pathzone.index15; }
int mgos_config_get_default_pathzone_index15(void) { return 2; }
void mgos_config_set_pathzone_index15(struct mgos_config *cfg, int v) { cfg->pathzone.index15 = v; }

/* InnerOuterZone */
const struct mgos_config_InnerOuterZone *mgos_config_get_InnerOuterZone(const struct mgos_config *cfg) { return &cfg->InnerOuterZone; }

/* InnerOuterZone.index0 */
int mgos_config_get_InnerOuterZone_index0(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index0; }
int mgos_config_get_default_InnerOuterZone_index0(void) { return 3; }
void mgos_config_set_InnerOuterZone_index0(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index0 = v; }

/* InnerOuterZone.index1 */
int mgos_config_get_InnerOuterZone_index1(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index1; }
int mgos_config_get_default_InnerOuterZone_index1(void) { return 3; }
void mgos_config_set_InnerOuterZone_index1(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index1 = v; }

/* InnerOuterZone.index2 */
int mgos_config_get_InnerOuterZone_index2(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index2; }
int mgos_config_get_default_InnerOuterZone_index2(void) { return 1; }
void mgos_config_set_InnerOuterZone_index2(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index2 = v; }

/* InnerOuterZone.index3 */
int mgos_config_get_InnerOuterZone_index3(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index3; }
int mgos_config_get_default_InnerOuterZone_index3(void) { return 1; }
void mgos_config_set_InnerOuterZone_index3(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index3 = v; }

/* InnerOuterZone.index4 */
int mgos_config_get_InnerOuterZone_index4(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index4; }
int mgos_config_get_default_InnerOuterZone_index4(void) { return 3; }
void mgos_config_set_InnerOuterZone_index4(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index4 = v; }

/* InnerOuterZone.index5 */
int mgos_config_get_InnerOuterZone_index5(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index5; }
int mgos_config_get_default_InnerOuterZone_index5(void) { return 3; }
void mgos_config_set_InnerOuterZone_index5(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index5 = v; }

/* InnerOuterZone.index6 */
int mgos_config_get_InnerOuterZone_index6(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index6; }
int mgos_config_get_default_InnerOuterZone_index6(void) { return 1; }
void mgos_config_set_InnerOuterZone_index6(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index6 = v; }

/* InnerOuterZone.index7 */
int mgos_config_get_InnerOuterZone_index7(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index7; }
int mgos_config_get_default_InnerOuterZone_index7(void) { return 1; }
void mgos_config_set_InnerOuterZone_index7(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index7 = v; }

/* InnerOuterZone.index8 */
int mgos_config_get_InnerOuterZone_index8(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index8; }
int mgos_config_get_default_InnerOuterZone_index8(void) { return 3; }
void mgos_config_set_InnerOuterZone_index8(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index8 = v; }

/* InnerOuterZone.index9 */
int mgos_config_get_InnerOuterZone_index9(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index9; }
int mgos_config_get_default_InnerOuterZone_index9(void) { return 3; }
void mgos_config_set_InnerOuterZone_index9(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index9 = v; }

/* InnerOuterZone.index10 */
int mgos_config_get_InnerOuterZone_index10(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index10; }
int mgos_config_get_default_InnerOuterZone_index10(void) { return 1; }
void mgos_config_set_InnerOuterZone_index10(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index10 = v; }

/* InnerOuterZone.index11 */
int mgos_config_get_InnerOuterZone_index11(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index11; }
int mgos_config_get_default_InnerOuterZone_index11(void) { return 1; }
void mgos_config_set_InnerOuterZone_index11(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index11 = v; }

/* InnerOuterZone.index12 */
int mgos_config_get_InnerOuterZone_index12(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index12; }
int mgos_config_get_default_InnerOuterZone_index12(void) { return 3; }
void mgos_config_set_InnerOuterZone_index12(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index12 = v; }

/* InnerOuterZone.index13 */
int mgos_config_get_InnerOuterZone_index13(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index13; }
int mgos_config_get_default_InnerOuterZone_index13(void) { return 3; }
void mgos_config_set_InnerOuterZone_index13(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index13 = v; }

/* InnerOuterZone.index14 */
int mgos_config_get_InnerOuterZone_index14(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index14; }
int mgos_config_get_default_InnerOuterZone_index14(void) { return 1; }
void mgos_config_set_InnerOuterZone_index14(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index14 = v; }

/* InnerOuterZone.index15 */
int mgos_config_get_InnerOuterZone_index15(const struct mgos_config *cfg) { return cfg->InnerOuterZone.index15; }
int mgos_config_get_default_InnerOuterZone_index15(void) { return 1; }
void mgos_config_set_InnerOuterZone_index15(struct mgos_config *cfg, int v) { cfg->InnerOuterZone.index15 = v; }

/* distanceThreshold */
const struct mgos_config_distanceThreshold *mgos_config_get_distanceThreshold(const struct mgos_config *cfg) { return &cfg->distanceThreshold; }

/* distanceThreshold.index0 */
int mgos_config_get_distanceThreshold_index0(const struct mgos_config *cfg) { return cfg->distanceThreshold.index0; }
int mgos_config_get_default_distanceThreshold_index0(void) { return 1500; }
void mgos_config_set_distanceThreshold_index0(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index0 = v; }

/* distanceThreshold.index1 */
int mgos_config_get_distanceThreshold_index1(const struct mgos_config *cfg) { return cfg->distanceThreshold.index1; }
int mgos_config_get_default_distanceThreshold_index1(void) { return 1500; }
void mgos_config_set_distanceThreshold_index1(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index1 = v; }

/* distanceThreshold.index2 */
int mgos_config_get_distanceThreshold_index2(const struct mgos_config *cfg) { return cfg->distanceThreshold.index2; }
int mgos_config_get_default_distanceThreshold_index2(void) { return 1500; }
void mgos_config_set_distanceThreshold_index2(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index2 = v; }

/* distanceThreshold.index3 */
int mgos_config_get_distanceThreshold_index3(const struct mgos_config *cfg) { return cfg->distanceThreshold.index3; }
int mgos_config_get_default_distanceThreshold_index3(void) { return 1500; }
void mgos_config_set_distanceThreshold_index3(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index3 = v; }

/* distanceThreshold.index4 */
int mgos_config_get_distanceThreshold_index4(const struct mgos_config *cfg) { return cfg->distanceThreshold.index4; }
int mgos_config_get_default_distanceThreshold_index4(void) { return 1500; }
void mgos_config_set_distanceThreshold_index4(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index4 = v; }

/* distanceThreshold.index5 */
int mgos_config_get_distanceThreshold_index5(const struct mgos_config *cfg) { return cfg->distanceThreshold.index5; }
int mgos_config_get_default_distanceThreshold_index5(void) { return 1500; }
void mgos_config_set_distanceThreshold_index5(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index5 = v; }

/* distanceThreshold.index6 */
int mgos_config_get_distanceThreshold_index6(const struct mgos_config *cfg) { return cfg->distanceThreshold.index6; }
int mgos_config_get_default_distanceThreshold_index6(void) { return 1500; }
void mgos_config_set_distanceThreshold_index6(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index6 = v; }

/* distanceThreshold.index7 */
int mgos_config_get_distanceThreshold_index7(const struct mgos_config *cfg) { return cfg->distanceThreshold.index7; }
int mgos_config_get_default_distanceThreshold_index7(void) { return 1500; }
void mgos_config_set_distanceThreshold_index7(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index7 = v; }

/* distanceThreshold.index8 */
int mgos_config_get_distanceThreshold_index8(const struct mgos_config *cfg) { return cfg->distanceThreshold.index8; }
int mgos_config_get_default_distanceThreshold_index8(void) { return 1500; }
void mgos_config_set_distanceThreshold_index8(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index8 = v; }

/* distanceThreshold.index9 */
int mgos_config_get_distanceThreshold_index9(const struct mgos_config *cfg) { return cfg->distanceThreshold.index9; }
int mgos_config_get_default_distanceThreshold_index9(void) { return 1500; }
void mgos_config_set_distanceThreshold_index9(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index9 = v; }

/* distanceThreshold.index10 */
int mgos_config_get_distanceThreshold_index10(const struct mgos_config *cfg) { return cfg->distanceThreshold.index10; }
int mgos_config_get_default_distanceThreshold_index10(void) { return 1500; }
void mgos_config_set_distanceThreshold_index10(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index10 = v; }

/* distanceThreshold.index11 */
int mgos_config_get_distanceThreshold_index11(const struct mgos_config *cfg) { return cfg->distanceThreshold.index11; }
int mgos_config_get_default_distanceThreshold_index11(void) { return 1500; }
void mgos_config_set_distanceThreshold_index11(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index11 = v; }

/* distanceThreshold.index12 */
int mgos_config_get_distanceThreshold_index12(const struct mgos_config *cfg) { return cfg->distanceThreshold.index12; }
int mgos_config_get_default_distanceThreshold_index12(void) { return 1500; }
void mgos_config_set_distanceThreshold_index12(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index12 = v; }

/* distanceThreshold.index13 */
int mgos_config_get_distanceThreshold_index13(const struct mgos_config *cfg) { return cfg->distanceThreshold.index13; }
int mgos_config_get_default_distanceThreshold_index13(void) { return 1500; }
void mgos_config_set_distanceThreshold_index13(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index13 = v; }

/* distanceThreshold.index14 */
int mgos_config_get_distanceThreshold_index14(const struct mgos_config *cfg) { return cfg->distanceThreshold.index14; }
int mgos_config_get_default_distanceThreshold_index14(void) { return 1500; }
void mgos_config_set_distanceThreshold_index14(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index14 = v; }

/* distanceThreshold.index15 */
int mgos_config_get_distanceThreshold_index15(const struct mgos_config *cfg) { return cfg->distanceThreshold.index15; }
int mgos_config_get_default_distanceThreshold_index15(void) { return 1500; }
void mgos_config_set_distanceThreshold_index15(struct mgos_config *cfg, int v) { cfg->distanceThreshold.index15 = v; }

/* mindistance */
const struct mgos_config_mindistance *mgos_config_get_mindistance(const struct mgos_config *cfg) { return &cfg->mindistance; }

/* mindistance.index0 */
int mgos_config_get_mindistance_index0(const struct mgos_config *cfg) { return cfg->mindistance.index0; }
int mgos_config_get_default_mindistance_index0(void) { return 50; }
void mgos_config_set_mindistance_index0(struct mgos_config *cfg, int v) { cfg->mindistance.index0 = v; }

/* mindistance.index1 */
int mgos_config_get_mindistance_index1(const struct mgos_config *cfg) { return cfg->mindistance.index1; }
int mgos_config_get_default_mindistance_index1(void) { return 50; }
void mgos_config_set_mindistance_index1(struct mgos_config *cfg, int v) { cfg->mindistance.index1 = v; }

/* mindistance.index2 */
int mgos_config_get_mindistance_index2(const struct mgos_config *cfg) { return cfg->mindistance.index2; }
int mgos_config_get_default_mindistance_index2(void) { return 50; }
void mgos_config_set_mindistance_index2(struct mgos_config *cfg, int v) { cfg->mindistance.index2 = v; }

/* mindistance.index3 */
int mgos_config_get_mindistance_index3(const struct mgos_config *cfg) { return cfg->mindistance.index3; }
int mgos_config_get_default_mindistance_index3(void) { return 50; }
void mgos_config_set_mindistance_index3(struct mgos_config *cfg, int v) { cfg->mindistance.index3 = v; }

/* mindistance.index4 */
int mgos_config_get_mindistance_index4(const struct mgos_config *cfg) { return cfg->mindistance.index4; }
int mgos_config_get_default_mindistance_index4(void) { return 50; }
void mgos_config_set_mindistance_index4(struct mgos_config *cfg, int v) { cfg->mindistance.index4 = v; }

/* mindistance.index5 */
int mgos_config_get_mindistance_index5(const struct mgos_config *cfg) { return cfg->mindistance.index5; }
int mgos_config_get_default_mindistance_index5(void) { return 50; }
void mgos_config_set_mindistance_index5(struct mgos_config *cfg, int v) { cfg->mindistance.index5 = v; }

/* mindistance.index6 */
int mgos_config_get_mindistance_index6(const struct mgos_config *cfg) { return cfg->mindistance.index6; }
int mgos_config_get_default_mindistance_index6(void) { return 50; }
void mgos_config_set_mindistance_index6(struct mgos_config *cfg, int v) { cfg->mindistance.index6 = v; }

/* mindistance.index7 */
int mgos_config_get_mindistance_index7(const struct mgos_config *cfg) { return cfg->mindistance.index7; }
int mgos_config_get_default_mindistance_index7(void) { return 50; }
void mgos_config_set_mindistance_index7(struct mgos_config *cfg, int v) { cfg->mindistance.index7 = v; }

/* mindistance.index8 */
int mgos_config_get_mindistance_index8(const struct mgos_config *cfg) { return cfg->mindistance.index8; }
int mgos_config_get_default_mindistance_index8(void) { return 50; }
void mgos_config_set_mindistance_index8(struct mgos_config *cfg, int v) { cfg->mindistance.index8 = v; }

/* mindistance.index9 */
int mgos_config_get_mindistance_index9(const struct mgos_config *cfg) { return cfg->mindistance.index9; }
int mgos_config_get_default_mindistance_index9(void) { return 50; }
void mgos_config_set_mindistance_index9(struct mgos_config *cfg, int v) { cfg->mindistance.index9 = v; }

/* mindistance.index10 */
int mgos_config_get_mindistance_index10(const struct mgos_config *cfg) { return cfg->mindistance.index10; }
int mgos_config_get_default_mindistance_index10(void) { return 50; }
void mgos_config_set_mindistance_index10(struct mgos_config *cfg, int v) { cfg->mindistance.index10 = v; }

/* mindistance.index11 */
int mgos_config_get_mindistance_index11(const struct mgos_config *cfg) { return cfg->mindistance.index11; }
int mgos_config_get_default_mindistance_index11(void) { return 50; }
void mgos_config_set_mindistance_index11(struct mgos_config *cfg, int v) { cfg->mindistance.index11 = v; }

/* mindistance.index12 */
int mgos_config_get_mindistance_index12(const struct mgos_config *cfg) { return cfg->mindistance.index12; }
int mgos_config_get_default_mindistance_index12(void) { return 50; }
void mgos_config_set_mindistance_index12(struct mgos_config *cfg, int v) { cfg->mindistance.index12 = v; }

/* mindistance.index13 */
int mgos_config_get_mindistance_index13(const struct mgos_config *cfg) { return cfg->mindistance.index13; }
int mgos_config_get_default_mindistance_index13(void) { return 50; }
void mgos_config_set_mindistance_index13(struct mgos_config *cfg, int v) { cfg->mindistance.index13 = v; }

/* mindistance.index14 */
int mgos_config_get_mindistance_index14(const struct mgos_config *cfg) { return cfg->mindistance.index14; }
int mgos_config_get_default_mindistance_index14(void) { return 50; }
void mgos_config_set_mindistance_index14(struct mgos_config *cfg, int v) { cfg->mindistance.index14 = v; }

/* mindistance.index15 */
int mgos_config_get_mindistance_index15(const struct mgos_config *cfg) { return cfg->mindistance.index15; }
int mgos_config_get_default_mindistance_index15(void) { return 50; }
void mgos_config_set_mindistance_index15(struct mgos_config *cfg, int v) { cfg->mindistance.index15 = v; }
bool mgos_sys_config_get(const struct mg_str key, struct mg_str *value) {
  return mgos_config_get(key, value, &mgos_sys_config, mgos_config_schema());
}
bool mgos_sys_config_set(const struct mg_str key, const struct mg_str value, bool free_strings) {
  return mgos_config_set(key, value, &mgos_sys_config, mgos_config_schema(), free_strings);
}

const struct mgos_conf_entry *mgos_config_schema(void) {
  return mgos_config_get_schema();
}

/* Strings */
static const char *mgos_config_str_table[] = {
  "*",
  "/",
  "/diagnostics",
  "/dwpc/1",
  "/health/1",
  "/mqtt",
  "12345678",
  "192.168.4.1",
  "192.168.4.10",
  "192.168.4.2",
  "255.255.255.0",
  "80",
  "BGN",
  "DWPC_IP_UART_V2",
  "Flamenco#abcd)",
  "INBLRFTWIFI",
  "Not started",
  "RPC",
  "ZIGBEE",
  "ca.pem",
  "esp32_??????",
  "test.mosquitto.org",
  "time.google.com",
  "v2.5_07-09-23",
};

bool mgos_config_is_default_str(const char *s) {
  int num_str = (sizeof(mgos_config_str_table) / sizeof(mgos_config_str_table[0]));
  for (int i = 0; i < num_str; i++) {
    if (mgos_config_str_table[i] == s) return true;
  }
  return false;
}
