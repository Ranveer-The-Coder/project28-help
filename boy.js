class boy extends baseClass_boy {
    constructor(x,y,width,height){
      super(x,y,width,height);
      this.image = loadImage("Plucking mangoes/boy.png");
    }
  
    display() {
     // this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }
  