	
    function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; 
    var text = textNode.data;
  setInterval(function ()
  {text = text[text.length - 1] + text.substring(0, text.length - 1);textNode.data = text;}, 250);
}
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday",];
	var month = new Array(12);
		month[0] = "January";
		month[1] = "February";
		month[2] = "March";
		month[3] = "April";
		month[4] = "May";
		month[5] = "June";
		month[6] = "July";
		month[7] = "August";
		month[8] = "September";
		month[9] = "October";
		month[10] = "November";
		month[11] = "December";
	var lastDay = function(y,m) {
    return new Date(y, m +1, 0).getDate();
}
	function startTime() {
  var today = new Date();
  var day = today.getDay();
  var dd  = today.getDate();
  var mm  = month[today.getMonth()];
  var yyyy = today.getFullYear();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);
  var trueYear = new Date(yyyy, 0, 0)//(Current Year, month, day)
  var timeDiff = (today - trueYear);
  var dayLength = 1000 * 60 * 60 * 24;
  var pYear = Math.floor(timeDiff/dayLength);
  var percentYear = pYear/366 * 100;
  percentYear = percentYear.toFixed(2);
  var monthMax = lastDay(yyyy,today.getMonth());
  var monthPercent = dd/monthMax * 100;
  monthPercent = monthPercent.toFixed(2);
  var minPercent = minute/60 * 100;
  var minFixed = minPercent.toFixed(2);
  var dayPercent = (hour/24 * 100) + (minPercent/60);
  dayPercent = dayPercent.toFixed(2);
  var secPercent = second/60 * 100;
  secPercent = secPercent.toFixed(2);
  var pWords;
  switch (day) {
  	case 0:
  		pWords = "Rest and Prepare !";
  		break;
  	case 1:
  		pWords = "Stay Energetic !";
  		break;
  	case 2:
  		pWords = "Cheer Up !";
  		break;
  	case 3:
  		pWords = "Stay Confident !";
  		break;
  	case 4:
  		pWords = "Remember to smile !";
  		break;
  	case 5:
  		pWords = "Party Time !";
  		break;
  	case 6:
  		pWords = "Leisure Time !";
  		break;
  }
  document.getElementById("progressMin").value = second;
  document.getElementById('minPercent').innerHTML = secPercent+"%";
  document.getElementById("progressHour").value = minute;
  document.getElementById('hourPercent').innerHTML = minFixed+"%";
  document.getElementById("progressDay").value = hour;
  document.getElementById('dayPercent').innerHTML = dayPercent+"%";
  document.getElementById("progressMonth").value = dd;
  document.getElementById("progressMonth").max = monthMax;
  document.getElementById('monthPercent').innerHTML = monthPercent+"%";
  document.getElementById("progressYear").value = pYear;
  document.getElementById('yearPercent').innerHTML = percentYear+"%";
  var a = (hour + " : " + minute + " : " + second);
  var c = ("Today is " + daylist[day] + ", " + pWords);
  var b = (dd+'/'+mm+'/'+yyyy);
  document.getElementById('a').innerHTML = a;
  document.getElementById('b').innerHTML = b;
  document.getElementById('c').innerHTML = c;
  var t = setTimeout(startTime, 1000)

var tod = "";
	if (hour < 6) {
  	tod = "Midnight";
  }
  	else if (hour < 12) {
  	tod = "Morning";
  }
  	else if (hour < 18) {
  	tod = "Afternoon";
  }
  	else if (hour < 24) {
  	tod = "Evening";
  }

  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

