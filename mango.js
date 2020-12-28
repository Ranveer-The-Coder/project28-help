class mango{
    constructor(x, y,r) {
        var options = {
            'restitution':0.5,
            'friction':0.5,
            'isStatic':true,
            'density': 0.5
        }

        this.r = r
        
        this.body = Bodies.circle(x, y, r,options);
        //this.width = width;
        //this.height = height;
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world, this.body);


      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        image(this.image, 0, 0, 60, 60);
        pop();
      }
}