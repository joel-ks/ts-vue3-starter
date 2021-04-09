# Webpack Build Configurations

- [Overview](#overview)
- [Config Files](#config-files)
  - [`webpack.config.js`](#webpackconfigjs)
  - [`webpack.dev.js`](#webpackdevjs)
  - [`webpack.prod.js`](#webpackprodjs)
- [ESLint Configuration](#eslint-configuration)

## Overview

This template is set up to use [Webpack](https://webpack.js.org/) to build and bundle the JavaScript. Build configuration files are maintained in this directory.

## Config Files

Webpack is configured by scripts that will be run in Node during the build/ Details on the individual configurations are commented in the files.

### `webpack.config.js`

Contains all the configuration that should be the same for dev and prod builds. This includes the app entry point, bundle output details, and module loader and bundler settings. These settings are merged with the dev and prod build configurations using `webpack-merge`.

### `webpack.dev.js`

Contains the configuration specific to dev builds. Currently this is generating source maps and configuring `webpack-dev-server`. Hot reloading is enabled in the dev server so changes made to files in `src/app` will immediately be reflected in the live instance.

### `webpack.prod.js`

Contains the configuration specific to prod builds. Currently this is just using Terser to minify and obfuscate the bundled script.

## ESLint Configuration

Configures ESLint for Node scripts. (For more details on ESLint see [the top level README](../README.md#eslint))
