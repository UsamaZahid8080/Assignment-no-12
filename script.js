//Section no 1 String

//Problem no 1
/*Write a js program to find the length of a string.*/
let text1 = "abcdefghijklmnopqrstuvwxyz"
let textLength = text1.length;
console.log(textLength);

//Problem no 2
//Write a js program to concatenate two strings.
 var text3 = "Usama";
 var text4 = "Butt";
 var text13 = 'FSD';
 var fullName = text3.concat(' ', text4,' ',text13);
console.log(fullName);

 //Problem no 3
 //Write a js program to convert a string to uppercase.
 var text5 = 'I m usama butt from faisalabad';
 var textupparcase = text5.toUpperCase();
 console.log(textupparcase);

 //Problem no 4
 //Write a js program to convert a string to lowercase.
 var text6= 'I M USAMA ZAHID FROM LAHORE'
 var textlowercase = text6.toLowerCase();
 console.log(textlowercase);

 //problem no 5
 //Write a js program to check if a string contains a specific substring.
 var text7= 'I M USAMA ZAHID FROM LAHORE'
 var textincludes = text7.includes('ZAHID');
 console.log(textincludes);

 //Problem no 6
 //Write a js program to find the index of a specific character in a string.
 var text8= 'I M USAMA ZAHID FROM LAHORE'
 var textindexof = text8.indexOf('ZAHID');
 console.log(textindexof);

 // Problem no 7
 //Write a js program to replace a specific substring in a string.
 var text9= 'I M USAMA ZAHID FROM LAHORE I M USAMA ZAHID FROM LAHORE I M USAMA ZAHID FROM LAHORE'
 var textreplaceall = text9.replaceAll('ZAHID','Butt');
 console.log(textreplaceall);

 //Problem no 8
 //Write a js program to remove leading and trailing whitespace from a string.
 var text10= '                Usama                '
 var texttrim = text10.trim();
 console.log(texttrim);

 //Problem no 9
 //Write a js program to split a string into an array of substrings.
 var text11= 'Javascript php python firebase'
 var textsplit = text11.split(' ');
 console.log(textsplit);

 //Problem no 10
 //Write a js program to reverse a string.
 var text12= ["Javascript","Php", "Pyhton","Firebase"]
  var textreverse= text12.reverse();
 console.log(textreverse);


 //Section no 2

 //Problem no 1
 //Write a js program to find the sum of two numbers.
var num1 = Number(prompt('Enter first number'));
var num2 = Number(prompt('Enter Second number'));
var sum = num1 + num2;
console.log(sum);

 //Problem no 2
 //Write a js program to find the difference between two numbers.
 var num1 = Number(prompt('Enter first number'));
 var num2 = Number(prompt('Enter Second number'));
 var difference = num1 - num2;
 console.log(difference);

 //Problem no 3
 //Write a js program to find the product of two numbers.
 var num1 = Number(prompt('Enter first number'));
 var num2 = Number(prompt('Enter Second number'));
 var product = num1 * num2;
 console.log(product);

 //Problem no 4
 //Write a js program to find the quotient and remainder of two numbers.
 var num1 = Number(prompt('Enter first number'));
 var num2 = Number(prompt('Enter Second number'));
 var remainder = num1 / num2;
 console.log(remainder);

 //Problem no 5
 //Write a js program to round a number to the nearest integer.
 var num = 5.3784;
 var numround= num.toPrecision(2);
 console.log(numround);

 //Problem no 6
 //Write a js program to generate a random number between 0 and 1. 
 let randomNum= Math.floor(Math.random()*100+1);
 console.log(randomNum);

 //Problem no 7
 //Write a js program to find the maximum and minimum of two numbers.

 var num1 = 3;
 var num2 = 4;
 var max = Math.max(num1,num2);
 var min = Math.min(num1,num2);
 console.log(max);
 console.log(min);

 //Problem no 8
 //Write a js program to calculate the square root of a number.
 var num1 = 25;
 var sqr = Math.sqrt(num1);
 console.log(sqr);

//Problem no 9
// Write a js program to calculate the absolute value of a number.
var num1 = -25;
var abs = Math.abs(num1);
console.log(abs);

//Problem no 10
// Write a js program to calculate the power of a number.
var num1 = 5;
var num2 = 2;
var pow = Math.pow(num1,num2);
console.log(pow);


//Section no 3
//Date Methods

//Problem no 1
//Write a js program to get the current date and time.
var currentDate = new Date();
console.log(currentDate);

//Problem no 2
//Write a js program to get the current year.
var currentyear = new Date();
console.log(currentyear.getFullYear());

//Problem no 3
//Write a js program to get the current month.
var currentyear = new Date();
console.log(currentyear.getMonth());

//Problem no 4
//Write a js program to get the current day of the week.
var currentday = new Date();
console.log(currentday.getDay());


