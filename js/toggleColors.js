// function toggleColorTitle(element){
//     console.log(element.dataset.toggleColorTitle);
//     if(element.id=='colors-title-container'){
//         var customColorsTitleContainer=document.getElementById('custom-colors-title-container');
//         console.log('colors-title-container');
//         var status=element.dataset.toggleColorTitle;
//         if(status=='inactive'){
//             element.dataset.toggleColorTitle='active';
//             element.style.borderBottom="4px solid black";
//             // customColorsTitleContainer.style.borderBottom="1px solid black";
//             customColorsTitleContainer.setAttribute('style', 'border-bottom: 1px solid black !important');
//             console.log('custom'+customColorsTitleContainer.style.borderBottom);
//             customColorsTitleContainer.dataset.toggleColorTitle='inactive';
//             var predefineColors=document.getElementById('pre-define-colors-container');
//             predefineColors.style.display='block';
//             // hide
//             var customColors=document.getElementById('custom-colors-container');
//             customColors.style.display='none';
//             // element.dataset.toggleColorTitle='inactive';
//         }
//         else{
//             // element.dataset.toggleColorTitle='active';
//             // element.style.border="9px solid pink";
//             // customColorsTitleContainer.style.border="none";
//         }
//     }
//     else if(element.id=='custom-colors-title-container'){
//         var colorTitleContainer=document.getElementById('colors-title-container');
//         console.log('custom-colors-title-container'+colorTitleContainer.style.borderBottom);
//         var status=element.dataset.toggleColorTitle;
//         if(status=='inactive'){
//             element.dataset.toggleColorTitle='active';
//             element.style.borderBottom="4px solid black";
//             colorTitleContainer.setAttribute('style', 'border-bottom: 1px solid black !important');
//             // colorTitleContainer.style.borderBottom="10px solid black";
//             console.log('color'+colorTitleContainer.style.borderBottom);
//             colorTitleContainer.dataset.toggleColorTitle='inactive';
//             var customColors=document.getElementById('custom-colors-container');
//             customColors.style.display='flex';
//             // hide
//             var predefineColors=document.getElementById('pre-define-colors-container');
//             predefineColors.style.display='none';
//             // element.dataset.toggleColorTitle='inactive';
//         }
//         else{
//             // element.dataset.toggleColorTitle='active';
//             // element.style.border="9px solid pink";
//             // colorTitleContainer.style.border="none";
//         }
//     }
// }
