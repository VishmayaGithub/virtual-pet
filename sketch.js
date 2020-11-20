//Create variables here
var dog,database,foodStock,foodS
function preload()
{
  //load images here
  dogimage = loadImage("images/dogImg1.png")
  dh = loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  console.log(database)
  foodStock = database.ref("Food")
  foodStock.on("value",readStock)

  dog = createSprite(250,250,20,20)
  dog.shapeColor = "red"
  dog.addImage("im",dogimage)
  dog.scale = 0.2
  
}


function draw() {  
background(46, 139, 87)
 //readStock()
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
    
    dog.addImage("im",dh)
    
}

  drawSprites();
  //add styles here
  fill("white")
  text("foodStock: "+foodS,200,100)
  text("Press UP arrow to feed Rowan milk",20,20)

}
function readStock(data){
  foodS = data.val()
}
function writeStock(x){
  if(x<=0){
  x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })

}



