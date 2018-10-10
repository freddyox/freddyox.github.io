let x = 100,
    y = 100,
    angle1 = 0.0,
    segLength = 50;

function setup() {
    canvas = createCanvas(600, 400);
    canvas.parent('mysketch');
}

function draw() {
    strokeWeight(20.0);
    stroke(255, 100);
    background(50);

    dx = mouseX - x;
    dy = mouseY - y;
    angle1 = atan2(dy, dx);
    x = mouseX - (cos(angle1) * segLength);
    y = mouseY - (sin(angle1) * segLength);

    segment(x, y, angle1);
    ellipse(x, y, 20, 20);
}

function segment(x, y, a) {
    push();
    translate(x, y);
    rotate(a);
    line(0, 0, segLength, 0);
    pop();
}
