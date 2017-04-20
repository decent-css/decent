var addElement = require('./util/add-element')

describe('position', () => {
  var div = addElement('div')

  it('should set relative position', function () {
    div.className = 'relative'
    expect(div.computedStyle.position).to.equal('relative')
  })

  it('should set absolute position', function () {
    div.className = 'absolute'
    expect(div.computedStyle.position).to.equal('absolute')
  })

  it('should set fixed position', function () {
    div.className = 'fixed'
    expect(div.computedStyle.position).to.equal('fixed')
  })

  it('should set top position', function () {
    div.className = 'absolute top-0'
    expect(div.computedStyle.top).to.equal('0px')
  })

  it('should set right position', function () {
    div.className = 'absolute right-50'
    expect(div.computedStyle.right).to.equal(window.innerWidth/2 + 'px')
  })

  it('should set bottom position', function () {
    div.className = 'absolute bottom-0'
    expect(div.computedStyle.bottom).to.equal('0px')
  })

  it('should set left position', function () {
    div.className = 'absolute left-100'
    expect(div.computedStyle.left).to.equal(window.innerWidth + 'px')
  })

  it('should set a negative z-index', function () {
    div.className = 'relative zn-1'
    expect(div.computedStyle.zIndex).to.equal('-1')
  })

  it('should set a position z-index', function () {
    div.className = 'relative z-1'
    expect(div.computedStyle.zIndex).to.equal('10')
  })

})

// Sources:
// 1. Basscss (https://github.com/basscss/basscss/blob/master/test/test.js)
