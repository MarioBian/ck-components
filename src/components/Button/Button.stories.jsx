import React from 'react';
import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = {
  args: {
    title: 'Börja om',
    onClick: () => console.log('Storybook: klick!'),
  },
};

