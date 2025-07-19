import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
    entry: './src/index.ts',
    module:{
        rules: [
            {
              test: /\.(js|ts)x?$/,
              use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env', 
                        ['@babel/preset-react', {
                            runtime: 'automatic'
                        }], 
                        '@babel/preset-typescript'
                    ],
                    plugins: ['@babel/plugin-transform-runtime'],
                },
              },
              exclude: /node_modules/,
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
          ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            hash: true,
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js' , '.jsx'],
    },
}

export default config;