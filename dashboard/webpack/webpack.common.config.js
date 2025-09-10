import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';

const config = {
    entry: './src/index.ts',
    output: {
        filename: '[name].[contenthash].js',
    },
    module:{
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
              test: /\.(js|ts)x?$/,
              use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env', 
                        '@babel/preset-typescript'
                    ],
                    plugins: ['@babel/plugin-transform-runtime'],
                },
              },
              exclude: /node_modules/,
            },
            {
              test: /\.css$/,
              use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|eot|ttf)$/i,
                type: 'asset/resource',
            },
          ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            hash: true,
        }),
        new VueLoaderPlugin(),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js' , '.jsx' , '.vue'],
    },
}

export default config;