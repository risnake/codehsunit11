const BRICK_WIDTH = 50;
const BRICK_HEIGHT = 20;


let x = 0;
let y = 0;

function drawBrick() {
    
    let brick = new Rectangle(BRICK_WIDTH,BRICK_HEIGHT);
    brick.setPosition(x,y);
    brick.setColor(Color.randomRed());
    add(brick);
    
    x += BRICK_WIDTH;
    if(x + BRICK_WIDTH > getWidth()) {
        x = 0;
        y += BRICK_HEIGHT;
        
        if(y + BRICK_HEIGHT > getHeight()){
            stopTimer(drawBrick);
        }
    }
}
function main() {
    setTimer(drawBrick,50);
}

main();
