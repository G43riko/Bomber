//non tested version
Animation=function(x,y,num_x,num_y,iwidth,iheight,width,height,url){
  this.x=x;
  this.y=y;
  this.num_x=num_x;
  this.num_y=num_y;
  this.iwidth=iwidth;
  this.iheight=iheight;
  this.width=width;
  this.height=height;
  this.image=new Image();
  this.imgage.url=url;
  this.sur=[0,0];
}
Animation.prototype={
  i:0,   
  draw:function(){
    if(this.i>=this.num_x*this.num_y){         
       explosions.shift();//remove this animation from array
       return;
    }
    this.i++;
    if(this.sur[1]==this.num_x){
      this.sur[1]=0;
      this.sur[0]++;
    }
    this.sourceX = (this.sur[1]*(this.iwidth/this.num_x));
    this.sourceY = (this.sur[0]*(this.iheight/this.num_y));
    this.sourceWidth = (this.iwidth/this.num_x);
    this.sourceHeight = (this.iheight/this.num_y);
    this.destWidth = this.sourceWidth;         
    this.destHeight = this.sourceHeight;
    this.sur[1]++;          
    context.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.kde_x, this.kde_y, this.destWidth, this.destHeight); 
   }
}
