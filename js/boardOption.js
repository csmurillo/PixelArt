function colorClick(){
    document.getElementById('current-color-input').click();
}
var BoardOptionCtx='';
function colorPixel(canvas,block,x,y){
    var ctx = canvas.getContext('2d');
    BoardOptionCtx=ctx;
    if(BoardOptionCtx.fillStyle==null){
        console.log(BoardOptionCtx.fillStyle+'joij');
        BoardOptionCtx.fillStyle='black';
    }
    block.style.color = BoardOptionCtx.fillStyle;
    BoardOptionCtx.fillRect(x+1, y+1, 18, 18);
}
function changePixelColor(color){
    var canvas=document.getElementById('pixel-canvas-board');
    var ctx = canvas.getContext('2d');
    BoardOptionCtx=ctx;

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
function clearBoard(){
    var canvas = document.getElementById('pixel-canvas-board');
    var ctx = canvas.getContext('2d');
    BoardOptionCtx=ctx;
    var fillstyle=BoardOptionCtx.fillStyle;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    initCanvas();
    ctx.fillStyle=fillstyle;
}
