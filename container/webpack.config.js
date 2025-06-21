import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const config = {
    mode:'development',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',  
    },
    module:{
        rules: [
            {
              test: /\.(js|ts)x?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
          ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        port: 8000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            hash: true,
        }),
        new webpack.container.ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8001/remoteEntry.js',
                cart: 'cart@http://localhost:8002/remoteEntry.js',
            },
        }),
    ],

}

export default config;