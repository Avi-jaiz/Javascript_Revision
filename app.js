// // //Declare Variable
// // let name = "Avishekh Jaiswal";
// // let gender = "male";

// // // Number

// // let num = 10;

// // let firstFavNumber = 10;
// // let secondFavNumber = 15;
// // let sum = firstFavNumber + secondFavNumber;
// // let diff = firstFavNumber - secondFavNumber;
// // let mul = firstFavNumber * secondFavNumber;
// // let div = firstFavNumber / secondFavNumber;

// // let mod = firstFavNumber % secondFavNumber;

// // console.log(firstFavNumber ** secondFavNumber, "power");
// // console.log("sum", sum);
// // console.log("diff", diff);
// // console.log("mul", mul);
// // console.log("div", div);
// // console.log("mod", mod);

// // //Booleans

// // let isAdult = false;
// // // Falsy Values = false , 0 , undefined , null , -0 , NaN , "" , '' ,``.

// // // Truthy values = true , 1 "Random STring"

// // let isJsProgrammingLanguage = true;
// // let isHard = false;

// // let favNumber = 50;
// // console.log("favNumber", favNumber + undefined); //NaN

// // //Comparisonal Opeartors  ~~~~~      > , < , <= ,>=

// // console.log(10 > 10); //False
// // console.log(10 < 10); //False
// // console.log(10 <= 10); //True bcoz here 10 is less than or equal to 10 here OR operator works if one of the statement is true
// // console.log(10 >= 10); // True bcoz here 10 is less than or equal to 10 here OR operator works if one of the statement is true

// // // Relational Operators   ~~~~~

// // // Equality Operators ~~~     == , ==== ,!==
// // // === strictly equality ( type + value )
// // // !== strictly non-equality operators ( type + value )

// // // == lose equality Operator (value)

// // let firstFavNumber1 = 5;
// // let secondFavNumber1 = 10;

// // /*
// // Objects

// // */

// // let car = {
// //   type: "sedan",
// //   model: "demoModel",
// //   color: "red",
// // };

// // console.log(typeof car);
// // car.type = "Toyota";

// // console.log("car", car);
// // car.wheels = 4; // Adding new property using dot notation

// // console.log("car", car);

// // /*
// // Functions
// // */

// // function sayHello(name) {
// //   //   console.log("hello", name);
// //   console.log(`My Name is ${name}`);
// // }

// // sayHello("789654");

// // function myFunction(a, b) {
// //   return a * b;
// // }

// // let x = myFunction(50, 100);
// // console.log("x", x);

// // // Function Declaration

// // function sayHello1(username) {
// //   return username;
// // }

// // //Function Expression

// // // A Function Expression are those in which in store a function in a variable

// // const greetings = function (user) {
// //   console.log(user);
// // };

// // greetings("hhi");

// // // When we provide function as an (argument) to other function that function is known as callback function

// // function showCallBack(fn) {
// //   const value = 10;
// //   fn(value);
// // }

// // showCallBack(function (value) {
// //   console.log(value , 'the value');
// // });

// // function greet(name, cb) {
// //   console.log(`Hello ${name}`);
// //   cb();
// // }

// // function cb() {
// //   console.log("I am call Back");
// // }

// // greet("avishekh", cb);

// // greet("Goldy", function () {
// //   console.log("THis is Second");
// // });

// // function showCallBackFunc(fn) {
// //   let value = 10;
// //   fn(value);
// // }

// // showCallBackFunc(function (value) {
// //   console.log(value, "values");
// // });

// // Scopes

// /*
// Scope in Javascript refers to the current context of code , which determines the accessibility of variables to javascript.

// // There are two types of scopes in JavaScript

// // Global Scope Variables are those declared outside of a block

// // Local Scope of variables are those declared inside of a block

// */

// /*
// Methods in JavaScript

// */

// // function greet() {
// //   return ` Hello, My name is ${person.name} and I am ${person.age} years old `;
// // }

// // const person = {
// //   name: "Avishekh",
// //   age: 30,
// //   greet,
// // };
// // console.log(person.greet());

// // let person = {
// //   name: "avishekh",
// //   age: 30,
// //   greet: function () {
// //     return ` Hello my name is ${person.name}  and I am ${this.age} `;
// //   },
// // };

