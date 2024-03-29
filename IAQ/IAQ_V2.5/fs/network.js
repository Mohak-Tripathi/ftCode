

let userRole = JSON.parse(localStorage.getItem("user") || null)


if(userRole ==="Demo"){
 document.getElementById("network-page").style.display= "none"
 
}


function getNetworkData(){


  // let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
      fetch("/rpc/Config.Get", {
      method: 'GET',
      // headers: {
      //   Authorization: `Bearer ${BearerCheck}`,
      // },
    })
      // .then(response => response.json())
      .then((response)=> {
  
        if(response.status === 200){
            return response.json()
        }
        else if(response.status === 401){
          window.location.href= "./login.html"
        }
        else{
            alert("something went wrong");
        }})
      .then(response => {
        console.log(response)

        document.getElementById("network-wifi-ssid").value = response.wifi.sta.ssid
        document.getElementById("network-wifi-password").value =  response.wifi.sta.pass
        document.getElementById("network-static-ip").value = response.eth.ip
        document.getElementById("network-gateway-ip").value = response.eth.gw

        // document.getElementById("network-static-ip").value = response.wifi.sta.ip
        // document.getElementById("network-gateway-ip").value = response.wifi.sta.gw

        document.getElementById("network-netmask").value = response.eth.netmask
        // document.getElementById("network-static-ip-ethernet").value = response.static_ip_eth
        // document.getElementById("network-gateway-ip-ethernet").value = response.static_ip_eth_pass
         document.getElementById("ntp-data").value = response.sntp.server
         document.getElementById("debug-data").value = response.debug.udp_log_addr


      })
      .catch(err => console.error(err));
    }
  
  
    getNetworkData()







document.getElementById("network-wifi-form").addEventListener("submit", getWifiInferenceForm)


function  getWifiInferenceForm(e){
e.preventDefault()
  let networkSsid = document.getElementById("network-wifi-ssid").value
  let networkPassword = document.getElementById("network-wifi-password").value


var networkData = JSON.stringify({
  config:{
      wifi: {
      "sta.ssid": networkSsid,
      "sta.pass": networkPassword 
}
  }
    
  
  });

  // let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
    fetch("/rpc/Config.Set", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json",
            // Authorization: `Bearer ${BearerCheck}`,
        },
        body: networkData
    })
    .then((res)=> {
    if(res.status === 200){
        return res.json()
    }   else if(res.status === 401){
      window.location.href="./login.html"
    }
    else{
        alert("something went wrong")  ;
    }})
    .then((data)=>{

      let new_data = JSON.stringify({ reboot: false })
      fetch("/rpc/Config.Save", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        body: new_data 

    })
    .then((res)=> {
      if(res.status === 200){
      return res.json()
      }
      else if(res.status === 401){
        window.location.href="./login.html"
      }
      else{
          alert("something went wrong")  ;
      }})
      .then((data)=>{
        console.log(data) 
        alert("Wifi credentials parameter is set sucessfully");
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))


    }


    //apply

// document.getElementById("wifi-cred-button").addEventListener("click", getWifiInferenceApplyForm)


// function  getWifiInferenceApplyForm(){

//   let networkSsid = document.getElementById("network-wifi-ssid").value
//   let networkPassword = document.getElementById("network-wifi-password").value


// var inferenceApplyData = JSON.stringify({
//     "SSID": networkSsid,
//     "password": networkPassword 
  
//   });

//   let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
//     fetch("http://localhost:8080/api/v1/network/cred_apply", {
//         method: "POST",
//         headers: {
//             "Accept": "application/json, text/plain, */*",
//             "Content-type": "application/json",
//             Authorization: `Bearer ${BearerCheck}`,
//         },
//         body: inferenceApplyData
//     })
//     .then((res)=> {
//     if(res.status === 200){
//         return res.json()
//     }     else if(res.status === 401){
//       window.location.href="../login/login.html"
//     }
//     else{
//         alert("something went wrong")  ;
//     }})
//     .then((data)=>{
//       console.log(data)  
//     })
//     .catch(err => console.log(err))


//     }


    
document.getElementById("network-staticip-form").addEventListener("submit", getStaticIpWifiInferenceForm)


