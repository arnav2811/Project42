class Drops {
    constructor(x, y){
        var qualities = {
            isStatic: false,
            restitution: 0.4,
            density: 1
           }
           this.bodies = Bodies.circle(x, y, 10, qualities)
           this.bodies.position.x = x;
           this.bodies.position.y = y;
           World.add(world, this.bodies)
}
display(){
ellipseMode(CENTER)
fill("blue")
ellipse(this.bodies.position.x, this.bodies.position.y, 10)
}
update(){
    if(this.bodies.position.y> height){
        Matter.Body.setPosition(this.bodies, {x: Math.round(random(0, 400)), y: Math.round(random(0, 590)) })
    }
}
}