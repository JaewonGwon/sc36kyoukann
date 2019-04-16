const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, '../main/js'),
    entry: {
        index: './index.js',
        App: './App.js',
        RequestButton: './RequestButton.js',
        Card: './Card.js',
        custom: './InputTag/custom.js',
        CallLimiter: './ChipsSrc/CallLimiter.js',
        Chip: './ChipsSrc/Chip.js',
        Chips: './ChipsSrc/Chips.js',
        CustomChip: './ChipsSrc/CustomChip.js',
        theme: './ChipsSrc/theme.js',
        Modal_detail: './Modal_detail.js',
        MyPage : './MyPage.js',
        MyProfile : './MyProfile.js',
        MyProfileApp : './MyProfileApp.js',

        UserTasteApp : './UserTasteApp.js',
        UserTasteIndex : './UserTasteIndex.js',
        Carousel : './Carousel.js'

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