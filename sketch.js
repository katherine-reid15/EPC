function setup() {
  createCanvas(windowWidth, windowHeight * 2);
}

function draw() {
  var color1 = color("#EEDDFF");
  var color2 = color("#552288");
  
  var increment = 1 / (windowWidth);
  for (var i = 0; i <= windowWidth; i++) {
    var lineColor = lerpColor(color1, color2, i * increment);
    stroke(lineColor);
    line(0, 0 + i, windowWidth, 0 + i);
  }
  noLoop();
}