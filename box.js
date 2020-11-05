class Box{
constructor(x,y,width,height){
var option={ 
restitotion:0.8,
friction:0.3,
densisty:1.0    
}


this.body=Bodies.rectangle(x,y,width,height,option); 
this.width=width;
this.height=height;  
World.add(world,this.body)
}
display(){
var pos=this.body.position;
var angle=this.body.angle;
rectMode (CENTER);
fill (255);
rect (pos.x,pos.y,this.width,this.height);
}
}