module.exports = function (config) {
  config.set({
    browsers: [
      'Chrome'
    ],

    files: [
      './dist/decent.css',
      './test/index.js'
    ],

    frameworks: [ 'mocha', 'chai' ],

    preprocessors: {
      'test/*.js': [ 'webpack']
    },

    plugins: [
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-mocha-reporter',
    ],

    reporters: [ 'mocha' ],
    singleRun: true,

    webpack: {
      module: {
        loaders: [
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
          }
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      }
    }

  })
}
