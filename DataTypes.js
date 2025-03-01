//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Hussaina";
let lastName = "Shuaibu";
let country = "Nigeria";
let city = "Lagos";
let myAge = 45;
let isMarried = true;
let year = 2025;

console.log("Type of firstName: ", typeof firstName);

console.log("Type of lastName: ", typeof lastName);

console.log("Type of country: ", typeof country);

console.log("Type of city: ", typeof city);

console.log("Type of age: ", typeof myAge);

console.log("Type of isMarried: ", typeof isMarried);

console.log("Type of year: ", typeof year);


//Check if type of '10' is equal to 10

console.log("Is 10 equal to 10? ", '10' === 10);
console.log("Is 10 equal to 10? ", typeof '10' === typeof 10);

//Check if parseInt('9.8') is equal to 10

console.log("Is parseInt('9.8') equal to 10? ", parseInt('9.8') === 10);
//Write three JavaScript statements which provide truthy value.

console.log(true);
console.log(1);
console.log("Hello World");

//Write three JavaScript statements which provide falsy value.

console.log(false);
console.log(0);
console.log("");


/* Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
*/

console.log(4 > 3 && 10 < 12); // false
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // true
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true


//Write a script that prompts the user to enter base and write another prompt for height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).


//let base = parseFloat(prompt("Enter the base of the triangle:"));
//let height = parseFloat(prompt("Enter the height of the triangle:"));

let area = 0.5 * base * height;

console.log("The area of the triangle is:", area);


/*
Using prompt, get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years. It should be like:

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/

let birthYear = parseInt(prompt("Enter birth year:"));
let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

if (age >= 18) {
    console.log("You are", age, "years old. You are old enough to drive");
} else {
    let yearsToWait = 18 - age;
    console.log("You are", age, "years old. You will be allowed to drive after", yearsToWait, "years.");
}



// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript

let challenge = "30 Days Of JavaScript";

//Change all the string characters to capital letters using toUpperCase() method

challenge = challenge.toUpperCase();

//Change all the string characters to lowercase letters using toLowerCase() method

challenge = challenge.toLowerCase();


//Cut (slice) out the first word of the string using slice()
challenge = challenge.slice(0, 2);
challenge = challenge.slice(0, challenge.indexOf(" "));



//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.


challenge = challenge.slice(challenge.indexOf(" ") + 1);



//Check if the string contains a word Script using includes() method
let string = "30 Days Of JavaScript";

console.log(string.includes("Script")); // true


//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

let text = "30 Days Of JavaScript";

text.indexOf("a");


//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

text.lastIndexOf("a");


//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence = "You cannot end a sentence with because because because is a conjunction";

console.log(sentence.indexOf("because")) // Outputs 31; 



//Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(sentence.startsWith("30 Days Of JavaScript")); // true


//Use endsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(sentence.endsWith("JavaScript")); // true


//Generate a random number between 0 and 100 inclusively.

let randomNumber = Math.floor(Math.random() * 101);

console.log(randomNumber); // Outputs a random number between 0 and 100 (inclusive)


// Declare variables named a & b, assign them to numbers. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = 90;
let b = 40;

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}

let result = a > b? "a is greater than b" : "a is less than b";
console.log(result);



/* Declare a variable named scores, Write a code which can give grades to students according to theirs scores and log it to the console:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

let scores = 100;

if (scores >= 80) {
    console.log("Grade: A");
}
else if (scores >= 70 && scores <= 89) {
    console.log("Grade: B");
}
else if (scores >= 60 && scores <= 69) {
    console.log("Grade: C");
}
else if (scores >= 50 && scores <= 59) {
    console.log("Grade: D");
}
else if (scores >= 0 && scores <= 49) {
    console.log("Grade: F");
}























