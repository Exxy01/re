song = ""
function preload(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    video = createCapture(VIDEO);
    canvas.center();
    video.hide();
}
function draw(){
image(video, 0, 0, 600, 500)
}
function play(){
song.play();
}