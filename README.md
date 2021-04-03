# React - Typescript Redwood Voice Recognition Todo (Incomplete)

A Voice Recognition To-do Web App, created with Typescript RedwoodJS, based on React. Web Speech API and GraphQL are used, including Jest Unit Testing and Travis CI.

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.

## Getting Started
- [RedwoodJs Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [RedwoodJs Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

Also must be GraphQL database synced with yours:

```terminal
yarn rw db up
```

Then, Fire it up:

```terminal
yarn rw dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`. 

### Highly recommended: StoryBook
[Storybook](https://github.com/storybookjs/storybook/) is an open source tool for developing UI components in isolation for React in this project. It makes building stunning UIs organized and efficient.

To start storybook:

```terminal
yarn rw storybook
```
