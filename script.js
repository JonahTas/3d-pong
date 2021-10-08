var x, y, vx, vy, s, sc, s2, dot1, score;
var gameState = 0;
var newscore = 0;
var highscore = 0;

function preload() {
  bg = loadImage('images/GameBackgroundPong.png');
  batje = loadImage('PingPongBatje.png');
}

function setup() {
  createCanvas(500, 500);
  x = 200;
  y = 200;
  vx = 2.4
  vy = 1
  s = 40
  sc = 0.75
}

function draw() {

  if (gameState == 0) {
    background(255);
    textSize(40);
    fill(0);
    text('Press shift to start', 70, 300);

  }
  //Beginscherm State
  if (gameState == 1) {
    game();
  }
  //Spel State
  if (gameState == 2) {
    background(255);
    textSize(40);
    fill(0);
    text('Press shift to play again', 70, 300);
    text("Your highscore is:" + " " + highscore, 70, 30);
    text("Your score was:" + " "+newscore,70,70)
  }
  //Game over state


}

function game() {
  background(bg)
  noCursor();
  distance = dist(mouseX, mouseY, x, y)
  if (distance < s2) {
    dot1 = 0
    score = 1
  }
  else {
    dot1 = 255
    score = 0
  }
  //Zorgt dat het midden van kleur kan veranderen als je er over hovert

  textSize(30);
  fill(0);
  text(newscore, 240, 30)
  //Display score

  fill(250, 84, 75)
  circle(x, y, s);
  //Grote stip

  fill(dot1)
  circle(x, y, s2);
  //Kleine stip

  image(batje,mouseX-10,mouseY-10,40,40)
  //Cursor

  x = x + vx;
  y = y + vy
  s = s + sc
  s2 = s * 0.4

  if (x < 100 || x > 400) {
    vx = vx * -1;
  } //x border bounce

  if (y < 100 || y > 400) {
    vy = vy * -1;
  } //y border bounce

  if (s < 20 || s > 80) {
    sc = sc * -1;
  } //scale bounce

  if (s >= 80) {
    newscore = newscore + 1
  } //score

  if (s >= 79 && score == 0) {
    gameState = 2;
    s = 25
  } //reset scale value



  if (newscore >= highscore) {
    highscore = newscore
  }
  else
    highscore = highscore
}

function keyPressed() {
  if (keyCode === SHIFT) {
    if (gameState == 0) {
      gameState = 1;
    }
    if (gameState == 2) {
      gameState = 1;
    }


  newscore = 0;
  print(highscore);

  }
}