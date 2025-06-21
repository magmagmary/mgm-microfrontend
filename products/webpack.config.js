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
        port: 8001,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            hash: true,
        }),
        new webpack.container.ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/index.ts',
            },
        })
    ],

}

export default config;