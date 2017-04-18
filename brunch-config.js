module.exports = {
  paths: {
    watched: ['assets', 'modules'],
    public: 'dist'
  },
  files: {
    stylesheets: {
      joinTo: 'decent.css'
    },
    javascripts: {
      joinTo: 'initialize.js'
    }
  },
  plugins: {
    autoReload: {
      enabled: {
        css: true,
        assets: true
      }
    }
  }
}
