class Thread{
    constructor(bodyX, pointB){
        var options = {
            bodyA: bodyX,
            pointB: pointB,
            //length: 100,
            stiffness: 0.05
        }
this.pointB=pointB
        this.sling = Matter.Constraint.create(options)
        World.add(world, this.sling)
    }


    

    display(){


        

push();

            
        var pointA = this.sling.bodyA.position
        var pointB = this.pointB

        stroke("black")
        strokeWeight(2)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
 pop();       
    }
}

