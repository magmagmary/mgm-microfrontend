import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.config.js';
import webpack from 'webpack';
import packageJson from '../package.json' with { type: 'json' };

const config ={
    mode:'production',  
    output: {
        filename: '[name].[contenthash].js',  
    },
    plugins: [
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