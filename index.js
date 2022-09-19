const questions = [
  {
    question: "Does Julio bait?",
    answer: "a",
  },
  {
    question: "Is Toco crazy?",
    answer: "c",
  },
  {
    question: "is Lupo Good?",
    answer: "b",
  },
  {
    question: "is Vitinho Rich?",
    answer: "a",
  },
  {
    question: "Renan Coquinha?",
    answer: "b",
  },
  {
    question: "is Dani not Genius?",
    answer: "c",
  },
  {
    question: "is Uchoa PLEYBA?",
    answer: "b",
  },
  {
    question: "is Lui the best?",
    answer: "a",
  },
];

let randomNumber = Math.floor(Math.random() * (questions.length + 1));

const container = document.querySelector(".container");
const form = document.querySelector("form");

let score = 0;
let finalScore = document.createElement("legend");
finalScore.classList.add("final-legend");
finalScore.innerText = `Your Score is ${score}`;
form.append(finalScore);

for (let i = 0; i < questions.length; i++) {
  const fieldset = document.createElement("fieldset");

  const h1 = document.createElement("h1");
  h1.innerText = `${questions[i].question}`;

  const wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("check-wrapper");

  const input = document.createElement("input");
  input.classList.add(`input${i}`);

  const button = document.createElement("button");
  button.innerText = "SUBMIT";

  wrapperDiv.append(input);
  fieldset.append(h1, wrapperDiv);
  container.append(fieldset);

  let eachInput = document.querySelector(`.input${i}`);
  eachInput.addEventListener("keydown", (e) => {
    if (e.key == questions[i].answer) {
      score++;
      finalScore.innerText = `Your Score is ${score}`;
      eachInput.classList.add("green");
    } else if (e.key == "Backspace") {
      if (eachInput.classList.contains("green")) {
        eachInput.classList.remove("green");
        score--;
        finalScore.innerText = `Your Score is ${score}`;
      } else {
        eachInput.classList.remove("red");
        eachInput.classList.add("font-white");
      }
    } else {
      eachInput.classList.add("red");
      eachInput.classList.add("font-white");
    }
  });
}
