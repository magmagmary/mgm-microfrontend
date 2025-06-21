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

}

export default config;