nosex=0;
nosey=0;

function preload() {
 clown_nose_image=loadImage('https://i.postimg.cc/76FBmBLS/mustache.png');     
}

function setup() {
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.size(500,500);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}
function modelloaded(){
    console.log('model is loaded');
}

function gotposes(results){
 if(results.length>0){
     console.log(results);
     console.log("nose x"+results[0].pose.nose.x);
     console.log("nose y"+results[0].pose.nose.y);
     nosex=results[0].pose.nose.x;
     nosey=results[0].pose.nose.y;
 }
}
function draw() {
image(video,0,0,500,500);
fill(255,0,0);
stroke(255,0,0)
circle(nosex,nosey,20);
image(clown_nose_image,nosex-15,nosey-15,40,40)
}


function takesnapshot(){
    save('mymustache.png');
}


