var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x = 0;
var y = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,800,800);
    ctx.fillStyle = "blue";
    ctx.fillRect(x,y,10,10);

    x+=3.2
    y+=3.2
    
    if (x > 800) {
        x = 0}
    if (y > 493) {
        y = 0} 
        
    ctx.fillStyle = "green";
    ctx.fillRect(a,b,10,10);

    a+=2.5
    b+=2.5
    
    if (a > 800) {
        a = 0}
    if (b > 493) {
        b = 0}
        
    ctx.fillStyle = "red";
    ctx.fillRect(c,d,10,10);    
    
    c+=1.7
    d+=1.7
    
     if (c > 800) {
        c = 0}
    if (d > 493) {
        d = 0}
        
          
    ctx.fillStyle = "purple";
    ctx.fillRect(e,f,10,10);    
    
    e+=5
    f+=5
    
     if (e > 800) {
        e = 0}
    if (f > 493) {
        f = 0}    
        
    ctx.fillStyle = "pink";
    ctx.fillRect(g,h,10,10);    
    
    g+=4
    h+=4
    
     if (g > 800) {
        g = 0}
    if (h > 493) {
        h = 0}        
        
        
        
        
        
        
        
   requestAnimationFrame(draw);
}
requestAnimationFrame(draw);