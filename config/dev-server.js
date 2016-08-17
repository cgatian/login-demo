var express = require('express');
var path = require('path');
var webpack = require('webpack')
var webpackMerge = require('webpack-merge');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');

var config = require('./webpack.config');

config = webpackMerge(config, {
    entry: [
        'webpack-hot-middleware/client?reload=true'
    ],
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});


var compiler = webpack(config);

var dashboard = new Dashboard();
const app = express();
compiler.apply(new DashboardPlugin(dashboard.setData));


app.use(require('webpack-dev-middleware')(compiler, {
  quiet: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler, {
  log: () => {}
}));



app.listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
  }
});