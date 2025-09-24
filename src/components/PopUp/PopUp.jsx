import { useState } from "react";
import styles from "./PopUp.module.css";
import Button from "../Button/Button";

const PopUp = ({ header = "Välkommen!", paragraph = "Få fem i rad" }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleStart = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h1>{header}</h1>
        <p>{paragraph}</p>
        <Button title="Starta spel" onClick={handleStart} />
      </div>
    </div>
  );
};

export default PopUp;
