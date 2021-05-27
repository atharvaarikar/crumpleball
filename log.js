class log {
    constructor(x,y,width,height){
        var opp={isStatic:true}
        
        this.lo=Bodies.rectangle(x,y,width,height,opp);

        World.add(world,this.lo);
         this.h=height
         this.w=width
    }

    display(){
        var pos=this.lo.position;
       rectMode(CENTER);
       rect(pos.x,pos.y,this.w,this.h);
    }
}