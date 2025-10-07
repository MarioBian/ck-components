import React from "react";
import styles from "./Piece.module.css";

const Piece = () => {
  return (
    <div className={styles.piecesContainer}>
      <div
        className={styles.blackPiece}
        draggable
        onDragStart={(e) => e.dataTransfer.setData("piece", "black")}
      ></div>
      <div
        className={styles.whitePiece}
        draggable
        onDragStart={(e) => e.dataTransfer.setData("piece", "white")}
      ></div>
    </div>
  );
};
// const Piece = ({ color }) => {
//   if (color === "white") {
//     return (
//       <div
//         className={styles.whitePiece}
//         draggable
//         onDragStart={(e) => e.dataTransfer.setData("piece", "white")}
//       >
//       </div>
//     );
//   } else if (color === "black") {
//     return (
//       <div
//         className={styles.blackPiece}
//         draggable
//         onDragStart={(e) => e.dataTransfer.setData("piece", "black")}
//       >
//       </div>
//     );
//   }
//   return null;
// };

export default Piece;
