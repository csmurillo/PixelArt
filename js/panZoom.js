// const elem = document.getElementById('temp');
// const panzoom=Panzoom(elem, { contain: 'outside', maxScale: 3 });
// elem.addEventListener('dblclick',panzoom.zoomIn);

// const button = document.getElementById('zoomInz');
// button.addEventListener('click', panzoom.zoomIn);
var ele=null;
var panzoom=null;
var pixelGridCanvas=document.getElementById('pixel-canvas-grid-board');
var panZoom = document.getElementById('pan-zoom');
console.log(panZoom.checked+'k');
panZoom.addEventListener('click',()=>{
    let panZoom = document.getElementById('pan-zoom');
    // console.log(panZoom.checked+'k2');
    if(panZoom.checked){
        elem = document.getElementById('temp');
        panzoom=Panzoom(elem, { contain: 'outside', maxScale: 3 });
    }
    else{
        console.log(ele+''+panZoom);
        ele=null;
        panzoom.destroy();
        panZoom=null;
        console.log(ele+''+panZoom);
        pixelGridCanvas.style.cursor='auto';
    }
});

