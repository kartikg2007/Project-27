class Ball{
    constructor(x,y){
    
        var options={
            isStatic: false,
            restitution: 0.5,
            density:1.5
        }
    
        
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        World.add(world, this.body);
    }
    
    display(){ 
        var pos = this.body.position
        ellipseMode(RADIUS);
        fill ("pink");
        ellipse(pos.x,pos.y,this.radius, this.radius);
    
        
    }
    }