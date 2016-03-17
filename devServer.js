const express = require('express');
const webpack = require('webpack');
const jsonServer = require('json-server');
const historyApiFallback = require('connect-history-api-fallback');
const webpackDevMiddle = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.dev');

const PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use('/api', jsonServer.router('./src/api/mock/db.json'));

app.use(webpackDevMiddle(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
}));

app.use(webpackHotMiddleware(compiler));

// Allow HTML5 mode routing, MUST be last.
app.use(historyApiFallback({
  verbose: false,
}));

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Listening on port ${PORT}`);
});

