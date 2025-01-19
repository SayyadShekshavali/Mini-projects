function updateClock() {
  var time = new Date();
  const currhours = (document.querySelector(".current-hours").textContent =
    time.getHours());
  const currminutes = (document.querySelector(".current-minutes").textContent =
    time.getMinutes());
  const currseconds = (document.querySelector(".current-seconds").textContent =
    time.getSeconds());

  var second = time.getSeconds() * 6;
  var minute = time.getMinutes() * 6 + time.getSeconds() * 0.1;
  var hour = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;

  document.querySelector(".second-hand").style.transform =
    "rotate(" + second + "deg)";
  document.querySelector(".minute-hand").style.transform =
    "rotate(" + minute + "deg)";
  document.querySelector(".hour-hand").style.transform =
    "rotate(" + hour + "deg)";
}
setInterval(updateClock, 1000);
updateClock();
