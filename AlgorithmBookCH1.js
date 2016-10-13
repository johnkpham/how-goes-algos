// Chapter 1

@@@@@@@@@@@@@@@@@@@@@@ pg 16 @@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@ pg 16 @@@@@@@@@@@@@@@@@@@@@@
// #1 Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

var myNumber = 42;
var myName = "John";
console.log("myNumber = " + myNumber);
console.log("myName = " + myName);

var temp = myNumber
var myNumber = myName;
var myName = temp;
console.log("myName is swapped with " + myNumber);
console.log("myNumber is swapped with " + myName);

// #2 Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop
for (var i = -52; i < 1067; i++) {
	console.log(i);
}

// #3 Don't Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times
function beCheerful() {
	for (var i = 1; i < 99; i++) {
		console.log("good morning!")
	}
}
console.log(beCheerful());

// #4 Multiples of Three - but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for (var i = -300; i < 1; i += 3) {
	if (i == -6 || i == -3) {
		continue;
	}
	console.log(i);
}

// #5 Printing Integers with While
// Print integers from 2000 to 5280, using a While
var i = 2000
while (i < 5281) {
	console.log(i);
	i++;
}

// #6 You Say It's Your Birthday
// If 2 given numbers represent your birth month and day in either order, log
// "How did you know?", else log "Just another day...
var birthDay = Math.floor((Math.random() * 31) + 1);
var birthMonth = Math.floor((Math.random() *12) + 1);
if (birthDay == 15 || birthMonth == 9) {
	console.log("How did you know?")
} else {
	console.log("Just another day...")
}
console.log("Birthday number = " + birthDay, "Birthmonth number = " + birthMonth)

// #7 Leap Year
// Write a function that determines whether a given year is a leap year. If a
// year is divisible by four, it's a leap year.
function leapYear(year) {
	if (((year % 4 == 0) && (year % 100 !=0)) || (year % 400 == 0 )) {
		console.log("it is a Leap Year");
	} else {
		console.log("it is NOT a Leap Year");
	}

}
console.log(leapYear(4000));

// #8 Print and Count
// Print all integer multiples of 5, from 512 to 4096. Log each integer
for (var i = 512; i < 4097; i++){
	if (i % 5 == 0) {
		console.log(i);
	}
}

// #9 Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE loop
var i = 0
while (i < 600001) {
	i++;
	if (i % 6 == 0) {
		console.log(i)
	}
}

// #10 Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10
// print "Dojo"
for (var i = 1; i < 101; i++) {
	if (i % 5 == 0 && i % 10 != 0) {
		console.log("Coding");
		continue;
	}
	if (i % 10 == 0) {
		console.log("Dojo");
		continue;
	}
	console.log(i);
}

// #11 What do you know?
// Your function will be given an input parameter incoming. Please console.log this value.
function wdyk(incoming) {
	sum = 0;
	for (var i = 1; i < 10; i++) {
		sum += i;
	}
	return sum;
}
console.log(wdyk(111));

// #12 Whoa, that Sucker's Huge
// Add odd integers from -300,000 to 300,000 and console.log the final sum. Is there a shortcut?
var sum = 0;
for (var i = -300000; i < 300000; i++) {
  if (i % 2 == 1 && i % 2 == -1){
	sum += (i);
  }
}
console.log(sum);

// #13 Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
var i = 2020
while (i > 0) {
	i -= 4;
	console.log(i);
}

// Solution #2
var i = 2017
while (i > 0) {
	i -= 1;
	if(i % 4 == 0) {
		console.log(i);
	}
}
// #14 Flexible Countdown
// Based on earlier "Countdown by Fours", given lowNum, highNum, mult, print multiples of mult
// from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines)
var lowNum, highNum, mult = 0;


// #15 The Final Countdown

@@@@@@@@@@@@@@@@@@@@@@ pg 20 @@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@ pg 20 @@@@@@@@@@@@@@@@@@@@@@
// #1 Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the
// number (as array's 'zero'th element) down to 0 (as the last element)

// this function is opposite from the instruction
function countDown(number){
	for (var i = 0; i < number; i--) {
		console.log(i);
	}
}

// solution #1
function countDown(number){
	var newCD = [];
	if (number < 0) {
		for (var i = number; i <= 0; i++){
			newCD.push(i);
		}

	} else if (number > 0) {
		for (var i = number; i >= 0; i--) {
			newCD.push(i);
		}
	}
return newCD;
}
console.log(countDown(8));

