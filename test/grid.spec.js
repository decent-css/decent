var addElement = require('./util/add-element')

describe('grid', () => {
  var div = addElement('div')

  it('should create a container class', function () {
    div.className = 'container'
    expect(div.computedStyle.maxWidth).to.exist
  })

  it('should set a col width', function () {
    div.className = 'col-1'
    expect(div.computedStyle.width).to.exist
  })

})

// Sources:
// 1. Basscss (https://github.com/basscss/basscss/blob/master/test/test.js)
