import React from 'react';
import { useState } from 'react';
import styles from "./Players.module.css";
import Piece from "./Piece/Piece.jsx";


export default function PlayerColorSelector() {
	const [step, setStep] = useState(1);
	const [selectedPlayer, setSelectedPlayer] = useState('');
	const [player1Color, setPlayer1Color] = useState('');
	const [player2Color, setPlayer2Color] = useState('');

	function choosePlayer(playerNumber) {
		setSelectedPlayer(playerNumber);
		setStep(2);

	}
	function chooseColor(color) {
		if (selectedPlayer === 'player1') {
		setPlayer1Color(color);
			if (color === 'red') {
				setPlayer2Color('blue');
			} else {
				setPlayer2Color('red');
			}
		}

		if (selectedPlayer === 'player2') {
			setPlayer2Color(color);
			if (color === 'red') {
				setPlayer1Color('blue');
			} else {
				setPlayer1Color('red');
			}
		}
		setStep(3);
	}

	function StartGame() {
		console.log("Game starts!")

	}

	return(
		<div className={styles.card}>
			<h1 className={styles.title}> Choose your player and color </h1>
			{step === 1 && (
				<div>
					<h2 className={styles.subtitle}> Step 1: Wich player are you? </h2>
					<div className={styles.buttonContainer}>
						<button className={styles.playerButton} onClick={() => choosePlayer('player1')}> I am Player 1 </button>
						<button className={styles.playerButton} onClick={() => choosePlayer('player2')}> I am Player 2 </button>
					</div>
				</div>

			)}
			{step === 2 && (
				<div>
					<h2 className={styles.subtitle}>Step 2: {selectedPlayer === 'player1' ? 'Player 1' : 'Player 2'}, choose your color </h2>
					<p className={styles.instruction}>Click on the color you want:</p>
					<div className={styles.colorContainer}>
						<button className={styles.colorButton} onClick={() => chooseColor('red')} >
							<Piece color="red"/>
						</button>
						<button className={styles.colorButton} onClick={() => chooseColor('blue')} >
							<Piece color='blue' />
						</button>
					</div>
				</div>

			)}
			{step === 3 && (
				<div>
					<h2 className={styles.subtitle}> All set! Here are your players </h2>
					<div className={styles.playersSection}>
						<div className={styles.playerDisplay}>
							<h3 className={styles.playerTitle}> Player 1 </h3>
							<Piece color={player1Color} />
							<p className={styles.colorText}>Color: {player1Color}</p>
						</div>
						<div className={styles.playerDisplay}>
							<h3 className={styles.playerTitle}> Player 2 </h3>
							<Piece color={player2Color} />
							<p className={styles.colorText}>Color: {player2Color}</p>
						</div>
						<button className={styles.startButton} onClick={StartGame}> Start Game!</button>
					</div>
				</div>
			)}
		</div>
	)
}
