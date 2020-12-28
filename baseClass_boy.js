class baseClass_boy{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'isStatic':true,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("Plucking mangoes/boy.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 250,300);   
        
        pop();
      }
}