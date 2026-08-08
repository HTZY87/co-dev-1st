const greetings = [
  "Hello, World!",
  "こんにちは、世界！",
  "GitHub共同開発の練習中です 🎉",
];

const greetingEl = document.getElementById("greeting");
const buttonEl = document.getElementById("greet-button");

let index = 0;

function showGreeting() {
  greetingEl.textContent = greetings[index];
  index = (index + 1) % greetings.length;
}

buttonEl.addEventListener("click", showGreeting);

showGreeting();
