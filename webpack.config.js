/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-13 14:37:53
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-13 15:26:35
 */
const path = require('path')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins:['transform-class-properties']
                }
            }
        }]
    },
    devtool: 'inline-source-map'
}