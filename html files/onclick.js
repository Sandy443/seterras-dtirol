
const category = document.getElementsByTagName("g");
const categoryArray = [];

window.onload = function createArr() {
  var inputs = document.getElementsByTagName("g");
for (var i = 0; i < inputs.length; i++) {
  categoryArray.push(inputs[i].id);
}
alert(categoryArray);
}

for (let g of category) {

  g.addEventListener("click", checkMistake);
  const output = g.querySelectorAll(this.id);
  console.log(output);


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
<<<<<<< HEAD:html files/onclick.js
  //const collection = document.getElementById(this.id).firstElementChild;
  //collection.style.fill = "red"; 
=======
  alert(categoryArray);
>>>>>>> f6a072cae92d2477e349d0f2823aa47769b336da:onclick.js
}

