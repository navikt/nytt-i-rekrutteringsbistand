const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const prefixer = require('postcss-prefix-selector');

module.exports = {
    mode: 'production',
    entry: './src/nytt/Nytt.tsx',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css']
    },

    output: {
        path: path.resolve(__dirname, 'lib'),
        publicPath: '/lib/',
        filename: 'Nytt.js',
        libraryTarget: 'commonjs2'
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                prefixer({
                                    prefix: '.nytt',
                                    exclude: ['.nytt']
                                })
                            ]
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'nytt.css'
        })
    ],

    externals: {
        react: 'react'
    }
};
