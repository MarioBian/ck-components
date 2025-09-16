import "./GameBoard.module.css"

export const GameBoard = () => {
  
  const size = 16;

  const dots = [
  [4, 4],
  [4, 10],
  [4, 16],
  [10, 4],

  ];

  const isDot = (i, j) => dots.some(([x, y]) => x === i && y === j);

  return (
  <div>
    <table>
      <tbody>
        {Array.from({length: size - 1}, (_, i) => (
        <tr key={i}>
        {Array.from ({length: size - 1}, (_, j) => (
        <td key={j} className={isDot(i + 1, j + 1) ? "dot" : ""}></td>
        ))}
        </tr>
        ))}
      </tbody>
    </table>

  </div>
  )
}
