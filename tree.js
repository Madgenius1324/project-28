class tree{
    constructor(x, y, width, height) {
        var options = {
            isStatic : true,
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.i1=loadImage("Plucking mangoes/tree.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
      fill("red");
       image(i1,0, 0, this.width, this.height);
        pop();
      }
}