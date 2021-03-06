const path = require("path");
module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(path.resolve(__dirname, './packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
    // 修改路径别名
    config.resolve.alias
      .set('@', path.resolve(__dirname, './examples'))
  },
  // 关闭eslint
  lintOnSave: false,
}
