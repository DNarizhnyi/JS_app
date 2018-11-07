var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d"); // выяснить


var bg = new Image ();
var red = new Image ();
var green = new Image ();
var orange = new Image ();
var pink = new Image ();
var yellow = new Image ();
var blue = new Image ();
var dark_blue = new Image ();

bg.src = "img/background.png";
red.src = "img/Solo_Red.png";
green.src = "img/Solo_Green.png";
orange.src = "img/Solo_Orange.png";
pink.src = "img/Solo_Pink.png";
yellow.src = "img/Solo_Yellow.png";
blue.src = "img/Solo_Blue.png";
dark_blue.src = "img/Solo_Dark_Blue.png";

function draw () {
  ctx.drawImage (bg, 0, 0);
  requestAnimationFrame (draw);
}

red.onload = draw;
