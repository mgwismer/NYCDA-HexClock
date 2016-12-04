
window.setInterval(getTime, 500);

greetings = 
["Why aren't you in bed?",
"Waiting for last call?",
"Might be something good on TV",
"Might be the witching hour",
"Might be the witching hour",
"Get ready for the sunrise",
"Get those last dreams in",
"Time to rise and shine",
"What's for breakfast",
"Time to get to work",
"Time for a snack",
"Hang on lunch will be here soon",
"Lunch hour, take a break",
"How 'bout a walk",
"Maybe it's time for a meeting",
"Time to get some exercise",
"Enjoy the rest of the afternoon",
"Let's break for happy hour",
"What's for dinner",
"Have a good evening",
"Have a good evening",
"Almost pajama time and brush teeth",
"Get a good night's sleep",
"Sweet dreams"];

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
    s1 = (s*4).toString(16);
    m1 = (m*4).toString(16);
    h1 = (h*4).toString(16);
    console.log("#"+s1+m1+h1);
    body.style.backgroundColor = "#"+s1+m1+h1;
    changeTheSiteHourly(h);
}

function changeTheSiteHourly(hour) {
    var message = document.getElementById("clck-message");
    message.innerHTML = greetings[hour];
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}