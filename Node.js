class Node{
  
  //Node types
  //ElementType = "cube" "cone"
  //Heigt = 0, 1,2 
  constructor(elementType, height){
    
    this.elementType = elementType;
    this.height = height;
    this.findLocation();
    
    this.clickableObject = new ClickableObject(20, 20,     this.centerX, this.centerY);
    
    this.clicked = false;
    this.frameCountLastClick = 0;
    
  }
  
  findLocation(){
   switch(this.height){
     case 0:
         this.centerY = 330;
         break;
       
       
     case 1:
     
       this.centerY = 230;
       break;
       
       
       
     case 2:
        this.centerY = 130;
       break;
   }
    
    
    if(this.elementType == "cube"){
      this.centerX = 300;
    }else {
      this.centerX = 100;
    }
    
  }
  
  update(){
    this.show();
    // if(isTouching && touches.length > 0){
    //   console.log(touches);
      
    // if(this.clickableObject.isClicked(touches[touches.length-1].x, touches[touches.length-1].y)){
    if(started && !(endedAuto && !startedTeleOp) && !matchIsFinished){
    if(this.clickableObject.isClicked(mouseX, mouseY) && mouseIsPressed){
      if(!this.clicked){
        // console.log(this.elementType);
        // console.log(this.height);
       
        scorings.push({
          where: this.height,
          type: this.elementType,
          time: millis()/1000
        })
      }
      this.clicked = true;
      this.frameCountLastClick = frameCount;
      this.showRing();
      
    
    } if(frameCount - this.frameCountLastClick < 60){
      this.showRing(frameCount - this.frameCountLastClick);
    }else{
      this.clicked = false;
    }
    }
  }
  
  showRing(trans){
    noFill();
    stroke(96, 252, 117, 255 - trans/60*255);
    
    strokeWeight(15);
    ellipse(this.centerX, this.centerY, 70);
    
  }
  
  show(){
    
    noStroke();
    
    if(this.elementType == "cone"){
      
     fill(235, 213, 52,  100 + started * 155);
    ellipse(this.centerX, this.centerY, 20);
      
    }else {
      
      fill(143, 52, 235, 100 + started * 155);
      rect(this.centerX, this.centerY, 20, 20, 10);
    }
    
  }
  
  
}