// // console.log(person.greet());

// // const json = {
// //   name: "avishekh",
// //   age: 30,
// //   email: "j@gmail.com",
// //   isValid: true,
// //   hobbies: ["music", "running", "coding"],
// // };

// // let stringify = JSON.stringify(json);
// // console.log("stringify", stringify);

// // console.log("hello", JSON.parse(stringify));

// // const date = new Date();

// // const year = date.getMonth();
// // console.log("year", year);
// // console.log(date.toDateString());

// // // How to set Date minus or plus according to will
// // date.setDate(date.getDate() - 1);
// // console.log("date", date);

// //SetInterval

// function callem() {
//   console.log(`fun  called`);
// }

// // setInterval(callem, 2000);
// //The above code will run repeatedly in every 2 seconds

// // setTimeout(callem, 5000);
// // The above code will run once. after 5 seconds being over

// // const intervalID = setInterval(() => {
// //   console.log("hello");
// // }, 5000);

// // //STop the intreval

// // setTimeout(() => {
// //   clearInterval(intervalID);
// // }, 6000);

// console.log(`Some Random Let    7898
// iedowi`);

// /*
// Default parameters=  = Here we provide a defualt value to parameters in order to avoid any undefined or null value to the argument in function call
// */

// function defParamsFunction(a, b = 1) {
//   return a * b;
// }

// console.log("Default Params Functions", defParamsFunction(5));
// /*
// Spread Operator
// */

// const array = [1, 2, 3];
// const array2 = [4, 5];
// const concatedArray = [...array, ...array2];
// console.log("concated", concatedArray);

// const obj1 = {
//   name: "avi",
//   age: 30,
//   isDeveloper: true,
// };

// const obj2 = {
//   location: "india",
//   reactUser: "yes",
// };

// const concatedObj = {
//   ...obj1,
//   ...obj2,
// };
// console.log("concatedObj", concatedObj);

// /*
// Rest Operator :: Here the arguments , is written as an spread operator to provide an array of arguments ..Its used if we are unsure about the number of params that will be passed in function call

// function funcName(firstParams,...restParams){
//   return [firstParams,restParams]
// }
// */

// const greetings = (name, ...username) => {
//   // console.log(username);

//   console.log("name", name);
//   console.log("username", username);

//   return username;
// };

// console.log(greetings("avi", "28", "india", true, {}));

// /*
// Creating Object using Functions

// */

// function createObj(name, age, location) {
//   return {
//     name: name,
//     age: age,
//     location: location,
//     greet: function () {
//       return `Hello ${this.name} welcome to ${this.location} you are ${age} years old`;
//     },
//   };
// }

// const avishekh = createObj("avi", 30, "india");
// console.log("avishekh", avishekh);
// console.log(`Greeting ${avishekh.name} ${avishekh.greet()}`);

// const john = createObj("john", 24, "USA");
// console.log("john", john);

// console.log(`Greeting ${john.name} ${john.greet()}`);

// /*
// Destructuring in array and Objects

// */

// // Destructuring in Array

// const [a, b, c] = [1, , 2];

// console.log(a, "a", b, "b", c, "c", "Destructuring in array");

// // Destructuring in Object
// const obj5 = {
//   name: "avishkeh",
//   age: 30,
//   country: "india",
//   isProgrammer: true,
// };

// const { isProgrammer, name, country } = obj5;

// console.log("location", isProgrammer, name, country);

// function f() {
//   return [1, 2, 3];
// }

// const [x, s, y] = f();

// console.log(x, "x"); // 1
// console.log(y, "y"); // 3
// console.log(s, "s"); // 2

// // Assinging the rest of the array to a variable

// const [firstVar, hello, ...secondVar] = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log([firstVar, hello, secondVar]);

// // firstVar hold=== 1
// //hello hold=== 2
// // secondVar holds=== the rest of the elements
// //here the secondVar holds the rest of the assigned elements from the right side of the array

// const colors = ["red", "green", "blue", "yellow", "orange"];

// const [color1, color2, color3, ...restColors] = colors;

// console.log(color1, "color1");
// console.log(color2, "color2");
// console.log(color3, "color3");
// console.log(restColors, "restColors");

