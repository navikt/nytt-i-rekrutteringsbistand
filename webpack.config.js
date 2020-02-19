const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/nytt/NyttIRekrutteringsbistand.tsx',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css']
    },

    output: {
        path: path.resolve(__dirname, 'lib'),
        publicPath: '/lib/',
        filename: 'NyttIRekrutteringsbistand.js',
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
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
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
