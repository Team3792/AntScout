let Nodes = [];
let scorings = [];
let isTouching = false;
let started = false;
let startButton;
let carpetBackground;
let engagedButton, dockedButton;
let dockedImage, engagedImage;
let startMillis, startTeleOpMillis = 0;
let chargeStationScores = [0, 0];
let passedAutoChargeStationDeadline = false;
let gameSection = 0;
let clock;
let startedTeleOp = false;
let endedAuto = false;
let startTeleOpButton;
let matchIsFinished = false;
let finishedScreen;
let backspaceButton;
let ground, mid, high;
let xImage;

function preload(){
  carpetBackground = loadImage("carpet.jfif");
  dockedImage = loadImage("docked.png");
  engagedImage = loadImage("engaged.png");
  ground  = loadImage("ground.png");
  mid = loadImage("mid.png");
  high = loadImage("high.png");
  xImage = loadImage("x.png");
}

function setup() {
  createCanvas(400, 500);
  rectMode(RADIUS);


  Nodes = [
  new Node("cone", 0),
  new Node("cone", 1),
  new Node("cone", 2),
  new Node("cube", 0),
  new Node("cube", 1),
  new Node("cube", 2)
];
  console.log(Nodes);
  startButton = new StartButton();
  
  engagedButton = new ChargeStationButton("Engaged");
  dockedButton = new ChargeStationButton("Docked");
  
  clock = new Clock();
  
  startTeleOpButton = new StartTeleOpButton();
  
  
  finishedScreen = new FinishedScreen();
  
  backspaceButton = new BackspaceButton();
  console.log(backspaceButton);
  
}

function draw() {
  push();
  tint(80, 80, 80, 100);
  imageMode(CORNERS);
  
  image(carpetBackground, 0, 0, width, height);
  pop();
  showNodes();
    engagedButton.update();
  dockedButton.update();
  
  image(ground, 50, 330, 50, ground.height/ground.width * 50);
  image(mid, 50, 230, 50, mid.height/mid.width * 50);
  image(high, 50, 130, 50,high.height/high.width * 50);
//       this.centerY = 330;
//          break;
       
       
//      case 1:
     
//        this.centerY = 230;
//        break;
       
       
       
//      case 2:
//         this.centerY = 130;
  
  if(started == false){
    startButton.update();
  }
  
  
  startTeleOpButton.update();
  
  if((millis() - startMillis) / 1000 > 25 && !passedAutoChargeStationDeadline){
    
    passedAutoChargeStationDeadline = true;
    if(engagedButton.selected){
      chargeStationScores[0]=2;
      engagedButton.selected = false;
    }else if(dockedButton.selected){
      chargeStationScores[0]=1;
      dockedButton.selected = false;
    }
  }
  
  fill(255);
  push();
  strokeWeight(6);
  stroke(30, 102, 45);
  rectMode(CORNERS);
  rect(0, -60, width, 90, 10);
  
  pop();
  clock.update();
  if((started && !endedAuto) || (startedTeleOp && !matchIsFinished)){
  backspaceButton.update();
  }
  
  if(matchIsFinished){
    finishedScreen.show();
  }
  
  
  

}

function showNodes(){
  for(let i = 0; i < 6; i++){
    Nodes[i].update();
  }

}

function keyPressed(){
  console.log(scorings);
}

function touchStarted(){
  isTouching = true;
}

function touchEnded(){
  isTouching = false;
}

function getTouch(){
  if(touches.length>0){
    return [
      touches[length - 1].x,
      touches[lenght - 1].y
    ]
  }else{
    return [-999, -999];
  }
}