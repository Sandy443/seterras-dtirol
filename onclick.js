
const bezirke = document.getElementsByTagName("g");
var mistakes = 0;
const bezirkeArray = [];


  window.onload = function()  {
    const selection = document.querySelectorAll('g[id]');
    for (let i = 0; i < selection.length; i++) {
    bezirkeArray.push(selection[i]);
  }
  console.log(bezirkeArray);
  };


for (let g of bezirke) {

  g.addEventListener("click", checkMistake);

  g.addEventListener("mouseover", function(){
    const collection = document.getElementById(this.id).firstElementChild; //style ist im path-tag, deshalb child Element
    collection.style.fill = "yellow";
  });

  g.addEventListener("mouseout", function(){
    const collection = document.getElementById(this.id).firstElementChild;
    collection.style.fill = "pink"; 
  });

}


function checkMistake() {
  alert(this.id);
  
  /*if (mistakes == 0) {
    collection.style.fill = "green";
 }
 if (mistakes == 1) {

 } */
}
