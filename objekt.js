//array of all objects in scene
var scene = [];
//constructor for Object
Object = function(x,y,width,height){
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
  this.dx=0;
  this.dy=0;
}
//prototype for Objekt
Object.prototype = {
  draw:function(){
    //draw me
  }
  move:(){
    this.x+=this.dx;
    this.y+=this.dy;
    this.draw();
  }
}
//add X Objects to scene
for(i=0;i<X;i++){
  //add new Boject with unique coordinates and size
  scene.pusch(new Object(X,Y,WIDTH,HEIGHT));
}
