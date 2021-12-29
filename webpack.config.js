const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

conf = {
    project: {
        name: 'project'
    },
    path: {
        src: 'src',
        dist: 'dist'
    }
};

module.exports = {
    entry: path.resolve(__dirname, conf.path.src) + '/index.js',
    mode: 'production',
    devServer: {
        compress: false,
        port: 9000,
        liveReload: true,
        hot: false
    },
    output: {
        path: path.resolve(__dirname, conf.path.dist), // output directory
        filename: conf.project.name + ".js" // name of the generated bundle
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader", "sass-loader"]
            }
        ],
    },
    plugins: [
        /** Inject JS in HTML single page */
        new HtmlWebpackPlugin({
            template: conf.path.src + "/index.html",
            inject: "body",
            scriptLoading: 'blocking'
        }),
        new LiveReloadPlugin({
            appendScriptTag: true
        })
    ],
}