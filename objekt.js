var scene = [];
Object = function(x,y,width,height){
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
  this.dx=0;
  this.dy=0;
}
Object.prototype = {
  draw:function(){
    //vykreslí ma
  }
  move:(){
    this.x+=this.dx;
    this.y+=this.dy;
    this.draw();
  }
}
