
window.setInterval(getTime, 500);

function getTime() {
	var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    changeTheSite(h,m,s);
  }

function changeTheSite(h,m,s) {
	document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var body = document.getElementById("body-class");
    console.log("#"+h+m+s);
    body.style.backgroundColor = "#"+s+m+h;
    changeTheSiteHourly(h);
    changeTheBackground(h);
}

function changeTheSiteHourly(hour) {
    var message = document.getElementById("clck-message");
    console.log(hour)
    if ((hour >= 7) && (hour =< 9))
    	message.innerHTML = "Good Morning, Time to Rise and Shine";
    else if ((hour >= 10) && (hour =< 12))
    	message.innerHTML = "Hang on, almost time for lunch";
    else if ((hour >= 13) && (hour =< 15))
    	message.innerHTML = "Ahhh, Enjoy Siesta";
    else if ((hour >= 16) && (hour =< 18))
    	message.innerHTML = "Tea time in Europe, Happy Hour?"
    else
    	message.innerHTML = "Get a good's night rest!"
}

function changeTheBackground(hour) {

}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}