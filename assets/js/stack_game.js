const GAME_API = "http://127.0.0.1:5001";
const AI_API = "http://127.0.0.1:5002";

const board = document.getElementById("game-board");
const scoreEl = document.getElementById("score");
const coinsEl = document.getElementById("coins");
const questsEl = document.getElementById("quests");
const dialogueBox = document.getElementById("dialogue-box");
const gameStatus = document.getElementById("game-status");
const aiStatus = document.getElementById("ai-status");

const quizPanel = document.getElementById("quiz-panel");
const quizQuestion = document.getElementById("quiz-question");
const answerInput = document.getElementById("answer-input");
const submitAnswerBtn = document.getElementById("submit-answer-btn");
const quizFeedback = document.getElementById("quiz-feedback");
const interactBtn = document.getElementById("interact-btn");
let gameState = null;

async function checkServers() {
  try {
    const gameRes = await fetch(`${GAME_API}/health`);
    const gameData = await gameRes.json();
    gameStatus.textContent = `Game API: ${gameData.status}`;
  } catch (error) {
    gameStatus.textContent = "Game API: Offline";
  }

  try {
    const aiRes = await fetch(`${AI_API}/health`);
    const aiData = await aiRes.json();
    aiStatus.textContent = `AI API: ${aiData.status}`;
  } catch (error) {
    aiStatus.textContent = "AI API: Offline";
  }
}

async function loadState() {
  const res = await fetch(`${GAME_API}/state`);
  gameState = await res.json();
  renderBoard();
  updateHUD();
}

function updateHUD() {
  scoreEl.textContent = `Score: ${gameState.score}`;
  coinsEl.textContent = `Coins: ${gameState.coins_collected}`;
  questsEl.textContent = `Completed Quests: ${gameState.completed_quests.length}`;
}

function renderBoard() {
  board.innerHTML = "";

  for (let y = 0; y < gameState.grid_size; y++) {
    for (let x = 0; x < gameState.grid_size; x++) {
      const tile = document.createElement("div");
      tile.classList.add("tile", "empty");

      if (gameState.player.x === x && gameState.player.y === y) {
        tile.className = "tile player";
        tile.textContent = "P";
      }

      for (const npc of gameState.npcs) {
        if (npc.x === x && npc.y === y) {
          tile.className = "tile npc";
          tile.textContent = "N";
        }
      }

      if (gameState.ai_npc.x === x && gameState.ai_npc.y === y) {
        tile.className = "tile ainpc";
        tile.textContent = "A";
      }

      for (const coin of gameState.coins) {
        if (coin.x === x && coin.y === y) {
          tile.className = "tile coin";
          tile.textContent = "C";
        }
      }

      board.appendChild(tile);
    }
  }
}

async function movePlayer(direction) {
  const res = await fetch(`${GAME_API}/move`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ direction })
  });

  const data = await res.json();
  gameState = data.state;
  dialogueBox.textContent = data.message;
  renderBoard();
  updateHUD();
}

async function interact() {
  console.log("INTERACT CALLED");
  const res = await fetch(`${GAME_API}/interact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();
  gameState = data.state;

  if (data.target === "quiz") {
    dialogueBox.textContent = data.message;
    quizQuestion.textContent = data.question;
    quizFeedback.textContent = "";
    answerInput.value = "";
    quizPanel.style.display = "block";
  } else if (data.target === "ai_npc") {
    const aiRes = await fetch(`${AI_API}/respond`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: data.prompt,
        player_score: data.state.score,
        coins: data.state.coins_collected
      })
    });

    const aiData = await aiRes.json();
    dialogueBox.textContent = aiData.response;
    quizPanel.style.display = "none";
  } else {
    dialogueBox.textContent = data.message;
    quizPanel.style.display = "none";
  }

  renderBoard();
  updateHUD();
}

async function submitAnswer() {
  const answer = answerInput.value.trim();

  const res = await fetch(`${GAME_API}/submit_answer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ answer })
  });

  const data = await res.json();
  gameState = data.state;
  quizFeedback.textContent = data.message;
  dialogueBox.textContent = data.message;
  updateHUD();

  if (data.correct) {
    quizPanel.style.display = "none";
  }
}

submitAnswerBtn.addEventListener("click", submitAnswer);
interactBtn.addEventListener("click", interact);
answerInput.addEventListener("keydown", async (event) => {
    
  if (event.key === "Enter") {
    await submitAnswer();
  }
});


window.addEventListener("keydown", async (event) => {
    console.log("KEY:", event.key);
  if (["ArrowUp", "w", "W"].includes(event.key)) {
    await movePlayer("up");
  }
  if (["ArrowDown", "s", "S"].includes(event.key)) {
    await movePlayer("down");
  }
  if (["ArrowLeft", "a", "A"].includes(event.key)) {
    await movePlayer("left");
  }
  if (["ArrowRight", "d", "D"].includes(event.key)) {
    await movePlayer("right");
  }
  if (["e", "E"].includes(event.key)) {
    await interact();
  }
});

(async function init() {
  await checkServers();
  await loadState();
})();