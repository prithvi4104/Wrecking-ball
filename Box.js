class Box {
    constructor(x,y,width,height){

        var option = {
            restitution : 0.8 ,
            friction : 1.0 ,
            density : 0.04 ,
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
     display(){
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        strokeWeight(4);
        stroke("green");
        rect(0,0,this.width,this.height)
        pop();
     }
}