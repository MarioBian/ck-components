import React from 'react';
import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = {
  args: {
    onClick: () => console.log('Storybook: klick!'),
  },
};

