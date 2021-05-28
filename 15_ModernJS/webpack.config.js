const path = require('path');

module.export = {
        mode: 'development',
        entry: './src/index.js', //relative path
        output: {
                path: path.resolve(__dirname, 'dist/assets/'),//Absolute path
                filename: 'bundle.js'
        }
};