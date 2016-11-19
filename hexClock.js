
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
}

function changeTheSiteHourly(hour) {
    var message = document.getElementById("clck-message");
    console.log(hour)
    if ((hour >= 7) && (hour <= 9)) {
    	message.innerHTML = "Good Morning, Time to Rise and Shine";
        document.body.style.backgroundImage = "url('images/lake.jpg')";
    }
    else if ((hour >= 10) && (hour <= 12)) {
    	message.innerHTML = "Hang on, almost time for lunch";
        document.body.style.backgroundImage = "url('images/lateMorning.jpg')";
    }
    else if ((hour >= 13) && (hour <= 15)){
    	message.innerHTML = "Ahhh, Enjoy Siesta";
        document.body.style.backgroundImage = "url('images/siesta.jpg')";
    }
    else if ((hour >= 15) && (hour <= 18)) {
    	message.innerHTML = "Tea time in Europe, Happy Hour?"
        document.body.style.backgroundImage = "url('images/mountain.jpg')";
    }
    else
    {
    	message.innerHTML = "Get a good's night rest!"
        document.body.style.backgroundImage = "url('images/winterNight.jpg')";
    }
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}