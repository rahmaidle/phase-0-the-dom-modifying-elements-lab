// Write your code here!
const main = document.querySelector("main#main");
main.remove("main#main");

const newHeader=document.createElement("h1");
newHeader.id="victory";
newHeader.textContent=  "Rahma is the champion";

document.body.appendChild(newHeader);