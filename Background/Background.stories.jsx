import {React} from 'react';
import Background from './Background';
import { GameBoard } from '../GameBoard';

export default {
	title: 'Components/Background',
	component: Background,
}

export const Default = () => (
  <div style={{ padding: 20, background: "#eee", minHeight: "100vh" }}>

<Background>
	<div>
		<GameBoard/>
	</div>
</Background>
</div>
);