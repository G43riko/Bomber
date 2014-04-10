function mainLoop(){
  for(var i in scene){
    scene[i].draw();
  }
  requestAnimationFrame(mainLoop)
}
