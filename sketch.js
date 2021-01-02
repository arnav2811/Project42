const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var image1, image2, image3, image3, image4, image5, image6, image7, image8;

var drop1, umbrella1

var maxDrops = 200;
 var ThunderImage
function preload(){
    ThunderImage = loadImage("images/thunderbolt/1.png")
    drop = [

    ]
  }

function setup(){
   createCanvas(500, 600)
   engine = Engine.create();
 world = engine.world;
   drop1 = new Drops(300, 50)
   for(i =0; i < maxDrops; i++){
    drop.push(new Drops(Math.round(random(0, 490)),Math.round(random(0, 200))))
  }
   umbrella1 = new Umbrella()
   thunder = createSprite(300, 300, 20, 20)
   thunder.addImage(ThunderImage)
}

function draw(){
    background("black")
    Engine.update(engine);
    for(i =0; i < maxDrops; i++){
    drop[i].display()
    drop[i].update()
    }
   umbrella1.display()
   }   

