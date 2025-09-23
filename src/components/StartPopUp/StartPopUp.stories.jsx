import {StartPopUp} from '.';

export default {
	title: 'Components/StartPopUp',
	component: StartPopUp,
	args: {
		header: 'Välkommen!',
		paragraph: 'Få fem i rad',
	},
};

export const Default = (args) => <StartPopUp {...args} />;
