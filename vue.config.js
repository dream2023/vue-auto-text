const path = require('path')
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: isDevelopment ? '/' : '/vue-auto-text/',
  outputDir: path.resolve(__dirname, './docs/'),
  css: { extract: isDevelopment },
  configureWebpack: {
    entry: './documentation/main.js',
    output: {
      libraryExport: 'default'
    }
  }
}
