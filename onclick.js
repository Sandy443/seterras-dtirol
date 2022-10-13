
const bezirke = document.getElementsByTagName("g");
const bezirkeArr = [];

window.onload = function functionName() {

  for(var i = 0; i<bezirke.length; i++) {
    bezirkeArr.push(this.id);
}

  console.log(bezirkeArr);

}

for (let g of bezirke) {

  g.addEventListener("click", checkMistake);

  g.addEventListener("mouseover", function(){
    const collection = document.getElementById(this.id).firstElementChild;  //style ist im path-tag, deshalb child Element
    collection.style.fill = "yellow";
  });

  g.addEventListener("mouseout", function(){
    const collection = document.getElementById(this.id).firstElementChild;
    collection.style.fill = "pink"; 
  });

}

function checkMistake() {
  alert(this.id);
  alert(bezirkeArr);
}
