class Ground 
{
    constructor(x,y,w,h)
    let options = {
        isStatic:true
    };
    function setup(){
    groundObj= new ground(width/2,670,width,20);
    leftside=new ground(1100,600,20,120)
    }
    this.body = Bodies.rectangular(x,y,w,h,options);
    this.w = w;
    this.h = h;
    world.add(world,this,body);
    function draw(){
        groundObj.display();
    }


