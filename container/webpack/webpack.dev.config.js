import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.config.js';
import webpack from 'webpack';
import packageJson from '../package.json' with { type: 'json' };

const config ={
    mode:'development',
    output: {
        publicPath: 'http://localhost:8000/',
    },
    devServer: {
        port: 8000,
        historyApiFallback: true,
        open: true,
    },
    plugins: [
        new webpack.container.ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8001/remoteEntry.js',
                auth: 'auth@http://localhost:8002/remoteEntry.js',
                dashboard: 'dashboard@http://localhost:8003/remoteEntry.js',
            },
            shared: packageJson.dependencies,
        }),
    ],
};

export default merge(commonConfig, config);