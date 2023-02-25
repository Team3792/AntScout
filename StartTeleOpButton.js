class StartTeleOpButton{
  

  constructor(){
    this.clickableButton = new ClickableObject(200, 200, 200, 200);
  }
  
  update(){
     if(endedAuto == true && startedTeleOp == false){
  this.show();
        
      }
    if(this.clickableButton.isClicked(mouseX, mouseY) && mouseIsPressed){
      if(endedAuto == true && startedTeleOp == false){
        startTeleOpMillis = millis();
      startedTeleOp = true;
        
      }
    }else{
     
    }
  }
  
  show(){
    noStroke();
    fill(150, 150);
    push();
    rectMode(CORNER);
    rect(0, 0, width, height);
    pop();
    stroke(34, 135, 47);
    strokeWeight(6);
    fill(96, 252, 117);
    rect(200, 200, 150, 75, 30);
    textAlign(CENTER, CENTER);
    textSize(30);
    textStyle(BOLD);
    fill(13, 82, 22);
    noStroke();
    text("Start Tele-Op", 200, 200);
  }
  
  

}