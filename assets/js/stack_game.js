const player = document.getElementById("player");
const dialogue = document.getElementById("dialogue");
const text = document.getElementById("text");
const quizbox = document.getElementById("quizbox");
const chatbox = document.getElementById("chatbox");

let px = 100, py = 300;

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") px += 10;
  if (e.key === "ArrowLeft") px -= 10;
  if (e.key === "ArrowUp") py -= 10;
  if (e.key === "ArrowDown") py += 10;

  player.style.left = px + "px";
  player.style.top = py + "px";

  checkInteraction();
});

function checkInteraction() {
  interact("teacher", () => {
    show("A 2D array is a grid. Access using arr[row][col].");
  });

  interact("quiz", () => {
    show("What does arr[1][2] mean?");
    quizbox.style.display = "block";
  });

  interact("ai", () => {
    show("Ask me anything about 2D arrays!");
    chatbox.style.display = "block";
  });
}

function interact(id, callback) {
  const npc = document.getElementById(id);
  const nx = npc.offsetLeft;
  const ny = npc.offsetTop;

  if (Math.abs(px - nx) < 40 && Math.abs(py - ny) < 40) {
    callback();
  }
}

function show(msg) {
  dialogue.style.display = "block";
  text.innerText = msg;
}

function closeDialogue() {
  dialogue.style.display = "none";
  quizbox.style.display = "none";
  chatbox.style.display = "none";
}

function submitAnswer() {
  const ans = document.getElementById("answer").value.toLowerCase();

  if (ans.includes("row 1") && ans.includes("column 2")) {
    show("Correct! +10 points");
  } else {
    show("Not quite. Row first, column second.");
  }
}

function askAI() {
  const input = document.getElementById("chatInput").value;

  show("AI Tutor: Remember, arr[row][col] → row first, column second.");
}