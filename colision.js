//this is basic colision
function colision(a,b){
  if((b.x+b.width>a.x)&&
    (b.y+b.height>a.y)&&
    (b.x<a.x+a.width)&&
    (b.y<a.y+a.height)){
    return 1;
  }  
return 0;
}
//a,b are objects with coordinates, width and height
//function return 1 if colision is true. else return 0
