import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import commonConfig from './webpack.common.config.js';
import webpack from 'webpack';

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
        new webpack.container.ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8001/remoteEntry.js',
            },
            shared: ['react', 'react-dom'],
        }),
    ],
};

export default merge(commonConfig, config);