import React from 'react';
import { ResetBtn} from '.';

export default {
  title: 'Components/ResetBtn',
  component: ResetBtn,
};

export const Default = {
  args: {
    title: "",
    onClick: () => console.log('Storybook: klick!'),
  },
};

