const path = require('path')

module.exports = [{
  test: /\.svg$/,
  include: [
      path.resolve(__dirname, "src/components")
  ],
  use: ['@svgr/webpack']
}]
