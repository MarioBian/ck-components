import React from "react";
import styles from "./WhitePiece.module.css";

const WhitePiece = () => {
  return (
    <div className={styles.piecesContainer}>
      <div
        className={styles.whitePiece}
        draggable
        onDragStart={(e) => e.dataTransfer.setData("piece", "White")}
      ></div>
    </div>
  );
};

export default WhitePiece;
