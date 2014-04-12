//this is basic RectRect colision
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


//this is basic CircleCircle colision
function acolision(a,b){
  dst_x=a.x-b.x;
  dst_y=a.y-b.y;
  rad_a=a.size;
  rad_b=b.size;
  dist = sqrt((distX * distX) + (distY * distY));
  if(dist <=(rad_a+rad_b)){
    return 1;
  }  
  return 0;
}
//a,b are objects with coordinates and size


//both functions return 1 if colision is true. else return 0
