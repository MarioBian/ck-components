import styles from './Points.module.css';
import Button from '../Button/Button';

const Points = ({ scoreP1 = 0, scoreP2 = 0 }) => {
  return (
    <div className={styles.pointsRoot}>
      <div className={styles.pointsCard}>
        <div className={styles.pointsHeader}>
          <div className={styles.pointsTitle}>Poäng</div>
          <Button title="Nollställ" />
        </div> {/* Lägg till handleStart vid senare tillfälle. */}


        <div className={styles.playerRow}>
          <span className={`${styles.piece} ${styles.black}`} aria-hidden="true"></span>
          <div className={styles.playerMeta}>
            <span className={styles.playerName}>Spelare 1</span>
            <span className={styles.playerHint}>Svart</span>
          </div>
          <div className={styles.score}>{scoreP1}</div>
        </div>

        <div className={styles.playerRow}>
          <span className={`${styles.piece} ${styles.white}`} aria-hidden="true"></span>
          <div className={styles.playerMeta}>
            <span className={styles.playerName}>Spelare 2</span>
            <span className={styles.playerHint}>Vit</span>
          </div>
          <div className={styles.score}>{scoreP2}</div>
        </div>
      </div>
    </div>
  );
};

export default Points;

