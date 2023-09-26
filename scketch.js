function setup() {
    createCanvas(800, 800);
    background("black");
  }
  
  function draw() {
    
  stroke("orange");
  fill("yellow");
    
   // console.log(mouselsPressed);
   
   if (mouseIsPressed) {
  rect(mouseX, mouseY, 30, 40);
   }
  }