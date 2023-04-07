var leftWristx = 0;
var leftWristy = 0;

var rightWristx = 0;
var rightWristy = 0;

function setup() 
{
    video = createCapture(VIDEO)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);   
}
    
function modelLoaded() 
{
    console.log("Model  is ready");
}

function gotPoses() 
{
    if(results.length > 0) {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}
