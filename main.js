
function setup() {

canvas = createCanvas(720,720);
    
canvas.position(400,100);

bg = loadImage('you.png');
    
video = createCapture(VIDEO);
    
video.hide();
    
}

function draw() {

background(bg);    
    
image(video, 185, 175, 250, 150);


/*
fill(0,0,139);

rect(95, 0, 500, 35);

fill(0,0,139);

rect(560, 0, 35, 400);

fill(0,0,139);

rect(80, 400, 515, 35);

fill(0,0,139);

rect(80, 0, 35, 400);

fill(255,255,0);

circle(100, 10, 100);  */

fill(0,0,139);

rect(95, 40, 500, 35);

fill(255,255,0);

circle(60, 60, 100); 

fill(0,0,139);

rect(538, 95, 35, 400);

fill(255,255,0);

circle(555, 55, 100);

fill(0,0,139);

rect(95, 435, 500, 35);

fill(255,255,0);

circle(555, 455, 100);
    
fill(0,0,139);

rect(43, 108, 35, 338);

fill(255,255,0);

circle(55, 445, 100);

}
    
function take_snapshot() {
    
save('Ashwanth.png')
    
}