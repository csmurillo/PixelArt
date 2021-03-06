window.onload=()=>{
    initCanvas();
};
function initCanvas(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        initCanvasBoardMobile();
        initCanvasBoardGrid();
        // console.log('MOBILE');
    }
    else{
        initCanvasBoard();
        initCanvasBoardGrid();
        // console.log('BROWSER');
    }
}
function initCanvasBoardGrid(){
    let canvasBoardGrid=document.getElementById('pixel-canvas-grid-board');
    canvasBoardGrid.style.backgroundColor="";
    let canvasBoard=document.getElementById('pixel-canvas-board');
    let canvasBoardGridWidth=canvasBoard.offsetWidth;
    let canvasBoardGridHeight=canvasBoard.offsetHeight;
    canvasBoardGrid.style.width=canvasBoardGridWidth+'px';
    canvasBoardGrid.style.height=canvasBoardGridHeight+'px';
    var pixelContainer = document.getElementById('pixel-container');
    pixelContainer.style.width=(canvasBoardGridWidth+10)+'px';
    // id row & id block
    var idRow=0;
    var idBlock=0;
    for(var i=0; i<canvasBoardGridHeight;i=i+20){
        let canvasBoardGridBlockRow=document.createElement("div");
        canvasBoardGridBlockRow.id='row-'+idRow;
        canvasBoardGridBlockRow.style.width=(canvasBoardGridWidth+25)+'px';
        canvasBoardGridBlockRow.style.height=20+'px';
        canvasBoardGridBlockRow.style.display='flex';
        idBlock=0;
        for(var j=0; j<canvasBoardGridWidth;j=j+20){
            let canvasBoardGridBlocks=document.createElement("div");
            canvasBoardGridBlocks.id='block-'+idBlock;
            canvasBoardGridBlocks.style.width=20+'px';
            canvasBoardGridBlocks.style.height=20+'px';
            canvasBoardGridBlocks.style.backgroundColor="rgba(255, 255, 255, 0.075)";
            canvasBoardGridBlocks.style.color="rgba(255, 255, 255, 0.075)";
            canvasBoardGridBlocks.addEventListener('click',(e)=>{
                if(!panzoomsession){
                    colorPixel(canvasBoard,canvasBoardGridBlocks,canvasBoardGridBlocks.offsetLeft,canvasBoardGridBlocks.offsetTop);
                }
            });
            // draw
            var activeDraw=false;
            canvasBoardGridBlocks.addEventListener('mouseenter',(e)=>{
                console.log('mouse move:');
                if(activeDraw==false){
                    return;
                }
                console.log(canvasBoardGridBlocks);
                if(!panzoomsession){
                    colorPixel(canvasBoard,canvasBoardGridBlocks,canvasBoardGridBlocks.offsetLeft,canvasBoardGridBlocks.offsetTop);
                    console.log('MOUSEX:'+canvasBoardGridBlocks.offsetLeft+'Y:'+canvasBoardGridBlocks.offsetTop);
                }
            });
            canvasBoardGridBlocks.addEventListener('mousedown',(e)=>{
                activeDraw=true;
            });
            canvasBoardGridBlocks.addEventListener('mouseup',(e)=>{
                activeDraw=false;
            });
            canvasBoardGrid.addEventListener('touchmove',(e)=>{
                var touch = e.touches[0] || e.changedTouches[0];
                x = touch.pageX;
                y = touch.pageY;

                if(activeDraw==false){
                    return;
                }
                let block = document.elementFromPoint(x,y);
                if(!panzoomsession){
                    colorPixel(canvasBoard,block,block.offsetLeft,block.offsetTop);
                }
            });
            canvasBoardGridBlocks.addEventListener('touchstart',(e)=>{
                activeDraw=true;
            });
            canvasBoardGridBlocks.addEventListener('touchend',(e)=>{
                activeDraw=false;
            });

            canvasBoardGridBlockRow.append(canvasBoardGridBlocks);
            idBlock++;
        }
        idRow++;
        canvasBoardGrid.append(canvasBoardGridBlockRow);
    }
}
function initCanvasBoard(){
    let canvasBoard=document.getElementById('pixel-canvas-board');
    let screenSizeWidth=window.screen.availWidth;
    let screenSizeHeight=window.screen.availHeight*.81;
    canvasBoard.width=screenSizeWidth;
    canvasBoard.height=screenSizeHeight;
    canvasBoard.style.width=screenSizeWidth+'px';
    canvasBoard.style.height=screenSizeHeight+'px';
    var startX=0;
    for(let i=0; i<screenSizeWidth;i++){
        const ctx = canvasBoard.getContext('2d');
        ctx.strokeStyle = 'black';
        ctx.lineWidth=2;
        ctx.beginPath();
        ctx.moveTo(startX, 0);
        ctx.lineTo(startX, screenSizeHeight)
        ctx.stroke();
        startX=startX+20;
    }
    var startY=0;
    for(let j=0; j<screenSizeHeight;j++){
        const ctx = canvasBoard.getContext('2d');
        ctx.strokeStyle = 'black';
        ctx.lineWidth=2;
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
        ctx.strokeStyle = 'black';
        ctx.lineWidth=2;
        ctx.beginPath();
        ctx.moveTo(startX, 0);
        ctx.lineTo(startX, screenSizeHeight)
        ctx.stroke();
        startX=startX+20;
    }
    var startY=0;
    for(let j=0; j<screenSizeHeight;j++){
        const ctx = canvasBoard.getContext('2d');
        ctx.strokeStyle = 'black';
        ctx.lineWidth=2;
        ctx.beginPath();
        ctx.moveTo(0, startY);
        ctx.lineTo(screenSizeWidth, startY)
        ctx.stroke();
        startY=startY+20;
    }
}