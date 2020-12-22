class Bucket
{
    constructor(x, y, width, height) 
    {

        var options = 
        {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      
      display()
      {
        pos=this.body.position;
        rectMode(CENTER);
        this.body=(pos.x,pos.y,this.width,this.height)
      }
    }