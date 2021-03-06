class db2{
  constructor(x, y) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0

      }
      this.body = Bodies.rectangle(x, y, 150, 150, options);
      this.width = 100;
      this.height = 100;
      this.image = loadImage("pics/db2.png");
      World.add(world, this.body);
    }
    display(status1){

         if(status1===0)
         {
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
         }
         else{
          World.remove(world, this.body);
         }
    }
}