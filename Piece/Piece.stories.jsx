import React from 'react';
import { Piece } from '.'; // läser ./index.js i samma mapp

export default {
  title: 'Components/Piece',
  component: Piece,
};

export const Default = {
  render: () => <Piece />,
};

