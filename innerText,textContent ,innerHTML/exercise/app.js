// 1. Check the innerText of "first" element
// 2. Check the textContent of "second" element
// 3. Check the innerHTML of "third" element

let firstElement = document.querySelector(".first").innerText;
console.log("first", firstElement);

const secondElement = document.querySelector(".second").textContent;

console.log("secondElement", secondElement);

const thirdElement = document.querySelector(".third").innerHTML;
console.log("thirdElement", thirdElement);
