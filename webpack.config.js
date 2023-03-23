const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    home: path.join(__dirname, "src","index.tsx"),
},

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js',
    //for running the app on client (routing purposes)
    publicPath: '/'
  },

  //for running the app on client (routing purposes)
  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },

      //another loader like ts
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ],
      },

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),

  ],

  resolve: {
    extensions: ['.js', '.json', '.wasm', '.ts', '.tsx'],
    fallback:{ /* "path": false ,
     "url": false,
     "util": false,
     "stream": false,
     "path": false,
     "querystring": false,
     "http": false,
     "crypto": false,
     "zlib": false,
     "fs":false,
     "net":false */
     }
  },
}