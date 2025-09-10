import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.config.js';
import webpack from 'webpack';
import packageJson from '../package.json' with { type: 'json' };

const config ={
    mode:'development',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: 'http://localhost:8003/',
    },
    devServer: {
        port: 8003,
        historyApiFallback: true, 
        open: true,
        headers:{
            'Access-Control-Allow-Origin': '*',
        }
    },
    plugins: [
        new webpack.container.ModuleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './DashboardApp': './src/bootstrap.tsx',
            },
            shared: packageJson.dependencies,
        }),
    ],
};

export default merge(commonConfig, config);