var addElement = require('./util/add-element')

describe('style', () => {
  var div = addElement('div')

  // Default Borders
  it('should set a border', function () {
    div.className = 'b'
    expect(div.computedStyle.border).to.equal('1px solid rgb(213, 213, 215)')
  })

  it('should set a top border', function () {
    div.className = 'bt'
    expect(div.computedStyle.borderTop).to.equal('1px solid rgb(213, 213, 215)')
    expect(div.computedStyle.borderRight).to.equal('0px none rgb(0, 0, 0)')
    expect(div.computedStyle.borderBottom).to.equal('0px none rgb(0, 0, 0)')
    expect(div.computedStyle.borderLeft).to.equal('0px none rgb(0, 0, 0)')
  })

  // Gray Borders
  it('should set a border with greyscale key', function () {
    div.className = 'b-2'
    expect(div.computedStyle.border).to.equal('1px solid rgb(59, 59, 63)')
  })

  // Color Borders
  it('should set a border with default color key', function () {
    div.className = 'b-primary'
    expect(div.computedStyle.border).to.equal('1px solid rgb(13, 13, 242)')
  })

  it('should set a border with alt color key', function () {
    div.className = 'b-secondary-alt'
    expect(div.computedStyle.border).to.equal('1px solid rgb(219, 99, 0)')
  })

  // Border Radius
  it('should set a border radius', function () {
    div.className = 'radius'
    expect(div.computedStyle.borderRadius).to.equal('2px')
  })

  it('should set a border radius with a key', function () {
    div.className = 'radius-1'
    expect(div.computedStyle.borderRadius).to.equal('4px')
  })

  // Shadows
  it('should set a shadow', function () {
    div.className = 'shadow'
    expect(div.computedStyle.boxShadow).to.equal('rgba(0, 0, 0, 0.1) 0px 1px 8px 0px')
  })

  it('should set a shadow with a key', function () {
    div.className = 'shadow-1'
    expect(div.computedStyle.boxShadow).to.equal('rgba(0, 0, 0, 0.1) 0px 2px 16px 0px')
  })


})

// Sources:
// 1. Basscss (https://github.com/basscss/basscss/blob/master/test/test.js)
