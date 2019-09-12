const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = { 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // path是webpack所有文件的输出的路径，必须是绝对路径   dist前无斜杠！！！！！！！！！
    publicPath: '/',  //设为CDN的值就可以了// 开发环境必须为‘/’
    // publicPath: '/assets/',
    filename: 'bundle[hash].js'
  },
  mode: 'development',
  // target: 'node',
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // 打包输出HTML
      title: 'Hello World app',
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true// 压缩内联css
      },
      filename: './index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      // inject: true
    }),
    new VueLoaderPlugin()
  ]
}