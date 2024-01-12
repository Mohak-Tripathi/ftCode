import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Login from "./components/Login"
import NetworkTraffic from "./components/NetworkTraffic"
import DeviceTraffic from './components/DeviceTraffic';
import TelemetryData from './components/TelemetryData';
import Configuration from "./components/Configuration"
import DeviceHealth from "./components/DeviceHealth"



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: 
    ( 
      <>
   < Login/>
    </>
    )
  },

  {
    path: "/device-health",
    element:
    ( 
      <>
    <Navbar />
   < DeviceHealth />
    </>
    )
  },
  {
    path: "/network-traffic",
    element:
    ( 
      <>
    <Navbar />
    <NetworkTraffic/> 
    </>
    )
  },
  {
    path: "/device-traffic",
    element: (
      <>
        <Navbar />
        <DeviceTraffic />
      </>
    )
  },
  {
    path: "/telemetry-data",
    element: (
      <>
        <Navbar />
        <TelemetryData/>
      </>
    )
  },
  {
    path: "/config",
    element:
    ( 
      <>
    <Navbar />
   < Configuration/>
    </>
    )
  },
])

function App() {
  return (
    <RouterProvider router={appRouter}> 

    </RouterProvider>
  );
}

export default App;
