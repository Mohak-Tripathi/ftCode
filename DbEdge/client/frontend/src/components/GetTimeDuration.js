
const getTimeDurationData = async (page, setTimeDuration, navigate, toast) => {
 
    const token = localStorage.getItem('token');
   
  
      fetch('/api/v1/time-duration', {
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
          if(page==="heartBeat"){
            setTimeDuration(data.data.page1.duration);
          }else if(page==="trafficSummary"){
            setTimeDuration(data.data.page2.duration);
          }
          else if(page==="heartBeatTraffic"){
            setTimeDuration(data.data.page3.duration);
          }
          else if(page==="DataPattern"){
            setTimeDuration(data.data.page4.duration);
          }
    
        })
        .catch(error => {
          console.error('Error:', error);
    
  
        });
  
  
  
  };
  export default getTimeDurationData ;