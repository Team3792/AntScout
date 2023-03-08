class FinishedScreen {
  
  
  
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
    text("Match Finished!", 200, 200);
  
  }
}