// solution #2
function countDown(number){
	var newCD = [];
	if (number > 0){
		while(number >= 0) {
			newCD.push(number);
			number--;
		}
	} else {
		while(number <= 0) {
			newCD.push(number);
			number++
		}
	}
	return newCD;
}
console.log(countDown(8));

// #2 Print and return
// Your function will receive an array with two numbers. Print the first value, and return the second.
function printReturn(a, b) {
	console.log(a);
	return(b);
}
console.log(printReturn(1,2));

// #3 First Plus Length
// Given an array, return the sum of the first value in the array, plus the array's length. What happens if
// the array's first value is not a number, but a string (like "what?") or boolean (like false).
function firstPlusLength(arr) {
	if (typeof arr[0] != 'number') {
		arr[0] = 0 + arr.length;
	} else {
		arr[0] = arr[0] + arr.length;
	}
	console.log(arr[0]);
	return arr;
}
firstPlusLength([true,2,3,4,5]); // returns 5
firstPlusLength([10,2,3,4,5]); // returns 15

// #4 Values Greater than Second
// For [1,3,5,7,9,131] print values that are greater than its 2nd value. Return how many values this is.
function greaterThanSecond(arr) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > arr[1]) {
			console.log(arr[i]);
			count++;
		}
	}
	console.log(count);
	return count;
}
greaterThanSecond([1,3,5,7,9,131]);

// #5 Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greaterThanSecond
// than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
function greaterThanSecond(arr) {
	var newArr = [];
	if (arr.length == 0) {
		console.log("The array is empty");
	} else if (arr.length == 1) {
		console.log("There is only 1 element");
	} else {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > arr[1]) {
				newArr.push(arr[i]);
			}
		}
	}
	console.log(newArr);
	return newArr;
}
greaterThanSecond([1,2,3,4,5,6]);

// #6 This Length, That Values
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
function lengthValues(num1, num2) {
	var newArr = [];
	newArr.push(num1, num2);
	if (num1 == num2) {
		console.log("Jinx!");
	}
	console.log(newArr);
	return newArr;
}
lengthValues(2,2);

// #7 Fit the First Values
// Your function should accept an array. If value at [0] is greater than the array's length, print "Too big!";
// if value at [0] is less than array's length, print "Too small!"; otherwise print "Just right!"
function firstValues(arr){
	if (arr[0] > arr.length) {
		console.log("Too big!");
	} else if (arr[0] < arr.length) {
		console.log("Too small!");
	} else {
		console.log("Just right!");
	}
}
firstValues([10,1,2,3]);
firstValues([1,2,3,4]);
firstValues([4,1,2,3]);

// #8 Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of
// degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees. For review,
// Fahrenheit = (9/5 * Celsius) + 32
function fahrenheitToCelsius(num){
	celsius = 0;
	celsius = Math.floor((num - 32) * 5/9);
	console.log(celsius);
	return celsius;
}
fahrenheitToCelsius(82);

// #9 Celsius to Fahrenheit
function celsiusToFahrenheit(num){
	fahrenheit = 0;
	fahrenheit = Math.floor((num * 9/5) + 32);
	console.log(fahrenheit);
	return fahrenheit;
}
celsiusToFahrenheit(27);

@@@@@@@@@@@@@@@@@@@@@@ pg 22 @@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@ pg 22 @@@@@@@@@@@@@@@@@@@@@@
// #1 Biggie Size
// Give an array, write a function that changes all positive numbers in the array to "big". Ex: makeItBig([-1,3,5,1])
// returns that same array, changed to [-1, "big", "big", -5]

function positiveBig(arr) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] < 0) {
			arr[i] = arr[i];
		} else {
			arr[i] = "big";
		}
	}
	console.log(arr);
	return arr;
}
positiveBig([-1,2,-3,4,5,6,-1]);
// #2 Print Low, Return High
//  Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

// Incorrect Solution
function printLowReturnHigh(arr){
	var low = 0;
	var high = 0;
	console.log(arr);
	if (arr.length == 0) {
		console.log("The array is empty");
	} else if (arr.length == 1) {
		low = arr[i];
		high = arr[i];
		console.log("There is only 1 element");
	} else {
		for(var i = 0; i < arr.length; i++) {
			if (arr[i] < low) {
				low = arr[i];
		} else if (arr > high){
				high = arr[i];
			}
		}
	}
	console.log(low);
	return high;
}
printLowReturnHigh([]);

// The Solution
function printLowReturnHigh(arr){
	var low = arr[0];
	var high = arr[0];

	if (arr.length == 0) {
		console.log("The array is empty");
	} else if (arr.length == 1) {
		console.log("There is only 1 element");
	} else {
		for(var i = 0; i < arr.length; i++) {
			if (arr[i] < low) {
				low = arr[i];
		} else if (arr[i] > high){
				high = arr[i];
			}
		}
	}
	console.log(low);
	return high;
}
printLowReturnHigh([]);

