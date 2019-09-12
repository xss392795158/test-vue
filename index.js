const express = require('express');
const app = express();
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config')
const compiler = webpack(config);

app.use('/static', express.static(__dirname + '/public'));
// app.set('engine', 'html');
app.engine('html', require('ejs').__express)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))
// app.get('*', (req, res) => {
//   let html = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');
//   res.send(html);
// });

app.listen(3001, () => {
  console.log('im on port 3001')
})