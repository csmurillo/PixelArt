function colorClick(){
    document.getElementById('current-color-input').click();
}
var BoardOptionCtx='';
function colorPixel(canvas,block,x,y){
    var ctx = canvas.getContext('2d');
    BoardOptionCtx=ctx;
    if(BoardOptionCtx.fillStyle==null){
        BoardOptionCtx.fillStyle='black';
    }
    block.style.color = BoardOptionCtx.fillStyle;
    BoardOptionCtx.fillRect(x+1, y+1, 18, 18);
    // console.log(canvas+'x'+x+'y'+y);
}
function changePixelColor(color){
    console.log(color);
    var colorBox=document.querySelector('#current-color');
    var colorBoxMobile=document.querySelector('#current-color-mobile');
    colorBox.style.backgroundColor=''+color;
    colorBoxMobile.style.backgroundColor=''+color;
    BoardOptionCtx.fillStyle=color;
}
function colorPixelWhite(canvas,x,y){
    var ctx = canvas.getContext('2d');
    BoardOptionCtx=ctx;
    BoardOptionCtx.fillStyle='white';
    BoardOptionCtx.fillRect(x+1, y+1, 18, 18);
}
function drawThroughPixels(){
}
function download(){
}
