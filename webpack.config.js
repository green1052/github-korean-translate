const CleanTerminalPlugin = require("clean-terminal-webpack-plugin");
const {version} = require("./package.json");
const WebpackUserscript = require("webpack-userscript");
const TerserPlugin = require("terser-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const headers = {
    author: "green1052",
    name: "github korean translate",
    namespace: "github-korean-translate",
    match: "http*://github.com/*",
    version,
    description: "깃허브 한글화 유저스크립트",
    "rut-at": "document-start",
    noframes: true,
    homepageURL: "https://github.com/green1052/github-korean-translate",
    supportURL: "https://github.com/green1052/github-korean-translate/issues"
};

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        filename: "github-korean-translate.user.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: /src/,
                use: {
                    loader: "swc-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    plugins: [
        new CleanTerminalPlugin({
            beforeCompile: true
        }),
        new WebpackUserscript({
            headers,
            metajs: false,
            pretty: false
        }),
        new ForkTsCheckerWebpackPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false
                    }
                },
                extractComments: false
            })
        ]
    }
};