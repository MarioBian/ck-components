import React from "react";
import FiveInaRow from "./FiveInaRow";

export default {
  title: "Components/FiveInaRow",
  component: FiveInaRow,
};

export const Default = () => {
  return (
    <FiveInaRow
      gameBoard={Array(10)
        .fill(null)
        .map(() => Array(10).fill(null))}
      lastMoveRow={0}
      lastMoveColumn={0}
      activePlayer="Red"
      onPlayerWin={(player) => console.log(player + " won!")}
    />
  );
};
