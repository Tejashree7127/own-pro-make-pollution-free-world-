class Sea{
   constructor(x,y){
       this.sprite=createSprite(x,y,30,30)
     //  this.sprite.velocityX=1
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

  /* velocity(){
     // this.sprite.x=this.sprite.x+2
     // this.sprite.x=this.sprite.x-1
  this.sprite.velocityX=1
   this.sprite.velocityX=-1
   }*/
   disappers(){
     
      this.sprite.visible=false
      this.sprite.destroy();
      // console.log("data")
      
    }
    app()
    {
      this.sprite.visible=true
      
    }
   
}

