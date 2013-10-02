window.onload = function (){
var canvas = document.getElementById("paint");

canvas.width = 500;
canvas.height = 500;

var ctx = canvas.getContext('2d');
ctx.fillStyle = 'blue';

var mousedown = false;  
canvas.addEventListener('mousemove', onmousemove, false); 
canvas.addEventListener('mousedown', onmousedown, false);
canvas.addEventListener('mouseup', onmouseup, false);    


function onmousedown(ev) {
  mousedown = true;
  ev.preventDefault();
}
function onmouseup(ev) {
  mousedown = false;
  ev.preventDefault();
}




function onmousemove(ev) {
  var x = ev.clientX;
  var y = ev.clientY-80;
  document.getElementById('posx').innerHTML = x;
  document.getElementById('posy').innerHTML = y;
if (mousedown) {  
ctx.beginPath();
    
    ctx.arc(x,y,5,0,Math.PI*2,true);
	ctx.closePath();
    ctx.fill();
				}

 
 }

  
}