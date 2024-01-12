

import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import postTimeDuration from './PostRequest';
import TimeDuration from "./TimeDuration"
import getTimeDurationData from "./GetTimeDuration"
import getrefreshTimer from "./RefreshTimer"
import { ResponsiveBar } from '@nivo/bar'



const NetworkTraffic = () => {

  const [trafficeData, setTrafficData] = useState([])
  const [timeDuration, setTimeDuration] = useState("1")
  const [refreshTimer, setRefreshTimer] = useState("")
  const [processDuration, setProcessDuration] = useState("")
  const [page] = useState("trafficSummary")





  // const [updatedData, setUpdatedData] = useState([]);

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

    getTrafficData()
    getrefreshTimer(page, setRefreshTimer, setProcessDuration, navigate, toast)
    getTimeDurationData(page, setTimeDuration, navigate, toast)
    //eslint-disable-next-line
  }, [])




  const getTrafficData = async () => {

    const token = localStorage.getItem('token');


    fetch('/api/v1/total-packet-per-bucket', {
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
          console.log('Session expired');
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

         

        setTrafficData(data.data);
      })
      .catch(error => {
        console.error('Error:', error);


      });



  };



  if (!trafficeData) return null;



  return (
    <>


      <div className='text-2xl lg:text-3xl font-bold text-center p-3 m-2'>Network Traffic Summary Per Device  </div>
      {/* <div className='text-xl font-bold text-center'>( Last TimeStamp - {refreshTimer} & Duration of Processing {processDuration} )</div>
   */}
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


      <div className='h-[65vh] w-full lg:w-[80%] mx-auto p-4 shadow-2xl'>

        <ResponsiveBar
          data={trafficeData}
          keys={[
            'Expected_Traffic',
            'total_Traffic'

          ]}
          indexBy="bucket_name"
          margin={{ top: 50, right: 10, bottom: 50, left: 45 }}
          padding={0.4}
          groupMode="grouped"
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          animate={true} // Add this line
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[
            {
              match: {
                id: 'fries'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'sandwich'
              },
              id: 'lines'
            }
          ]}
          borderRadius={10}
          borderWidth={1.5}
          borderColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                1.6
              ]
            ]
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 6,
            tickPadding: 6,
            tickRotation: 0,
            legend: 'Device-Type',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'packets',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                1.6
              ]
            ]
          }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'top',
              direction: 'row',
              justify: 'center', // Center the legends horizontally
              translateX: 0, // Reset translateX
              translateY: -30, // Adjust translateY to move legends above the chart
              // justify: 'center',
              // translateX: 120,
              // translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
        />
      </div>
      {/* </div> */}
    </>



  )
}

export default NetworkTraffic

























