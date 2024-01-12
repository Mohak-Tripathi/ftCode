
let userRole = JSON.parse(localStorage.getItem("user") || null)



if( userRole ==="Demo"){
 document.getElementById("inference-page").style.display= "none"
 
}


function getInferenceData(){


    fetch("/rpc/Config.Get", {
		method: 'GET',
		// headers: {
    //   Authorization: `Bearer ${BearerCheck}`,
		// },
	})
  .then((response)=> {
  
    if(response.status === 200){
        return response.json()
    }
    else if(response.status === 401){
      window.location.href="./login.html"
    }
    else{
        alert("something went wrong");
    }})

		.then(response => {
console.log(response, "inference")

      document.getElementById("aggregation-interval").value =  response.iaq.measurementinterval
      document.getElementById("periodic-reset-interval").value  =  response.iaq.periodicinterval
      document.getElementById("temperature-offset").value  =  response.iaq.temperature
      document.getElementById("humidity-offset").value  =  response.iaq.humidiy
      document.getElementById("lux-offset").value  =  response.iaq.lux
      document.getElementById("CO2-offset").value  =  response.iaq.co2
      document.getElementById("pm-1-offset").value  =  response.iaq.pm_1
      document.getElementById("pm-2.5-offset").value  =  response.iaq.pm_2_5
      document.getElementById("pm-4-offset").value  =  response.iaq.pm_4
      document.getElementById("pm-10-offset").value  =  response.iaq.pm_10
      document.getElementById("tvoc-reset").value  =  response.iaq.Tvoc_offset
      document.getElementById("noise-reset").value  =  response.iaq.noise_offset
      document.getElementById("co2-cal-ref").value  =  response.iaq.co2FCReference
       document.getElementById("air-pressure-offset").value  =  response.iaq.air_pressure_offset
      document.getElementById("formaldehyde-ref").value  =  response.iaq.formaldehyde_offset
     document.getElementById("publish-interval").value  =  response.iaq.publishinterval
  document.getElementById("fan-ac-interval").value  =  response.iaq.FanFCReference
  document.getElementById("output-type").value  =  response.iaq.output_type

      
    
    
    })
		.catch(err => console.error(err));
  }


  getInferenceData()

 







document.getElementById("inference-form").addEventListener("submit", getInferenceForm)


function  getInferenceForm(e){
e.preventDefault()

  let aggregation_interval= document.getElementById("aggregation-interval").value 
  let periodic_reset = document.getElementById("periodic-reset-interval").value  
  let temperature = document.getElementById("temperature-offset").value  
  let humidiy = document.getElementById("humidity-offset").value 
  let lux = document.getElementById("lux-offset").value 
  let co2 = document.getElementById("CO2-offset").value  
  let pm_1 = document.getElementById("pm-1-offset").value  
  let pm_2_point_5 = document.getElementById("pm-2.5-offset").value 
  let pm_4 =document.getElementById("pm-4-offset").value  
  let pm_10 = document.getElementById("pm-10-offset").value 
  let tvoc_reset = document.getElementById("tvoc-reset").value  
  let noise_reset = document.getElementById("noise-reset").value  
  let co2_cal_ref= document.getElementById("co2-cal-ref").value  
  let air_pressure_offset = document.getElementById("air-pressure-offset").value  
 let publish_interval=  document.getElementById("publish-interval").value  
 let fan_ac_interval=   document.getElementById("fan-ac-interval").value 
 let formaldehyde =   document.getElementById("formaldehyde-ref").value 
 let output_type =   document.getElementById("output-type").value 


  var inferenceData = JSON.stringify({
    config:{
      iaq :{
       
      "measurementinterval" : parseInt(aggregation_interval),
      "periodicinterval" : parseInt(periodic_reset),
      "temperature" : parseInt(temperature),
      "humidiy" : parseInt(humidiy),
      "lux" : parseInt(lux),
      "co2" : parseInt(co2),
      "pm_1" : parseInt(pm_1),
      "pm_2_5" : parseInt(pm_2_point_5),
      "pm_4" :  parseInt(pm_4),
      "pm_10" : parseInt(pm_10),
      "Tvoc_offset" : parseInt(tvoc_reset),
      "noise_offset" : parseInt(noise_reset),
      "air_pressure_offset" : parseInt(air_pressure_offset),
      "co2FCReference" : parseInt(co2_cal_ref),
      "publishinterval" : parseInt(publish_interval),
      "FanFCReference" : parseInt(fan_ac_interval),
      "formaldehyde_offset" : parseInt(formaldehyde),
      "output_type": parseInt(output_type),
   
    },
    },
    });
    
  // let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
    fetch("/rpc/Config.Set", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        body: inferenceData
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

      let new_data = JSON.stringify({ reboot: false  })
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
        alert("Inference Parameters is set sucessfully");
      })
      .catch(err => console.log(err))


    })
    .catch(err => console.log(err))


    }


    





