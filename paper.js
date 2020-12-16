class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.Body=Bodies.circle(x,y,r,options)
        World.add(world,this.Body)
        this.r=r
    }
    display(){
        var pos=this.Body.position
        push()
        translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}