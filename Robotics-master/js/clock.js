function show()
{ 
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var year = date.getFullYear();
var session = "AM";
if(h>12)
{
	h=h-12;
	session = "PM";
}
if(h<10)
{
	h = "0" + h;
}
if(m<10)
{
	m = "0" + m;
}
if(s<10)
{
	s = "0" + s;
}

var time = h + ":" + m + ":" + s + " " +session ;
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var day = weekday[date.getDay()];
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
var mnth = month[date.getMonth()];
var date = date.getDate();
document.getElementById("day").innerHTML = day;
document.getElementById("month").innerHTML = mnth;
document.getElementById("date").innerHTML = date;
document.getElementById("watch").innerHTML = time;
document.getElementById("year").innerHTML = year;
setTimeout(show,1000)
}

show();

function buttonWork(manual,btn,at,at1){
	var x = document.getElementById(manual);
console.log(x);

x.addEventListener("click",function(){
	document.getElementById(manual).style.display = "none";
	document.querySelector("."+at).style.display="inline-block";
	document.querySelector("."+at1).style.display="inline-block";
		document.querySelector("."+at1).style.padding="2";
	// document.querySelector("."+btn).style.display = "none";
	console.log("Clicked");
});

}

// For light
buttonWork("manual","btn-dark","auto","auto1");

// For door
buttonWork("manual1","bttn","at","at1");

//water level

document.getElementsByName('water-level')[0].addEventListener('change', updateWaterLevel);

function updateWaterLevel() {
  //console.log('e', this.value);
  
  // Top of bottle/liquid is at y=225. Bottom is at y=375.
  // Liquid starts in the "full" position.
  // So for water level 100, we move the liquid down 0.
  // For water level 0, we move the liquid down 150 (375 - 225).
  var fractionFull = this.value / 100;
  var dy = (1 - fractionFull) * 150;
  document.getElementById("tubeLiquid").setAttribute("transform", "translate(0," + dy +")");
}
