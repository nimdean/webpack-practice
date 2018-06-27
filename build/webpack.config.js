const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = (env = {}, argv) => {
    const isDevelopment = env['development'];
    return {
        entry: './src/main.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../dist'),
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: isDevelopment ? ['style-loader', 'css-loader?minimize'] : ExtractTextPlugin.extract({ use: ['css-loader'] })
            }]
        },
        plugins: isDevelopment ? [] : [
            new ExtractTextPlugin({
                filename: `[name]_[hash].css`,
            }),
        ]
    }
}