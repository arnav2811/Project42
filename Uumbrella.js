class Umbrella{
    constructor(){
        var properties = {
            isStatic : true
        }
        this.bodies = Bodies.circle(200, 400, 120, properties)
        //this.bodies = Bodies.rectangle(200, 400, 400,200)
        //this.image = loadAnimation("walking",image1)
        this.image = loadImage("images/WalkingFrame/walking_1.png")
        World.add(world, this.bodies)
    }
    display(){
        //ellipseMode(CENTER)
        //ellipse(300, 300, 20)
        imageMode(CENTER)
        image(this.image, 200, 400, 400, 400)
    }
}