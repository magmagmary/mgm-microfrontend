import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import commonConfig from './webpack.common.config.js';

const config ={
    mode:'development',
    devServer: {
        port: 8000,
        historyApiFallback: {
            index: 'index.html',
        },
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            hash: true,
        }),
    ],
};

export default merge(commonConfig, config);