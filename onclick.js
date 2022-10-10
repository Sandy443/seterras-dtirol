
const bezirke = document.getElementsByTagName("g");

for (let g of bezirke) {
  g.addEventListener("click", function(){
    alert(this.id);
  });
  
  g.addEventListener("click", function(){
    const collection = document.getElementById(this.id).firstElementChild;
    collection.style.fill = "yellow";
  });
}
