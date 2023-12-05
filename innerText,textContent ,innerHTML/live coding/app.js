// innerText
// textContent
// innerHTML

const p = document.querySelector("p");
console.log("p", p);

const str = document.querySelector("strong").innerText;
console.log("str", str); // returns I am Strong

console.log("content", p.textContent); // This will return everything the text inside strong tag script tag everything inside the tag specified

console.log("innerHTML", p.innerHTML);
// Returns everything along with the other tags and content <strong> </strong> , <script> </script>

/*
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo dolorem rem
      ab laboriosam dolor iste perspiciatis labore delectus nihil ea eligendi
      ducimus et soluta dignissimos, nobis cumque sed
      <strong> I am Strong</strong>. Eaque nihil iste explicabo unde
      dolore dolor architecto modi earum repudiandae
      <script>
        console.log("Avishekh Here");
      </script>
      quisquam, vitae nesciunt quibusdam, corporis expedita numquam reiciendis
      dolores?

*/

/*
Changing the inner text using JS
*/

let change = document.getElementById("ch");

change.innerText = "This is Changed";

console.log("ch", change);

document.querySelector("h1").innerText = 78787;
