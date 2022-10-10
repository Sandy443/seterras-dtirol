
const bezirke = document.getElementsByTagName("g");
var mistakes = 0;
const bezirkeArray = [];

function array() {
    const collection = document.getElementById(this.id).firstElementChild;
    collection.style.fill = "yellow";

}


for (let g of bezirke) {
  g.addEventListener("click", checkMistake);
  bezirkeArray.push(this.id);
  const collection = document.getElementById(this.id).firstElementChild;
    alert(this.id);


  
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
  alert("hallo");
  
  /*if (mistakes == 0) {
    collection.style.fill = "green";
 }
 if (mistakes == 1) {

 } */
}
