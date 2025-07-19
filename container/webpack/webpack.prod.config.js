import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.config.js';
import packageJson from '../package.json' with { type: 'json' };
import webpack from 'webpack';

const domain = process.env.PRODUCTION_DOMAIN;

const config ={
    mode:'production',
    output: {
        filename: '[name].[contenthash].js',  
        publicPath: '/container/latest/'
    },
    plugins: [
        new webpack.container.ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
            },
            shared: packageJson.dependencies,
        }),
    ],
};

export default merge(commonConfig, config);