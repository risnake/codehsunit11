let xLine, yLine;
function main() {
    xLine = initLine(getWidth()/2,0,getWidth()/2,getHeight());
    yLine = initLine(0,getHeight()/2,getWidth(),getHeight()/2);
    mouseMoveMethod(updateLines);
    mouseClickMethod(addCircle);
}
function initLine(x1,y1,x2,y2){
    let line = new Line(x1,y1,x2,y2);
    add(line);
    return line;
}
function updateLines(e){
    xLine.setPosition(e.getX(),0);
    xLine.setEndpoint(e.getX(),getHeight());
    yLine.setPosition(0,e.getY());
    yLine.setEndpoint(getWidth(),e.getY());
}
function addCircle(e) {
    let circle = new Circle(10);
    circle.setColor("red");
    circle.setPosition(e.getX(),e.getY());
    add(circle);
}
main();
