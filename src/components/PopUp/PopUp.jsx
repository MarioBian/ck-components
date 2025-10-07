import { useState } from "react";
import styles from "./PopUp.module.css";
import PlayerColorSelector from "../Players/Players";

const PopUp = ({
  header = "Välkommen!",
  paragraph = "Gomoku är ett tvåspelarspel där svart och vit lägger varsin sten per drag på tomma skärningspunkter. Målet är att först få fem i rad – horisontellt, vertikalt eller diagonalt. Fylls brädet utan fem i rad blir det oavgjort.",
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleGameStart = (player1Color, player2Color) => {
    console.log("Game started with:", { player1Color, player2Color });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h1 className={styles.title}>{header}</h1>
        <p className={styles.text}>{paragraph}</p>
        <PlayerColorSelector onGameStart={handleGameStart} />
      </div>
    </div>
  );
};

export default PopUp;