function  getStaticIpWifiInferenceForm(e){
e.preventDefault()
  let networkStaticIp = document.getElementById("network-static-ip").value
  let networkGatewayIp = document.getElementById("network-gateway-ip").value
  let networkNetmask = document.getElementById("network-netmask").value



var inferenceStaticData = JSON.stringify({
  config:{
    eth:{
      "ip": networkStaticIp,
      "gw": networkGatewayIp,
      "netmask": networkNetmask

    },

    // wifi:{
    //   "sta.ip": networkStaticIp,
    //   "sta.gw": networkGatewayIp,
    //   "sta.netmask": networkNetmask

    // },
  }
 
  
  });

  // let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
    fetch("/rpc/Config.Set", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"

        },
        body: inferenceStaticData
    })
    .then((res)=> {
    if(res.status === 200){
        return res.json()
    }
    else if(res.status === 401){
      window.location.href="./login.html"
    }
    else{
        alert("something went wrong");
    }})
    .then((data)=>{
  
      let new_data = JSON.stringify({ reboot: false })
      fetch("/rpc/Config.Save", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        body: new_data 

    })
    .then((res)=> {
      if(res.status === 200){
      return res.json()
      }
      else if(res.status === 401){
        window.location.href="./login.html"
      }
      else{
          alert("something went wrong")  ;
      }})
      .then((data)=>{
        console.log(data) 
        alert("Static Ip  parameter is set sucessfully");
      })
      .catch(err => console.log(err))
      
    })
    .catch(err => console.log(err))


    }


     //apply    
// document.getElementById("static-ip-button").addEventListener("click", getStaticIpWifiInferenceApplyForm)


// function  getStaticIpWifiInferenceApplyForm(e){

//   let networkStaticIpWifi = document.getElementById("network-static-ip").value
//   let networkGatewayIpWifi = document.getElementById("network-gateway-ip").value



// var inferenceStaticWifiData = JSON.stringify({
//     "static_ip": networkStaticIpWifi,
//     "gateway_ip": networkGatewayIpWifi
  
//   });

//   let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
//     fetch("http://localhost:8080/api/v1/network/static_ip_wifi_apply", {
//         method: "POST",
//         headers: {
//             "Accept": "application/json, text/plain, */*",
//             "Content-type": "application/json",
//             Authorization: `Bearer ${BearerCheck}`,
//         },
//         body: inferenceStaticWifiData
//     })
//     .then((res)=> {
//     if(res.status === 200){
//         return res.json()
//     }  else if(res.status === 401){
//       window.location.href="../login/login.html"
//     }
//     else{
//         alert("something went wrong")  ;
//     }})
//     .then((data)=>{
//       console.log(data)  
//     })
//     .catch(err => console.log(err))


//     }




        








    document.getElementById("ntp-form").addEventListener("submit", getNtpForm)


function  getNtpForm(e){
e.preventDefault()
  let ntpValue = document.getElementById("ntp-data").value

var ntpDataValue = JSON.stringify({
  config:{
    sntp:{
      "server": ntpValue
    }
  }
   

  
  });

  // let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
    fetch("/rpc/Config.Set", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json",
            // Authorization: `Bearer ${BearerCheck}`,
        },
        body: ntpDataValue
    })
    .then((res)=> {
    if(res.status === 200){
        return res.json()
    }
    else if(res.status === 401){
      window.location.href="./login.html"
    }
    else{
        alert("something went wrong")  ;
    }})
    .then((data)=>{
      console.log(data)  
      
      let new_data = JSON.stringify({ reboot: false })
      fetch("/rpc/Config.Save", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        body: new_data 

    })
    .then((res)=> {
      if(res.status === 200){
      return res.json()
      }
      else if(res.status === 401){
        window.location.href="./login.html"
      }
      else{
          alert("something went wrong")  ;
      }})
      .then((data)=>{
        console.log(data) 
        alert("NTP parameter is set sucessfully");
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))


    }




    document.getElementById("debug-form").addEventListener("submit", debugForm)


    function  debugForm(e){
    e.preventDefault()
      let debugValue = document.getElementById("debug-data").value
    
    var debugDataValue = JSON.stringify({
      config:{
        debug:{
          "udp_log_addr": debugValue
        }
      }
       
   
      
      });
    
        fetch("/rpc/Config.Set", {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-type": "application/json",
                // Authorization: `Bearer ${BearerCheck}`,
            },
            body: debugDataValue
        })
        .then((res)=> {
        if(res.status === 200){
            return res.json()
        }
        else if(res.status === 401){
          window.location.href="./login.html"
        }
        else{
            alert("something went wrong")  ;
        }})
        .then((data)=>{
 
          
          let new_data = JSON.stringify({ reboot: false })
          fetch("/rpc/Config.Save", {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-type": "application/json"
            },
            body: new_data 
    
        })
        .then((res)=> {
          if(res.status === 200){
          return res.json()
          }
          else if(res.status === 401){
            window.location.href="./login.html"
          }
          else{
              alert("something went wrong")  ;
          }})
          .then((data)=>{
            console.log(data) 
            alert("Debug Parameter is set sucessfully");
          })
          .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    
    
        }
    
    




   

