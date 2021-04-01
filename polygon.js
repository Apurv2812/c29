class Polygon{

    constructor(x,y,width,height,angle){

       var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.circle(50,200,20);
        this.x = x;
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world, polygon);

        slingShot = new Slingshot(this.polygon , {x:100 , y:200});
    }

    
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(polygon_Image , polygon.position.x , polygon.position.y , 40,40);
    pop();
  }
}
    







