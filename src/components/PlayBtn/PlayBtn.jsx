import React from 'react';

function PlayBtn() {
	const handleStart = () => {
		navigate('/game')
	};

	return(
		<button onClick={handleStart}>Play</button>
	);
}
export default PlayBtn;
