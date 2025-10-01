import React from 'react';
import styles from './Piece.module.css';

const Piece = () => {
return (
 <div className={styles.piecesContainer}>
<div 
  className={styles.bluePiece}
  draggable
  onDragStart={(e) => e.dataTransfer.setData("piece", "blue")}
  >
    blå
</div>;

<div 
  className={styles.redPiece}
  draggable
  onDragStart={(e) => e.dataTransfer.setData("piece", "red")}
  >
    Röd
</div>;
</div>
)
}

export default Piece;

