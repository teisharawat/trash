class Paper
{
    constructor(a,y,width,height)
    {
        var options=
        {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2        
        }

        Matter.Bodies.circle = Bodies.ellipse(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display()
    {
        fill("red")
        ellipse(this.body.position.x, this.body.position.y, this.body.width,this.body.height)
    }
}