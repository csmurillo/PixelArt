function colorClick(){
    document.getElementById('color-input').click();
}
function colorPixel(canvas,x,y){
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(x+1, y+1, 18, 18);
    console.log(canvas+'x'+x+'y'+y);
}