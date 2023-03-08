class BackspaceButton {

  constructor(){
    this.x = 350;
    this.y = 40;
    this.radius = 30;
    this.click = new ClickableObject(this.radius, this.radius, this.x, this.y);
    console.log(this.click);
    this.clicked = false;
    this.timeOfLastClick = 0;
    this.deleted = false;
    this.frameCountLastClick = -100;
    
  }
  
  update(){
    
    if(this.click.isClicked(mouseX, mouseY) && mouseIsPressed){
     
      if(this.clicked == false){
        this.clicked = true;
        this.deleted = false;
        this.timeOfLastClick = millis();
      
        
        
     
      }
      if(millis() - this.timeOfLastClick > 750 && this.deleted == false && scorings.length>0){
        let lastElement = scorings[scorings.length -1];
        Nodes[lastElement.where + 3*(lastElement.type == "cube")].delete();
        scorings.splice(scorings.length - 1, 1);
        this.deleted = true;
        console.log("deleted");
        this.frameCountLastClick = frameCount;
        
        }
    }else{
      this.clicked = false;
    }
    this.show();
    
    if(frameCount  - this.frameCountLastClick < 60){
      console.log("showingring")
      this.showRing(frameCount  - this.frameCountLastClick)
    }
  }
  
  show(){
    imageMode(CENTER, CENTER);
    image(xImage, this.x, this.y, this.radius*2, this.radius*2)
  }
  
    showRing(trans){
    noFill();
    stroke(217, 52, 52, 255 - trans/60*255);
    
    strokeWeight(15);
    ellipse(this.x, this.y, 80);
    
  }
  
}