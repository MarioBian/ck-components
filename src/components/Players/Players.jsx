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

