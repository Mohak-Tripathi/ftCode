import React, { useState } from 'react';
import Logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()


  const handleUsernameChange = (e) => {

    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a data object to send in the POST request
    const data = {
      username: username,
      password: password,
    };


    try {
      const response = await fetch('/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });


      if (response.status === 401) {
        toast.warn('Session-expired. Please login again');

      } else if (response.ok) {
        const data = await response.json();
        // Handle the response data
        console.log(data);
        localStorage.setItem('token', data.token);
        navigate("/device-health")
      } else {
        toast.error('Login or password is incorrect');
      }
    } catch (error) {
      toast.error('Login or password is incorrect');
      console.error('Error:', error);
    }


  }

  return (

   


    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-6 md:p-16 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/3">
        <img className="p-3 mb-2" src={Logo} alt="Flamencotech logo" />  


        <form onSubmit={handleFormSubmit} className="w-full">
          <div className="mb-4 md:mb-8 w-full">
            <label className="block text-gray-300 text-2xl font-medium font-sans mb-3" htmlFor="username">Username</label>
            <input className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="username" value={username} onChange={handleUsernameChange} type="text" placeholder="Username" />

          </div>



          <div className="mb-6 w-full relative">
            <label className="block text-gray-300 text-2xl font-medium mb-3" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={handlePasswordChange}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <span
                className="absolute right-0 top-0 m-1 cursor-pointer text-2xl"
                onClick={handleTogglePassword}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
          </div>
         
          <div className="flex items-center justify-between">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
