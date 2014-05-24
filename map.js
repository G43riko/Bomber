//declare an array of map
var mapa= [
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1]
];
for(var i=0;i<mapa.length;i++){
  for(var j=0;j<mapa[i].length;j++){
    switch(mapa[i][j]){
      case 1:
        //do samething for every 1 in map
        break;
      case 2:
        //do samething for every 2 in map
        break;
      default:
        //do nothing
    }
  }
}
