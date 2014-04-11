//non tested version
Animation=function(x,y,num_x,num_y,iwidth,iheight,width,height,url){
  this.x=x;//x of animation 
  this.y=y;//y of animation
  this.num_x=num_x;//number of images in line
  this.num_y=num_y;//number of images in row
  this.iwidth=iwidth;//image width in pixels
  this.iheight=iheight;//image height in pixels
  this.width=width;//animation width
  this.height=height;//animation height
  this.image=new Image();
  this.imgage.url=url;//imga url
  this.sur=[0,0];
}
Animation.prototype={
  i:0,   
  draw:function(){
    if(this.i>=this.num_x*this.num_y){         
       scene.splice(scene.indexOf(this),1);//remove this animation from array scene
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
