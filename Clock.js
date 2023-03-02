class Clock{
  
  constructor(){
    this.x = 60;
    this.y = 40;
    this.verticalRadius = 20;
    this.horizontalRadius = 40;
    this.timeSinceStart = 0;
    this.time = 15;
  }
  
  update(){
    this.updateTimeInterval();
    this.findNewTime();
    this.show();
  }
  
  updateTimeInterval(){
    if(started){
    if(this.timeSinceStart <= 15){
      this.time = 15 - this.timeSinceStart
      gameSection = 0;
    }else if(this.timeSinceStart > 15 && startedTeleOp == false){
      endedAuto = true;
      gameSection = 1;
    }else if(startedTeleOp){
      
      if(startedTeleOp && this.timeSinceTeleOp <= 105){
      this.time = 105 - this.timeSinceTeleOp;
      gameSection = 2;
    } if(this.time <=30){
      this.time = 105 - this.timeSinceTeleOp;
      gameSection = 3;
    }
     if(this.time <=0){
      matchIsFinished = true;
       this.time = 0;
    }
    }
    }
  }
  
  
  show(){
    noStroke();
    let txt, clr
    if(gameSection == 0){
   
      clr = color(23, 110, 46);
      txt = "Auto"
    }else if(gameSection == 1){
     
      clr = color(255, 0, 0);
      txt = "Auto to Tele-Op"
    }else if(gameSection == 2){
  
      clr = color(232, 217, 46);
       txt = "Tele-Op"
    }else if(gameSection == 3){
 
      clr = color(43, 46, 214);
      txt = "Endgame";
    }else if(gameSection == 4){
      clr = color(255, 0, 0);
      txt = "Done, enter CS";
    }
    textAlign(LEFT, CENTER);
    fill(clr);
    textSize(30);
    text(txt, 150, 40);
    
    strokeWeight(4);
   // stroke(0);
    rect(this.x, this.y, this.horizontalRadius, this.verticalRadius, 10);
      textAlign(RIGHT, CENTER);
    textSize(30);
    noStroke();
    //strokeWeight(2);
    fill(255);
if(this.time > 10){
  text(round(this.time, 0), this.x + 20, this.y);
}else {
    if(round(this.time, 1) == round(this.time)){
   // console.log("adding a 0");
       text(round(this.time, 0) +".0", this.x + 20, this.y);
  }else {
    text(round(this.time, 1), this.x + 20, this.y);
  }
}
    
    
  }
  
  findNewTime(){
    if(!matchIsFinished){
    this.timeSinceStart = 
    (millis() - startMillis)/1000
    if(startedTeleOp){
    this.timeSinceTeleOp = (millis() - startTeleOpMillis)/1000;
    }
    
  }
  }
  
  
}