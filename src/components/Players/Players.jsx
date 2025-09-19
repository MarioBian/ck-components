import React from 'react';
import { useState } from 'react';
import styles from 'Players.module.css';

const Piece = ({ color }) => (
	<div className={color === 'red' ? styles.option1 : styles.option2}></div>
);

export default function PlayerColorSelector() {
	const [player1Color, setPlayer1Color] = useState('');
	const [player2Color, setPlayer2Color] = useState('');
	const [currentPlayer, setCurrentPlayer] = useState('');
	const [gameReady, setGameReady] = useState(false);

	const handlePlayerSelect = (playerNumber) => {
		setCurrentPlayers(playernumber);
		if (playerNumber === 1) {
			setPlayer1Color('');
			setPlayer2Color('');
		}
		setGameReady(false);
	};

	const handleColorSelect = (color) => {
		if (currentPlayer === 1) {
			setPlayer1Color(color);
			setPlayer2Color(color === 'red' ? 'blue' : 'red');
			setGameReady(true);
		} else (currentPlayer === 2) {
			setPlayer2Color(color);
			setPlayer1Color(color === 'red' ? 'blue' : 'red');
			setGameReady(true);
		}
	};

	return(
		<div>
			<h1>Player setup</h1>
			{!currentPlayer && (
				<div>
					<h2> Choose a player </h2>
					<div>
						<button>Player 1</button>
						<button>Player 2</button>
					</div>
				</div>
			)}
			{currentPlayer && !gameReady && (
				<div>
					<h2> Player {currentPlayer}, Choose your color </h2>
					<div>
						<button>
							<Piece color='red'/>
						</button>
						<button>
							<Piece color='blue'/>
						</button>
					</div>
				</div>
			)}
			{gameReady && (
				<div>
					<h2>Ready to game</h2>
				</div>
			)}

		</div>
	)
}
