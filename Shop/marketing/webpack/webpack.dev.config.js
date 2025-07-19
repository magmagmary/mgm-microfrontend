import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import commonConfig from './webpack.common.config.js';
import webpack from 'webpack';
import packageJson from '../package.json' with { type: 'json' };

const config ={
    mode:'development',
    devServer: {
        port: 8001,
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
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap.tsx',
            },
            shared: packageJson.dependencies,
        }),
    ],
};

export default merge(commonConfig, config);