class Paper {
    constructor(x, y,radius) {
      var options = {         
          'restitution':0.3,
          'friction':0.3,
          'density':1
      }
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(x,200,radius/2, options);
      this.image = loadImage("paper.png");
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER)
      image(this.image,1,0,this.radius*2,this.radius*2);
      pop();
    }
  }