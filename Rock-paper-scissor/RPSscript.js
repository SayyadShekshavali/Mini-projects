const Computerimg = document.querySelector(".Computer img");
const Playerimg = document.querySelector(".Player img");
const Computerscore = document.getElementById("Computerscore");
const Userscore = document.getElementById("Userscore");
const userselected = document.querySelectorAll(".selection button");
const Mainbox = document.querySelector(".Main-box");
const feedback = document.createElement("p");
feedback.id = "feedbackpara";

const options = ["rock", "paper", "scissor"];
const images = {
  rock: "images/rock.png",
  paper: "images/paper.png",
  scissor: "images/scissor.png",
};

let Compscore = 0;
let Playerscore = 0;
function Scorecalulate(userchoice, computerchoice) {
  if (userchoice === computerchoice) {
    Mainbox.appendChild(feedback);
    feedback.innerText = "🤝 It's a Draw!";
    return "Draw";
  }
  if (
    (userchoice == "rock" && computerchoice == "scissor") ||
    (userchoice == "paper" && computerchoice == "rock") ||
    (userchoice == "scissor" && computerchoice == "paper")
  ) {
    feedback.innerText = "🎉 You Won! 🏆";
    Mainbox.appendChild(feedback);
    return "user";
  }
  feedback.innerText = "💻 Computer Won! 😢";
  Mainbox.appendChild(feedback);
  return "computer";
}
function updateScores(winner) {
  if (winner === "user") {
    Playerscore++;
  } else if (winner === "computer") {
    Compscore++;
  }

  Computerscore.textContent = Compscore;
  Userscore.textContent = Playerscore;
  if (Compscore == 5) {
    confirm("💻 Computer Won the game! 😢");
    Compscore = 0;
    Playerscore = 0;
  } else if (Playerscore == 5) {
    confirm("🎉 You Won the game!  🏆");
    Playerscore = 0;
    Compscore = 0;
  }
}
//! Displying the User and computer selected images
userselected.forEach((Option) => {
  Option.addEventListener("click", (event) => {
    Computerimg.classList.add("shakecomputer");
    Playerimg.classList.add("shakeyou");

    const userchoice = event.target.id;

    setTimeout(() => {
      Computerimg.classList.remove("shakecomputer");
      Playerimg.classList.remove("shakeyou");

      Playerimg.src = images[userchoice];

      const computerchoice =
        options[Math.floor(Math.random() * options.length)];
      Computerimg.src = images[computerchoice];
      const winner = Scorecalulate(userchoice, computerchoice);
      updateScores(winner);
    }, 900);
  });
});
