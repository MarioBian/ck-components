import React from "react";
import styles from "./Piece.module.css";

// const Piece = () => {
// return (
//  <div className={styles.piecesContainer}>
// <div
//   className={styles.bluePiece}
//   draggable
//   onDragStart={(e) => e.dataTransfer.setData("piece", "blue")}
//   >
//     blå
// </div>;

// <div
//   className={styles.redPiece}
//   draggable
//   onDragStart={(e) => e.dataTransfer.setData("piece", "red")}
//   >
//     Röd
// </div>;
// </div>
// )
// }
const Piece = ({ color }) => {
  if (color === "red") {
    return (
      <div
        className={styles.redPiece}
        draggable
        onDragStart={(e) => e.dataTransfer.setData("piece", "red")}
      >
        Röd
      </div>
    );
  } else if (color === "blue") {
    return (
      <div
        className={styles.bluePiece}
        draggable
        onDragStart={(e) => e.dataTransfer.setData("piece", "blue")}
      >
        Blå
      </div>
    );
  }
  return null;
};

export default Piece;
