
const bezirke = document.getElementsByTagName("g");
var mistakes = 0;
const bezirkeArray = [];


  window.onload = function()  {
    var selection = document.querySelectorAll('g[id]');
    var btnsArr = Array.from(selection);
    alert(btnsArr);
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
