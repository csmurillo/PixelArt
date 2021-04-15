window.onload=()=>{
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        initCanvasBoardMobile();
        console.log('MOBILE');
    }
    else{
        initCanvasBoard();
        console.log('BROWSER');
    }
};

function initCanvasBoard(){
    let canvasBoard=document.getElementById('pixel-canvas-board');
    let screenSizeWidth=window.screen.availWidth;
    let screenSizeHeight=window.screen.availHeight*.85;
    canvasBoard.width=screenSizeWidth;
    canvasBoard.height=screenSizeHeight;
    canvasBoard.style.width=screenSizeWidth+'px';
    canvasBoard.style.height=screenSizeHeight+'px';

    var startX=0;
    for(let i=0; i<screenSizeWidth;i++){
        const ctx = canvasBoard.getContext('2d');
        ctx.strokeStyle = 'rgb(40,40,40)';

        ctx.beginPath();
        ctx.moveTo(startX, 0);
        ctx.lineTo(startX, screenSizeHeight)
        ctx.stroke();
        startX=startX+20;
    }
    var startY=0;
    for(let j=0; j<screenSizeHeight;j++){
        const ctx = canvasBoard.getContext('2d');
        ctx.strokeStyle = 'rgb(40,40,40)';

        ctx.beginPath();
        ctx.moveTo(0, startY);
        ctx.lineTo(screenSizeWidth, startY)
        ctx.stroke();
        startY=startY+20;
    }
}
function initCanvasBoardMobile(){
    let canvasBoardGridContainer=document.getElementById('pixel-canvas-grid-board-container');
    
    let canvasBoard=document.getElementById('pixel-canvas-board');
    let screenSizeWidth=canvasBoardGridContainer.offsetWidth;
    let screenSizeHeight=canvasBoardGridContainer.offsetHeight;
    canvasBoard.width=screenSizeWidth;
    canvasBoard.height=screenSizeHeight;
    canvasBoard.style.width=screenSizeWidth+'px';
    canvasBoard.style.height=screenSizeHeight+'px';

    var startX=0;
    for(let i=0; i<screenSizeWidth;i++){
        const ctx = canvasBoard.getContext('2d');
        ctx.strokeStyle = 'rgb(40,40,40)';

        ctx.beginPath();
        ctx.moveTo(startX, 0);
        ctx.lineTo(startX, screenSizeHeight)
        ctx.stroke();
        startX=startX+20;
    }
    var startY=0;
    for(let j=0; j<screenSizeHeight;j++){
        const ctx = canvasBoard.getContext('2d');
        ctx.strokeStyle = 'rgb(40,40,40)';

        ctx.beginPath();
        ctx.moveTo(0, startY);
        ctx.lineTo(screenSizeWidth, startY)
        ctx.stroke();
        startY=startY+20;
    }
}
function colorClick(){
    document.getElementById('color-input').click();
}