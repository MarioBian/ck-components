import React from 'react';
import { useState } from 'react';
import styles from "./Players.module.css"


function Piece({ color }) {
	if (color === 'red') {
		return <div style={styles.redPiece}></div>
	} else {
		return <div style={styles.bluePiece}></div>

	}
}

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
					<h2> Step 1: Wich player are you? </h2>
					<button onClick={() => choosePlayer('player1')}> I am Player 1 </button>
					<button onClick={() => choosePlayer('player2')}> I am Player 2 </button>
				</div>

			)}
			{step === 2 && (
				<div>
					<h2>Step 2: {selectedPlayer === 'player1' ? 'Player 1' : 'Player 2'}, choose your color </h2>
					<p>Click on the color you want:</p>
					<button onClick={() => chooseColor('red')} >
						<Piece color="red"/>
					</button>
					<button onClick={() => chooseColor('blue')} >
						<Piece color='blue' />
					</button>
				</div>

			)}
			{step === 3 && (
				<div>
					<h2> All set! Here are your players </h2>
					<div>
						<div style={{ display: 'flex', justifyContent: 'center', gap: '50px', margin: '30px 0'}}>
							<h3> Player 1 </h3>
							<Piece color={player1Color} />
							<p>Color: {player1Color}</p>
						</div>
						<div>
							<h3> Player 2 </h3>
							<Piece color={player2Color} />
							<p>Color: {player2Color}</p>
						</div>
						<button onClick={StartGame}> Start Game!</button>
					</div>
				</div>
			)}
		</div>
	)
}
