function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
}

function take_snapshot() {
    save('student_name.png');
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill(255, 0, 0)
    rect(580, 50, 20, 400)
    rect(40, 50, 20, 400)
    rect(80, 40, 500, 20)
    rect(80, 420, 500, 20)
    rect(0, 220, 40, 20)
    rect(601, 220, 40, 20)
    rect(320, 0, 20, 40)
    rect(320, 441, 20, 40)
    fill(0, 0, 102)
    circle(590, 50, 70);
    circle(590, 430, 70);
    circle(50, 50, 70);
    circle(50, 430, 70);   
}