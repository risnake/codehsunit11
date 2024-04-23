// Global constants
const PAINT_RADIUS = 10;
const DRIP_SIZE = PAINT_RADIUS * 1.5;
const DELAY = 50;

// Global variables
let paint = null;
let drip;
let dy = 10;

function main() {
    mouseClickMethod(addPaint);
    setTimer(fall, DELAY);
}
function addPaint(e) {
    paint = new Circle(PAINT_RADIUS);
    paint.setPosition(e.getX(),e.getY());
    paint.setColor(Randomizer.nextColor());
    add(paint);
    dy = 10;
}
function fall() {
    if (paint != null) {
        checkFloor();
        paint.move(0,dy);
        let color = paint.getColor();
        addDrip(PAINT_RADIUS, color, paint.getX()-DRIP_SIZE/3,paint.getY()-DRIP_SIZE/2);
    }
}

function addDrip(width, color, x, y) {
    drip = new Rectangle(width,width);
    drip.setPosition(x,y);
    drip.setColor(color);
    add(drip);
}


// This function checks to see if the paint circle has hit 
// the bottom of the canvas
function checkFloor() {
    if (paint.getY() >= getHeight()-paint.getRadius()){
        dy=0;
    }
}

main();
