var x, y, vx, vy, s, sc, s2, dot1, score;
var gameState = 0;
var newscore = 0;
var oldscore = 0;
var highscore = 0;

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
  }
  //Game over state


}

function game() {

  background(240)
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

  fill(250)
  ellipse(mouseX, mouseY, 20, 20);
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



  if (newscore >= oldscore) {
    highscore = newscore
  }
  else {
    highscore = oldscore
  }

}

function keyPressed() {
  if (keyCode === SHIFT) {
    if (gameState == 0) {
      gameState = 1;
    }
    if (gameState == 2) {
      gameState = 1;
    }

  oldscore = newscore;
  newscore = 0;
  print(highscore);

  }
}