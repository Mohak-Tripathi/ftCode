

const getrefreshTimer = async (page, setRefreshTimer, setProcessDuration, navigate, toast) => {
 
    const token = localStorage.getItem('token');
   
  
      fetch('/api/v1/time-stamp', {
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
         

          function formatDuration(milliseconds) {
            const totalSeconds = Math.floor(milliseconds / 1000);
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
          
            // Ensure two digits for each part
            const formattedHours = String(hours).padStart(2, '0');
            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');
          
            return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
          }
          
    
     

          if(page==="heartBeat"){

            setProcessDuration(formatDuration(data.config.Total_Execution_Time_FirstPage))
          }else if(page==="trafficSummary"){
            // setTimeDuration(data.data.page2.duration);
            setProcessDuration(formatDuration(data.config.Total_Execution_Time_SecondPage))
          }
          else if(page==="heartBeatTraffic"){
            setProcessDuration(formatDuration(data.config.Total_Execution_Time_ThirdPage))
          }
          else if(page==="DataPattern"){
            setProcessDuration(formatDuration(data.config.Total_Execution_Time_LastPage))
          }

          setRefreshTimer(data.config.Last_TimeStamp);
     
        })
        .catch(error => {
          console.error('Error:', error);
    
  
        });
  
  
  
  };
  export default getrefreshTimer;