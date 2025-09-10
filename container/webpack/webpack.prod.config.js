import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.config.js';
import packageJson from '../package.json' with { type: 'json' };
import webpack from 'webpack';

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
                marketing: `marketing@${process.env.PRODUCTION_DOMAIN}/marketing/latest/remoteEntry.js`,
                auth: `auth@${process.env.PRODUCTION_DOMAIN}/auth/latest/remoteEntry.js`,
                dashboard: `dashboard@${process.env.PRODUCTION_DOMAIN}/dashboard/latest/remoteEntry.js`,
            },
            shared: packageJson.dependencies,
        }),
    ],
};

export default merge(commonConfig, config);