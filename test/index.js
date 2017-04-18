var context = require.context('.', true, /.+\.spec\.js$/)
context.keys().forEach(context)
module.exports = context

// Sources:
// 1. Basscss (https://github.com/basscss/basscss/blob/master/test/test.js)