// #3 Print One, Return another
// Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.
function printOne(arr) {
	var odd = arr[0];
	if (arr.length == 0) {
		console.log("This array is empty!");
	} else if (arr.length == 1) {
		console.log("There is only 1 element in this array");
	} else {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 1) {
				odd = arr[i];
				break;
			}
		}
	}
	console.log(arr[arr.length-1]);
	return odd;
}
printOne([1,2,3,4,5]);

// #4 Double Vision
// Given array, create a function to return a new array where each value in the original has been doubled. Calling double ([1,2,3]) should return ([2,4,6]) without changing the original.
function doubleVision(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr.push(arr[i] * 2);
	}
	console.log(newArr);
	return newArr;
}
doubleVision([1,2,3,4,5]);

// #5 Count Positives
// Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPositives(arr) {
	var lastPositive = 5;
	var priorIndex = arr[0];
	for(var i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			priorIndex = i;
		}
	}
	arr[priorIndex] = lastPositive;
	console.log(arr);
	return arr;
}
countPositives([-1,2,2,2,-1]);

// #6 Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That's odd!" Every time the array has three evens in a row, print "Even more so!"
function evensAndOdds(arr) {
	var threeOdds = 0;
	var threeEvens = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 1) {
			threeOdds++;
			if (threeOdds % arr[i]) {
				console.log("That's odd!");
			}
		} else {
			console.log("Even more so!");
		}
	}
}
evensAndOdds([1,1,1,2,3,2,2,2]);

// #7 Increments in Seconds
// Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc). Afterward, console.log each array value and return arr.
function incrementSeconds(arr){
	for (var i = 0; i < arr.length; i++) {
		if (i % 2 == 1) {
			arr[i] += 1;
		}
	}
	console.log(arr);
	return arr;
}
incrementSeconds([1,2,1,2,1,2]);

// #8 Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number (with the length of the string at previous array index) and return the array.
function previousLengths(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] == 'string') {
			arr[i] = arr[i].length;
			console.log("string");
		} else {
			console.log("not a string");
		}
	}
	console.log(arr);
	return arr;
}
previousLengths([1,"hello", "from", "jordan"]);

// #9 Add Seven to Most
// Build function that accepts array. Returning a new array with all values except first, adding 7 to each. Do not alter the original array.
function sevenToMost(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] == 'number'){
			newArr.push(arr[i] + 7);
		}
	}
	console.log(newArr);
	return newArr;
}
sevenToMost([1,2,3,4,5]);
sevenToMost([1,"2","3",4,"five",6]);

// #10 Reverse Array
// Given array, write a function that reverses values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing ([2,4,6,1,3]).
function reverseArray(arr) {
	for(var i = 0; i < Math.floor(arr.length/2); i++) {
		temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
	console.log(arr);
	return arr;
}
reverseArray([1,2,3,4,5,6]);

// #11 Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function outlookNegative(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			newArr.push(arr[i] * -1);
		} else {
			newArr.push(arr[i]);
		}
	}
	console.log(newArr);
	return newArr;
}
outlookNegative([-1,2,-1,1,-2,1]);

// #12 Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.
function alwaysHungry(arr) {
	var counter = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == "food") {
			counter++;
			console.log("yummy");
		} else if (arr[i] == arr[arr.length - 1] && counter == 0) {
				console.log("I'm hungry");
		}
	}
}
alwaysHungry([1,2,3]);
alwaysHungry(["food",1,2,3]);
alwaysHungry(["food",1,"food",2,"food",3]);

// #13 Swap Odds Toward the Center
// Given array, swap first and last, third and third-to-last, etc. Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swapOddIndexTowardsCenter(arr) {
	for(var i = 0; i < Math.floor(arr.length/2); i++) {
		if (i % 2 == 0) {
			temp = arr[i];
			arr[i] = arr[arr.length - 1 - i];
			arr[arr.length - 1 - i] = temp;
		}
	}
	console.log(arr);
	return arr;
}
swapOddIndexTowardsCenter([1,2,3,4,5,6,7,8]);

// #14 Scale the Array
// Give an array arr and a number num, multiply all values in arr by num, and turn the changed array arr.
function scaleArray(arr, num) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] *= num;
	}
	console.log(arr);
	return arr;
}
scaleArray([1,2,3,4], 2);
scaleArray([1,2,1,2], -1);

