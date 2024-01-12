import React, { useEffect, useState } from 'react';
import "./SystemInfo.css"
import { Paper } from '@mui/material';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SystemInfoAction } from "../actions/systemInfoAction"
import { useAlert } from 'react-alert'
import io from 'socket.io-client';



const SystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState("");
  const [selectedCommand, setSelectedCommand] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();



  useEffect(() => {

    const socket = io(`http://${window.location.hostname}:8085`, {
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      console.log('Socket connected');
    });


    socket.on('message', (data) => {
      console.log('Received1:', data, typeof (data));


      // Check if data and status_message are defined
      if (data) {
        setSystemInfo(prevData => {
          return prevData + '\n' + JSON.stringify(data);
        });
      } else {
        console.error('Invalid data received:', data);
      }
    });


    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    socket.addEventListener('error', (event) => {
      console.error('WebSocket error:', event);
    });



    return () => {
      console.log('Component unmounted. Disconnecting Socket.IO.');
      socket.disconnect();
    };
  }, []);

  const handleUpdate = async (data) => {

    dispatch(SystemInfoAction(data, navigate, alert))

  }


  let commands = [
    'System info',
    'Network info',
    'Memory info',
    'Communication service status',
    'GPIO monitor status',
    'Algorithm 1 status',
    'Algorithm 2 status',
    'Algorithm 3 status',
    'Algorithm 4 status',
    'Algorithm 5 status',
    'MOM bridge status',
    'Reserved 1',
    'Reserved 2',
    'Reserved 3',
    'Reserved 4',
    'Reserved 5',
  ];

  return (
    <>
      <div>
        <Paper

          style={{
            maxWidth: 985,
            minHeight: 450,
            margin: "25px auto",

          }}
          elevation={20}
        >
          <div className="container">
            <div className="left">
              <h3 className="command-heading">Command List </h3>
              <div className="command-list">
                <ul>
                  {commands.map((command, index) => (
                    <li
                      key={command}
                      className={`command-item ${selectedCommand === command ? 'selected' : ''}`}
                      onClick={() => {
                        handleUpdate(command);
                        setSelectedCommand(command);
                      }}
                    >
                      <span className="list-number">{index + 1}. </span>
                      {command}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="terminal">
                <pre>
                  <code className="output">

                    <div className="white-text">{systemInfo}</div>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default SystemInfo;

