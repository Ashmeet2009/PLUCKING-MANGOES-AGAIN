class Boy {
    constructor(x,y) {
      var options = {
          'friction':1,
          'density':1.5,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 300;
      this.height = 400;
      this.image = loadImage("boy.png");
      
      World.add(world, this.body);
    }
    display(){
        var pos=this.body.position
    imageMode(CENTER);
    image(this.image,pos.x, pos.y, this.width, this.height);
}
}
