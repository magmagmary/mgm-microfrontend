
const config = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',  
    },
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
    resolve: {
        extensions: ['.tsx', '.ts', '.js' , '.jsx'],
    },
}

export default config;