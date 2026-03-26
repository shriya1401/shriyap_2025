from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/health")
def health():
    return jsonify({"status": "Running"})


import random

@app.route("/respond", methods=["POST"])
def respond():
    data = request.get_json()
    player_score = data.get("player_score", 0)
    coins = data.get("coins", 0)

    responses = [
        "In a 2D array, arr[row][col] means row first, column second.",
        "Think of the grid like a table: rows go down, columns go right.",
        "If you move right, you change the column index.",
        "If you move down, you change the row index.",
        "arr[1][2] means go to row 1, then column 2.",
        "The first index is always the row in AP CSA 2D arrays."
    ]

    message = f"AI Tutor: {random.choice(responses)} (Score: {player_score}, Coins: {coins})"

    return jsonify({"response": message})

    return jsonify({"response": message})


if __name__ == "__main__":
    app.run(port=5002, debug=True)