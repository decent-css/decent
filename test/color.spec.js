var addElement = require('./util/add-element')

describe('color', () => {
  var div = addElement('div')

  it('should set primary text color', function () {
    div.className = 'c-primary'
    expect(div.computedStyle.color).to.equal('rgb(13, 13, 242)')
  })

  it('should set primary alt text color', function () {
    div.className = 'c-primary-alt'
    expect(div.computedStyle.color).to.equal('rgb(10, 10, 194)')
  })

  it('should set primary alt 2 text color', function () {
    div.className = 'c-primary-alt-2'
    expect(div.computedStyle.color).to.equal('rgb(8, 8, 145)')
  })

  it('should set success text color', function () {
    div.className = 'c-success'
    expect(div.computedStyle.color).to.equal('rgb(13, 242, 20)')
  })

  it('should set success alt text color', function () {
    div.className = 'c-success-alt'
    expect(div.computedStyle.color).to.equal('rgb(10, 194, 16)')
  })

  it('should set primary background color', function () {
    div.className = 'cbg-primary'
    expect(div.computedStyle.backgroundColor).to.equal('rgb(13, 13, 242)')
  })

  it('should set primary alt background color', function () {
    div.className = 'cbg-primary-alt'
    expect(div.computedStyle.backgroundColor).to.equal('rgb(10, 10, 194)')
  })

  it('should set primary alt 2 background color', function () {
    div.className = 'cbg-primary-alt-2'
    expect(div.computedStyle.backgroundColor).to.equal('rgb(8, 8, 145)')
  })

  it('should set success background color', function () {
    div.className = 'cbg-success'
    expect(div.computedStyle.backgroundColor).to.equal('rgb(13, 242, 20)')
  })

  it('should set success alt background color', function () {
    div.className = 'cbg-success-alt'
    expect(div.computedStyle.backgroundColor).to.equal('rgb(10, 194, 16)')
  })

  it('should set black text', function () {
    div.className = 'cg-black'
    expect(div.computedStyle.color).to.equal('rgb(3, 3, 3)')
  })

  it('should set white text', function () {
    div.className = 'cg-white'
    expect(div.computedStyle.color).to.equal('rgb(252, 252, 252)')
  })

  it('should set text greys', function () {
    div.className = 'cg-5'
    expect(div.computedStyle.color).to.equal('rgb(125, 125, 130)')
  })

  it('should set black background', function () {
    div.className = 'cbgg-black'
    expect(div.computedStyle.backgroundColor).to.equal('rgb(3, 3, 3)')
  })

  it('should set white background', function () {
    div.className = 'cbgg-white'
    expect(div.computedStyle.backgroundColor).to.equal('rgb(252, 252, 252)')
  })

  it('should set background greys', function () {
    div.className = 'cbgg-5'
    expect(div.computedStyle.backgroundColor).to.equal('rgb(125, 125, 130)')
  })

})

// Sources:
// 1. Basscss (https://github.com/basscss/basscss/blob/master/test/test.js)
