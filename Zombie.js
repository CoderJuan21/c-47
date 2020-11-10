  class Zombie {
    constructor(x, y) {

        var options ={
            restitution:0.8,
          //  isStatic: true,
            friction:0.01,
        }
      this.image = loadImage("zombie.png");   
        this.body = Bodies.rectangle(x, y,5,5,options);    
       
      //  this.width = 50;
        //this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    updateY(){
      if(this.body.position.y > 100){
        Matter.Body.setPosition(this.body, {x: random (0,10), y: random (0,10)})
      }
    }
    display() {
      

        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }

};