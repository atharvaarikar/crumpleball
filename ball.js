class ball{
    constructor(){
       
        var oj={

           reatitution:0.3,
           density:1.5
        }
        this.a=loadImage("paper.png");

        this.ba=Bodies.circle(100,400,20,oj);
        World.add(world,this.ba);
        
    }

    display(){
        var pos=this.ba.position;
        imageMode(CENTER);
        image(this.a,pos.x,pos.y,70,60);
    }
}
