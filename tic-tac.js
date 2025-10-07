const boxes = document.querySelectorAll(".b");
const resultMsg = document.querySelector("#result");
const resetBtn = document.querySelector("#resetBtn");
const friendBtn = document.querySelector("#friendMode");
const computerBtn = document.querySelector("#computerMode");

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = "X";
let gameActive = true;
let playMode = "friend"; // F mode

function handleClick(box, index) {
  if (!gameActive || box.innerText !== "") return;

  box.innerText = currentPlayer;
  checkWinner();

  if (gameActive) {
    if (playMode === "friend") {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    } else if (playMode === "computer" && currentPlayer === "X") {
      // random move
      currentPlayer = "O";
      setTimeout(computerMove, 500);
    }
  }
}

function computerMove() {
  const emptyBoxes = [...boxes].filter((b) => b.innerText === "");
  if (emptyBoxes.length === 0) return;

  const randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
  randomBox.innerText = "O";
  checkWinner();

  if (gameActive) currentPlayer = "X";
}

function checkWinner() {
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    const v1 = boxes[a].innerText;
    const v2 = boxes[b].innerText;
    const v3 = boxes[c].innerText;

    if (v1 && v1 === v2 && v2 === v3) {
      resultMsg.innerText = `🎉 Winner: ${v1}`;
      gameActive = false;
      highlightWin(pattern);
      return;
    }
  }

  if ([...boxes].every((b) => b.innerText !== "") && gameActive) {
    resultMsg.innerText = "😐 It's a Draw!";
    gameActive = false;
  }
}

function highlightWin(pattern) {
  pattern.forEach((i) => (boxes[i].style.backgroundColor = "#1abc9c"));
}

function resetGame() {
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundColor = "rgba(255,255,255,0.1)";
  });
  resultMsg.innerText = "";
  gameActive = true;
  currentPlayer = "X";
}

boxes.forEach((box, i) =>
  box.addEventListener("click", () => handleClick(box, i))
);

resetBtn.addEventListener("click", resetGame);

friendBtn.addEventListener("click", () => {
  playMode = "friend";
  friendBtn.classList.add("active");
  computerBtn.classList.remove("active");
  resetGame();
});

computerBtn.addEventListener("click", () => {
  playMode = "computer";
  computerBtn.classList.add("active");
  friendBtn.classList.remove("active");
  resetGame();
});



