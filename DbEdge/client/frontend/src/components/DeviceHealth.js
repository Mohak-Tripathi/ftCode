import React, { useEffect, useState } from 'react'
import HeartbeatSumCard from './HeartbeatSumCard'
import Loader from './ShimmerEffect'
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
import postTimeDuration from './PostRequest';
import TimeDuration from "./TimeDuration"
import getTimeDurationData from "./GetTimeDuration"
import getrefreshTimer from "./RefreshTimer"

const DeviceHealth = () => {

  const [heartBeat, setHeartBeat] = useState(null)

  const [timeDuration, setTimeDuration] = useState("1")
  const [refreshTimer, setRefreshTimer] = useState("")
  const [processDuration, setProcessDuration] = useState("")
  const [page] = useState("heartBeat")


  const navigate = useNavigate()


  const handleTimeDuration = (e) => {
    setTimeDuration(e.target.value)
  }


  const handleButtonClick = async (e) => {

    // postTimeDuration(timeDuration, page)
    await postTimeDuration(timeDuration, page, navigate, toast);
    toast.success(`${timeDuration} hour measurement window is selected`);

  }


  useEffect(() => {

    getHeartBeatData()
    getrefreshTimer(page, setRefreshTimer, setProcessDuration, navigate, toast)
    getTimeDurationData(page, setTimeDuration, navigate, toast)
    //eslint-disable-next-line
  }, [])






  const getHeartBeatData = async () => {

    const token = localStorage.getItem('token');

    fetch('/api/v1/heart-beat', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      // .then(response => response.json())
      .then(response => {
        if (response.status === 401) {
          // Handle 401 Unauthorized
          localStorage.removeItem("token");
          toast.warn('Session-expired. Please login again');
          navigate("/");

        } else if (response.ok) {
          return response.json(); // Continue processing if the response is OK
        } else {
          // Handle other response statuses
          throw new Error('Failed to fetch data');
        }
      })
      .then(data => {
        // Handle the response data
        setHeartBeat(data.data);
      })
      .catch(error => {
        console.error('Error:', error);


      });

  };




  if (heartBeat == null) {

    return (<Loader />)
  }
  return (
    <>
{/* text-3xl font-bold text-center p-3 m-2 */}
      <div className='text-2xl lg:text-3xl font-bold text-center p-3 m-2'>Device Health (HeartBeat) Summary Per Device</div>
      <div className='text-sm  font-semibold text-center text-gray-700 mb-8'>
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

      </div>

      <div className='w-full sm:w-4/5  mx-auto p-4 shadow-2xl'>
        <div className="flex flex-wrap justify-between" >
          {Array.isArray(heartBeat) ? (
            heartBeat.map(function (data, index) {
              return (
                <>
                  <div key={data.Bucket} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className='font-bold text-center'>{data.Bucket}</div>
                    <div className="hover:shadow-md hover:scale-110"> <HeartbeatSumCard value={data} /> </div>
                  </div>

                </>
              )
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  )
}


export default DeviceHealth;