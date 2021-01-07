/*class Paper extends baseClass{
  constructor(x, y, options) {
    super(x, y, 50, 50, options);
    this.image = loadImage("crushedPaper.png");
  }
}
  */

class Paper {
    constructor(x, y) {
      var options = {
          'isStatic' : false,
          'restitution':0.7,
          'friction':0.5,
          'density':1.2
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x, y, 24, options);
      this.width = 60;
      this.height = 60;
      this.image = loadImage("crushedPaper.png")
      
      World.add(world, this.body);
    }
    display(){
     
     ellipseMode(RADIUS);
     stroke("black");
     fill("black");
     ellipse(this.body.position.x,this.body.position.y,18, 18);
      imageMode(CENTER);
      image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
      
    }
  };