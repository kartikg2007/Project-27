class Stand{
constructor(){

    var options={
        isStatic: true
    }

    
    this.body = Bodies.rectangle(300, 100, 300,20,options);

    World.add(world, this.body);
}

display(){ 
    var pos = this.body.position
    rectMode(CENTER);
    fill ("red");
    rect(pos.x,pos.y,300,20);

    
}
}