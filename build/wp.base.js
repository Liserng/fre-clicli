const path = require('path')

module.exports = {
  mode: 'production',
  entry: './client/client-entry.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: 'http://localhost:2333/'
  },
  resolve: {
    alias: {
      component: path.resolve(__dirname, '../client/component'),
      common: path.resolve(__dirname, '../client/common'),
      api: path.resolve(__dirname, '../client/api'),
      base: path.resolve(__dirname, '../client/base'),
      store: path.resolve(__dirname, '../client/store')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['stage-1']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: true,
          extractCSS: true
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]

  }
}