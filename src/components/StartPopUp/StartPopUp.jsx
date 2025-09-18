import {useState} from 'react';
import styles from './StartPopUp.module.css';

const StartPopUp = () => {
	const [isOpen, setIsOpen] = useState(true);
	const handleStart = () => {
		setIsOpen(false); 
	};

	if (!isOpen) return null;

	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<h1>Välkommen!</h1>
				<p>Här kommer text om spelet, instruktioner osv.</p>
				Placeholder för knapp "Starta spel"
			</div>
		</div>
	);
}

export default StartPopUp;
