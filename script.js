var x, y, vx, vy, s, sc, s2, dot1, score;
var gameState = 0;
var newscore = 0;
var highscore = 0;

function preload() {
  bg = loadImage('media/GameBackgroundPong.png');
  batje = loadImage('media/PingPongBatje.png');
  balletje = loadImage('media/PingPongBall.png');
  font = loadFont('media/pongfont.otf');
}

class Text {
  constructor(text, x, y, width) {
    this.text = text;
    this.x = x;
    this.y = y;
  }
  drawText() {
    textAlign(CENTER);
    textFont(font);
    text(this.text, this.x, this.y, width);
  }
}

class Ball {
  constructor(img, x, y, s, ss) {
    this.img = img;
    this.x = x;
    this.vx = 2.4;
    this.y = y;
    this.vy = 1;
    this.s = 40;
    this.ss = 40;
    this.sc = 0.75;
    this.s2 = this.s2
  }
  drawBall() {
    image(this.img, this.x - this.s, this.y - this.s, this.s * 2, this.ss * 2);
    var distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < this.s2) {
      dot1 = 0;
      score = 1;
    }
    else {
      dot1 = 255;
      score = 0;
    }
    // centre stip
    fill(dot1);
    circle(this.x, this.y, this.s2);

    this.s2 = this.s * 0.4;
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    this.s = this.s + this.sc;
    this.ss = this.ss + this.sc;

    // exceding x border = bounce
    if (this.x < 100 || this.x > 400) {
      this.vx = this.vx * -1;
    }
    // exceding y border = bounce
    if (this.y < 100 || this.y > 400) {
      this.vy = this.vy * -1;
    }
    if (this.s < 20 || this.s > 80) {
      this.sc = this.sc * -1;
    } // scale bounce
    // score
    if (this.s >= 80) {
      newscore = newscore + 1;
    }
    //reset scale value
    if (this.s >= 79 && score == 0) {
      gameState = 2;
      this.s = 25;
      this.ss = 25;
    }
  }
}

function setup() {
  createCanvas(500, 500);
  x = 200;
  y = 200;
  vx = 2.4;
  vy = 1;
  s = 40;
  sc = 0.75;

  start = new Text('Press shift to start', 0, 275, width);
  playagain = new Text('Press shift to play again', 0, 300, width);
  ball1 = new Ball(balletje, this.x - this.s, this.y - this.s, this.s, this.ss);
}

function draw() {
  // 0 = Beginscherm, 1 = Spel, 2 = Game-over.
  if (gameState == 0) {
    background(240, 240, 205);
    textSize(40);
    fill(0);
    textAlign(CENTER);
    start.drawText();
  }
  if (gameState == 1) {
    game();
  }
  if (gameState == 2) {
    background(240, 240, 205);
    textSize(40);
    fill(0);
    playagain.drawText();
    textAlign(CENTER);
    text("Your highscore is:" + " " + highscore, 0, 50, width);
    textAlign(CENTER);
    text("Your score was:" + " " + newscore, 0, 90, width);
  }
}

function game() {
  background(bg)
  noCursor();
  ball1.drawBall();
  textSize(30);
  fill(255);
  text(newscore, 240, 30);
  
  if (newscore >= highscore) {
    highscore = newscore;
  }
  else {
    highscore = highscore;
  }
// Cursor, replacement noCursor
  image(batje, mouseX - 10, mouseY - 10, 40, 40);
}

// Gamestate change prompted by key press
function keyPressed() {
  if (keyCode === SHIFT) {
    if (gameState == 0) {
      gameState = 1;
    }
    if (gameState == 2) {
      gameState = 1;
    }
    newscore = 0;
  }
}