import styles from "./GameBoard.module.css";

export const GameBoard = () => {
  
  const size = 17;

  const dots = [
    [4, 4],
    [4, 9],
    [4, 14],
    [9, 4],
    [9, 9],
    [9, 14],
    [14, 4],
    [14, 9],
    [14, 14],
  ];

  const isDot = (i, j) => dots.some(([x, y]) => x === i && y === j);

  return (
  <div>
    <table>
      <tbody>
        {Array.from({length: size - 1}, (_, i) => (
        <tr key={i}>
        {Array.from ({length: size - 1}, (_, j) => (
        <td key={j} className={isDot(i + 1, j + 1) ? styles.dot : ""}></td>
        ))}
        </tr>
        ))}
      </tbody>
    </table>

  </div>
  )
}

export default GameBoard;
