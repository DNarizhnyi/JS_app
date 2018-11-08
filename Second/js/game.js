var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d"); // выяснить


var bg = new Image();
var red = new Image();
var green = new Image();
var orange = new Image();
var pink = new Image();
var yellow = new Image();
var blue = new Image();
var dark_blue = new Image();

// случайное появление одного кубика
var items = Array(red, green, orange, pink, yellow, blue, dark_blue);
var cubeDown = items[Math.floor(Math.random() * items.length)];

bg.src = "img/background.png";
red.src = "img/Solo_Red.png";
green.src = "img/Solo_Green.png";
orange.src = "img/Solo_Orange.png";
pink.src = "img/Solo_Pink.png";
yellow.src = "img/Solo_Yellow.png";
blue.src = "img/Solo_Blue.png";
dark_blue.src = "img/Solo_Dark_Blue.png";

document.addEventListener("keydown", move);
function move(e) {
  switch (e.keyCode) {
    case 37: // если нажата клавиша влево
      xPos -= 53;
      break;
    case 39: // если нажата клавиша вправо
      xPos += 53;
      break;
    //case 40: // если нажата клавиша вниз
    //  yPos += 10;
  //    break;
  }
}
document.addEventListener("keydown", move);

// начальная позиция кубика
var xPos = 106;
var yPos = 53;
var grav = -1;


//отслеживание позиции куба
function draw() {
  ctx.drawImage(bg, 0, 0);


ctx.drawImage(cubeDown, xPos, yPos);
  yPos -= grav;

  //касание к низу
  if (yPos + cubeDown.width >= cvs.height){

    grav=0;

      }
requestAnimationFrame(draw);
  }



requestAnimationFrame(draw);
red.onload = draw;
