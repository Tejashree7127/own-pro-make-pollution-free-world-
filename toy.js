class Toy{
    constructor(x,y){
        this.sprite=createSprite(x,y,50,50)
       // this.sprite.velocityX=1
   // this.sprite.velocityX=-1
    
 //this.sprite.scale=0.2
    }
    display(){
        drawSprite()
    }
    image(xyz){
        this.sprite.addImage(xyz)
        //console.log(xyz)
    }
 
    scales(s){
       this.sprite.scale=s 
    }
 
    velocity(){
    
   this.sprite.velocityX=1
  // background("blue")
 if(this.sprite.x>=windowWidth/2+100)
 {
    this.sprite.x=windowWidth/2-100
    //this.sprite.destroy()
   }
    //this.sprite.velocityX=-1
    }
    disappers(){
        this.sprite.visible=false
       //this.sprite.destroy();
        //console.log("data")
     }
     appers(){
      this.sprite.visible=true
     //this.sprite.destroy();
      //console.log("data")
   }
    
 }
 
 