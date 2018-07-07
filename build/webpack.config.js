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
            // publicPath:__dirname
        },
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: isDevelopment ? ['style-loader', 'css-loader?minimize'] : ExtractTextPlugin.extract({
                    use: ['css-loader']
                })
            },{
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.jpeg|bmp|jpg|png|tiff|gif$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: '1024' // 此处大小为字节大小，1kb为1024
                    }
                }, ]
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }]
        },
        plugins: isDevelopment ? [new VueLoaderPlugin()] : [
            new ExtractTextPlugin({
                filename: `[name]_[hash].css`,
            }),
            new VueLoaderPlugin()
        ],
        devServer: {
            port: 3000,
            open: true,
            compress: true
        }
    }
}