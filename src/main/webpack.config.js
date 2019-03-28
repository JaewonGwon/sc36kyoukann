const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, '../main/js'),
    entry: {
        index: './index.js',
        App: './App.js',
        RequestButton: './RequestButton.js',
        Card_reco: './Card_reco.js',
        Card: './Card.js',
        data_reco: './data/data_reco.js',
        data: './data/data.js',
        custom: './InputTag/custom.js',
        CallLimiter: './ChipsSrc/CallLimiter.js',
        Chip: './ChipsSrc/Chip.js',
        Chips: './ChipsSrc/Chips.js',
        CustomChip: './ChipsSrc/CustomChip.js',
        theme: './ChipsSrc/theme.js'

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
                    presets: [ '@babel/preset-env', '@babel/preset-react',{
                          'plugins': ['@babel/plugin-proposal-class-properties']}]
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