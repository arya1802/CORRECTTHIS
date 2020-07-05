const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var status=0;
var engine, world;
var bg;
var earth,earth_animation;
var moon;
var i=0;
var debriCatcher;
var db1_obj=[];
var db1_objarray=[];
var db2_obj=[];
var db2_objarray=[];
var db3_obj=[];
var db3_objarray=[];
var db4_obj=[];
var db4_objarray=[];
var db5_obj=[];
var db5_objarray=[];
var debriCatcherImg;
var dbCatcher;
function preload()
{
   bg=loadImage("universe.jpg");
   astImg=loadImage("inew.png");
   dbi1=loadImage("pics/db1.png");
  dbi2=loadImage("pics/db2.png");
  dbi3=loadImage("pics/db3.png");
  dbi4=loadImage("pics/db4.png");
  dbi5=loadImage("pics/db5.png");

  debriCatcherImg=loadAnimation("debri/d1.png");
  debriCatcherImg2=loadAnimation("debri/d2.png","debri/d3.png","debri/d4.png","debri/d5.png");
   
  
  //created oone image
   gif_createImg = createImg("earth.gif");

}
function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world=engine.world;
    gif_createImg.position(250, 50);
    moon=createSprite(800,50,25,25);
    moon.addImage("ass", astImg)
    moon.scale=0.7;
    moon.velocityX=-2;

    moon.velocityY=1;
  //  dbCatcher=new createDebriCatcher(100,100);

    debriCatcher=createSprite(200,200);
    debriCatcher.addAnimation("debri1", debriCatcherImg);
    debriCatcher.addAnimation("debri2", debriCatcherImg2);
    debriCatcher.debug=true;
    debriCatcher.setCollider("rectangle", 0,0,300,50)
            
}

function draw(){
    background(bg);
    Engine.update(engine);
    debriCatcher.x=mouseX;
    debriCatcher.y=mouseY;

   //debriCatcher.y=mouseY;
   //dbCatcher.display();
  
spawnDebris();
for (var j=0;j<db1_obj.length;j++){
   
   // db1_objarray[j].velocityY=6;
   if(debriCatcher.isTouching(db1_objarray[j]))
                  {
              
                 
                  db1_obj[j].display(1);
                //  continue;
                    pop();
                  //  db1_obj.pop();
                    db1_obj.splice(j, 1);
                   // db1_objarray[j].destroy();
                    db1_objarray.splice(j, 1);
                  }
   
    else{
      db1_obj[j].display(0);
    }
              
    
}
/*for (var j=0;j<db2_obj.length;j++){
  db2_obj[j].display();

}
for (var j=0;j<db3_obj.length;j++){
  db3_obj[j].display();
}
for (var j=0;j<db4_obj.length;j++){
  db4_obj[j].display();
}
for (var j=0;j<db5_obj.length;j++){
  db5_obj[j].display();
}*/
    drawSprites();
    
}

 
 
  function spawnDebris()
  {

   
    if(frameCount % 150=== 0) {
       //console.log("hello");
       var rand = Math.round(random(1,2));
       switch(rand){
       case 1:
                  var randx=random(100,1200);
                  var randy=random(100,800);
                  db1_obj.push(new db1(randx,randy));
                  var tempobj=createSprite(randx-10,randy,10,80);
                  tempobj.visible=false;
                  db1_objarray.push(tempobj);

                  
       break;
       case 2:
        var randx=random(100,1200);
        var randy=random(100,800);
        db2_obj.push(new db1(randx,randy));
        var tempobj=createSprite(randx-10,randy,10,80);
        tempobj.visible=false;
        db2_objarray.push(tempobj);

        
break;
case 3:
                  var randx=random(100,1200);
                  var randy=random(100,800);
                  db3_obj.push(new db1(randx,randy));
                  var tempobj=createSprite(randx-10,randy,10,80);
                  tempobj.visible=false;
                  db3_objarray.push(tempobj);

                  
       break;
       case 4:
                  var randx=random(100,1200);
                  var randy=random(100,800);
                  db4_obj.push(new db1(randx,randy));
                  var tempobj=createSprite(randx-10,randy,10,80);
                  tempobj.visible=false;
                  db4_objarray.push(tempobj);

                  
       break;
       case 5:
                  var randx=random(100,1200);
                  var randy=random(100,800);
                  db5_obj.push(new db1(randx,randy));
                  var tempobj=createSprite(randx-10,randy,10,80);
                  tempobj.visible=false;
                  db5_objarray.push(tempobj);

                  
       break;
    /*  case 2:


       db2_obj.push(new db2(random(100,1200),random(100,800)));
       break;
       case 3:
       db3_obj.push(new db3(random(100,1200),random(100,800)));
       break;
       case 4:
       db4_obj.push(new db4(random(100,1200),random(100,800)));
       break;
       case 5:
       db5_obj.push(new db5(random(100,1200),random(100,800)));
       break;8 */
       }

    }
    
  }
  function mouseDragged()
  {
    debriCatcher.changeAnimation("debri2");
   return false;
  }
 function mouseReleased() 
  {
    debriCatcher.changeAnimation("debri1");
  }