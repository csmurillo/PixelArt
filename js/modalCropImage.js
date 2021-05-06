function canvasToImage(){
    // ...
    var pixelCanvas = document.getElementById('pixel-canvas-board');
    colorCanvasWhiteBlocks();
    // original canvas to image
    var pixelImagefullQuality = pixelCanvas.toDataURL();
    var pixelImage = new Image(pixelCanvas.width, pixelCanvas.height);
    pixelImage.id="modal-imagez";
    pixelImage.src=pixelImagefullQuality;


    var modalImageContainer=document.getElementById('modal-image-container');
    modalImageContainer.appendChild(pixelImage);

    
    // ...
}
function colorCanvasWhiteBlocks(){
    var pixelCanvas = document.getElementById('pixel-canvas-board');
    var boardGrid=document.getElementById('pixel-canvas-grid-board');
    // console.log(boardGrid.children);
    for(var i=0; i<boardGrid.children.length;i++){
        // console.log(boardGrid.children[i]);
        var currentChild=boardGrid.children[i];
        // console.log(currentChild.id);
        for(var j=0; j<currentChild.children.length;j++){
            // console.log(currentChild.children[j].id);
            var box=currentChild.children[j];
            if(box.style.color=='rgba(255, 255, 255, 0.075)'){
                colorPixelWhite(pixelCanvas,box.offsetLeft,box.offsetTop);
                // console.log(box.style.backgroundColor);
            }
        }
    }
}
$('#myModal').on('hide.bs.modal',function(e){
    var modalImageContainer=document.getElementById('modal-image-container');
    modalImageContainer.innerHTML='';
    BoardOptionCtx.fillStyle='black';
});
var lBtn=document.getElementById('largeBtn');
$('#myModal').on('shown.bs.modal', function (e) {
    console.log('shown');
    // do something...
    var $ele = $("#modal-imagez");
    // var eee=document.getElementById('modal-imagez');
    // console.log(eee.width+'width');
    $ele.cropper({
        autoCrop: true, 
        viewMode: 0,
        background: false,
        modal: true,
        zoomable: true,
        responsive: false,
        scalable : true,
        movable : true,
        built : function(){
            $(this).cropper('zoomTo', .5); // 100%

            var buttonDownload=document.getElementById('download-image');
            buttonDownload.addEventListener('click',()=>{
                const URL=$(this).cropper('getCroppedCanvas').toDataURL("image/png");
                    $('#myModal').modal('hide');

                    var link=document.getElementById('download-linkz');
                    link.href=URL;

                    
                
            });
        }
    });
})
var lBtn=document.getElementById('largeBtn');
lBtn.addEventListener('click',()=>{
    canvasToImage();
    
});