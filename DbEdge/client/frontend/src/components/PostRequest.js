const postTimeDuration = async (timeDuration, page, navigate, toast) => {
    const token = localStorage.getItem('token');
    const requestData = {
      data: timeDuration,
      page: page
    };
    

    try {
      const response = await fetch('/api/v1/time-duration', {
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
        await response.json();
  
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here
    }
  };
  
  export default postTimeDuration;