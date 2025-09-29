import React, {useState} from 'react';
import styles from './PlayerName.module.css';

const PlayerName = () => {
	const [player1, setPlayer1] = useState('');
	const [player2, setPlayer2] = useState('');

	return (
		<div>
		<input className={styles.playerInput} placeholder="Spelare 1" value={player1} onChange={e => setPlayer1(e.target.value)}/>
		<input className={styles.playerInput} placeholder="Spelare 2" value={player2} onChange={e => setPlayer2(e.target.value)}/>
<div className={styles.playerDiv}> <div>{player1}</div>
<div className={styles.divider}>|</div>
<div>{player2}</div>
</div>
		</div>
	);
};

export default PlayerName;
