console.log("accessing the DOM elements");
let h1Selected = document.getElementsByTagName("h1");
console.log(h1Selected, "h1 Selected"); //It will return 

let idSelectedBy = document.getElementById("id-1");

//console.log("idSelectedBy", idSelectedBy.innerHTML);
/*
querrySelector()
*/

const querrySelector = document.querySelector("h1");

//console.log("querySelector", querrySelector); //It will retrun h1

const hello = document.querySelector(".noNme"); // period is important

//console.log("hello", hello); // return null if there is not such class present in the dom

const byId = document.querySelector("#id-1"); //pound symbol is important

//console.log("byId", byId);+

const querry = document.querySelector(".cls");
console.log("querry", querry.innerText);

/*
If you use the className in querrySelector which have been appeared more than once than the first appearance will be selected

*/

/*
querrySelectorAll()

This will select all The elements mentioned inside the method
*/

const selectAll = document.querySelectorAll(".cls");

console.log("selectAll", selectAll); // return array of h3.cls

const allTag = document.querySelectorAll("li");
console.log("allTag", allTag); // will return array of li


