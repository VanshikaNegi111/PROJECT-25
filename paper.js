class Paper{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.3,
            'density':1.2,
            'friction':0
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x,y,(r/2)-7,options);
        World.add(world, this.body);
    }

    display()
    {
     var pos   = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image,0,0,this.r,this.r);
     pop();

    }
}