var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "gray";
ctx.fillRect(0,0,800,150);

ctx.fillStyle = "gray";
ctx.fillRect(0,350,800,250);


ctx.fillStyle = "pink";
ctx.fillRect(0,150,800,210);


ctx.beginPath();
ctx.arc(550,240,200,0,2*Math.PI);
ctx.stroke();
ctx.lineWidth = 5;

ctx.moveTo(550,550);
ctx.lineTo(550,0);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(550, 40);
ctx.lineTo(550, 434);
ctx.quadraticCurveTo(230, 200, 140, 125);
ctx.bezierCurveTo(50, 170, 300, 15, 500, 150);
ctx.lineTo(500, 100);
ctx.lineWidth = 5;
ctx.strokeStyle = 'black';
ctx.stroke();


ctx.beginPath();
ctx.arc(300,150,40,0,2*Math.PI);
ctx.stroke();


ctx.moveTo(550,400);
ctx.lineTo(750,220);
ctx.stroke();


ctx.beginPath();
ctx.arc(300,150,30,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.arc(300,150,20,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.arc(300,150,11,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(300,150,4,0,2*Math.PI);
ctx.stroke();