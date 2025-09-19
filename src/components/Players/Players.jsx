import React from 'react';
import { useState } from 'react';

const pieceStyles = {
	red: {
		width: '40px',
		height: '40px',
		borderRadius: '50%';
		backgroundColor: 'red',
		margin: '10px'
	},
	blue: {
		width: '40px',
		height: '40px',
		borderRadius: '50%',
		backgroundColor: 'blue',
		margin: '10px'

	}
};

const buttonStyle = {
	padding: '15px 30px',
	margin: '10px',
	fontSize: '16px',
	borderRadius: '8px',
	border: 'none',
	cursor: 'pointer',
	backgroundColor: '#007bff',
	color: 'white'

};


function Piece({ color }) {
	if (color === 'red') {
		return <div style={pieceStyles.red}></div>
	} else {
		return <div style={pieceStyles.blue}></div>

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
		const handleClick = () => {
		console.log("Game starts");
		}

	}

	return(
		<div>
			<h1> Choose your player and color </h1>
			{step === 1 && (
				<div>
					<h2> Step 1: Wich player are you? </h2>
					<button style={buttonStyle} onClick={() => choosePlayer('player1')}> I am Player 1 </button>
					<button style={buttonStyle} onClick={() => choosePlayer('player2')}> I am Player 2 </button>
				</div>

			)}
			{step === 2 && (
				<div>
					<h2>Step 2: {selectedPlayer === 'player1' ? 'Player 1' : 'Player 2'}, choose your color </h2>
					<p>Click on the color you want:</p>
					<button style={{ border: 'none', background: 'none', cursor: 'pointer' }} onClick={() => chooseColor('red')} >
						<Piece color="red"/>
					</button>
					<button style={{ border: 'none', background: 'none', cursor: 'pointer'}} onClick={() => chooseColor('blue')} >
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
						<button onClick={handleClick}> Start Game!</button>
					</div>
				</div>
			)}
		</div>
	)
}
