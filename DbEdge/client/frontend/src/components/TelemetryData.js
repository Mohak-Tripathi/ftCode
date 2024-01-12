import React, { useEffect, useState } from 'react'
import DataTable from './DataTable'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import postTimeDuration from './PostRequest';
import TimeDuration from "./TimeDuration"
import getTimeDurationData from "./GetTimeDuration"
import getrefreshTimer from "./RefreshTimer"


const TelemetryData = () => {

  const [dataPatternData, setDataPatternData] = useState([])
  const [updatedData, setUpdatedData] = useState([]);
  const [timeDuration, setTimeDuration] = useState("1")
  const [refreshTimer, setRefreshTimer] = useState("")
  const [processDuration, setProcessDuration] = useState("")
  const [page] = useState("DataPattern")

  const [selectedDeviceType, setSelectedDeviceType] = useState('');

  const handleDeviceTypeChange = event => {
    setSelectedDeviceType(event.target.value);
  };


  const handleButtonClicked = () => {

    postheartBeatTrafficData(selectedDeviceType)
    toast.success(`${selectedDeviceType} device is selected`)

  }



  const navigate = useNavigate()


  const handleTimeDuration = (e) => {
    setTimeDuration(e.target.value)
  }


  const handleButtonClick = async (e) => {

    await postTimeDuration(timeDuration, page, navigate, toast);
    toast.success(`${timeDuration} hour measurement window is selected`);
    // setDataPatternData([])
  }


  useEffect(() => {

    // getdataPattern()
    getrefreshTimer(page, setRefreshTimer, setProcessDuration, navigate, toast)
    getTimeDurationData(page, setTimeDuration, navigate, toast)
    //eslint-disable-next-line
  }, [])


  useEffect(() => {
    // Update the data whenever heartbeatAndTrafficeData changes
    if (dataPatternData) {
      const updatedData = dataPatternData.map((item, index) => {
        return { id: index + 1, ...item }; // Adding 1 to index to start from 1
      });
      setUpdatedData(updatedData);
    }
    else {
      setUpdatedData([])
    }

  }, [dataPatternData]);

  // const getdataPattern = async () => {


  //   const token = localStorage.getItem('token');

  //   fetch('/api/v1/data-pattern', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`,
  //     },
  //   })
  //     // .then(response => response.json())
  //     .then(response => {
  //       if (response.status === 401) {
  //         // Handle 401 Unauthorized
  //         localStorage.removeItem("token");
  //         toast.warn('Session-expired. Please login again');
  //         navigate("/");
  //       } else if (response.ok) {
  //         return response.json(); // Continue processing if the response is OK
  //       } else {
  //         // Handle other response statuses
  //         throw new Error('Failed to fetch data');
  //       }
  //     })
  //     .then(data => {
  //       setDataPatternData(data.data);
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);


  //     });
  // };



  const postheartBeatTrafficData = async (selectedDeviceType) => {
    const token = localStorage.getItem('token');
    const requestData = {
      "data": selectedDeviceType
    }

    try {
      const response = await fetch('/api/v1/data-pattern-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      });


      if (response.status === 401) {
        localStorage.removeItem('token');
        toast.warn('Session-expired. Please login again');
        navigate('/');
      } else if (response.ok) {
        const data = await response.json();

        if (Array.isArray(data.data) && data.data.length > 0) {
          setDataPatternData(data.data);
          // setHeartbeatAndTrafficeData(data.data);
        } else {
          // Handle empty data, e.g., display a message
          toast.info('No data available for the selected device type.');
          setDataPatternData([]);
          // setHeartbeatAndTrafficeData([]);
        }
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here
    }
  };



  if (!dataPatternData) return null;


  const HeaderObj = [
    {
      Header: 'Sr No.',
      accessor: 'id',
    },
    {
      Header: 'Device Type',
      accessor: 'Device_type',
    },
    {
      Header: 'Field',
      accessor: 'Field',
    },
    {
      Header: 'Minimum Value',
      accessor: 'MinValue',
    },
    {
      Header: 'Max Value',
      accessor: 'MaxValue',
    },
    {
      Header: 'Average',
      accessor: 'avg',
    },
  ]


  return (
    <>


      <div className='text-2xl lg:text-3xl font-bold text-center p-3 m-22'>DataPattern and Anomaly </div>
      <div className='text-sm font-semibold text-center text-gray-700 mb-8'>
        (Last TimeStamp - {refreshTimer} & Duration of Processing {processDuration})
      </div>
  
      <div className='flex  flex-col items-center lg:flex-row lg:justify-around'>

        <div>
          <TimeDuration
            value={timeDuration}
            onChange={handleTimeDuration}
            onClick={handleButtonClick}
          />
  
        </div>
        <div className='p-1 lg:p-4 shadow-sm'>
          <label className='block lg:inline font-bold p-1 lg:p-2 mx-2' htmlFor="deviceTypeSelect">Device Type:</label>
          <select className='py-1 px-2 lg:p-2 mx-2 border border-gray-400 rounded' id="deviceTypeSelect" value={selectedDeviceType} onChange={handleDeviceTypeChange}>
            <option value="">Select Device Type</option>
            <option value="IAQ">IAQ</option>
            <option value="Gateway">Gateway</option>
            <option value="RRH">RRH</option>
            <option value="Range-Extender">Range Extender</option>
            <option value="DWPC">DWPC</option>
            <option value="PixelMr">PixelMr</option>
            <option value="PixelDesk">PixelDesk</option>

          </select>
          <button className='p-1 lg:p-2 m-2 border border-gray-400 bg-blue-500 text-white font-semibold lg:font-bold rounded' onClick={handleButtonClicked}>Submit</button>
        </div>
      </div>



   
      <div className='w-full lg:w-4/5 mx-auto p-2 shadow-2xl'>
        <div className="overflow-x-auto">
          <DataTable data={updatedData} obj={HeaderObj} sort={true} />
        </div>
      </div>

    </>
  )
}

export default TelemetryData;