var config = {
    entry: './main.js',
   output: {
      filename: 'bundle.js'
   },
    devServer: {
       port: 7777
    },
    module: {
        rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react', 'stage-0']
             }
          }
       ]
    }
 }
 module.exports = config;