
const bezirke = document.getElementsByTagName("g");



for (let g of bezirke) {
  g.addEventListener("click", function(){
    alert(this.id);
  });
  
  g.addEventListener("mouseover", function(){
    const collection = document.getElementById(this.id).firstElementChild;
    collection.style.fill = "yellow";
    
  });

  g.addEventListener("mouseout", function(){
    const collection = document.getElementById(this.id).firstElementChild;
    collection.style.fill = "pink";
    
  });
}

