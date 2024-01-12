#include "websocket.h"
#include "iaq_globals.h"
#include "rpcCallback.h"
/******* HTTP server, response variables *******/
struct mg_serve_http_opts http_opts = {.document_root = "."};
struct mg_connection *nc, *s_conn;

//  JSON message which is sent to web page
char *dataString = "{\"time\":%llu,\"Temperature\":%0.2f,\"Pressure\":%0.2f,\"Co2\":%0.2f,\"TVocIndex\":%0.2f, \"RelativeHumidity\":%0.2f,\"Lux\":%0.2f, \"Pm1\":%0.2f, \"Pm2_5\":%0.2f, \"Pm4\":%0.2f, \"Pm10\":%0.2f,\"NoiseLevel\":%0.2f,\"Temp_R1\":%0.2f,\"TEMP_R2\":%0.2f,\"HUM_R1\":%0.2f}";
/*******************************************************************************
 * @fn     web_sockets_connection
 *
 *@brief   Register the http endpoint for web sockets
 *
 *@param   None
 *
 *@return  None
 */

void web_sockets_connection(void)
{

  void *user_data = "";

  //  Get the server handle.
  if ((nc = mgos_get_sys_http_server()) == NULL)
  {
    puts("The value of nc is NULL");
  }
  //  Bind the event handler to the HTTP server.
  mgos_register_http_endpoint("/", web_sockets_handler, user_data);
}

/*******************************************************************************
 *@fn     web_sockets_handler
 *
 *@brief   Handles all the web sockets events
 *
 *@param   nc -> connection, ev -> event
 *
 *@return  None
 */
void web_sockets_handler(struct mg_connection *nc, int ev, void *ev_data, void *user_data)
{
  struct http_message *hm = (struct http_message *)ev_data;
  switch (ev)
  {
  case MG_EV_HTTP_REQUEST:
  {
    mg_serve_http(nc, hm, http_opts);

    break;
  }
  case MG_EV_SEND:
  {
    break;
  }
  case MG_EV_WEBSOCKET_HANDSHAKE_DONE:
  {
    s_conn = nc;
    break;
  }
  case MG_EV_WEBSOCKET_FRAME:
  {
    break;
  }
  case MG_EV_CLOSE:
  {
    break;
  }
  case MG_EV_TIMER:
  {
    break;
  }
  }
}

/*******************************************************************************
 *@fn     broadcast
 *
 *@brief   broadcasts the data to webpage
 *
 *@param   nc -> connection, ev -> event
 *
 *@return  None
 */
void broadcast(void)
{
  struct mg_mgr *mgr = mgos_get_mgr();

  for (struct mg_connection *c = mg_next(mgr, NULL); c != NULL;
       c = mg_next(mgr, c))
  {

    if (c->flags & MG_F_IS_WEBSOCKET)
    {

      maintime = time(0);
      epochTime = (uint64_t)time(&maintime);
      epochTime = epochTime * 1000;
      mg_printf_websocket_frame(c, WEBSOCKET_OP_TEXT, dataString, epochTime, iaqData.shct3Temperature, iaqData.ms5637Pressure, iaqData.scd30Co2,
                                iaqData.Tvoc, iaqData.shct3RelativeHumidity, iaqData.veml7700Lux,
                                iaqData.sps30Pm1, iaqData.sps30Pm2_5, iaqData.sps30Pm4, iaqData.sps30Pm10, iaqData.ics4343NoiseLevel, iaqData.ms5637Temperature, iaqData.scd30Temperature, iaqData.scd30Humidity);
    }
  }
}

void send_message_to_webui(char *message)
{
  // printf("Data sending to webui\n");
  if (s_conn != NULL)
  {
    mg_printf_websocket_frame(s_conn, WEBSOCKET_OP_TEXT, "{\"Message\":%s}", message);
  }
}