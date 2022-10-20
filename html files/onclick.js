
const bezirke = document.getElementsByTagName("g");

for (let g of bezirke) {

  g.addEventListener("click", checkMistake);

  /*g.addEventListener("mouseover", function(){
    const collection = document.getElementById(this.id).firstElementChild;  //style ist im path-tag, deshalb child Element
    collection.style.fill = "yellow";
  });

  g.addEventListener("mouseout", function(){
    const collection = document.getElementById(this.id).firstElementChild;
    collection.style.fill = "pink"; 
  });
*/
}

function checkMistake() {
  alert(this.id);
  //const collection = document.getElementById(this.id).firstElementChild;
  //collection.style.fill = "red"; 
}
