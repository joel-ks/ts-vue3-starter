# ts-webpack-template

- [License](#license)
- [How to Use](#how-to-use)
- [Repository Structure](#repository-structure)
  - [`.vscode`](#vscode)
  - [`src`](#src)
  - [`webpack`](#webpack)
  - [`LICENSE` and `README.MD`](#license-and-readmemd)
  - [Git Configuration](#git-configuration)
  - [Build dependencies and artifacts](#build-dependencies-and-artifacts)
- [Build Pipeline](#build-pipeline)
  - [NPM](#npm)
  - [Webpack](#webpack-1)
  - [Babel](#babel)
- [Code Styles and Linting](#code-styles-and-linting)
  - [EditorConfig](#editorconfig)
  - [Prettier](#prettier)
  - [ESLint](#eslint)
- [NPM Scripts](#npm-scripts)
  - [`clean`](#clean)
  - [`purge`](#purge)
  - [`build`](#build)
  - [`build:dev`](#builddev)
  - [`build:prod`](#buildprod)
  - [`copyStatic`](#copystatic)
  - [`start`](#start)
  - [`lint`](#lint)
  - [`lint:fix`](#lintfix)
  - [TODO](#todo)

## License

BSD 2-Clause. See [LICENSE](/LICENSE) for details.

## How to Use

- Fork this repository or use as a template in Github <TODO: link>
- Checkout locally using `git clone`
- Install [Node.js 12.17.0](https://nodejs.org/) or (optionally) [install Nodist or nvm](#nodist-and-nvm)
- Run `npm install` to pull down the required dependencies
- Start coding :sunglasses:

## Repository Structure

The different directories and their contents are described here. Most of the files in the root directory are build and code style configurations and are described in the [Build Pipeline](#build-pipeline) and [Code Styles and Linting](#code-styles-and-linting) sections.

### `.vscode`

Contains some preconfigured settings and recommended extensions for getting started using VS Code.

### `src`

All source code is in here. See [the directory README](/src) for details.

### `webpack`

Contains Webpack build configuration files. See [Webpack](#webpack-1) for an overview of the build process or [the directory README](/webpack) for details.

### `LICENSE` and `README.MD`

`LICENSE` contains the terms under which this code is licensed.

`README.MD` is the file you are currently reading :wink:

### Git Configuration

These files are for configuring Git.

#### [`.gitignore`](https://git-scm.com/docs/gitignore)

Configures files that should never be tracked by Git, e.g. OS specific files, dependencies, build artifacts, (some) IDE configuration, etc.

#### [`.gitattributes`](https://git-scm.com/docs/gitattributes)

Configures file attributes for Git, e.g. how files should be handled or how file line endings should be normalized.

### Build dependencies and artifacts

These directories are created during the build and should not be checked in. They are explicitly ignored in the `.gitignore` file.

#### `dist`

Build output will be put in here.

#### `node_modules`

NPM dependencies for the build will be downloaded into here when `npm install` is run.

## Build Pipeline

The build pipeline is pretty typical for a modern JavaScript app. NPM is used for dependency management and defining build scripts. The actual transpiling and bundling is done with Webpack using the Babel loader. This also adds the capability for running a dev server with hot reloading of code. The tools are documented here.

### NPM

NPM is used for dependency management and running build scripts.

Note: dependencies are maintained as follows
- If the package should be bundled with the app it should be in `dependencies`, i.e. installed with `npm install <package>`
- If the package is used for building the app or assisting with development it should be in `devDependencies`, i.e. installed with `npm install --save-dev <package>`

#### Nodist and nvm

I've added optional support for version management of Node.js and NPM using [Nodist](https://github.com/nullivex/nodist) (for Windows) or [nvm](https://github.com/nvm-sh/nvm) (for macOS/Linux). These tools will ensure the required versions of Node.js and NPM are used.

### Webpack

Webpack is used, along with a range of plugins and loaders, to bundle the app. See [the Webpack README](webpack/README.MD) for more details.

### [Babel](https://babeljs.io/)

#### `babel-preset-env` and [Browserslist](https://github.com/browserslist/browserslist)

## Code Styles and Linting

The following tools are used for enforcing coding styles and linting code in order of precedence:

### [EditorConfig](https://editorconfig.org/)

General text editor settings. Configured in `.editorconfig`.

### [Prettier](https://prettier.io/)

JavaScript, HTML and CSS specific code styles. Configured in `.prettierrc`.

### [ESLint](https://eslint.org/)

Code [linting](https://stackoverflow.com/a/8503586) for JavaScript. Can find common coding errors and enforces a coding style. Configured to work alongside Prettier. ESLint can also auto-fix many of the issues it finds (see [`npm lint`](#lint) and [`npm lint:fix`](#lintfix) npm scripts). The base configuration is in `.eslintrc` and currently uses the recommended default settings as well as checking the code styles configured through [Prettier](#prettier) (using a plugin).

## NPM Scripts

These scripts are predefined in the `package.json` file to get you started. They can be run with `npm run <script> [-- <options>]`

### `clean`

Removes the `dist` directory to ensure the next build is run from a clean state.

### `purge`

Runs clean and also removes `node_modules` (so you will have to run `npm install`) again afterwards.

### `build`

Alias for [`build:prod`](#buildprod).

### `build:dev`

Bundle JavaScript modules in development mode and output to the `/dist` directory. Also puts the static files there by running [`copyStatic`](#copystatic). See [Webpack](#webpack) for more details.

### `build:prod`

<Desc> Also puts the static files there by running [`copyStatic`](#copystatic). See [Webpack](#webpack) for more details.

### `copyStatic`

Copy static site files (e.g. html and main css files). Called by `build:dev` and `build:prod`.

### `start`

Start a webpack dev server to serve the application. See [Webpack](#webpack) for more details.

### `lint`

Run ESLint and output linting errors. See [ESLint](#eslint) for more details.

### `lint:fix`

Run ESLint and fix all auto-fixable errors. See [ESLint](#eslint) for more details.

### TODO

- Update docs for TypeScript
