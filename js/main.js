//create an array of 5 numbers each with 2 decimal places

var myArray = [2.01, 3.04, 7.46, 8.02, 9.55]
var myArray2 = [];

	for (i=0; i<myArray.length; i++) {
//round all numbers to the nearest whole integer
		var x = Math.round(myArray[i]);
//add each to a new array
		myArray2.push(x);
	}
	console.log(myArray2);

var newArray = [];
//create a function that produces 10 random numbers between 1 and 100
function randNums(){
	var y = Math.floor((Math.random() * 99) + 1);
//add each number to an array of numbers
	newArray.push(y);	
};
for (i=0; i<10; i++) {
	randNums();
};
console.log(newArray);

//create a function that creates a few variables which store the following information: one which stores the whole date, one for the current hour, one for the current minute, and one for the current second

function newTime() {
	var today = new Date();
	var hours = addZero(formatHrs(today.getHours()));
	var minutes = addZero(today.getMinutes());
	var seconds = addZero(today.getSeconds());

//inside the function, create a variable that will display the current time in the hh:mm:ss format


	var currentTime = hours + ":" + minutes + ":" + seconds;


	console.log(currentTime);
//create a few more variables to store the current month, day, and year
	var day = addZero(today.getDate());
	var month = addZero(today.getMonth() + 1);
	var year = today.getFullYear() - 2000;
//create a variable that will display the current date in the dd/mm/yy format
	var currentDate = month + "/" + day + "/" + year;
//change your function to print this time and date onto your document
	document.body.innerHTML = currentTime + " " + currentDate;
//run this time/date function every second using the Set Timeout Method
	setTimeout(function(){
		newTime();
	}, 1000)
}
function addZero(time) {
			if(time < 10) {
				return "0" + time;
			} else {
				return time;
		}
	}


	function formatHrs(hours) {
			if(hours > 12) {
				return hours - 12;
			} else {
				return hours;
		}
	}
newTime();
