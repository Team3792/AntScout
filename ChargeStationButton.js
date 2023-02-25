class ChargeStationButton{
  //type is eitther "engaged" or "docked"
  constructor(type){
    this.type = type;
    this.findLocation();
    this.clickableObject = new ClickableObject(75, 50, this.centerX, this.centerY);
    this.selected = false;
    this.pressing = false;
  }
  
  findLocation(){
    if(this.type == "Engaged"){
      this.centerX = 300;
    }else {
      this.centerX = 100;
    }
    
    this.centerY = 430;
  }
  
  update(){
    this.show();
   if(started){
    if(this.clickableObject.isClicked(mouseX, mouseY) && mouseIsPressed){
     
      if(this.pressing == false){
        this.pressing = true;
       this.selected = 1 -  this.selected;
        if(this.type == "Engaged"){
          if(dockedButton.selected && this.selected){
            dockedButton.selected = false;
          }
        }else if(engagedButton.selected && this.selected){
          engagedButton.selected = false;
        }
      }
    }else{
      this.pressing = false;
    }
   }
  }
  
  
  
  show(){
    stroke(0);
    strokeWeight(3);
    if(this.selected){
      stroke(96, 252, 117);
    strokeWeight(6);
    }
    fill(200);
   
    rect(this.centerX, this.centerY, 75, 50, 20);

    imageMode(CENTER);
    let imageWidth = 150;
    if(this.type == "Engaged"){
    image(engagedImage, this.centerX, this.centerY, imageWidth, engagedImage.height / engagedImage.width * imageWidth);
    }else{
      image(dockedImage, this.centerX, this.centerY, imageWidth, dockedImage.height / dockedImage.width * imageWidth);
    }
    
    // fill(0);
    // noStroke();
    // textSize(30);
    // text(this.type, this.centerX, this.centerY);
    
  }
}