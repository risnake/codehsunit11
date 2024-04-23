/* This program draws a growing circle that stops when it 
reaches the height of the canvas. */

const START_RADIUS = 1;
const INCREMENT = 1;
const CHANGE_COLORS_AT = 10;
const DELAY = 50;

let circle;

function initCircle(){
    circle = new Circle(START_RADIUS);
    circle.setPosition(getWidth()/2,getHeight()/2);
    add(circle);
}

function growCircle() {
    
    let radius = circle.getRadius() + INCREMENT;
    
    if(radius*2 >= getHeight()) {
        stopTimer(growCircle);
    } else {
        circle.setRadius(radius);
    }
    
    if(radius % CHANGE_COLORS_AT == 0){
        circle.setColor(Randomizer.nextColor());
    }
}

function main() {
    initCircle();
    setTimer(growCircle,DELAY);
}

main();
