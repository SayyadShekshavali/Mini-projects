const human = document.querySelector(".human");
const button = document.querySelector("button");
const stones = document.querySelectorAll(".land img");
const heading = document.querySelector("h1");
const scoreDisplay = document.getElementById("scoreDisplay");

let isJumping = false;
let score = 0;
let gameRunning = true;

//! Jump function
function jump() {
  if (!isJumping && gameRunning) {
    isJumping = true;
    human.classList.add("effect");

    setTimeout(() => {
      human.classList.remove("effect");
      isJumping = false;
    }, 1000);
  }
}

//! Collision detection
function checkCollision() {
  stones.forEach((stone) => {
    const humanRect = human.getBoundingClientRect();
    const stoneRect = stone.getBoundingClientRect();

    if (
      humanRect.left < stoneRect.right &&
      humanRect.right > stoneRect.left &&
      humanRect.bottom > stoneRect.top &&
      humanRect.top < stoneRect.bottom
    ) {
      gameOver();
    }
  });
}

//! Stop game when collision occurs
function gameOver() {
  gameRunning = false;

  stones.forEach((stone) => {
    stone.style.animation = "none";
  });

  setTimeout(() => {
    alert(`Game Over! Your Score: ${score}`);
    resetGame();
  }, 100);
}

//! Restart the game
function resetGame() {
  score = 0;
  scoreDisplay.innerText = score;
  gameRunning = true;

  stones.forEach((stone) => {
    stone.style.animation = "none";
    void stone.offsetWidth;
    stone.style.animation = "animationofstone 10s linear infinite";
  });

  //! Restart score counting
  updateScore();
}

//! Score Counter
function updateScore() {
  if (gameRunning) {
    score++;
    scoreDisplay.innerText = score;
    setTimeout(updateScore, 1000);
  }
}

button.addEventListener("click", jump);
setInterval(checkCollision, 100);
updateScore();
