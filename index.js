//Numero al azar
const num1 = Math.round(Math.random() * 10);
const num2 = Math.round(Math.random() * 10);

//Variables Dom
const $question = document.getElementById("question"),
  $formEl = document.getElementById("form"),
  $inputEl = document.getElementById("input"),
  $score = document.getElementById("score");

//Manipular el score
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

//Actualizar storage
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

//insertar al dom
$score.innerText = `Score: ${score}`;
$question.innerText = `Cuanto es ${num1} multiplicado por ${num2} ?`;

const respuestaCorrecta = num1 * num2;

$formEl.addEventListener("submit", () => {
  const userAswer = +$inputEl.value;
  if (userAswer === respuestaCorrecta) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});
