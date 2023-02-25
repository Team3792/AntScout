let fieldImage;
let startX, startY;
let startedSelection = false;
let endingLocationX, endingLocationY;

let selectionState = "none";

function preload(){
  fieldImage = loadImage("FieldImage.png");
}

function setup() {
  createCanvas(fieldImage.width/fieldImage.height * 400, 400);
}

function draw() {
  if(mouseIsPressed){
    endingLocationX = mouseX;
    endingLocationY = mouseY;
  }
  background(255);
  image(fieldImage, 0, 0, width, height);
  if(startedSelection == true){
    fill(150, 100);
    rect(0, 0, width, height)
  }
  if(selectionState != "none"){
    
    if(selectionState == "origin"){
      
      let d = dist(startX, startY, endingLocationX, endingLocationY)/30;
      strokeWeight(10);
      stroke(214, 73, 73);
      if(startX < width/2){
   stroke(73, 111, 214);
    }
    //  line(startX, startY, mouseX, mouseY);
      line(startX, startY, (endingLocationX - startX)/d + startX, (endingLocationY - startY)/d + startY);
           }
    if(startX < width/2){
   fill(3, 3, 252);
    }else{
    fill(252, 32, 3);
    }
    noStroke();
    ellipse(startX, startY, 20, 20);
  }
}

function mousePressed(){
  startedSelection = true;
  selectionState = "origin";
  startX = mouseX;
  startY = mouseY;
}