const genForm = document.querySelector("#gen-form");
const genInput = document.querySelector("#gen-form input");

const gueForm = document.querySelector("#gue-form");
const gueInput = document.querySelector("#gue-form input");

const curTable = document.querySelector("#curTable");
const result = document.querySelector("#result");

function canPlay(gen) {
  if (isNaN(gen)) {
    console.log(`Please write a positive number from 0 to ${gen}`);
    return 0;
  } else if (gen < 0) {
    console.log(`Please write a positive number from 0 to ${gen}`);
    return 0;
  }
}

function saveGenNumber(event) {
  event.preventDefault();
  const genNumber = parseInt(genInput.value, 10);
  canPlay(genNumber);
  localStorage.setItem("genNumber", genNumber);
}

//ranNumber = mkRanNumber();
function mkRanNumber() {
  const srcNumber = localStorage.getItem("genNumber");
  const ranNumber = Math.ceil(Math.random(srcNumber) * 10);
  return ranNumber;
}

function playGame(event) {
  event.preventDefault();
  const gueNumber = parseInt(gueInput.value, 10);
  canPlay(gueNumber);
  localStorage.setItem("gueNumber", gueNumber);

  let randNumber = mkRanNumber();

  if (gueNumber === randNumber) {
    result.classList.remove("hidden");
    result.innerText = "You won!";
  } else {
    result.classList.remove("hidden");
    result.innerText = "You lost!";
  }
}

genForm.addEventListener("submit", saveGenNumber);
gueForm.addEventListener("submit", playGame);
