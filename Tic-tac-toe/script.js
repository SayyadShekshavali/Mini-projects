let turn = 0;
const winningpattern = [
  [1, 2, 3],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
];

//! Clicking
const cells = document.querySelectorAll(".cell");
let audio = new Audio();
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!cell.innerText) {
      if (turn % 2 == 0) {
        cell.innerText = "❌";
      } else {
        cell.innerText = "🎃";
      }

      turn++;
      let winner = checkWinner();
      if (winner) {
        audio.src = "x.mp3";
        audio.play();
        const response = document.querySelector(".response");
        response.innerHTML = `${winner}-Winner!<span class="rotate-emoji">🎉</span>`;

        // Apply CSS animation for rotation

        setTimeout(() => {
          resetBoard();
          response.innerText = " ";
        }, 2500);
      } else if (turn === 9) {
        const response = document.querySelector(".response");
        response.innerHTML = `Draw <span class="rotate-emoji">⚔️</span>!`;
        setTimeout(() => {
          resetBoard();
          response.innerText = " ";
        }, 2000);
      }
    } else {
      alert("Cell already contains a value!");
    }
  });
});

//! Checking winner !
function checkWinner() {
  for (let pattern of winningpattern) {
    const [a, b, c] = pattern.map((index) => cells[index - 1].innerText);
    if (a && a === b && b === c) {
      pattern.forEach((index) => cells[index - 1].classList.add("line"));
      setTimeout(() => {
        pattern.forEach((index) => cells[index - 1].classList.remove("line"));
      }, 2000);
      return a;
    }
  }
  return null;
}

function resetBoard() {
  cells.forEach((cell) => {
    cell.innerText = "";
  });
  turn = 0;
}
