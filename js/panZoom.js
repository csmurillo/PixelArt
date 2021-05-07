var pixelContainer = document.getElementById('pixel-container');
// button zoomOut & zoomIn
const zoomOut = document.getElementById('zoom-out');
const zoomIn = document.getElementById('zoom-in');

// check boxes desktop & mobile
var panZoomCheckBox = document.getElementById('pan-zoom');
var panZoomMobileCheckBox = document.getElementById('pan-zoom-mobile');
var panzoomGlobal='';
panzoomGlobal = Panzoom(pixelContainer, { contain: 'outside', maxScale: 3, cursor: 'default' });
// track pan value (X,Y) & Scale
var panValueX='';
var panValueY='';
var panScale='';
// link zoom buttons to panzoom
zoomOut.addEventListener('click',()=>{panzoomGlobal.zoomOut();});
zoomIn.addEventListener('click',()=>{panzoomGlobal.zoomIn();});
// destroy panzoom but keeps functionality of zoomOut & zoomIn
panzoomGlobal.destroy();
// panzoomlocal for onclick checkboxes
var panzoomLocal='';
// used to halt code of async function pan() from panzoom
var stops='false';

panZoomCheckBox.addEventListener('click',()=>{   
    if(panZoomCheckBox.checked){
            stops='true';
            panzoomLocal = Panzoom(pixelContainer, { contain: 'outside', maxScale: 3, cursor: 'default' });
            panzoomLocal.zoom(panScale);
            setTimeout(() => {
                panzoomLocal.pan(panValueX,panValueY);
            });
            setTimeout(() => {
                zoomOut.addEventListener('click',()=>{panzoomLocal.zoomOut();});
                zoomIn.addEventListener('click',()=>{panzoomLocal.zoomIn();});
                stops='false';
            },40);
            panZoomMobileCheckBox.checked=true;
    }
    else{
        panzoomLocal.destroy();
        panZoomMobileCheckBox.checked=false;
    }
});
panZoomMobileCheckBox.addEventListener('click',()=>{
    if(panZoomMobileCheckBox.checked){
            stops='true';
            panzoomLocal = Panzoom(pixelContainer, { contain: 'outside', maxScale: 3, cursor: 'default' });
            panzoomLocal.zoom(panScale);
            setTimeout(() => {
                panzoomLocal.pan(panValueX,panValueY);
            });
            setTimeout(() => {
                zoomOut.addEventListener('click',()=>{panzoomLocal.zoomOut();});
                zoomIn.addEventListener('click',()=>{panzoomLocal.zoomIn();});
                stops='false';
            },40);
            panZoomCheckBox.checked=true;
    }
    else{
        panzoomLocal.destroy();
        panZoomCheckBox.checked=false;
    }
   
});
// track pan x & y & scale
pixelContainer.addEventListener('panzoomchange', (event) => {
    if(panzoomLocal==''){
        panValueX=panzoomGlobal.getPan().x;
        panValueY=panzoomGlobal.getPan().y;
        panScale=panzoomGlobal.getScale();
    }
    else{
        if(stops=='false'){
            panValueX=panzoomLocal.getPan().x;
            panValueY=panzoomLocal.getPan().y;
            panScale=panzoomLocal.getScale();
        }
    }
});
// panzoom error on screen size change
window.addEventListener('resize', ()=>{
    if(window.outerWidth>800){
        panzoomLocal.zoom(1);
        setTimeout(() => {
            panzoomLocal.pan(panValueX,panValueY);
        });
    }
});
