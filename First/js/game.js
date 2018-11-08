var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d"); // выяснить

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();


bird.src = "img/flappy_bird_bird.png";
bg.src = "img/flappy_bird_bg.png";
fg.src = "img/flappy_bird_fg.png";
pipeBottom.src = "img/flappy_bird_pipeBottom.png";
pipeUp.src = "img/flappy_bird_pipeUp.png";

// Звуковые файлы
var fly = new Audio ();
var scoreAudio = new Audio();


fly.src = "js_game_audio/fly.mp3";
scoreAudio.src = "js_game_audio/score.mp3";



var gap = 120;

// При нажатии на кнопку
document.addEventListener("keydown",moveUp); // найти addEventListener
function moveUp (){
  yPos -= 30;
  fly.play();

}

// создание блоков
var pipe = [];
pipe[0] = {
  x:cvs.width+120,
  y:0
}

var score=0;
//позиция птички
var xPos = 10;
var yPos = 150;
var grav = 1.2;


function draw (){
  ctx.drawImage (bg, 0, 0);

  for (var i=0; i < pipe.length; i++){
    ctx.drawImage (pipeUp,pipe[i].x,pipe[i].y);
    ctx.drawImage (pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height  + gap);

    pipe[i].x--;

    if (pipe[i].x == 80){
    pipe.push({
      x:cvs.width,
      y: Math.floor(Math.random()* pipeUp.height - pipeUp.height)
    });
    }

    // Отслеживание прикосновений
 if(xPos + bird.width >= pipe[i].x
 && xPos <= pipe[i].x + pipeUp.width
 && (yPos <= pipe[i].y + pipeUp.height
 || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height) {
 location.reload(); // Перезагрузка страницы
      }
      if (pipe[i].x == 5){
        score++;
        scoreAudio.play();
      }
  }

  ctx.drawImage (fg, 0, cvs.height - fg.height);
  ctx.drawImage (bird, xPos , yPos);
  yPos += grav;

  ctx.fillStyle = "#278361";
  ctx.font = "30px Verdana";
  ctx.fillText ("Счет: " + score, 10, cvs.height - 20);

  requestAnimationFrame (draw); // найти requestAnimationFrame
}

pipeBottom.onload = draw;
