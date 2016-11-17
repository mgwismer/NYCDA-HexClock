
window.setInterval(getTime, 500);

function getTime() {
	var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var body = document.getElementById("body-class");
    h1 = (h*4).toString(16);
    s1 = (s*4).toString(16);
    m1 = (m*4).toString(16);
    console.log("#"+h1+m1+s1);
    body.style.backgroundColor = "#"+h1+m1+s1;
  }

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}