// const stu = {
//   name1: "Avi Stu",
//   rollNo: 26,
//   isStudent: true,
// };

// const { name1 } = stu;

// console.log("name1", name1);

// // Assigning alliases to the destructed variables

// const num = {
//   xy: 10,
//   yz: 10 + 15,
// };

// const { xy: firstNum, yz: secondNum } = num;

// console.log("x", firstNum, secondNum);

// // Object destructuring and rest operator

// let { apple, banana, ...restFruitsColor } = {
//   apple: "applesss",
//   banana: "bananass",
//   c: 300,
//   d: 400,
//   e: 500,
// };

// console.log(apple, restFruitsColor);

// const person = {
//   name: "John Doe",
//   age: 30,
//   gender: "male",
//   country: "USA",
// };

// const { name: personName, age: personAge, country: personCountry } = person;
// console.log("personName", personName);

// console.log("personCountry", personCountry);
// console.log("personAge", personAge);

/*
Function Destructuring
*/

// function printPerson(person) {
//   console.log(`Name : ${name}`);
//   console.log(`Age: ${age}`);
//   console.log(`Country : ${country}`);
// }

// printPerson(({ name, age, country } = person));

// /* or */

// function printInfo({ name, age, country }) {
//   console.log(`Name : ${name}`);
//   console.log(`Age: ${age}`);
//   console.log(`Country : ${country}`);
// }
// printInfo(person);

/*
Nested Destructuring
*/

// const songs = [
//   { name: "lucky you", singer: "Joyner", duration: 4.34 },
//   { name: "Just like you", singer: "NF", duration: 3.23 },
//   { name: "Humble Singer ", singer: "Kendrick Lamar", duration: 2.33 },
//   { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
//   { name: "Cold SHoulder", singer: "Central", duration: 5.23 },
// ];

// const [, , ,{ singer:s }] = songs;
// console.log("singer", s);

// Ternary Operator //

//condition ? exp if true : exp if false

// let password = 27;

// function passwordChecker(password) {
//   return password > 7 ? "strong" : "weak";
// }

// const check = passwordChecker(password);

// console.log("check", check);

/*
for let in loop
*/

// for (let key in person) {
//   // console.log(key, "key");
//   console.log("value", person[key], key);
// }

// For of ---- Arrays
// const array = ["apple", "banana", "kiwi", "pomegranate"];
// for (let key of array) {
//   console.log("key", key);
// }

// const object = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// for (let key in object) {
//   console.log("${key}", `${key} ${object[key]}`);
// }

/*





JavaScript Advanced Topics




*/

// When we call the forEach helper we pass in anonymous callback function
// This function gets called one time for every element in the array
// Whatever is inside the function that logic happens

// const color = ["teal", "blue", "red", "green"];

// for (var i = 0; i < color.length; i++) {
//   console.log("color[i]", color[i]);
// }

// color.forEach((items, index, array) => {
//   console.log("i", items, index, array);
// });

// // Or
// color.forEach(callBkFn);

// function callBkFn(items, index) {
//   console.log("items", items, index);
// }

// color.forEach((color) => console.log(color, "color"));

// const words = ["hello", "birds", "table", "football", "pipe", "code"];

// const capWords = words.forEach((words, index, arr) => {
//   arr[index] = words[0].toUpperCase() + words.substring(1);
//   console.log(arr[index], index, arr);
// });

// console.log(words, "words");

// const num = [2, 4, 6, 8];

// const multi = num.forEach((items, index, array) => {
//   array[index] = (items * 2) ;
// });

// console.log(num);

//Practice

// const arrayOfNumbers = [1, 2, 3, 4, 5, 6];

// let sum = 4;

// function adderFunc(items, index, array) {
//   array[index] = sum + items;
// }

// const addedNumber = arrayOfNumbers.forEach(adderFunc);

// console.log(arrayOfNumbers, "number");

// add all the elements of the arrayOfNumbers array and store summed variable

// let summed = 0;

// function adderFunc(items, index, array) {
//   summed += items;
// }

// const forE = arrayOfNumbers.forEach(adderFunc);
// console.log("arrayOfNumber", summed);

