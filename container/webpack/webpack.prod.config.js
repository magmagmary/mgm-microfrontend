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
        new webpack.DefinePlugin({
            'process.env.PRODUCTION_DOMAIN': JSON.stringify(process.env.PRODUCTION_DOMAIN),
        }),
        new webpack.container.ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@https://d1pxtahmghngvr.cloudfront.net/marketing/latest/remoteEntry.js`,
            },
            shared: packageJson.dependencies,
        }),
    ],
};

export default merge(commonConfig, config);