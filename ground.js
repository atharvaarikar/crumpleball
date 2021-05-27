class ground{
    constructor(){
        var os={

            isStatic:true
        }
        this.gr=Bodies.rectangle(400,680,800,20,os);
        World.add(world,this.gr);
    }

    display(){
        rectMode(CENTER);
        rect(400,680,800,20);
    }
}
