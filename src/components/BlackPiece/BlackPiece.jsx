import React from "react";
import styles from "./BlackPiece.module.css";

const BlackPiece = () => {
  return (
    <div className={styles.piecesContainer}>
      <div
        className={styles.blackPiece}
        draggable
        onDragStart={(e) => e.dataTransfer.setData("piece", "black")}
      ></div>
    </div>
  );
};

export default BlackPiece;
