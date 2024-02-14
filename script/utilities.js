function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  let alphabetsIndex = Math.ceil(Math.random() * 25);
  let alphabet = alphabets[alphabetsIndex];

  return alphabet;
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getTextById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  return elementText;
}
function setTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
