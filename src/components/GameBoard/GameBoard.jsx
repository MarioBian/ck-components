import { useState } from "react";
import styles from "./GameBoard.module.css";
import { FiveInaRow } from "@ck/ck-components";

export const GameBoard = () => {
  const size = 17;
  const [board, setBoard] = useState(
    Array(size)
      .fill(null)
      .map(() => Array(size).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [lastMove, setLastMove] = useState({ row: null, col: null });
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  // const dots = [
  //   [4, 4],
  //   [4, 9],
  //   [4, 14],
  //   [9, 4],
  //   [9, 9],
  //   [9, 14],
  //   [14, 4],
  //   [14, 9],
  //   [14, 14],
  // ];

  // const isDot = (i, j) => dots.some(([x, y]) => x === i && y === j);

  const handleCellClick = (row, col) => {
    if (gameOver) {
      console.log("Game is over!");
      return;
    }

    if (board[row][col]) {
      console.log("Cell already occupied!");
      return;
    }

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    setLastMove({ row, col });

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const handlePlayerWin = (player) => {
    setGameOver(true);
    setWinner(player);
    console.log(`Player ${player} won!`);
  };

  const resetGame = () => {
    setBoard(
      Array(size)
        .fill(null)
        .map(() => Array(size).fill(null))
    );
    setCurrentPlayer(1);
    setLastMove({ row: null, col: null });
    setGameOver(false);
    setWinner(null);
  };

  return (
    <div className={styles.gameContainer}>
      <FiveInaRow
        gameBoard={board}
        lastMoveRow={lastMove.row}
        lastMoveColumn={lastMove.col}
        activePlayer={currentPlayer === 1 ? 2 : 1}
        onPlayerWin={handlePlayerWin}
      />

      {gameOver && (
        <div className={styles.gameOverBanner}>
          <h2>🎉 Spelare {winner} vann!</h2>
          <button onClick={resetGame} className={styles.resetButton}>
            Spela igen
          </button>
        </div>
      )}

      {!gameOver && (
        <div className={styles.currentPlayer}>
          Nuvarande spelare: {currentPlayer === 1 ? "Svart ⚫" : "Vit ⚪"}
        </div>
      )}

      <table className={styles.table}>
        <tbody>
          {Array.from({ length: size - 1 }, (_, i) => (
            <tr key={i}>
              {Array.from({ length: size - 1 }, (_, j) => (
                <td
                  key={j}
                  className={`${styles.td} ${gameOver ? styles.disabled : ""}`}
                  onClick={() => handleCellClick(i, j)}
                >
                  {board[i][j] === 1 && (
                    <div className={styles.blackPiece}></div>
                  )}
                  {board[i][j] === 2 && (
                    <div className={styles.whitePiece}></div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameBoard;
