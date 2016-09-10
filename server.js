const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

if ( isDeveloping ) {
  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    hot: true,
    filename: 'bundle.js',
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
    });

  app.use(middleware);
  
  app.use(webpackHotMiddleware(compiler));
  
  app.use(express.static(__dirname + '/static'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './www/index.html'));
  });

}
else {

  app.use(express.static(__dirname + '/dist'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'www/index.html'));
  });
}


app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
