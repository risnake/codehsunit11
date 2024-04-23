const CENTER_X = getWidth() / 2;
const CENTER_Y = getHeight() / 2;
const WIDTH = 30;
const HEIGHT = 50;
const INIT_COLOR = "yellow";
const BACKGROUND_X = CENTER_X - 75;
const DELAY = 20;

// Vertical zones that will determine the color of the weight
const ZONE_1 = getHeight() - (getHeight() / 4);
const ZONE_2 = getHeight() - (getHeight() / 4) * 2;
const ZONE_3 = getHeight() - (getHeight() / 4) * 3;
const ZONE_4 = 0;

let weight;
let dy = -10;

function main(){
    createBackground();
    
    // Creates and initializes the weight that will move in the game
    weight = initRect(WIDTH, HEIGHT, INIT_COLOR, CENTER_X - WIDTH / 2, CENTER_Y);
    
    setTimer(launch,DELAY);

}

// This function adds and initializes the rectangular weight
// that will move and bounce in the game
function initRect(width, height, color, x, y) {
    let rect = new Rectangle(width, height);
    rect.setPosition(x, y);
    rect.setColor(color);
    add(rect);
    
    return rect;
}

// This function adds the background image of the carinval game
function createBackground() {
    let background = new WebImage("https://codehs.com/uploads/4d907bf404396e93286113dd9c2421fe");
    background.setPosition(BACKGROUND_X, 0);
    add(background);
}

function launch() {
    checkCollision();
    pickColor();
    weight.move(0,dy);
}

function pickColor() {
    
    if(weight.getY() < ZONE_1){
        weight.setColor("green");
    } else if (weight.getY() < ZONE_2){
        weight.setColor("yellow");
    } else if (weight.getY() < ZONE_3){
        weight.setColor("orange");
    } else {
        weight.setColor("red");
    }
}

function checkCollision() {
    if (weight.getY() < 0 || weight.getY() + weight.getHeight() > getHeight()) {
        dy = -dy;
    }
}
main();
