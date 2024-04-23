const SHEEP_WIDTH = 80;
const SHEEP_HEIGHT = SHEEP_WIDTH * (322/500);
const DROPLET_RADIUS = 30;
const PLAYER_SIZE = 40;
const HAND = "https://codehs.com/uploads/780e1811c17d88d80893e5987bb459ee";

let player;
let sheep;
let hand;
let dxSheep = 3;
let dySheep = 3;
let dxPlayer = 15;
let dyPlayer = 15;
let numDroplets = 0;

function main() {
    let bg = new Rectangle(getWidth(), getHeight());
    bg.setColor("lightGreen");
    add(bg);
   
    sheep = new WebImage("https://codehs.com/uploads/75f314be2357647fa8077d17f1285345");
    sheep.setSize(SHEEP_WIDTH, SHEEP_HEIGHT);
    sheep.setPosition(getWidth()/2, getHeight()/2);
    add(sheep);
   
    mouseClickMethod(destroyDroplet);
   
    setTimer(addItem, 3000);
    initObstacle();
    initPointer();
   
    initPlayer();
    keyDownMethod(playerControl);
}

function playerControl(e) {
    if (e.key == "ArrowUp") {
        if (!(player.getY() - dyPlayer < 0)) {
            player.move(0, -dyPlayer);
        }
    } else if (e.key == "ArrowDown") {
        if (!(player.getY() + PLAYER_SIZE + dyPlayer > getHeight())) {
            player.move(0, dyPlayer);
        }
    } else if (e.key == "ArrowLeft") {
        if (!(player.getX() - dxPlayer < 0)) {
            player.move(-dxPlayer, 0);
        }
    } else if (e.key == "ArrowRight") {
        if (!(player.getX() + PLAYER_SIZE + dxPlayer > getWidth())) {
            player.move(dxPlayer, 0);
        }
    }
}

function initPlayer() {
    player = new Rectangle(PLAYER_SIZE, PLAYER_SIZE);
    player.setColor("green");
    add(player);
}

function initPointer() {
    document.querySelector("body > canvas").style.cursor = "none";
   
    hand = new WebImage(HAND);
    hand.setPosition(-400, 400);
    hand.layer = 999;
    add(hand);
    mouseMoveMethod(updatePointer);
}

function destroyDroplet(e) {
    let obj = getElementAt(e.getX(), e.getY());
    if (obj.type == "Circle") {
        remove(obj);
    }
}

function updatePointer(e) {
    hand.setPosition(e.getX()+1, e.getY());
}

function initObstacle() {
    setTimer(run, 50);
}

function checkCollisions() {
    let x = sheep.getX()+SHEEP_WIDTH/2;
    let y = sheep.getY()+SHEEP_HEIGHT/2;
    if (x+SHEEP_WIDTH/2 >= getWidth() || x-SHEEP_WIDTH/2 <= 0) {
        dxSheep *= -1;
        if (dxSheep < 0 ) {
            sheep.setImage("https://codehs.com/uploads/4e5d93497ee7d45b6ff9737e6202aa58");
            sheep.setSize(SHEEP_WIDTH, SHEEP_HEIGHT);
        } else {
            sheep.setImage("https://codehs.com/uploads/75f314be2357647fa8077d17f1285345");
            sheep.setSize(SHEEP_WIDTH, SHEEP_HEIGHT);
        }
    }
    if (y+SHEEP_HEIGHT/2 >= getHeight() ||y-SHEEP_HEIGHT/2 <= 0) {
        dySheep *= -1;
    }
}

function addItem() {
    let x = Randomizer.nextInt(DROPLET_RADIUS, getWidth()-DROPLET_RADIUS);
    let y = Randomizer.nextInt(DROPLET_RADIUS, getHeight()-DROPLET_RADIUS);
    let droplet = new Circle(DROPLET_RADIUS);
    droplet.setColor("blue");
    droplet.setPosition(x, y);
    add(droplet);
    numDroplets += 1;
   
    if (numDroplets >= 5) {
        stopTimer(addItem);
    }
}

function run() {
    checkCollisions();
    sheep.move(dxSheep, dySheep);
}

main();
