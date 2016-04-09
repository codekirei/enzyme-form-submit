import path from 'path'
import webpack from 'webpack'

const cwd = process.cwd()

export default {
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(cwd, 'src', 'app.jsx'),
  ],
  output: {
    path: path.join(cwd, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  devtool: 'cheap-module-eval-source-map',
  noInfo: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(cwd, 'src'),
        loader: 'babel',
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
