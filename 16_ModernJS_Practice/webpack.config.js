const path = require('path');

module.exports = {
        entry: './src/before.js',
        output: {
                path: path.resolve(__dirname, 'dist/assets'),
                filename: 'bundle.js'
        },
        devServer: {
                contentBase: path.resolve(__dirname, 'dist'),
                publicPath: '/assets/'
        }
};