@@@@@@@@@@@@@@@@@@@@@@ pg 24 @@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@ pg 24 @@@@@@@@@@@@@@@@@@@@@@

// #1 Only Keep the Last Few
// Given array arr and number x, remove all except the last x elements, and return arr (changed and shorter). Given ([2,4,6,8,10], 3), change the given array to [6,8,10] and return it.
function keepLastFew(arr, num) {
	for (var i = 0; i < num; i++) {
		arr.shift();
	}
	console.log(arr);
	return arr;
}
keepLastFew([1,2,3,4,5,6,7,8], 4);

// #2 Math Help
// You are given two numbers - the coefficients 'M' nd 'B' in the equation Y = MX + B. Build a function that returns the X-intercept.
function xIntercept(b, m) {
	var coordinates = [];

	coordinates.push(0);
	console.log(coordinates);
	return coordinates;
}
xIntercept(2, -4);

based on inputs 'b' == 2 && 'm' == -4
(x, y)
y = MX + B
x = 0, y = 2	|| y-intercept (0, 2)

x = (y - b) / m
x = 1/2, y =0 	|| x-intercept (1/2, 0)


// #3 Poor Kenny
// If there is a 10% chance of volcano, 15% chance of tsunami, 20% chance of earthquake, 25% chance of blizzard, and 30% chance of meteor strike, write a function whatHappensToday().

function whatHappensToday(probability) {
	if (probability <= 0.10) {
		console.log("volcano eruption disaster!");
	} else if (0.11 < probability <= 0.25) {
		console.log("tsunami~~!");
	} else if (0.26 < probability <= 0.45) {
		console.log("get to cover, earthquake!");
	} else if (0.46 < probability <= 0.70) {
		console.log("stay inside and keep warm from the blizzard!");
	} else if (0.71 < probability <= 1.00) {
		console.log("on no, meteor strike!")
	} else {
		console.log("whew, no natural disasters today!");
	}
}
whatHappensToday(.10);
whatHappensToday(.23);

// #4 What Really Happened?
// Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. All five disasters might occur today or none.
function whatReallyHappensToday(day) {
	var counter = 0;
	var probability = 0;
	var disasterCount = 0;
	var disaster = ["volcano eruption disaster!", "tsunami~~!", "shaky earthquake!", "freezing blizzard!", "fiery meteor strike!"];
	while (day != 0){
		day--;
		counter++;
		console.log("Day #" + counter);
		for (var i = 0; i < disaster.length - 1; i++) {
			if (i == 1) {
				probability = Math.random().toFixed(2);
				console.log("Rolling: " + probability + ". Iteration: " + i);
				if (probability <= 0.10) {
					console.log(disaster[0]);
					disasterCount++;
				}
			}
			else if (i == 2) {
				probability = Math.random().toFixed(2);
				console.log("Rolling: " + probability + ". Iteration: " + i);
				if (probability <= 0.15) {
					console.log(disaster[1]);
					disasterCount++;
				}
			} else if (i == 3) {
				probability = Math.random().toFixed(2);
				console.log("Rolling: " + probability + ". Iteration: " + i);
				if (probability <= 0.20) {
					console.log(disaster[2]);
					disasterCount++;
				}
			} else if (i == 4) {
				probability = Math.random().toFixed(2);
				console.log("Rolling: " + probability + ". Iteration: " + i);
				if (probability <= 0.25) {
					console.log(disaster[3]);
					disasterCount++;
				}
			} else {
				probability = Math.random().toFixed(2);
				console.log("Rolling: " + probability + ". Iteration: " + i);
				if (probability <= 0.30) {
					console.log(disaster[4]);
					disasterCount++;
				}
			}
		}
		if (disasterCount == 0) {
			console.log("We're saved from doom... for now");
		}
	}
	return day;
}
whatReallyHappensToday(2);

// #5 Soaring IQ
// Let's say a new Dojo student, Bogdan, entered with a modest IQ of 101. How smart would Bogdan be at the end of the bootcamp (14 weeks), if his IQ rose by .01 and increment by another .01 the next and so on.
function bogdansIQ(iqNum){
	var iqAdjust = 0;
	for (var i = 1; i <= 14; i++) {
		iqAdjust += 0.1;
		iqNum += (iqAdjust);
	}
	return iqNum;
}
bogdansIQ(101);

