import React from 'react';
import styles from './PlayBtn.module.css'

function PlayBtn() {
	const handleStart = () => {
		navigate('/game')
	};

	return(
		<button className={styles.button} onClick={handleStart}> Play </button>
	);
}
export default PlayBtn;
