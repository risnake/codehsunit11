const DELAY = 200;

const SNAKE_SIZE = 20;
const SNAKE_COLOR = "green";

let snake;
let dx = 0;
let dy = 0;
function main(){
	snake = initSnake();
	keyDownMethod(changeDirection);
	setTimer(moveSnake,DELAY);
}
function initSnake() {
    let snake = new Rectangle(20,20);
    snake.setPosition(getWidth()/2 - 10 ,getHeight()/2 - 10);
    snake.setColor(SNAKE_COLOR);
    add(snake);
    return snake;
}
function moveSnake(){
    snake.move(dx,dy);
}
function changeDirection(e){
    if (e.key == "ArrowLeft"){
        dx = -SNAKE_SIZE;
        dy = 0;
    } else if (e.key == "ArrowRight") {
        dx = SNAKE_SIZE;
        dy=0;
    } else if (e.key == "ArrowUp"){
        dx = 0;
        dy = -SNAKE_SIZE;
    } else if (e.key == "ArrowDown"){
        dx = 0;
        dy = SNAKE_SIZE;
    }
}

main();
