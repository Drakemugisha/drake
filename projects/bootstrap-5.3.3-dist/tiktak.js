// script.js

// Initialize the game state
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
const statusDisplay = document.getElementById('status');

// Winning combinations
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Handle a cell click
function handleCellClick(event) {
  const clickedCell = event.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

  if (board[clickedCellIndex] !== '' || !gameActive) {
    return;
  }

  updateCell(clickedCell, clickedCellIndex);
  checkResult();
}

// Update the clicked cell
function updateCell(clickedCell, index) {
  board[index] = currentPlayer;
  clickedCell.textContent = currentPlayer;
}

// Check the game result (win/draw)
function checkResult() {
  let roundWon = false;

  // Check each winning condition
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusDisplay.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  // Check for a draw
  if (!board.includes('')) {
    statusDisplay.textContent = 'Game ended in a draw!';
    gameActive = false;
    return;
  }

  // Switch player
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
}

// Restart the game
function restartGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  statusDisplay.textContent = `It's ${currentPlayer}'s turn`;

  document.querySelectorAll('.cell').forEach(cell => {
    cell.textContent = '';
  });
}

// Add event listeners to cells and restart button
document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

document.getElementById('restartButton').addEventListener('click', restartGame);

// Set initial status
statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
