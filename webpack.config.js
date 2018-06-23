var path = require('path');

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: './build/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
