


//  Open a WebSocket to the server.
//  Need a Regular Expression to get the URL to open the WebSocket to
//  Matches 192.168.1.8 etc.
const serverUrlRegex = /\d+\.\d+\.\d+\.\d+/;
//  Get the URL from the browser.
const currentUrl = window.location.origin;
console.log(`The currentURL is ${currentUrl}.`);
//  Extract what is needed to create WebSocket.
const serverUrl = currentUrl.match(serverUrlRegex);
//  The match is in the 0th element of the array.
console.log(`The server URL is ${serverUrl[0]}`);
console.log(`The server URL is ${serverUrl}`);
//  Comment this for static URI.
let ws = new WebSocket(`ws://${serverUrl}`);
ws.onopen = () => {
  console.log("Web browser opened a WebSocket.");
};

ws.onclose = () => {
  console.log("Web browser WebSocket just closed.");
  alert("Unexpectedly websockets has closed, Please referesh the page..!!");
};
// Display the data from the server in web page
ws.onmessage = (message) => {
  // console.log(message)
  // let a=JSON.stringify(message.data);
  // console.log(a,"####");
  let iaq = JSON.parse(message.data);
  // console.log(iaq, "iaq")
  let iaq_date = new Date(iaq.time);

  // console.log(iaq_date, "date")
  console.log(iaq_date.getHours(), iaq_date.getMinutes(), iaq_date.getSeconds(), "time-stamp")
  document.getElementById("last-time-stamp").innerHTML = iaq_date.getHours() +
    ":" +
    iaq_date.getMinutes() +
    ":" +
    iaq_date.getSeconds();

  if (Number(iaq.Temperature) !== 0) {
    document.getElementById("temperature-data").innerHTML = iaq.Temperature
  }
  if (Number(iaq.NoiseLevel) !== 0) {
    document.getElementById("noise-data").innerHTML = iaq.NoiseLevel
  }


  if (Number(iaq.RelativeHumidity) !== 0) {
    document.getElementById("humidity-data").innerHTML = iaq.RelativeHumidity
  }

  if (Number(iaq.Co2) !== 0) {

    document.getElementById("co2-data").innerHTML = iaq.Co2
  }

  if (Number(iaq.Pm2_5) !== 0) {

    document.getElementById("PM2.5-data").innerHTML = iaq.Pm2_5
  }
  if (Number(iaq.Pm4) !== 0) {

    document.getElementById("PM4-data").innerHTML = iaq.Pm4
  }

  if (Number(iaq.Pm10) !== 0) {

    document.getElementById("PM10-data").innerHTML = iaq.Pm10
  }

  if (Number(iaq.Pm1) !== 0) {
    document.getElementById("PM1-data").innerHTML = iaq.Pm1
  }

  if (Number(iaq.Lux) !== 0) {
    document.getElementById("lux-data").innerHTML = iaq.Lux
  }


  if (Number(iaq.Pressure) !== 0) {
    document.getElementById("pressure-data").innerHTML = iaq.Pressure
  }


  if (Number(iaq.TVocIndex) !== 0) {

    document.getElementById("tvoc-data").innerHTML = iaq.TVocIndex
  }



  console.log("IAQ Data: ", iaq);
};

// To raise an alert pop-up window when the web sockkets connection is closed
ws.onerror = (message) => {
  alert("Unexpectedly websockets is closed, Please refresh the page..!!");
};


function showTable(parameter) {
  // Hide all tables
  var tables = document.querySelectorAll('.table');
  tables.forEach(function(table) {
    table.classList.add('hidden-table');
  });

  // Show the selected table
  var selectedTable = document.getElementById(parameter + '-table');
  if (selectedTable) {
    selectedTable.classList.remove('hidden-table');
  }
}



































