require("webpack");
const path = require("path");

module.exports = {
    // File which is the entry point for the app. Webpack will walk the tree of all modules imported by this and bundle
    // them together into a single js file. This may then be split up into chunks by a different build step for
    // performance (currently this isn't happening but I may later add it to the prod config as an example).
    // NOTE: It is possible to specify multiple entry points to generate multiple bundles (e.g. for a multi-page app).
    // See https://webpack.js.org/concepts/entry-points/#object-syntax for details
    entry: "./src/app/index.ts",

    // Where to place the output bundle
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "app-bundle.js"
    },

    // Settings for how different types of modules will be treated by Webpack
    // https://webpack.js.org/configuration/module/
    module: {
        // Rules modify how modules are created.
        rules: [
            // Use babel-loader to process JavaScript files (except for those in node_modules - assuming they've
            // already been processed by Babel).
            {
                test: /\.[jt]s$/,
                exclude: /node_modules/,
                use: ["babel-loader", "ts-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
};
