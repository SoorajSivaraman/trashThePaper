class Dustbin
{
    constructor(x, y, w, h) 
    {  
   this.boxLeftBody = Bodies.rectangle(x - w/2+20, y + h/2 - 51, 20,h , {isStatic:true} );
    World.add(world, this.boxLeftBody);
   
    this.boxBottomBody = Bodies.rectangle(x, y+77.5, w,20 , {isStatic:true} );
    this.image = loadImage("dustbin.png");

 	World.add(world, this.boxBottomBody);
    
   this.boxRightBody = Bodies.rectangle(x + w/2+20, y + h/2, 20,h , {isStatic:true} );
 	World.add(world, this.boxRightBody);

    
    }
    display(){
      
     imageMode(CENTER);
      image(this.image,this.boxBottomBody.position.x + 25,this.boxBottomBody.position.y - 65, 170, 150);
 
    }
  };