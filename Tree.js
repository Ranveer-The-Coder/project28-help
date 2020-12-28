class Tree extends baseClass_tree {
    constructor(x,y,width,height){
      super(x,y,width,height);
      this.image = loadImage("Plucking mangoes/tree.png");
    }
  
    display() {
     // this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }
  