/*


Map method in Array
The map() method creates a new array populated with the results of calling function on every element in the calling array

*/

// const array = [1, 2, 3, 4, 5, 6];

// const doubled = array.map((items) => items * 2);
// console.log("doubled", doubled, "original", array);

// const double = array.forEach((items, index, array) => {
//   array[index] = items * 2;
// });

// console.log(array, "array");

// Diffrenece between forEach and map is that ...In forEcah the original array is mutated

// let people = [
//   { firstName: "Macom", lastName: "Reynolds" },
//   {
//     firstName: "Kaylee",
//     lastName: "Frye",
//   },
//   { firstName: "Jayne", lastName: "cobb" },
// ];

// const results = people.map((person) => {
//   return [person.firstName, person.lastName];
// });

// console.log("result", results);

// const arrayOfNumbers = [1, 5, 8, 4, 6, 7];

// // const mulByTen = arrayOfNumbers.map((items) => items * 10);

// function mulByTenFunc(arrayOfNumbers) {
//   return arrayOfNumbers * 10;
// }

// const eachFunc = (items, index, arr) => (arr[index] = items * 10);
// const mulTen = arrayOfNumbers.forEach(eachFunc);

// console.log("arr", arrayOfNumbers); // transformed the original array

// const mul = arrayOfNumbers.map(mulByTenFunc);
// console.log(mul);

/*
Filter Method
The filter() Method is a built in array method in Javascript that allows to create a new array containing elements that pass a certain condition. It provides a clean and concise way to filter out elements from an array based on a specific creteria


*/

// const songs = [
//   { name: "lucky you", singer: "Joyner", duration: 4.34 },
//   { name: "Just like you", singer: "NF", duration: 3.23 },
//   { name: "Humble Singer ", singer: "Kendrick Lamar", duration: 2.33 },
//   { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
//   { name: "Cold SHoulder", singer: "Central", duration: 5.23 },
// ];

// console.log(songs.filter((songs) => songs.duration > 3));

// const ages = [32, 33, 16, 40];
// // Iterate over the ages array and print only adults,those whose age is greater than 18

// const filteredAges = ages.filter((ages) => ages > 18);

// console.log("filtredAges", filteredAges);

/*
Practice Question
1. Iterate over the "words" array
2. Print only those words which length is greater then 6


*/

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const greaterThanSix = words.filter((items) => items.length > 6);
// console.log("greaterThanSix", greaterThanSix);

/*
Find ()


The find() method is another build-in array helper in javascript that allows to find the first element in an array that matches a specific condition. It returns the value of the first element that satisfies the given testing function , or undefined if no element is found

*/

// const peoples = [
//   { name: "huxn", age: 17 },
//   { name: "jimmy", age: 50 },
//   { name: "john", age: 18 },
//   { name: "alex", age: 20 },
//   { name: "jimmy", age: 30 },
//   { name: "alex", age: 30 },
// ];

// const findPeople = peoples.find((items) => items.name === "jimmy");

// console.log("findPeople", findPeople);

// const posts = [
//   { id: 1, content: "Good Post" },
//   { id: 2, content: "Funny Post" },
//   { id: 3, content: "Sad Post" },
// ];

// const findFunny = posts.find((items) => items.content === "Funny Post");

// console.log("find Funny", findFunny);

// const age = [3, 10, 18, 20];

// const ageFinder = (ages) => {
//   return ages > 5;
// };

// const res = age.find(ageFinder);

// console.log("res", res);

// const products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "IPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];

// let product;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category === "Books") {
//     product = products[i];
//     break;
//   }
// }

// console.log("product", product);

/*
Above code works as a find Method using for loop
*/
//--------------------------------------------------------

/*
The every() and some() are two built-in array methods in Javascript
that allows you to check the elements of an array based on a given condition. Both methods takes a callback function as an argument, which is applied to each element of the array.

*/

//The every() method tests weather all elements in the array pass the condition specified by the provided callback function. It returns true if the callback function returns true for every element, and false if any element fails the condition

// The some() method tests wheather atleast one element in the array passes the condition specified by the provided callback function. It returns true if the callback function returns true for atleast one element , and false if no element passes the condition

///////////////////////////////////////
