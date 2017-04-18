var addElement = require('./util/add-element')

describe('display', () => {
  var div = addElement('div')

  it('should set display block', function () {
    div.className = 'block'
    expect(div.computedStyle.display).to.equal('block')
  })

  it('should set display inline', function () {
    div.className = 'inline'
    expect(div.computedStyle.display).to.equal('inline')
  })

  it('should set display inline-block', function () {
    div.className = 'inline-block'
    expect(div.computedStyle.display).to.equal('inline-block')
  })

  it('should set overflow auto', function () {
    div.className = 'o-auto'
    expect(div.computedStyle.overflow).to.equal('auto')
  })

  it('should set overflow visible', function () {
    div.className = 'o-visible'
    expect(div.computedStyle.overflow).to.equal('visible')
  })

  it('should set overflow hidden', function () {
    div.className = 'o-hidden'
    expect(div.computedStyle.overflow).to.equal('hidden')
  })

})

// Sources:
// 1. Basscss (https://github.com/basscss/basscss/blob/master/test/test.js)