//Problem no 5
//Write a js program to add a specific number of days to a date.
var currentday = new Date();
currentday.setDate(26);
console.log(currentday);

//Problem no 6
//Write a js program to subtract a specific number of days from a date.
var currentday = new Date();
currentday.setDate(26-4);
console.log(currentday);

//Problem no 7
//Write a js program to get the time in milliseconds.
var d = new Date();
h = d.getHours();
m = d.getMinutes();
s = d.getSeconds();
ms = d.getMilliseconds();
console.log(h+':'+m+':'+s+':'+ms);

//Problem no 8
//Write a js program to get the hours, minutes, and seconds from a date object.
var d = new Date();
h = d.getHours();
m = d.getMinutes();
s = d.getSeconds();
console.log(h+':'+m+':'+s);

//Problem no 9
//Write a js program to create a new date object with a specific year, month, and day.
var d = new Date();
d.setDate(26);
d.setMonth(8);
d.setFullYear(2015);
console.log(d);


//Problem no 10
//Write a js program to create a new date object with a specific year, month, and day.
var year = 2022;
var month = 2;
var day = 27;
var newDate = new Date(year,month,day);
console.log(newDate);


//section no 4
//Problem no 1
//Write a js program to find the absolute value of a number.
var num1 = -25;
var abs = Math.abs(num1);
console.log(abs);

//Problem no 2
//Write a js program to find the highest value in a list of numbers.
var a = Math.max(10,20,30,40);
console.log(a);

//Problem no 3
//Write a js program to find the lowest value in a list of numbers.
var a = Math.min(10,20,30,40);
console.log(a);

//Problem no 4
//Write a js program to round a number up to the nearest integer.
var a = 3.3;
var roundUp = Math.ceil(a);
console.log(roundUp);

//Problem no 5
//Write a js program to round a number down to the nearest integer.
var a = 3.9;
var rFloor = Math.floor(a);
console.log(rFloor);

// Problem no 6
//Write a js program to calculate the exponential value of a number.
var a = 2;
var exp = Math.exp(a);
console.log(exp);

//Problem no 7
//Write a js program to calculate the natural logarithm of a number
var a = 5;
var logarithm = Math.log(a);
console.log(logarithm);

//problem no 8 
//Write a js program to calculate the sine of an angle in radians.
var a = Math.sin (25);
var sine = Math.sin(a);
console.log(sine);

//Problem no 9
//Write a js program to calculate the cosine of an angle in radians.
var a =Math.cos(25);
console.log(a);

//Problem no 10
//Write a js program to calculate the square root of a number.
var a = Math.sqrt(25);
console.log(a);


//Section no 5
//Problem no 1
//Write a program that uses a for loop to print the numbers from 1 to 10.
for (var i = 1; i <= 10; i++){
    console.log(i);
}

//Problem no 2
//Write a program that uses a for loop to print the elements of an array.
var number = [25,26,27,28,29,30];
for(i = 0; i <number.length;i++ ){
    console.log(number[i]);
}
var string=['apple','mango','banana','peach'];
for(i=0;i<string.length;i++){
    console.log(string[i]);
}

//problem no 3
//Write a program that uses a for loop to calculate the factorial of a number.
var number = 5;
var factorial = 1;
for(i = 1; i <=number; i++){
    factorial=factorial*i;
}console.log(factorial);

//Problem no 4
//Write a program that uses a for loop to generate a multiplication table for a given number.
var number = 8;
var result;
for(i = 1; i<=10; i++){
    result = number*i;
    console.log(number+'X'+i+'='+result);
}

//Problem no 5
//Write a program that uses a for loop to find the sum of all even numbers from 1 to 100.
var sum = 0; 
for( var i =1; i<=100; i++){
    if(i%2==0){
        sum+=i;
    }
}console.log(sum);

//Section no 6
//Probelm no 1
//Write a program that asks the user to enter a number and then prints out all the odd numbers up to that number.
var number =parseFloat(prompt("Enter a number"));
var i = 1;
while(i<number){
   i++;
   if(i%2==0){
    console.log(i);
   }
}

//Problem no 2
//Write a program that asks the user to enter a number and then prints out the multiplication table for that number, up to 10.
var number =parseFloat(prompt("Enter a number"));
var i = 0;
while(i<10){
    i++;
    var result= number*i;
    console.log(number+'X'+i+'='+result);
}

//Problem no 3
//Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number.
var randomNumber = Math.floor(Math.random()*100)+1;
var guess = parseInt(prompt("Guess a number between 1 to 100"))
while(guess!==randomNumber){
    if(guess<randomNumber){
        guess=parseInt(prompt("Too low! Please try agian"))
    }else{
        guess=parseInt(prompt("Too high! Try Again"))
    }
}alert("Congratulation Randomed number is match");

