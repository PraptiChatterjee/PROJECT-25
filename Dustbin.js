class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
           restitution : 0.3,
           friction : 0.5,
           density : 1.2
      }
      this.width = width;
      this.height = height;
      this.image = loadImage("Sprites/dustbingreen.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;

      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      angleMode(RADIANS);
      fill("255");
      image(this.image, 0, 0, this.width, this. height);
      pop();
    }
  }