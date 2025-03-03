import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const symbolArray=["♦", "♥", "♠", "♣"];
  const numberArray=["A","2","3","4","5","6","7","8","9","J","Q","K"];
  /*next steps:
  -use penis function for each onload(or reload if you're fancy)
  */
 function getRandomIndex(array){
  let index = Math.floor(Math.random() * array.length)
  return array[index];
 }
 const randomSymbol = getRandomIndex(symbolArray);
 if (randomSymbol=== "♠" || randomSymbol=== "♣"){
  symbolUpLeft.style.color = "black";
  symbolDownRight.style.color = "black";
 }

 document.getElementById("symbolUpLeft").innerText = randomSymbol;
 document.getElementById("symbolDownRight").innerText = randomSymbol;
 document.getElementById("number").innerText = getRandomIndex(numberArray);

};
