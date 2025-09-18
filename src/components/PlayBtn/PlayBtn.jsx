import React from 'react';
import styles from './PlayBtn.module.css'

function PlayBtn() {
	const handleStart = () => {
		navigate('/game')
	};

	return(
		<div className={styles.modalbox}>
			<button className={styles.button} onClick={handleStart}> Play </button>
		</div>
	);
}
export default PlayBtn;
