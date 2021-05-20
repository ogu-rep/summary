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
  date_elem.innerHTML = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
  // console.log(data);
};
request.send();