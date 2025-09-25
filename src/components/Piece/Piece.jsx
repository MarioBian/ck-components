import React from 'react';
import styles from './Piece.module.css';

const Piece = () => 
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

export default Piece;

