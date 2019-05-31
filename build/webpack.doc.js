const path = require('path');
const config = require('./webpack.dev.js');

delete config.serve;

module.exports = Object.assign(config, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: 'https://github.com/AshCodeWork/awa-ui/',// 地址有待确定
    filename: '[name].[hash:8].js',
    chunkFilename: 'async_[name].[chunkhash:8].js'
  }
});
