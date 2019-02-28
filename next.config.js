const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports =
withCSS(withFonts({
  enableSvg: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://chuntley56.github.io/product-review-next/' : '',
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
}))
