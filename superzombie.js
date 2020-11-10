class Superzombie {
    constructor(x, y,width,height) {

        var options ={
            restitution:0.8,
            friction:0.01,
        }
      this.image = loadImage("superzombie.jpg");
        this.body = Bodies.rectangle(x, y, width, height,options);       
        this.width = 50;
        //this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    updateY(){
      if(this.body.position.y > height){
        Matter . Body . setPosition(this.body, {x: random (0,400), y: random (0,400)})
      }
    }
    display() {
      

        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }

};