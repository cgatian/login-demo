const HtmlWebpackPlugin = require('html-webpack-plugin');


const path = require('path');

const root = path.resolve(__dirname, '../');

module.exports = {
    context: path.resolve(root, './src'),
    entry: ["./app.js"],
    output: {
        path: path.resolve(root, '/dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {test : /\.css$/, loader : 'style-loader!css-loader'}
      ]  
    },
    plugins: [
        new HtmlWebpackPlugin({      
            template: './index.html'
        })
    ]
};