// #6 Letter Grade
// Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an 'A', 80-89 earn 'B', 70-79 earn 'C' and so on to letter 'F'. Given the score 71, log the string "Score: 71. Grade: C"
function letterGrade(score){
	if (score > 90 ) {
		console.log("Score: " +score+ ". Grade: A");
	} else if (score > 80) {
		console.log("Score: " +score+ ". Grade: B");
	} else if (score > 70) {
		console.log("Score: " +score+ ". Grade: C");
	} else if (score > 60) {
		console.log("Score: " +score+ ". Grade: D");
	} else {
		console.log("Score: " +score+ ". Grade: F");
	}
	return score;
}
letterGrade(71);

// #7 More Accurate Grades
// For an additional challenge, add '-' signs to scores in the bottom 2 percent of A, B, C, and D scores, and '+' signs to the top 2 percent.
function accurateLetterGrade(score){
	if (score % 10 = 1 && score % 10 = 2) {

	}
	if (score % 10 = 8 && score % 10 = 9) {

	}
	if (score > 90 ) {
		console.log("Score: " +score+ ". Grade: A");
	} else if (score > 80) {
		console.log("Score: " +score+ ". Grade: B");
	} else if (score > 70) {
		console.log("Score: " +score+ ". Grade: C");
	} else if (score > 60) {
		console.log("Score: " +score+ ". Grade: D");
	} else {
		console.log("Score: " +score+ ". Grade: F");
	}
	return score;
}
accurateLetterGrade(99);

@@@@@@@@@@@@@@@@@@@@@@ pg 28 @@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@ pg 28 @@@@@@@@@@@@@@@@@@@@@@

// #1 Print 1-255
// Print all integers from 1 to 255.
for (var i = 0; i < 256; i++) {
	console.log(i);
}

// #2 Print Ints and Sum 0-255
// Print Integers from 0 to 255, and with each integer print the sum so far.
var sum = 0;
for (var i = 0; i < 256; i++) {
	sum += i;
	console.log("Integer: " + i + ". Sum: " + sum +".");
}

// #3 Find and Print Max
// Given an array, find and print its largest element.
function findPrintMax(arr){
	var max = 0;
	for (var i = 0; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	console.log(max);
	return arr;
}
findPrintMax([1,2,3,4,50,6,-1,10]);

// #4 Array with Odds
// Create an array with all the odd integers between 1 and 255(inclusive).
function arrayWithOdds(){
	newArr = [];
	for (var i = 0; i < 256; i++) {
		if (i % 2 == 1){
			newArr.push(i);
		}
	}
	console.log(newArr);
	return newArr;
}
arrayWithOdds();

// #5 Greater than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanY(arr, y) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > y) {
			count++;
		}
	}
	console.log(count);
	return arr;
}
greaterThanY([1,2,3,4,5,6,7,8],3);

// #6 Max, Min, average
// Given an array, print the max, min, and average values for that array.
function maxMinAvg(arr) {
	var max = arr[0];
	var min = arr[0];
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
		if (min > arr[i]) {
			min = arr[i];
		}
		sum += arr[i];
	}
	var avg = sum/arr.length;
	console.log("Max: " + max);
	console.log("Min: " + min);
	console.log("Avg: " + avg);
	return maxMinAvg;
}
maxMinAvg([1,2,3,4,5]);

// #7 Swap String for Array Negative values
// Given an array of numbers, replace any negative values witht eh string 'Dojo'.
function swapNegatives(arr) {
	for (var i = 0; i< arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = "Dojo"
		}
	}
	console.log(arr);
	return arr;
}
swapNegatives([1,2,3,-5,1,-3,1,-4]);

// #8 Print Odds 1-255
// Print all odd integers from 1 to 255
function printOdds() {
	for (var i = 1; i < 256; i++) {
		if (i % 2 == 1) {
			console.log(i);
		}
	}
}
printOdds();

// #9 Iterate and Print Array
// Iterate through a given array, printing each value.
function iterateAndPrint(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
	return arr;
}
iterateAndPrint([1,2,3,4,5]);

// #10 Get and Print Average
// Analyze an array's values and print the average.
function getPrintAverage(arr){
	sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log("Average is: " + sum/arr.length);
}
getPrintAverage([1,2,3,4,5,6,7]);

// #11 Square the Values
// Square each value in a given array, returning that same array with changed values.
function squareValues(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] *= arr[i];
	}
	console.log(arr);
	return arr;
}
squareValues([1,2,3,4,5]);

// #12 Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
function zeroNegatives(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
		}
	}
	console.log(arr);
	return arr;
}
zeroNegatives([-1,2,4,-3,-5,6]);

// #13 Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
function shiftingValues(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i +1];
	}
	arr[arr.length - 1] = 0;
	console.log(arr);
	return arr;
}
shiftingValues([1,2,3,4,5,6]);
