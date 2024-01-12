#ifndef RPCCALLBACK_RPCCALLBACK_H_
#define RPCCALLBACK_RPCCALLBACK_H_

#include "mgos_rpc.h"
#include "mgos.h"


/*Green LED*/
#define GLED 2 // GPIO_5

/*Yellow LED*/
#define YLED 5 // GPIO_2

uint8_t debug;

void rpcCallBacksInit();
/******* RPC call back functions *******/
void rebootSensor(struct mg_rpc_request_info *ri, void *cb_arg, struct mg_rpc_frame_info *fi, struct mg_str args);
void getSysInfo(struct mg_rpc_request_info *ri, void *cb_arg, struct mg_rpc_frame_info *fi, struct mg_str args);
void FanManuval(struct mg_rpc_request_info *ri, void *cb_arg, struct mg_rpc_frame_info *fi, struct mg_str args);
void Co2Calibration(struct mg_rpc_request_info *ri, void *cb_arg, struct mg_rpc_frame_info *fi, struct mg_str args);
void sensirion_soft_reset(struct mg_rpc_request_info *ri, void *cb_arg, struct mg_rpc_frame_info *fi, struct mg_str args);
void device_status(struct mg_rpc_request_info *ri, void *cb_arg, struct mg_rpc_frame_info *fi, struct mg_str args);
void debugWrapper(struct mg_rpc_request_info *ri, void *cb_arg, struct mg_rpc_frame_info *fi, struct mg_str args);

#endif