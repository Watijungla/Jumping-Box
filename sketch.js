
var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
var movingSprite
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

movingSprite = createSprite(random(10,750)300,20,20);
movingSprite.shapeColor = "white";
movingSprite.velocityX = 3;
movingSprite.velocityY = 3;

    //create box sprite and give velocity
fixSprite1 = createSprite(100,590,180,20);
fixSprite1.shapeColor = "red";

fixSprite1 = createSprite(300,590,180,20);
fixSprite1.shapeColor = "green";

fixSprite1 = createSprite(500,590,180,20);
fixSprite1.shapeColor = "blue";

fixSprite1 = createSprite(700,590,180,20);
fixSprite1.shapeColor = "yellow";



}

function draw() {
    background(rgb(10,10,10));
    //create edgeSprite
    if(movingSprite.x<0){
        music.stop()
        movingSprite.velocityX = 3
    }else if (movingSprite.x>800){
        music.stop()
        movingSprite.velocityX = -3   
    }

if(isTouching(movingSprite,fixSprite4)){
    music.play()
    movingSprite.shapeColor="yellow";
    bounceOff(movingSprite,fixSprite4)

}

else if(isTouching(movingSprite,fixSprite3)){
    music.play()
    movingSprite.shapeColor="blue";
    bounceOff(movingSprite,fixSprite3)

}
    
else if(isTouching(movingSprite,fixSprite2)){
    music.play()
    movingSprite.shapeColor="green";
    bounceOff(movingSprite,fixSprite2)
    movingSprite.velocityX=0;
    movingSprite.velocityY=0;
}

else if(isTouching(movingSprite,fixSprite1)){
    music.play()
    movingSprite.shapeColor="red";
    bounceOff(movingSprite,fixSprite1)
    }

    if(movingSprite.y<0){
        music.stop()
        movingSprite.velocity=3
    }



    drawSprites()
}