import {React} from 'react';
import {FiveInaRow} from '.';

export default {
	
	title:'components/FiveInaRow',
	component: FiveInaRow,

}

export const Default = () => (
<FiveInaRow
    gameBoard={Array(10).fill(null).map(() => Array(10).fill(null))}
    lastMoveRow={0}
    lastMoveColumn={0}
    activePlayer="Red"
    onPlayerWin={(player) => console.log(player + " won!")}
  />
);

