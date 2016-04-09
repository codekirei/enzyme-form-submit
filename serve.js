#! node_modules/.bin/babel-node

import path from 'path'
import webpack from 'webpack'
import config from './webpack.config'
import browserSync from 'browser-sync'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'

const bundler = webpack(config)
const server = browserSync.create('dev')
const baseDir = 'src'

const devMiddlewareInstance = devMiddleware(bundler, {
  publicPath: config.output.publicPath,
  noInfo: true,
})

devMiddlewareInstance.waitUntilValid(() =>
  server.init({
    open: false,
    files: [path.join(baseDir, 'index.html')],
    server: {
      baseDir,
      middleware: [
        devMiddlewareInstance,
        hotMiddleware(bundler),
      ],
    },
  })
)
