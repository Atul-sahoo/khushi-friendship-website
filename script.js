const surpriseButton = document.getElementById("surpriseButton");
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

function heartsAt(x, y) {
  const symbols = ["♡", "♥", "✿", "✧"];

  symbols.forEach((symbol, index) => {
    const heart = document.createElement("span");
    heart.className = "heart-burst";
    heart.textContent = symbol;
    heart.style.left = `${x + index * 18}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  });
}

surpriseButton.addEventListener("click", (event) => {
  const box = event.currentTarget.getBoundingClientRect();
  heartsAt(box.left + box.width / 2, box.top + box.height / 2);
  showToast("Surprise! You are appreciated more than you know. ♡");
});

const questions = [
  {
    question: "When did our friendship begin?",
    options: ["12 September 2025", "15 September 2025", "20 September 2025", "25 September 2025"]
  },
  {
    question: "What do I usually call you?",
    options: ["Khushi", "Khushi Jii", "Bestie", "Madam Jii"]
  },
  {
    question: "Which memory of our friendship do you like the most?",
    options: ["Our first conversation", "Our funny moments", "Our little talks", "Every little memory"]
  },
  {
    question: "What do you think makes our friendship special?",
    options: ["Trust", "Care", "Understanding", "All of these"]
  },
  {
    question: "If we could spend a day somewhere, where would you like to go?",
    options: ["A beautiful garden", "A peaceful place", "An amusement park", "Somewhere of your choice"]
  },
  {
    question: "Describe our friendship in one word.",
    options: ["Beautiful", "Special", "Unforgettable", "Priceless"]
  },
  {
    question: "What is one thing I always wish for you?",
    options: ["Happiness", "Success", "A bright future", "All of these"]
  }
];

let currentQuestion = 0;

const questionText = document.getElementById("quizQuestion");
const optionsBox = document.getElementById("quizOptions");
const progress = document.getElementById("quizProgress");
const nextButton = document.getElementById("nextQuiz");
const result = document.getElementById("quizResult");

function showQuestion() {
  const item = questions[currentQuestion];

  progress.textContent = `Question ${currentQuestion + 1} of 7`;
  questionText.textContent = item.question;
  optionsBox.innerHTML = "";
  result.textContent = "";
  nextButton.disabled = true;
  nextButton.textContent = currentQuestion === 6 ? "Finish ♡" : "Next →";

  item.options.forEach((option) => {
    const answerButton = document.createElement("button");
    answerButton.type = "button";
    answerButton.className = "quiz-answer";
    answerButton.textContent = option;

    answerButton.addEventListener("click", () => {
      optionsBox.querySelectorAll(".quiz-answer").forEach((button) => {
        button.classList.remove("selected");
      });

      answerButton.classList.add("selected");
      nextButton.disabled = false;
    });

    optionsBox.appendChild(answerButton);
  });
}

nextButton.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    progress.hidden = true;
    questionText.hidden = true;
    optionsBox.hidden = true;
    nextButton.hidden = true;
    result.innerHTML =
  'Thank you for being a part of these beautiful memories, Khushi Jii! 💗' +
  '<br>May you always stay happy, achieve your dreams and keep smiling. 🌷' +
  '<br><img class="quiz-finish-gif" src="images/friends.gif" alt="Friends celebrating">';
  }
})

showQuestion();

const birthdayDate = new Date(2027, 2, 1).getTime();

function updateBirthdayCountdown() {
  const remaining = Math.max(0, birthdayDate - Date.now());

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(3, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateBirthdayCountdown();
setInterval(updateBirthdayCountdown, 1000);

document.getElementById("surpriseButton").addEventListener("click", () => {
  document.getElementById("surpriseGif").hidden = false;
});