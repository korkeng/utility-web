# Setting up the environment

Install npm / node / yarn

- Download from https://www.npmjs.com/get-npm or https://classic.yarnpkg.com/en/

Install typescript via command

- `npm install typescript`

Install Prettier

- Search for 'Prettier - Code Formatter' in VSCode Extension or
  `ext install esbenp.prettier-vscode` by used quick open (Ctrl+P)
- Install plugin using `npm install prettier -D --save-exact` via Command prompt

Install Eslint

- `npm install eslint`

For webpack confiugre (this is local file, It doesn't push to remote because it was ruled in .gitignore)

- 1. Goto node_modules/react-scripts/config/webpack.config.js
- Search for `test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],` and add `esModule: false,` in the last options object
- Find `babelrc: false,` in `test: /\.(js|mjs|jsx|ts|tsx)$/,` topic then change it to `true`
- 2. Goto node_modules/react-scripts/scripts/utils/verifyTypeScriptSetup.js
- Find `paths: { value: undefined, reason: 'aliased imports are not supported' },` replace with `paths: { suggested: { 'src/*': ['src/*'] }, reason: 'aliased imports are not supported' },`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
