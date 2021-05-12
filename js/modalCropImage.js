// browser
var browserButton=document.getElementById('browser-download-button');
browserButton.addEventListener('click',()=>{
    canvasToImage();
});
// mobile
var mobileButton=document.getElementById('mobile-download-button');
mobileButton.addEventListener('click',()=>{
    canvasToImage();
});
function canvasToImage(){
    // color canvas empty block the color white
    colorCanvasWhiteBlocks();
    // pixel canvas
    var pixelCanvas = document.getElementById('pixel-canvas-board');
    // original canvas to image
    var pixelImagefullQuality = pixelCanvas.toDataURL();
    var pixelImage = new Image(pixelCanvas.width, pixelCanvas.height);
    pixelImage.id="modal-imagez";
    pixelImage.src=pixelImagefullQuality;
    // append image to modal
    var modalImageContainer=document.getElementById('modal-image-container');
    modalImageContainer.style.width="99%";
    modalImageContainer.style.height="80%";
    modalImageContainer.appendChild(pixelImage);
    
}
function colorCanvasWhiteBlocks(){
    var pixelCanvas = document.getElementById('pixel-canvas-board');
    var boardGrid=document.getElementById('pixel-canvas-grid-board');
    for(var i=0; i<boardGrid.children.length;i++){
        var currentChild=boardGrid.children[i];
        for(var j=0; j<currentChild.children.length;j++){
            var box=currentChild.children[j];
            if(box.style.color=='rgba(255, 255, 255, 0.075)'){
                colorPixelWhite(pixelCanvas,box.offsetLeft,box.offsetTop);
            }
        }
    }
}
var modalOpenScreenSize=null;
$('#myModal').on('shown.bs.modal', function (e) {
    var image=document.getElementById('modal-imagez');
    var cropper = new Cropper(image, {
        responsive: true,
        modal: true,
        movable : true,
        ready(){
            var screenSizeWidth=document.body.clientWidth;
            var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (isMobile) {
                cropper.zoomTo(.8);
            }
            else if(screenSizeWidth>1100){
                cropper.zoomTo(.5);
                modalOpenScreenSize=1100;
            }
            else if(screenSizeWidth<1100 && screenSizeWidth>700){
                cropper.zoomTo(.34);
                modalOpenScreenSize='mid';
            }
            else if(screenSizeWidth<700){
                cropper.zoomTo(.3);
                modalOpenScreenSize=700;
            }
            // set up modal download button
            var buttonDownload=document.getElementById('download-image');
            buttonDownload.addEventListener('click',()=>{
                const URL=cropper.getCroppedCanvas().toDataURL('image/png');
                    $('#myModal').modal('hide');
                    var link=document.getElementById('download-linkz');
                    link.href=URL;
            });
        },
    });
    
    window.addEventListener('resize', screenControl);
    function screenControl(){
        var screenSizeWidth=document.body.clientWidth;
        var screenSizeHeight=document.body.clientHeight;
        if(modalOpenScreenSize==1100){
            var cropperCanvas=document.getElementsByClassName('cropper-canvas')[0];
            console.log(cropperCanvas.offsetWidth+'ekjnkejnkjn');
            cropper.moveTo(screenSizeWidth/4,screenSizeHeight/4);
            cropper.setCropBoxData({
                width:cropperCanvas.offsetWidth+100,
                height:cropperCanvas.offsetHeight+100,
                top: screenSizeHeight/5.5,
                left: screenSizeWidth/5
            });
        }
        else if(modalOpenScreenSize=='mid'){
            var cropperCanvas=document.getElementsByClassName('cropper-canvas')[0];
            console.log(cropperCanvas.offsetWidth+'ekjnkejnkjn');
            cropper.moveTo(screenSizeWidth/4,screenSizeHeight/4);
            cropper.setCropBoxData({
                width:cropperCanvas.offsetWidth+100,
                height:cropperCanvas.offsetHeight+100,
                top: screenSizeHeight/5.5,
                left: screenSizeWidth/5
            });
        }
        else if(modalOpenScreenSize==700){
            var cropperCanvas=document.getElementsByClassName('cropper-canvas')[0];
            cropper.moveTo(20,20);
        }
    }
});
$('#myModal').on('hide.bs.modal',function(e){
    var modalImageContainer=document.getElementById('modal-image-container');
    modalImageContainer.innerHTML='';
    BoardOptionCtx.fillStyle='black';
});
