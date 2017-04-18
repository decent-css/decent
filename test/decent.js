var fs = require('fs')
var path = require('path')
var assert = require('assert')
var cssstats = require('cssstats')

var src = fs.readFileSync(path.join(__dirname, '../dist/decent.css'), 'utf8')
var stats

describe('decent', function () {

  it('should be css', function () {
    assert.doesNotThrow(function() {
      stats = cssstats(src, { safe: false })
    })
  })

  it('should have rules', function() {
    assert(stats.rules.total > 0)
  })

  it('should have rules', function() {
    assert(stats.rules.total > 0)
  })

  it('should have declarations', function() {
    assert(stats.declarations.total > 0)
  })

  it('should have properties', function() {
    assert(Object.keys(stats.declarations.properties).length > 0)
  })

})

// Sources:
// 1. Basscss (https://github.com/basscss/basscss/blob/master/test/test.js)
