const CENTER_X = getWidth()/2;
const CENTER_Y = getHeight()/2;

let ball;

function initBall() {
	ball = new Circle(50);
	ball.setPosition(CENTER_X,CENTER_Y);
	
	add(ball);
	return ball;
}

function changeBall() {
    let x = Randomizer.nextInt(0,getWidth()-100);
    let y = Randomizer.nextInt(0,getHeight()-100);
    
    ball.setPosition(x,y);
    ball.setColor(Randomizer.nextColor());
}

function st() {
    ball = initBall();
    
    setTimer(changeBall,100);
}

st();
