noseX = 0;
noseY = 0;

function preload() {
    img = loadImage("https://i.postimg.cc/QCDgf4JZ/Screenshot-2023-11-18-at-7-10-28-PM.png");
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 450);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Model is Loaded");
}

function draw () {
    
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results) {
    console.log(results);
    if (results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X" + results[0].pose.nose.x);
        console.log("nose Y" + results[0].pose.nose.y);
    }
}

function takeSnapshot() {
    save('yourmustache.avi');
}