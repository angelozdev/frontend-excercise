const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
   entry: './src/index.tsx',
   output: {
      publicPath: '/',
      filename: 'bundle.js',
      path: __dirname + '/dist'
   },
   devServer: {
      historyApiFallback: true
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
   },
   module: {
      rules: [
         {
            test: /\.(t|j)sx?$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: [
                     '@babel/preset-env',
                     '@babel/preset-typescript',
                     '@babel/preset-react'
                  ]
               }
            }
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: './public/index.html'
      }),
      new FaviconsWebpackPlugin({
         logo: './src/assets/icon.png',
         favicons: {
            appName: 'Frontend Exercise',
            appShortName: 'FronExer',
            display: 'standalone',
            appDescription: 'This a frontend exercise',
            scope: '/',
            start_url: '.',
            lang: 'es-Es'
         }
      }),
      new GenerateSW({
         navigateFallback: '/index.html',
         runtimeCaching: [
            {
               urlPattern: new RegExp('http://lorempixel.com/'),
               handler: 'CacheFirst',
               options: {
                  cacheName: 'images'
               }
            }
         ]
      })
   ]
}