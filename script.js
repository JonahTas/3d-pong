var x, y, v, b, s, sc, s2, dot1, score;
var gameState = 0

function setup() {
  createCanvas(500, 500);
  x = 200;
  y = 200;
  v = 2.4
  b = 1
  s = 40
  sc = 0.75
}

function draw() {

  if (gameState == 0) {

    textSize(40);
    fill(0);
    text('Press shift to start', 70, 300);

  }
  //Beginscherm State
  if (gameState == 1) {

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


    fill(250, 84, 75)
    circle(x, y, s);
    //Grote stip

    fill(dot1)
    circle(x, y, s2);
    //Kleine stip

    fill(250)
    ellipse(mouseX, mouseY, 20, 20);
    //Cursor

    x = x + v;
    y = y + b
    s = s + sc
    s2 = s * 0.4

    if (x < 100 || x > 400) {
      v = v * -1;

     }

    if (y < 100 || y > 400) {
      b = b * -1;
     }

    if (s < 20 || s > 80) {
      sc = sc * -1;
     }
   
    if (s = 80 && score = 0) {
      gamestate = 2
     }
     //^werkt niet
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


function keyPressed() {
  if (keyCode === SHIFT) {
    if (gameState == 0) {
      gameState = 1;
    }
    if (gameState == 2) {
      gameState = 1;
    }
  }
}