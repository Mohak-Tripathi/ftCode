import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Configuration = () => {
    const [version, setVersion] = useState(''); // State for the version input
    const [ip, setIp] = useState(''); // State for the IP input
    const [router, setRouter] = useState(''); // State for the Router input
    const [network_status, setNetworkStatus] = useState('1');
    const [file, setFile] = useState(null);
    const [telegraf, setTelegraf] = useState("")
    const [macConf, setMACConf] = useState("")



    const navigate = useNavigate()

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleTelegrafConfFileChange = (e) => {
        setTelegraf(e.target.files[0]);

    };



    const handleMACConfFileChange = (e) => {
        setMACConf(e.target.files[0])
    }


    const handleFileUpload = async () => {

        if (file.size === 0) {
            toast.warn('Uploaded file is empty');
            return;
        }

        if (!file) {
            toast.warn('Please upload a file');
            return;
        }

        // Trim any leading or trailing whitespaces and make the comparison case-insensitive
        const fileName = file.name.trim()

        if (fileName !== "update.zip") {
            toast.warn('Name of the file has to be - update.zip');
            return;
        }

        const formData = new FormData();
        formData.set('file', file);

        const token = localStorage.getItem('token');
        try {
            const response = await fetch('/api/v1/upload', {
                method: 'POST',
                headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (response.status === 401) {
                localStorage.removeItem('token');
                toast.warn('Session-expired. Please login again');
                navigate('/');
            } else if (response.ok) {
                // const data = await response.json();

                toast.success('Patch file uploaded successfully.');

            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Patch file failed to upload.');
            // Handle errors here
        }
    };



    const onSubmit = async (e) => {

        e.preventDefault(); // Corrected line

        let data = { ip, router, network_status }
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('/api/v1/static-params', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (response.status === 401) {
                localStorage.removeItem('token');
                toast.warn('Session-expired. Please login again');
                navigate('/');
            } else if (response.ok) {
                await response.json();

                toast.success('Static IP Params submitted successfully.');

            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('static params failed to submit.');
            // Handle errors here
        }
    };


    const handleTelegrafConfFileUpload = async () => {

        if (telegraf.size === 0) {
            toast.warn('Uploaded file is empty');
            return;
        }

        if (!telegraf) {
            toast.warn('Please upload a file');
            return;
        }

        // Trim any leading or trailing whitespaces and make the comparison case-insensitive
        const fileName = telegraf.name.trim()

        if (fileName !== "telegraf.conf") {
            toast.warn('Name of the file has to be - telegraf.conf');
            return;
        }




        const formData = new FormData();
        formData.set('telegraf', telegraf);

        const token = localStorage.getItem('token');
        try {
            const response = await fetch('/api/v1/telegraf-conf', {
                method: 'POST',
                headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (response.status === 401) {
                localStorage.removeItem('token');
                toast.warn('Session-expired. Please login again');
                navigate('/');
            } else if (response.ok) {
                // const data = await response.json();

                toast.success('Telegraf configuration file uploaded successfully.');
                // whichUseStateCalled(data.data);
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle errors here
        }
    };


    const handleMACConfFileUpload = async () => {



        if (macConf.size === 0) {
            toast.warn('Uploaded file is empty');
            return;
        }

        if (!macConf) {
            toast.warn('Please upload a file');
            return;
        }


        // Trim any leading or trailing whitespaces and make the comparison case-insensitive
        const fileName = macConf.name.trim()

        if (fileName !== "macconfiguration.json") {
            toast.warn('Name of the file has to be - macconfiguration.json');
            return;
        }

        if (macConf.size === 0) {
            toast.warn('Uploaded file is empty');
            return;
        }

        const formData = new FormData();
        formData.set('mac', macConf);

        const token = localStorage.getItem('token');

        try {
            const response = await fetch('/api/v1/mac-conf', {
                method: 'POST',
                headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (response.status === 401) {
                localStorage.removeItem('token');
                toast.warn('Session-expired. Please login again');
                navigate('/');
            } else if (response.ok) {
                await response.json();
                // Handle the response data here

                toast.success('MAC configuration file uploaded successfully.');

            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle errors here
        }
    };

    const handleScript = async () => {

        const token = localStorage.getItem('token');


        fetch('/api/v1/trigger-patch', {
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
                    response.json(); // Continue processing if the response is OK
                    toast.success('Patch file submitted successfully.');
                } else {
                    // Handle other response statuses
                    throw new Error('Failed to fetch data');
                }
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error('Error:', error);

            });



    };




    const handleTelegrafSubmit = async () => {

        const token = localStorage.getItem('token');



        fetch('/api/v1/telegraf-submit', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })

            .then(response => {
                if (response.status === 401) {
                    // Handle 401 Unauthorized
                    localStorage.removeItem("token");

                    toast.warn('Session-expired. Please login again');
                    navigate("/");

                } else if (response.ok) {
                    response.json(); // Continue processing if the response is OK
                    toast.success('Telegraf configuration file submitted successfully in backend.');
                } else {
                    // Handle other response statuses
                    throw new Error('Failed to fetch data');
                }
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error('Error:', error);

            });

    };


    const handleMACSubmit = async () => {

        const token = localStorage.getItem('token');



        fetch('/api/v1/mac-submit', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })

            .then(response => {
                if (response.status === 401) {
                    // Handle 401 Unauthorized
                    localStorage.removeItem("token");

                    toast.warn('Session-expired. Please login again');
                    navigate("/");

                } else if (response.ok) {
                    response.json(); // Continue processing if the response is OK
                    toast.success('MAC configuration file submitted successfully.');
                } else {
                    // Handle other response statuses
                    throw new Error('Failed to fetch data');
                }
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error('Error:', error);

            });

    };

    const handleFileUpdate = async () => {

        const token = localStorage.getItem('token');


        fetch('/api/v1/static-params-trigger', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })

            .then(response => {
                if (response.status === 401) {
                    // Handle 401 Unauthorized
                    localStorage.removeItem("token");

                    toast.warn('Session-expired. Please login again');
                    navigate("/");

                } else if (response.ok) {
                    response.json(); // Continue processing if the response is OK
                    toast.success('static params submitted successfully.');
                } else {
                    // Handle other response statuses
                    throw new Error('Failed to fetch data');
                }
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error('Error:', error);

            });

    };
  



    useEffect(() => {
        getConfigData()
        // eslint-disable-next-line
    }, [])


    const getConfigData = async () => {

        const token = localStorage.getItem('token');


        fetch('/api/v1/config-data', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })

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


                setVersion(data.data.version);
                setIp(data.data.static_ip_params.ip)
                setRouter(data.data.static_ip_params.router)
                setNetworkStatus(data.data.admin.wifi_status)
            })
            .catch(error => {
                console.error('Error:', error);

            });



    };




    const handleMACDownload = async () => {
        try {
            const token = localStorage.getItem('token');

            const response = await fetch('/api/v1/download/mac', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.status === 401) {
                // Handle 401 Unauthorized
                localStorage.removeItem("token");

                toast.warn('Session-expired. Please login again');
                navigate("/");
            } else if (response.ok) {

                const contentDisposition = response.headers.get('content-disposition');
                const fileNameMatch = contentDisposition && contentDisposition.match(/filename="(.*)"/);
                const suggestedFileName = fileNameMatch ? fileNameMatch[1] : 'macconfiguration.json';

                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                // Create an anchor element and trigger the download
                const a = document.createElement('a');
                a.href = url;
                a.download = suggestedFileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

            } else {
                // Handle other response statuses
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleTelegrafDownload = async () => {
        try {
            const token = localStorage.getItem('token');

            const response = await fetch('/api/v1/download/telegraf', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.status === 401) {
                // Handle 401 Unauthorized
                localStorage.removeItem("token");

                toast.warn('Session-expired. Please login again');
                navigate("/");
            } else if (response.ok) {

                const contentDisposition = response.headers.get('content-disposition');
                const fileNameMatch = contentDisposition && contentDisposition.match(/filename="(.*)"/);
                const suggestedFileName = fileNameMatch ? fileNameMatch[1] : 'telegraf.conf';

                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                // Create an anchor element and trigger the download
                const a = document.createElement('a');
                a.href = url;
                a.download = suggestedFileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } else {
                // Handle other response statuses
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <>
            <div className='text-3xl font-bold text-center p-3 m-2'>Configuration</div>


            <div className='w-full lg:w-4/5 mx-auto p-4 shadow-2xl m-3'>
                {/* Version input */}
                <div className="mb-4 w-full md:w-1/3 m-3 p-3">
                    <label htmlFor="version" className="block font-bold text-2xl mb-4">Software Version</label>
                    <input
                        type="text"
                        id="version"
                        className="w-full md:4/5 lg:w-1/2 p-2 border border-gray-300 rounded"
                        value={version}
                        onChange={(e) => setVersion(e.target.value)}
                        readOnly // Readonly property
                    />
                </div>

                {/* Static IP Params form */}
                <div className="m-3 p-3">
                    <label className="block mb-5 font-bold text-2xl">Static IP Configuration</label>

                    <form className='grid grid-cols-1 md:grid-cols-2 gap-4' onSubmit={onSubmit}>
                        <div className="mb-2 w-full md:w-1/3">
                            <label htmlFor="ip" className="block text-gray-700 font-bold">Static IP</label>
                            <input
                                type="text"
                                id="ip"
                                className="w-full p-2 border border-gray-300 rounded"
                                value={ip}
                                onChange={(e) => setIp(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 w-full md:w-1/3">
                            <label htmlFor="router" className="block text-gray-700 font-bold">Gateway</label>
                            {/* last minute change from router to Gateway */}
                            <input
                                type="text"
                                id="router"
                                className="w-full p-2 border border-gray-300 rounded"
                                value={router}
                                onChange={(e) => setRouter(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 w-full md:w-1/3">
                            <label htmlFor="network_status" className="block text-gray-700 font-bold">Interface Type</label>
                            <select
                                id="network_status"
                                className="w-full p-2 border border-gray-300 rounded"
                                value={network_status}
                                onChange={(e) => setNetworkStatus(e.target.value)}
                            >
                                <option value="1">Wifi</option>
                                <option value="0">Ethernet</option>
                            </select>
                        </div>




                        <div className="mb-2 md:col-span-2 lg:w-1/2 block">

                         
                        
                            <button type="submit" className='px-0 py-2 w-full md:w-1/2 lg:w-1/6 mx-auto border bg-blue-500 text-white font-bold rounded'>
                                Save
                            </button>
                            <button type="button" onClick={handleFileUpdate} className='px-0 py-2 w-full md:w-1/2 lg:w-1/6 mx-auto border bg-blue-500 text-white font-bold rounded'>
                                Update
                            </button>
                        </div>

                    </form>
                </div>


                <div className='m-3 p-3'>
                    <label className='block mb-5 font-bold text-2xl'>Software Update</label>


                    <input onChange={handleFileChange} className="mt-2 mb-4 block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />


                    <div className='mt-2 flex flex-col md:flex-row items-center'>
                        <button onClick={handleFileUpload} className="py-2 px-6 mb-4 mr-2 w-full lg:w-[10%] bg-blue-500 text-white font-bold rounded">Save</button>

                        <button onClick={handleScript} className="py-2 px-6 mb-4 mr-2 w-full lg:w-[10%] bg-blue-500 text-white font-bold rounded">Update</button>
                    </div>
                </div>






                <div className='m-3 p-3'>
                    <label className='mb-5 font-bold text-2xl'>Telegraf Config</label>

                    <input
                        onChange={handleTelegrafConfFileChange}
                        className="mt-2 mb-1 block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        aria-describedby="file_input_help"
                        id="file_input"
                        type="file"
                    />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                        (Upload telegraf.conf file only)
                    </p>

                    <div className="mt-2 flex flex-col md:flex-row items-center">
                        <button
                            onClick={handleTelegrafConfFileUpload}
                            className="py-2 px-6 mb-4 mr-2 w-full lg:w-[10%] bg-blue-500 text-white font-bold rounded"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleTelegrafSubmit}
                            className="py-2 px-4 mb-4 mr-2 w-full  lg:w-[10%] bg-blue-500 text-white font-bold rounded"
                        >
                            Update
                        </button>
                        <button
                            onClick={handleTelegrafDownload}
                            className="py-2 px-4 mb-4 w-full lg:w-[10%]  bg-blue-500 text-white font-bold rounded"
                        >
                            Download
                        </button>
                    </div>
                </div>




                <div className='m-3 p-3'>

                    <label className='mb-5 font-bold text-2xl'>MAC Configuration</label>


                    <input onChange={handleMACConfFileChange} className="mt-2 mb-1 block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        aria-describedby="file_input_help" id="file_input" type="file" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-300" id="file_input_help"> (Upload macconfiguration.json file only) </p>
                    <div className="mt-2 flex flex-col md:flex-row items-center">
                        <button onClick={handleMACConfFileUpload}
                            className="py-2 px-6 mb-4 mr-2 w-full lg:w-[10%] bg-blue-500 text-white font-bold rounded">
                            Save</button>
                        <button onClick={handleMACSubmit} className="py-2 px-6 mb-4 mr-2 w-full lg:w-[10%] bg-blue-500 text-white font-bold rounded">Update</button>
                        <button onClick={handleMACDownload} className="py-2 px-6 mb-4 mr-2 w-full lg:w-[10%] bg-blue-500 text-white font-bold rounded"> Download</button>



                    </div>
                </div>


            </div>

        </>
    );
}

export default Configuration;
