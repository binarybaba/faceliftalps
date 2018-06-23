var path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'cheap-eval-source-map',
    context: __dirname,
    entry: './build/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [{
        enforce: 'pre',
        loader: 'eslint-loader',
        test: /\.js$/
      }, {
        loader: 'babel-loader',
        test: /\.js$/
      }]
    },
    devServer: {
        publicPath: '/dist/',
        filename: 'bundle.js',
        historyApiFallback: true,
        overlay: true
    }
};
