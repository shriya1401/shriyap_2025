---
layout: page
title: Wordle
permalink: /wordle/
---

{% include nav/home.html %}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chess Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        #chess-board {
            display: grid;
            grid-template-columns: repeat(8, 60px);
            grid-template-rows: repeat(8, 60px);
            gap: 0;
            margin: 20px auto;
            width: 480px;
        }
        .square {
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40px;
            cursor: pointer;
        }
        .white {
            background-color: #f0d9b5;
        }
        .black {
            background-color: #b58863;
        }
        .piece {
            cursor: grab;
        }
    </style>
</head>
<body>
    <h1>Simple Chess Game</h1>
    <p>Drag and drop the pieces to move them around the board</p>
    <div id="chess-board"></div>
    <script>
        const pieces = {
            'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟',  // Black pieces
            'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'   // White pieces
        };
        // Initial board setup (FEN-like)
        let board = [
            ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
            ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
        ];
        // Create chessboard UI
        function createBoard() {
            const chessBoard = document.getElementById('chess-board');
            chessBoard.innerHTML = '';  // Clear board for re-rendering
            for (let row = 0; row < 8; row++) {
                for (let col = 0; col < 8; col++) {
                    const square = document.createElement('div');
                    square.classList.add('square');
                    square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
                    square.dataset.row = row;
                    square.dataset.col = col;
                    // Add piece to square if present
                    const piece = board[row][col];
                    if (piece) {
                        const pieceEl = document.createElement('span');
                        pieceEl.classList.add('piece');
                        pieceEl.setAttribute('draggable', 'true');
                        pieceEl.innerText = pieces[piece];
                        pieceEl.dataset.piece = piece;
                        square.appendChild(pieceEl);
                    }
                    chessBoard.appendChild(square);
                }
            }
            // Add drag and drop event listeners
            addDragAndDropListeners();
        }
        // Drag and Drop logic
        function addDragAndDropListeners() {
            const pieces = document.querySelectorAll('.piece');
            const squares = document.querySelectorAll('.square');
            let draggedPiece = null;
            pieces.forEach(piece => {
                piece.addEventListener('dragstart', () => {
                    draggedPiece = piece;
                });
            });
            squares.forEach(square => {
                square.addEventListener('dragover', (e) => {
                    e.preventDefault();
                });
                square.addEventListener('drop', () => {
                    if (draggedPiece) {
                        const oldSquare = draggedPiece.parentElement;
                        const oldRow = oldSquare.dataset.row;
                        const oldCol = oldSquare.dataset.col;
                        const newRow = square.dataset.row;
                        const newCol = square.dataset.col;
                        // Move the piece in the board array
                        board[newRow][newCol] = draggedPiece.dataset.piece;
                        board[oldRow][oldCol] = '';
                        // Re-render the board with updated positions
                        createBoard();
                    }
                });
            });
        }
        // Initialize the game
        createBoard();
    </script>

</body>
</html>

