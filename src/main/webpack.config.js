const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, '../main/js'),
    entry: {
        index: './index.js',
        App: './App.js',
        RequestButton: './RequestButton.js',
        MyProfileApp: './MyProfileApp.js',
        MyProfile: './MyProfile.js',
        MyPage: './MyPage.js'
    },
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: 'webapp/resources/react/[name].bundle.js'
    },
    mode: 'none',
    module: {
        rules: [ {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-env', '@babel/preset-react' ]
                }
            }
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        } ]
    },
    resolve: {
    extensions: ['*', '.js', '.jsx']
    },

};