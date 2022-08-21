right_wrist_x=0;
left_wrist_x=0;
difference=0;


function setup()
{
    video=createCapture(VIDEO);
    video.position(50,100);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(650,100);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    background("#FFA500");
    textSize(difference);
    fill("black");
    text("Olive Moitra",50,300);
    document.getElementById("font_size").innerHTML="FONT SIZE OF THE TEXT WILL BE = "+difference+"px";
}

function modelLoaded()
{
    console.log("poseNet is intialized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        right_wrist_x=results[0].pose.rightWrist.x;
        left_wrist_x=results[0].pose.leftWrist.x;
        
        difference=floor(left_wrist_x-right_wrist_x);
        console.log("leftWrist="+left_wrist_x+" and rightWrist="+right_wrist_x);
    }
}