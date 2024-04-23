const CIRCLES_PER_SPLATTER = 20;
const MIN_RADIUS = 5;
const MAX_RADIUS = 25;
const DELAY = 500;

function splatter() {
    for (let i = 0; i < CIRCLES_PER_SPLATTER; i++) {
        
        let radius = Randomizer.nextInt(10,55);
        let x = Randomizer.nextInt(0,getWidth());
        let y = Randomizer.nextInt(0,getHeight());
        let circle = new Circle(radius);
        
        circle.setColor(Randomizer.nextColor());
        circle.setPosition(x,y);
        add(circle);
    }
}

function stp() {
    setTimer(splatter,DELAY);
}

stp();
