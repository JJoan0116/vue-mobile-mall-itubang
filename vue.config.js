// const proxy = require('http-proxy-middleware');

module.exports = {
  publicPath: '.',
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets'
      }
    }
  }
};
