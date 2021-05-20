var request = new XMLHttpRequest();
request.open('GET', 'https://bitflyer.com/api/echo/price', true);
request.responseType = 'json';

request.onload = function () {
  var data = this.response;
  var date = new Date();
  var date_elem = document.getElementById("date");
  var ask_elem = document.getElementById("ask");
  var bid_elem = document.getElementById("bid");
  var mid_elem = document.getElementById("mid");

  ask_elem.innerHTML = data.ask.toLocaleString() + "円";
  bid_elem.innerHTML = data.bid.toLocaleString() + "円";
  mid_elem.innerHTML = data.mid.toLocaleString() + "円";
  date_elem.innerHTML = date.toLocaleString();
  // console.log(data);
};

function showClock() {
  let date_elem = new Date();
  let year = date_elem.getFullYear();
  let month = date_elem.getMonth();
  let date = date_elem.getDate();
  let day = date_elem.getDay();
  let dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][day] ;	
  let hour = date_elem.getHours();
  let minutes  = date_elem.getMinutes();
  let second  = date_elem.getSeconds();
  let now_date = year + "年" + (month + 1) + "月" + date + "日" + "(" + dayOfWeekStr + ")";
  let now_time = hour + "時" + minutes + "分" + second + "秒";
  document.getElementById("real_date").innerHTML = now_date;
  document.getElementById("real_time").innerHTML = now_time;
}
setInterval('showClock()',1000);
request.send();

function reloadPage(){
  location.reload();
}