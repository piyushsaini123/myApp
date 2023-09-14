const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [

    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: true,
    }),

    new HtmlWebpackPlugin({
        template: "./public/index.html",
        inject: true,
    }),
],

  module: {
    rules: [
        /**
         * JS Loader. Run all JS files though babel.
         */
        {
            test: /\.(js|jsx)$/, // .js and .jsx files
            exclude: /node_modules/, // excluding the node_modules folder
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/env",
                        ["@babel/preset-react", { runtime: "automatic" }],
                    ],
                },
            },
        },
        {
            test: /\.(sa|sc|c)ss$/, // styles files
            use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
            loader: "url-loader",
            options: { limit: false },
        },
    ],
},
};