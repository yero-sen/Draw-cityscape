// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);

// Medium Top
ctx.fillRect(180, 60, 90, 100);

// Small Top
ctx.fillRect(202, 40, 45, 25);

// mini windows
for (let y = 210; y <= 330; y +=22) {
    for (let x = 45; x <= 115; x +=20) {
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, 8, 8);
    }
  }
// horizontal windows
for (let y = 365; y <= 590; y +=40) {
  ctx.fillStyle = "white";
  ctx.fillRect(25, y, 100, 24);
  }
  // vertical windows
let xCo = 180;
while (xCo <= 250) {
  xCo+=15;
  ctx.fillStyle = "white";
  ctx.fillRect(xCo, 120, 8, 470);
}