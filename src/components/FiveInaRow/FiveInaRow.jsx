import React from 'react';
import { useState, useEffect } from 'react';
import styles from './FiveInaRow.module.css';


const FiveInaRow = ({
gameBoard = [],
lastMoveRow = null,
lastMoveColumn = null,
activePlayer = null,
onPlayerWin = () => {},
}) => {

useEffect(( => {
if (!gameBoard.lenght || lastMoveRow === null ) return;

const directions = [
	[0, 1],
	[1, 0],
	[1, 1],
	[1, -1],
];

const checkDirection = (rowStep, colStep) => {
	let count = 1;

	for (let i = 1; i < 5; i++) {
	const row = lastMovedRow + rowStep * i;
	const col = lastMoveColumn + colStep * i;
	if (gameBoard[row]?.[col] === activePlayer) count ++;
	else brak;
}
   for (let i = 1; i < 5; i++) {
        const row = lastMoveRow - rowStep * i;
        const col = lastMoveColumn - colStep * i;
        if (gameBoard[row]?.[col] === activePlayer) count++;
        else break;
      }

      return count >= 5;
    };

    for (let [rowStep, colStep] of directions) {
      if (checkDirection(rowStep, colStep)) {
        alert(`${activePlayer} vann!`);
        onPlayerWin(activePlayer);
        break;
      }
    }

  }, [gameBoard, lastMoveRow, lastMoveColumn, activePlayer, onPlayerWin]);

  return null;


export default FiveInaRow;
