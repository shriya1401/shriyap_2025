from flask import Flask, jsonify, request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

GRID_SIZE = 10

state = {
    "grid_size": GRID_SIZE,
    "player": {"x": 0, "y": 1},
    "npcs": [
        {
            "name": "Concept Teacher",
            "role": "lesson",
            "x": 2,
            "y": 2,
            "message": "A 2D array is like this grid. It has rows and columns. You access an element using arr[row][col]. Rows go down. Columns go right."
        },
       {
    "name": "Quiz Station",
    "role": "quiz",
    "x": 7,
    "y": 1,
    "questions": [
        {
            "question": "What does arr[1][2] mean?",
            "accepted_answers": [
                "row 1 column 2",
                "the element at row 1 column 2",
                "element at row 1 column 2",
                "value at row 1 column 2"
            ]
        },
        {
            "question": "In arr[row][col], which index comes first?",
            "accepted_answers": [
                "row",
                "row first",
                "the row",
                "row index"
            ]
        },
        {
            "question": "If you move right in a 2D array grid, which index changes?",
            "accepted_answers": [
                "column",
                "col",
                "the column",
                "column index"
            ]
        },
        {
            "question": "If you move down in a 2D array grid, which index changes?",
            "accepted_answers": [
                "row",
                "the row",
                "row index"
            ]
        },
        {
            "question": "How do you access the element in row 2, column 3?",
            "accepted_answers": [
                "arr[2][3]",
                "arr[2][3].",
                "using arr[2][3]"
            ]
        },
        {
            "question": "How many dimensions does a 2D array have?",
            "accepted_answers": [
                "2",
                "two",
                "2 dimensions",
                "two dimensions"
            ]
        }
    ]
}
    ],
    "ai_npc": {
        "name": "AI Tutor",
        "x": 5,
        "y": 7
    },
    "coins": [
        {"x": 1, "y": 5},
        {"x": 4, "y": 3},
        {"x": 8, "y": 8}
    ],
    "score": 0,
    "coins_collected": 0,
    "completed_quests": [],
    "current_question": None,
    "last_feedback": ""
}


def is_adjacent(a, b):
    return abs(a["x"] - b["x"]) + abs(a["y"] - b["y"]) == 1


def normalize_answer(text):
    return " ".join(text.lower().strip().split())


@app.route("/health")
def health():
    return jsonify({"status": "Running"})


@app.route("/state")
def get_state():
    return jsonify(state)


@app.route("/move", methods=["POST"])
def move():
    data = request.get_json()
    direction = data.get("direction", "")

    x = state["player"]["x"]
    y = state["player"]["y"]

    if direction == "up" and y > 0:
        state["player"]["y"] -= 1
    elif direction == "down" and y < GRID_SIZE - 1:
        state["player"]["y"] += 1
    elif direction == "left" and x > 0:
        state["player"]["x"] -= 1
    elif direction == "right" and x < GRID_SIZE - 1:
        state["player"]["x"] += 1

    message = "Use WASD or arrow keys to move. Press E next to a character to interact."

    remaining_coins = []
    for coin in state["coins"]:
        if coin["x"] == state["player"]["x"] and coin["y"] == state["player"]["y"]:
            state["coins_collected"] += 1
            state["score"] += 5
            message = "You collected a coin! +5 points"
        else:
            remaining_coins.append(coin)

    state["coins"] = remaining_coins

    return jsonify({
        "message": message,
        "state": state
    })


@app.route("/interact", methods=["POST"])
def interact():
    player = state["player"]

    for npc in state["npcs"]:
        if is_adjacent(player, npc):
            if npc["role"] == "lesson":
                if npc["name"] not in state["completed_quests"]:
                    state["completed_quests"].append(npc["name"])
                    state["score"] += 10

                return jsonify({
                    "target": "npc",
                    "message": f"{npc['name']} says: {npc['message']}",
                    "state": state
                })

            if npc["role"] == "quiz":
                question_data = random.choice(npc["questions"])

                state["current_question"] = {
                    "npc_name": npc["name"],
                    "question": question_data["question"],
                    "accepted_answers": question_data["accepted_answers"]
                }

                return jsonify({
                    "target": "quiz",
                    "message": f"{npc['name']} says: Let's test your 2D array knowledge!",
                    "question": question_data["question"],
                    "state": state
                })

    if is_adjacent(player, state["ai_npc"]):
        return jsonify({
            "target": "ai_npc",
            "prompt": "Explain 2D arrays simply and help the student understand that arr[row][col] means row first, then column.",
            "state": state
        })

    return jsonify({
        "target": "none",
        "message": "No character is close enough. Move next to the Concept Teacher, Quiz Station, or AI Tutor.",
        "state": state
    })


@app.route("/submit_answer", methods=["POST"])
def submit_answer():
    data = request.get_json()
    user_answer = normalize_answer(data.get("answer", ""))

    if not state["current_question"]:
        return jsonify({
            "correct": False,
            "message": "There is no active question. Go to the Quiz Station and press E first.",
            "state": state
        })

    accepted_answers = state["current_question"]["accepted_answers"]
    normalized_answers = [normalize_answer(ans) for ans in accepted_answers]

    if user_answer in normalized_answers:
        quiz_name = state["current_question"]["npc_name"]

        if quiz_name not in state["completed_quests"]:
            state["completed_quests"].append(quiz_name)
            state["score"] += 15

        state["last_feedback"] = "Correct! arr[1][2] means the element at row 1, column 2."
        state["current_question"] = None

        return jsonify({
            "correct": True,
            "message": state["last_feedback"],
            "state": state
        })

    state["last_feedback"] = "Not quite. Remember: in arr[row][col], the first number is the row and the second number is the column."
    return jsonify({
        "correct": False,
        "message": state["last_feedback"],
        "state": state
    })


if __name__ == "__main__":
    app.run(port=5001, debug=True)