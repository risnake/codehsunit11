const WIDTH = 50;
const HEIGHT = 50;

let ball1, ball2;
let dx1 = 4;
let dx2 = 0;

function main(){
    ball1 = initBall("red",WIDTH,HEIGHT,25,100,220);
    ball2 = initBall("orange",WIDTH,HEIGHT,25,getWidth()/2,220);
    
    setTimer(update,30);
}

function initBall(color,width,height,radius,x,y) {
    let ball = new Circle(radius);
    ball.setColor(color);
    ball.setPosition(x,y);
    
    add(ball);
}

function update() {
    moveBalls;
    checkCollision();
}

function moveBalls(){
    ball1.move(dx1,0);
    ball2.move(dx2,0);
}

function checkCollision() {
    let x1 = ball1.getX();
    let y1 = ball1.getX();
    let x2 = ball2.getX();
    let y2 = ball2.getY();
    
    let dx = x1 - x2;
    let dy = y1 - y2;
    
    let distanceSq = (dx * dx) + (dy * dy);
    
    let radiiSq = (ball1.getRadius() + ball2.getRadius()) + (ball1.getRadius() + ball2.getRadius());
    
    if (distanceSq < radiiSq) {
        
        dx1 = -dx1;
        dx2 = 4;
    }
}

main();
