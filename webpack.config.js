const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "src", "index.tsx"),

  output: {
    path:path.resolve(__dirname, "dist"),
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

      //another loader like babel
      {
        test: /\.css$/i,
        use: ["style-loader","css-loader"],
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
    extensions: ['.js', '.json', '.wasm', '.ts', '.tsx']
  },
}