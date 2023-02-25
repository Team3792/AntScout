class ClickableObject{
  
  
    
  constructor(verticalRadius, horizontalRadius, centerX, centerY){
    this.verticalRadius = verticalRadius;
    this.horizontalRadius = horizontalRadius;
    this.centerX = centerX;
    this.centerY = centerY;
  }
  
  isClicked(xPos, yPos){
    
//     if(Math.abs(xPos - this.centerX) >= this.horizontalRadius){
//     console.log("horizontal out");
//       return false;  
//     }
    
//     if(Math.abs(yPos - this.centerY) >= this.verticalRadius){
//      console.log("vertical out")
//       return false;
//     }
    
    if(Math.abs(xPos - this.centerX) < this.horizontalRadius && 
      Math.abs(yPos - this.centerY) < this.verticalRadius){
    return true;
    }
    return false;
    
      
  }
  
}