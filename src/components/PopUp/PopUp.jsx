import { useState } from "react";
import styles from "./PopUp.module.css";
import Button from "../Button/Button";

const PopUp = ({
  header = "Välkommen!",
  paragraph = "Gomoku är ett tvåspelarspel där svart och vit lägger varsin sten per drag på tomma skärningspunkter. Målet är att först få fem i rad – horisontellt, vertikalt eller diagonalt. Fylls brädet utan fem i rad blir det oavgjort.",
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleStart = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h1 className={styles.title}>{header}</h1>
        <p className={styles.text}>{paragraph}</p>
        <Button title="Starta spel" onClick={handleStart} />
      </div>
    </div>
  );
};

export default PopUp;
