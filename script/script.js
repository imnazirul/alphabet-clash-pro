const btnPlaynow = document.getElementById("btn-playnow");
// const homeSection = document.getElementById("home-section");
// const gameScreenSection = document.getElementById("game-screen-section");
// const gameOverSection = document.getElementById("game-over-section");
const btnPlayAgain = document.getElementById("btn-playAgain");
btnPlaynow.addEventListener("click", (event) => {
  play();
});
btnPlayAgain.addEventListener("click", (event) => {
  play();
});

function play() {
  hideElementById("home-section");
  showElementById("game-screen-section");
  hideElementById("game-over-section");
  gamePlay();

  setTextById("score", 0);
  setTextById("life", 10);
}
function gamePlay() {
  let alphabet = getARandomAlphabet();
  const displayAlphabet = document.getElementById("displayAlphabet");
  displayAlphabet.innerText = alphabet.toUpperCase();
  setBackgroundColorById(alphabet);
}
function handleKeyEvent(event) {
  const currentAlphabet = getTextById("displayAlphabet").toLowerCase();

  //   console.log(event.key);
  if (event.key === currentAlphabet) {
    removeBackgroundColorById(currentAlphabet);
    let score = getTextById("score");
    score++;
    setTextById("score", score);
    gamePlay();
  } else {
    let life = getTextById("life");
    life--;
    setTextById("life", life);
    if (life <= 0) {
      showElementById("game-over-section");
      hideElementById("game-screen-section");
    }
  }
}

document.addEventListener("keyup", (event) => {
  handleKeyEvent(event);
});
