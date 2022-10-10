
const bezirke = document.getElementsByTagName("g");
var mistakes = 0;


for (let g of bezirke) {
  g.addEventListener("click", checkMistake);
  
  g.addEventListener("mouseover", function(){
    const collection = document.getElementById(this.id).firstElementChild;
    collection.style.fill = "yellow";
  });

  g.addEventListener("mouseout", function(){
    const collection = document.getElementById(this.id).firstElementChild;
    collection.style.fill = "pink"; 
  });
}



function checkMistake() {
  if (mistakes == 0) {
    collection.style.fill = "green";
 }
 if (mistakes == 1) {

 }
}
