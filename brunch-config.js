module.exports = {
  paths: {
    watched: ['assets', 'modules']
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
