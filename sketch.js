var waterIm,factoryIm,skyIm
var test
var gamestate=0
var manIm,work,workIm
var animal1,an1,an2,an3,an4,an5,an6,animal2,animal3,animal4,animal5,animal6
var toy1,toy2,toy3,toy4,toy1img,toy2img,toy3img,toy4img
var bckgrnd,s1
var endImg
var entresound,seasound,factorysound,sadsound,windsound



function preload() {
  //images
  waterIm = loadImage("./pic/water.png");
 factoryIm = loadImage("./pic/factory.png");
skyIm = loadImage("./pic/sky.png");
manIm = loadImage("./pic/man.png");
an1=loadImage("./pic/toto.png");
an2=loadImage("./pic/oct.png");
an3=loadImage("./pic/fish1.png");
an4=loadImage("./pic/fish 2.png");
an5=loadImage("./pic/whale1.png");
an6=loadImage("./pic/crab.png");
workIm=loadImage("./pic/mch.png")
toy1img=loadImage("./pic/toys/duck.png")
toy2img=loadImage("./pic/toys/play.png")
toy3img=loadImage("./pic/toys/rocket.png")
toy4img=loadImage("./pic/toys/train.png")
endImg=loadImage("./pic/toys/endimage.png")

//sounds
s1=loadSound("./sound/ssad.mp4")
entresound=loadSound("./sound/sound1.mp3")
seasound=loadSound("./sound/sound2.wav")
factorysound=loadSound("./sound/sound3.mp3")
sadsound=loadSound("./sound/saddy.wav")
windsound=loadSound("./sound/wind1.mp3")
}

function setup() {
  background(180)
  createCanvas(windowWidth,windowHeight);
  test= createSprite(520,320,100,100);
  
  test.addImage("boy",manIm)
  test.scale=0.5

  toy1=new Toy(windowWidth/2+100,240)
  toy1.image(toy1img)
  toy1.scales(0.5)

  toy2=new Toy(windowWidth/2+200,150)
  toy2.image(toy2img)
  toy2.scales(0.5)

  toy3=new Toy(windowWidth/2+300,240)
  toy3.image(toy3img)
  toy3.scales(0.5)

  toy4=new Toy(windowWidth/2+350,450)
  toy4.image(toy4img)
  toy4.scales(0.5)

}


function draw() {
   

  var y =Math.random(round(300,height-300))
  var x =Math.random(round(300,width-300))
 
  animal1=new Sea(200,300)
  animal2= new Sea(750,200)
  animal3= new Sea(200,500)
  animal4= new Sea(800,500)
  animal5= new Sea(500,350)
  animal6= new Sea(500,500)

  

     bckgrnd=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
     bckgrnd.addImage("cc",workIm)
     bckgrnd.scale=1.2
     bckgrnd.visible=false


 //0 gamestate
   if(gamestate==0){
   
     //factory
     dis();
     background(factoryIm);
     dissappeartoyimg()
     entresound.play();
        
   
    fill("black")
    textSize(40)
    textStyle(ITALIC);
      text("Hi! I am william.This is my toy manufacturing factory",2,80)
     fill("red")
     textSize(30)
     text(" PRESS ENTER KEY ",windowWidth-350,windowHeight/2)
     bckgrnd.visible=false
   }
 

   //1 gamestate
   if(gamestate==1){
     //water state
     dissappeartoyimg()
     appear();
     background(waterIm);

     
     factorysound.stop();
     if(!seasound.isPlaying()){
      seasound.play();
      //seasound.setVolume(0.2);
     }
     
     test.visible=true
     
     bckgrnd.visible=false
     fill("white")
     
     fill("purple")
     
     textStyle(ITALIC);
     textSize(30)
       text("AHH! you like plastic toys. ",5,50)
       text(" See water animals are sad due to water pollution caused by factory.",5,100)
      // textSize(20)
       fill("red")
       textSize(30)
       text("PRESS UP ARROW KEY to check smoke ",windowWidth-600,windowHeight/2-230)
   } 
 
 //2 gamestate 

 if(gamestate==2){
//sky state
  background(skyIm)
  test.visible=true
  dissappeartoyimg()
  dis();
  bckgrnd.visible=false
  seasound.stop();
  if(!windsound.isPlaying()){
    windsound.play();
    windsound.setVolume(0.1)
    //seasound.setVolume(0.2);
   }
  fill("white")
  textSize(20)
  textStyle(ITALIC);
    text("OHH! Ozone layer is getting effected too because of Air pollution caused by factory,Are u still happy with plastic toys ? ",10,90)
    fill("green")
    textStyle(ITALIC);
    textSize(30)
    text("if you have realised your mistake please press right arrow key",10,400)
  
  }
//toys forming in factory state
if(gamestate==3){
 // background(workIm)
 background("brown")
 entresound.stop()
 if(!factorysound.isPlaying()){
  factorysound.play();
  factorysound.setVolume(0.2);
 }
 
 test.visible=true
 bckgrnd.visible=true
  fill("white")
  textSize(20)
  //text(mouseX + ","+mouseY,mouseX,mouseY)
  textStyle(ITALIC);
  text("Hi! I am building Plastic toys for you",500,520)

  text("Factory is disposing garbage inside sea and smoke above in sky",10,30)
  text("To check garbage disposed properly press DOWN ARROW and to check Smoke press UP ARROW",10,60)
  
  test.x=1000
bckgrnd.depth=test.depth
  test.depth=bckgrnd.depth+1
  //test.visible=false
  dis()
  appeartoyimg()
  toy1.velocity()
  toy2.velocity()
  toy3.velocity()
  toy4.velocity()
  
 
}

//4 gamestate
if(gamestate==4){
  //end
  background(endImg);
  
  if(!sadsound.isPlaying()){
    sadsound.play();
    sadsound.setVolume(0.2);
   }

  dissappeartoyimg()
  dis();
  test.visible=false
}

var ran =Math.round(random(1,6))
var rand=Math.round(random(1,6))

var imgname="an"+ran
animal1.image(an1)
animal2.image(an2)
animal2.scales(0.5)
animal3.image(an3)
animal3.scales(0.2)
animal4.image(an4)
animal5.image(an5)
animal6.image(an6)
animal6.scales(0.5)


   
drawSprites();
dis()
 
bckgrnd.visible=false

 }


 ////functions
 function keyPressed(){
  if(keyCode==DOWN_ARROW){
    gamestate=1
    
      }
      console.log(gamestate);

      if(keyCode==UP_ARROW){
        gamestate=2
      }
      if(keyCode==RIGHT_ARROW){
        gamestate=4 
      }
    console.log("test");
    if(keyCode==13){
      gamestate=3
    }}
    function dis()
    {
     animal1.disappers();
     animal2.disappers();
     animal3.disappers();
     animal4.disappers();
     animal5.disappers();
     animal6.disappers();
     
    }
    function appear()
    {
      animal1.app()
     animal2.app()
     animal3.app()
     animal4.app()
     animal5.app()
     animal6.app()
    }
    function dissappeartoyimg()
    {toy1.disappers()
      toy2.disappers()
      toy3.disappers()
      toy4.disappers()
    }
    function appeartoyimg()
    {toy1.appers()
      toy2.appers()
      toy3.appers()
      toy4.appers()
    }
