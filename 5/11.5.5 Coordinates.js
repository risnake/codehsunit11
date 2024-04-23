let mouseText;
function main(){
	mouseText = initMouseText();
	mouseMoveMethod(updateText);
}
function initMouseText(x=0,y=0){
    let text = new Text("(" + x + ", " + y + ")");
    text.setPosition(40,40);
    add(text);
    return text;
}
function updateText(e){
    let x = Math.round(e.getX());
    let y = Math.round(e.getY());
    mouseText.setText("(" + x + ", " + y + ")");
}
main();
