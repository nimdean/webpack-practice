const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env = {}, argv) => {
    const isDevelopment = env['development'];
    return {
        entry: './src/main.js', // 入口文件
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../dist'),
        },
        module: {
            rules: [
                {
                test: /\.css$/,
                use: isDevelopment ? ['style-loader', 'css-loader?minimize'] : ExtractTextPlugin.extract({ use: ['css-loader'] })
            },{
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
        },
        plugins: isDevelopment ? [new VueLoaderPlugin()] : [
            new ExtractTextPlugin({
                filename: `[name]_[hash].css`,
            }),
            new VueLoaderPlugin()
        ],
        devServer:{
            port:3000,
            open:true,
            compress:true
        }
    }
}