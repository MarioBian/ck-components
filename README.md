# Commit Kings - Components repository

This is the Components repository for a Gomoku game!

## Installation

If you don't have this repository lacally alredy, here is the steps you can follow to clone it.If you don’t already have this repository locally, here are the steps you can follow to clone it.

1. Go to your git bash

2. Make sure you're in the correct directory of where you want to clone the repo (repository)

3. git clone (URL)

4. go to main by doing this steps: cd ck-components

If you already have the repo locally:

1. Go to your git bash

2. Make sure you are in the right project ck-components and that you're standing in main

3. Use git pull, this will pull down all of the recent changes that are made, if there are any to you locally.

4. Use git status to make sure that you have pull everything correctly

## Usage guide

Simple guide of how to use this repo.

## Running the Application

1. Install dependencies

npm install

2. npm run storybook

3. A new window will popup with all of the components.

## Creating your own component

1. Create a new folder in the components folder and give it a name, example "Sample".

2. Scaffold Project
   Add these 5 files to your newly created folder:

```
touch ./src/components/Sample/index.js
touch ./src/components/Sample/Sample.jsx
touch ./src/components/Sample/Sample.module.css
touch ./src/components/Sample/Sample.styles.js
touch ./src/components/Sample/Sample.stories.jsx
```

3. Component content

```
Write this code example, or your own code.

> ./src/components/Sample/Sample.jsx

import React from 'react';

const Sample = () => {
    return(
        <>Sample</>
    );
}

export default Sample;
```

```
> ./src/components/Sample/Sample.stories.jsx <<

import {REACT} from 'react';
import {Sample} from '.';

export default {
    title: 'Components/Sample',
    component: Sample,
}

export const Default = {}

```

```
This is our barrel file
> ./src/components/Sample/index.js

export {default as Sample} from './Sample';

```

```
Add help bundler find file from components and src

> ./src/components/index.js <<
export {Sample} from './components/Sample';

> ./src/index.js <<
export {Sample} from './components';

```

## Try it out

```
npm run storybook
```

## Acknoledgments

- Thanks to all contributors

- Inspired by the classic Gomoku game
