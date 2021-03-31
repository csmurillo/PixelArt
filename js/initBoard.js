window.onload=initPixelBoard();
function initPixelBoard(){
    var pixelBoard=document.getElementById("pixel-board");
    var row=0;
    for(var i=0; pixelBoard.offsetHeight/20>i;i++){
        const pixelRow = document.createElement("div");
        pixelRow.style.display="flex";
        pixelRow.id="row-"+row;
        pixelRow.style.width=pixelBoard.offsetWidth+"px";
        pixelRow.style.height=20+"px";
        for(var j=0; pixelBoard.offsetWidth/20>j;j++){
            const pixelBox = document.createElement("div");
            pixelBox.className="pixel-box";
            pixelBox.style.height="20px";
            pixelBox.style.width="20px";
            pixelBox.style.borderRight="1px solid black";
            pixelBox.style.borderBottom="1px solid black";
            pixelRow.appendChild(pixelBox);
        }
        pixelBoard.appendChild(pixelRow);
        row++;
    }
}