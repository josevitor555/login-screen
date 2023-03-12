function displayDateTime() {
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMin = currentTime.getMinutes();
  var currentSec = currentTime.getSeconds();
  
  var session = document.getElementById("session");
  
  if (hrs >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }
  
  document.getElementById("hrs").innerHTML = currentHours;
  document.getElementById("minutes").innerHTML = currentMin;
  document.getElementById("seconds").innerHTML = currentSec;
}

setInterval(displayDateTime, 10);