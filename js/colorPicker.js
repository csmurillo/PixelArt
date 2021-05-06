var currentCustomColorGlobal=null;
function toggleColorTitle(element){
    if(element.id=='colors-title-container'){
        var customColorsTitleContainer=document.getElementById('custom-colors-title-container');
        var status=element.dataset.toggleColorTitle;
        if(status=='inactive'){
            element.dataset.toggleColorTitle='active';
            element.style.borderBottom="4px solid black";
            customColorsTitleContainer.setAttribute('style', 'border-bottom: 1px solid black !important');
            customColorsTitleContainer.dataset.toggleColorTitle='inactive';
            var predefineColors=document.getElementById('pre-define-colors-container');
            predefineColors.style.display='block';
            // hide
            var customColors=document.getElementById('custom-colors-container');
            customColors.style.display='none';
        }
    }
    else if(element.id=='custom-colors-title-container'){
        var colorTitleContainer=document.getElementById('colors-title-container');
        var status=element.dataset.toggleColorTitle;
        if(status=='inactive'){
            element.dataset.toggleColorTitle='active';
            element.style.borderBottom="4px solid black";
            colorTitleContainer.setAttribute('style', 'border-bottom: 1px solid black !important');
            colorTitleContainer.dataset.toggleColorTitle='inactive';
            var customColors=document.getElementById('custom-colors-container');
            customColors.style.display='flex';
            // hide
            var predefineColors=document.getElementById('pre-define-colors-container');
            predefineColors.style.display='none';
        }
    }
}
function toggleColorTitleMobile(element){
    console.log(element.dataset.toggleColorTitle);
    if(element.id=='colors-title-container-mobile'){
        var customColorsTitleContainerMobile=document.getElementById('custom-colors-title-container-mobile');
        var status=element.dataset.toggleColorTitle;
        if(status=='inactive'){
            element.dataset.toggleColorTitle='active';
            element.style.borderBottom="4px solid black";
            customColorsTitleContainerMobile.setAttribute('style', 'border-bottom: 1px solid black !important');
            customColorsTitleContainerMobile.dataset.toggleColorTitle='inactive';
            var predefineColors=document.getElementById('pre-define-colors-container-mobile');
            predefineColors.style.display='block';
            // hide
            var customColors=document.getElementById('custom-colors-container-mobile');
            customColors.style.display='none';
        }
    }
    else if(element.id=='custom-colors-title-container-mobile'){
        var colorTitleContainerMobile=document.getElementById('colors-title-container-mobile');
        var status=element.dataset.toggleColorTitle;
        if(status=='inactive'){
            element.dataset.toggleColorTitle='active';
            element.style.borderBottom="4px solid black";
            colorTitleContainerMobile.setAttribute('style', 'border-bottom: 1px solid black !important');
            colorTitleContainerMobile.dataset.toggleColorTitle='inactive';
            var customColors=document.getElementById('custom-colors-container-mobile');
            customColors.style.display='flex';
            // hide
            var predefineColors=document.getElementById('pre-define-colors-container-mobile');
            predefineColors.style.display='none';
        }
    }
}
function customColor(addColorContainer,addColorInput){
    addColorInput.style.left=addColorContainer.offsetLeft+"px";
    addColorInput.style.top=addColorContainer.offsetTop+"px";
    addColorInput.click();
}
function addCustomColor(color){
    var customColorContainer=document.getElementById('custom-colors-catalog-container');
    var customColorContainerMobile=document.getElementById('custom-colors-catalog-container-mobile');
    for(var i=1; i<customColorContainer.children.length;i++){
        if(customColorContainer.children[i].dataset.customColor=='blank'){
            customColorContainer.children[i].dataset.customColor=''+color;
            customColorContainer.children[i].style.backgroundColor=''+color;
            customColorContainerMobile.children[i].dataset.customColor=''+color;
            customColorContainerMobile.children[i].style.backgroundColor=''+color;
            return;
        }
        console.log(customColorContainer.children[i]);
    }
}
function addCustomColorIndex(color){
    currentCustomColorGlobal.style.backgroundColor=''+color;
    // mobile
    var mobileCurrentCustomColor=currentCustomColorGlobal.id+'-mobile';
    var mobileCustomColor =document.getElementById(''+mobileCurrentCustomColor);
    mobileCustomColor.style.backgroundColor=''+color;
    mobileCustomColor.dataset.customColor=''+color;
    currentCustomColorGlobal.dataset.customColor=''+color;
}
function addCustomColorMobileIndex(color){
    currentCustomColorGlobal.style.backgroundColor=''+color;
    // desktop
    const currentCustomColorArray = (currentCustomColorGlobal.id).split('-');
    var currentCustomColorDesktop='';
    for(var i=0;i<currentCustomColorArray.length;i++){
        if(currentCustomColorArray[i]=='mobile'){
            break;
        }
        currentCustomColorDesktop=currentCustomColorDesktop+currentCustomColorArray[i]+'-';
    }
    currentCustomColorDesktop=currentCustomColorDesktop.slice(0,currentCustomColorDesktop.length-1);
    var desktopCustomColor =document.getElementById(''+currentCustomColorDesktop);
    desktopCustomColor.style.backgroundColor=''+color;
    desktopCustomColor.dataset.customColor=''+color;
    currentCustomColorGlobal.dataset.customColor=''+color;
}
function modifyColor(currentCustomColor,mobile){
    if(mobile=='mobile'){
        var customColorModifyInputMobile=document.getElementById('custom-color-modify-input-mobile');
        customColorModifyInputMobile.style.left=currentCustomColor.offsetLeft+'px';
        customColorModifyInputMobile.style.top=currentCustomColor.offsetTop+'px';
        customColorModifyInputMobile.click();
        currentCustomColorGlobal=currentCustomColor;
        return;
    }
    var customColorModifyInput=document.getElementById('custom-color-modify-input');
    customColorModifyInput.style.left=currentCustomColor.offsetLeft+'px';
    customColorModifyInput.style.top=currentCustomColor.offsetTop+'px';
    customColorModifyInput.click();
    currentCustomColorGlobal=currentCustomColor;
}
function changePixelColorCustomContainer(customColorDiv){
    if(customColorDiv.dataset.customColor=='blank'){
        return;
    }
    var color=customColorDiv.dataset.customColor;
    changePixelColor(color);
}