//pole všetkých objektov v scéne
var scene = [];
//konštruktor pre Objekt
Object = function(x,y,width,height){
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
  this.dx=0;
  this.dy=0;
}
//prototyp pre Objekt
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
//pridá X Objektov do scény
for(i=0;i<X;i++){
  //pridá nové objekty s unikátnimy suradnicami a velkosťou
  scene.pusch(new Object(X,Y,WIDTH,HEIGHT));
}
