const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 20;
const boardWidth = 570;
const boardHeight = 300;
let timerId;
let xDirection = 2;
let yDirection = 2;

const startUser = [230, 10];
let currentUserPosition = startUser;

const startBall = [270, 40];
let currentBallPosition = startBall;

//Create Block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

//all my blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(460, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(460, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(460, 210),
];

console.log(blocks[0]);

//Draw all Blocks
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}

addBlocks();

//add User
const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

//draw User
function drawUser() {
  user.style.left = currentUserPosition[0] + "px";
  user.style.bottom = currentUserPosition[1] + "px";
}

//move user
function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currentUserPosition[0] > 0) {
        currentUserPosition[0] -= 10;
        drawUser();
      }
      break;
    case "ArrowRight":
      if (currentUserPosition[0] < boardWidth - blockWidth) {
        currentUserPosition[0] += 10;
        drawUser();
      }
      break;
  }
}

document.addEventListener("keydown", moveUser);

// add ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

//draw ball
function drawBall() {
  ball.style.left = currentBallPosition[0] + "px";
  ball.style.bottom = currentBallPosition[1] + "px";
}

//move ball
function moveBall() {
  currentBallPosition[0] += xDirection;
  currentBallPosition[1] += yDirection;
  drawBall();
  checkForCollisions();
}

timerId = setInterval(moveBall, 30);

//check for collisions
function checkForCollisions() {
  //check for wall collisions
  if (
    currentBallPosition[0] >= boardWidth - ballDiameter ||
    currentBallPosition[1] >= boardHeight - ballDiameter
  ) {
    changeBallDirection();
  }
}

function changeBallDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;
    return;
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
    return;
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2;
    return;
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
    return;
  }
}
