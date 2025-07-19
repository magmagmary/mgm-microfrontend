
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
                    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    plugins: ['@babel/plugin-transform-runtime'],
                },
              },
              exclude: /node_modules/,
            },
          ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js' , '.jsx'],
    },
}

export default config;