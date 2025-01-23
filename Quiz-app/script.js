const quizData = [
  {
    question:
      "1. In JavaScript, which of the following is used to define a constant?",
    a: "const",
    b: "let",
    c: "var",
    d: "constant",
    correct: 0,
  },
  {
    question: "2. Which of the following is NOT a valid data type in Python?",
    a: "int",
    b: "float",
    c: "Char",
    d: "List",
    correct: 2,
  },
  {
    question:
      "3. Which of the following data structures uses LIFO (Last In, First Out) order?",
    a: "Queue",
    b: "Stack",
    c: "Array",
    d: "LinkedList",
    correct: 1,
  },
  {
    question: "4. What does SQL stand for?",
    a: "Structural query logic",
    b: "Structural language",
    c: "Structure less language",
    d: "Structural query language",
    correct: 3,
  },
  {
    question: "5. Which of the following is true about a binary tree?",
    a: "It can have at most two children for each node.",
    b: "It has a maximum of three children for each node.",
    c: "It does not allow duplicate nodes.",
    d: "It is always a balanced tree.",
    correct: 0,
  },
];

let currentQuiz = 0;
let score = 0;
let selectedAnswers = new Array(quizData.length).fill(null);

const question = document.getElementById("question");
const optionsBtns = document.querySelectorAll(".answers button");
const feedbackDiv = document.createElement("div");

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  question.innerText = currentQuizData.question;

  optionsBtns[0].innerText = currentQuizData.a;
  optionsBtns[1].innerText = currentQuizData.b;
  optionsBtns[2].innerText = currentQuizData.c;
  optionsBtns[3].innerText = currentQuizData.d;

  optionsBtns.forEach((button) => {
    button.disabled = false;
    button.style.backgroundColor = "";
  });
}

optionsBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    optionsBtns.forEach((btn) => (btn.disabled = true));

    const correctAnswer = quizData[currentQuiz].correct;
    if (index === correctAnswer) {
      score++;
      button.style.backgroundColor = "#7FFFD4";
    } else {
      button.style.backgroundColor = "#DC143C";
      optionsBtns[correctAnswer].style.backgroundColor = "#7FFFD4";
    }
  });
});

function scoredisplay() {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert(`Quiz Complete! Your score is ${score}/${quizData.length}`);
  }
}
