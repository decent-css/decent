var addElement = require('./util/add-element')

describe('float', () => {
  var div = addElement('div')

  it('should set float left', function () {
    div.className = 'f-left'
    expect(div.computedStyle.float).to.equal('left')
  })

  it('should set float right', function () {
    div.className = 'f-right'
    expect(div.computedStyle.float).to.equal('right')
  })

  it('should set float none', function () {
    div.className = 'f-none'
    expect(div.computedStyle.float).to.equal('none')
  })

})

// Sources:
// 1. Basscss (https://github.com/basscss/basscss/blob/master/test/test.js)
