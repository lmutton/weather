const locationText = document.querySelector('.location');
const desText = document.querySelector('.description');
const tempText = document.querySelector('.temp');
const farenText = document.querySelector('.faren');
const centText = document.querySelector('.cent');
const container = document.querySelector('.container');




$.getJSON(
  "https://api.apixu.com/v1/current.json?key=87b3b14bffcc4a65b4181242170611&q=auto:ip",
  function(weather){
    let location = weather.location.name;
    let description = weather.current.condition.text;
    let cent = weather.current.temp_c;
    let faren = weather.current.temp_f;
    let weatherID = weather.current.condition.code;
    //change the text content to display weather
    locationText.textContent = location;
    desText.textContent = description;
    tempText.textContent = cent + '°';

    //change C to F onclick
    farenText.addEventListener('click', function (){
      this.style.color = '#fff';
      centText.style.color = '#CDCDCD';
      tempText.textContent = faren + '°';

    });
    centText.addEventListener('click', function (){
      this.style.color = '#fff';
      farenText.style.color = '#CDCDCD';
      tempText.textContent = cent + '°';

    });
    //change background depending on weather ID code
    switch(weatherID){
      case 1150: case 1153: case 1180: case 1183: case 1186: case 1189: case 1192: case 1195:
      case 1198: case 1201: case 1204: case 1207: case 1240: case 1243: case 1246:
      container.style.background = 'url("./images/rain.jpg") no-repeat center';
      container.style.backgroundSize = 'cover';
      break;
      case 1030: case 1135: case 1147: case 1168: case 1171: case 1249: case 1252: case 1261: case 1264:
      container.style.background = 'url("./images/mist.jpg") no-repeat center';
      container.style.backgroundSize = 'cover';
      break;
      case 1087: case 1273: case 1276: case 1279: case 1282:
      container.style.background = 'url("./images/thunder.jpg") no-repeat center';
      container.style.backgroundSize = 'cover';
      break;
      case 1114: case 1117: case 1210: case 1213: case 1216: case 1219: case 1222: case 1225: case 1237:  case 1255:  case 1258:
      container.style.background = 'url("./images/snow.jpg") no-repeat center';
      container.style.backgroundSize = 'cover';
      break;
      case 1006: case 1063: case 1066: case 1069: case 1072:
      container.style.background = 'url("./images/cloudy.jpg") no-repeat center';
      container.style.backgroundSize = 'cover';
      break;
      default:
      container.style.background = 'url("./images/default.jpg") no-repeat center';
      container.style.backgroundSize = 'cover';
    }
  }
);



function showDate(){
  let date = new Date();
  let currentMonth = date.getMonth();
  let currentDate = date.getDate();
  let currentDay = date.getDay();
  let suffix = "";
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
  ];
  const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ];
  switch (currentDate) {
    case 1: case 21: case 31: suffix = "st"; break;
    case 2: case 22: suffix = "nd"; break;
    case 3: case 23: suffix = "rd"; break;
    default: suffix = "th";
  }
  document.querySelector('.date').textContent = days[currentDay] + ' ' + currentDate + suffix + ' ' + months[currentMonth];
}
showDate();
