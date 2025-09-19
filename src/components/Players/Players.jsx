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

	return()
}
