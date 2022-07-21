song1 = "";
song2 = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
scoreleftWrist= results[0].pose.keypoints[9].score;
scorerightWrist= results[0].pose.keypoints[10].score;
 function preload() {
     song1 = loadSound("music.mp3");
     song2 = loadSound("music2.mp3");
 }

 function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Model is Loaded');
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY= results[0].pose.rightWrist.y;
    }
    }

 function draw() {
     image(video, 0, 0, 400, 400);


     fill("#FF0000");
     stroke("#FF0000");
     if (scoreleftWrist > 0.2){
     circle(leftWristX,leftWristY,40);
     InNumberleftWristY = Number(leftWristY);
     removeDecimals= floor(InNumberleftWristY);
     volume= removeDecimals/500;
     document.getElementById("volume").innerHTML="Volume = " + volume;
     song.setVolume(volume);
 }
}