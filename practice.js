//JAVASCRIPT 1 REVIEW
//Many of these problems will require you to console log certain values.  To do this we use:
console.log("A value");
//Click run to test your values.

//Data types
//What are our known data types?
/*
TYPE YOUR ANSWERS HERE
SIMPLE:
Number
String
Boolean
Null
Undefined
Symbol
COMPLEX:
Array
Object

*/

//Variables
//Declare a variable called name and give it a value of your name as a string.  Log it to the console.

let name = 'Jeff'
console.log(name)

//Create an array called nums which will hold the numbers 1 - 5

let nums = [1,2,3,4,5]

//Create an object called person, this object should have 3 key value pairs: name, which should be your name, age which should be your age, and hobbies which should be an array of 3 strings, each a hobby you enjoy.  Console log the first item in this array.
//HINT: You will need to use both dot and bracket notation to access this item

const person = {
    name: 'Jeff',
    age: 28,
    hobbies: ['Chess', 'Guitar', 'Coffee']
}
console.log(person.hobbies[0])

//Reassigning Variables
let instructor = "Billy Bob";
//Reassign the instructor variable to have a value of Matt

instructor = 'Matt'

//If statements
let age = 15;
//Write an if statement that checks the value of the age variable.
//If age is greater than 16, console log 'You can drive' otherwise console log 'You cannot drive'

if (age >= 16) {
    console.log('You can drive')
} else {
    console.log('You cannot drive')
}

//Write an if statement that checks the following:
//If age is between 0 and 12, console log 'You could still go to hogwarts'
//If age is between 13 and 17 console log 'You probably won't go to hogwarts'
//If age is 18 or greater console log 'Hogwarts is right out'

if (age <= 12) {
    console.log('You could still go to hogwarts')
} else if (age > 12 && age <=17) {
    console.log("You probably won't go to hogwarts")
} else {
    console.log('Hogwarts is right out')
}

//Write an if statement that checks if age is equal to 16 or 21.  If it is, console log 'what a big year' otherwise console log 'no big deal'

if (age === 16 || age === 21) {
    console.log('what a big year')
} else {
    console.log('no big deal')
}

//Write an if statement that checks if age is not 22.  If so, console log 'feeling normal'  otherwise, console log 'Feeling 22'

if (age !== 22) {
    console.log('feeling normal')
} else {
    console.log('Feeling 22')
}

//Try changing the value of the age variable to get different results from your if statements

//What are some examples of falsy values?
/* TYPE YOUR ANSWERS HERE
0
""
null
undefined
NaN
false

*/

let cheat = false;

//Create an if statement that checks to see if cheating is a falsy value - if it is return 'falsy'; if not, return 'truthy'

// if (cheat) {
//     return 'truthy'
// } else {
//     return 'falsy'
// }

//Functions
//Write a function called sum that takes two parameters.  Both of these should be numbers. The function should return the sum of the two numbers. Write it first as a function declaration and then again as a function expression.

const sum = (num1, num2) => num1 + num2


//Write a function called whatAmI which takes two parameters, a name and a job.
//It should return a string of 'Yer a job, name'
//For example, passing 'Harry' and 'wizard' as arguments would return 'Yer a wizard, Harry'  Invoke the function passing in different values to test it.
//HINT: Try using template strings on this one

const whatAmI = (name, job) => `Yer a ${job}, ${name}`