//Problem no 4
//Write a program that asks the user to enter a word and then prints out the word in reverse order.
var word = prompt("Enter a word");
wordreverse='';
var i = word.length-1;
while(i>=0){
    wordreverse+=word[i];
    i--;
}
alert(wordreverse);

//Problem no 5
//Write a program that asks the user to enter a series of numbers and then finds the sum and average of those numbers.
let sum = 0;
let count = 0;
let input1 = prompt("Enter a number, or type 'done' to stop:");
while (input1 !== "done") {
  let number = Number(input1);
  if (!isNaN(number)) {
    sum += number;
    count++;
  }
  input1 = prompt("Enter a number, or type 'done' to stop:");
}
if (count === 0) {
  console.log("No numbers entered.");
} else {
  let average = sum / count;
  console.log(`Sum: ${sum}, Average: ${average}`);
}

//Section no 7
//Problem no 1
//Write a program that asks the user to enter a password. Keep asking the user to enter a password until they enter the correct password.
var password = 1234;
var input;
do{
    input = parseInt(prompt("Enter the Password"));
}while(input !== password)
alert("Correct password");

//Problem no 2 
//Write a program that asks the user to enter a number and then prints out all the numbers from that number down to 1.
var num = parseInt(prompt("Enter your number"));
console.log(num);
do{
    console.log(num);
    num--;
}while(num >= 1);

//Problem no 3
//Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number. At the end of the loop, the program should ask the user if they want to play again.
do {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  let guess;
  let numGuesses = 0;

  do {
    guess = prompt("Guess a number between 1 and 100");

    numGuesses++;

    if (guess == randomNumber) {
      alert(`Congratulations! You guessed the number in ${numGuesses} guesses.`);
    } else if (guess < randomNumber) {
      alert("Too low. Guess again.");
    } else if (guess > randomNumber) {
      alert("Too high. Guess again.");
    }
  } while (guess != randomNumber);

  playAgain = confirm("Do you want to play again?");
} while (playAgain);

//Problem no 4
//Write a js program that asks the user to enter a series of numbers and then finds the largest number. The program should keep asking the user for numbers until they enter a negative number.using do while loop

var largestNumber = 0;
var number = 0;
do{
    number=parseFloat(prompt("Enter Number"));
    if (number>largestNumber){
        largestNumber=number;
    }
}while(number>=0);

console.log("The largest number enter is", largestNumber);

//Problem no 5
//Write a js program that asks the user to enter a series of words and then prints out the words in reverse order. The program should keep asking the user for words until they enter the word "stop". Using do while loop
let words = [];
let word;

do {
  word = prompt("Enter a word:");
  if (word !== "stop") {
    words.push(word);
  }
} while (word !== "stop");

for (let i = words.length - 1; i >= 0; i--) {
  console.log(words[i]);
}

//Section no 8
//problem no 1
//let dayOfWeek = 5; // Friday
switch (dayOfWeek) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid day of the week");
      break;
  }
  
  //Problem no 2
  //Write a js program print total number of days in a month using switch case.
  var month = 1;
  var year = 2023;
  switch(month){
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
        console.log("This month has 31 days");
        break;
    case 3:
    case 5:
    case 8:
    case 10:
        console.log("This month has 30 days");
    case 1:
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
            console.log("This month has 29 days");
        }else{
            console.log("This month has 28 days");
        }break;
        default:
        console.log("Invalid Number");
        break;
  }

  //Problem no 3
  //Write a js program to check whether an alphabet is vowel or consonant using switch case.
  var letter= 'm';
  switch(letter){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(letter + ' '+ "is vowel");
        break;
        default:
            console.log(letter + ' ' + "is consonent");
            break;
  }
  
  //Problem no 4
  // Write a js program to find maximum between two numbers using switch case.
  var num1 = parseInt(prompt("Enter first number"));
  var num2 = parseInt(prompt("Enter second number"));
switch(true){
    case (num1 > num2):
        console.log("num1 i greater than num 2");
        break;
        default:
            console.log("num1 is less than num2");
        break;
}

//Problem no 5
//Write a js program to check whether a number is even or odd using switch case.
var number = parseInt(prompt("Enter your number"));
switch(true){
    case(number%2==0):
        console.log(number + ' ' + "is even number");
        break;
        default:
            console.log(number + ' ' + 'is odd number');
        break;  
}

//Problem no 6
// Write a js program to check whether a number is positive, negative or zero using switch case.
var number = parseInt(prompt("Enter your number"));

switch(Math.sign(number)){
    case 1:
        console.log(number + ' ' + "is positive");
    break;
    case -1:
        console.log(number+' ' + "is negative number");
    break;
    case 0:
        console.log(number+' ' + "is zero number");
    break;
    default:
        console.log("invalid number");
    break;
}









