let info;
let url = 'https://api.openweathermap.org/data/2.5/weather?q=Zagreb&APPID=d5da566641898b814482126740a1971f&units=metric';
let temp;
let city;
let date;
let x;
let humidity;
let weathericon;

function setup(){
  noCanvas();
  loadJSON(url, getData);
}

function getData(data){
  //info = data;
  console.log(data.main.temp);
  console.log(data.name);
  console.log(data.main.humidity);
  console.log(data.main.pressure);
  temp = select('#temperature');
  temp.html(data.main.temp);
  city = select('#location');
  city.html(data.name);
  getDate();
  date = select('#date');
  date.html(x);
  humidity = select('#humidity');
  humidity.html(data.main.humidity);
  pressure = select('#pressure');
  pressure.html(data.main.pressure);
}

function getDate(){
  let d = day();
  let m = month();
  let y = year();
  x = d + '.' + m + '.' + y;
}
