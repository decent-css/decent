var addElement = require('./util/add-element')

describe('length', () => {
  var div = addElement('div')

  it('should set a fixed width', function () {
    div.className = 'w-5'
    expect(div.computedStyle.width).to.equal(16*5 + 'px')
  })

  it('should set a fixed min width', function () {
    div.className = 'minw-5'
    expect(div.computedStyle.minWidth).to.equal(16*5 + 'px')
  })

  it('should set a fixed max width', function () {
    div.className = 'maxw-5'
    expect(div.computedStyle.maxWidth).to.equal(16*5 + 'px')
  })

  it('should set a percentage width', function () {
    div.className = 'wp-50'
    expect(div.computedStyle.width).to.equal(window.innerWidth/2 + 'px')
  })

  it('should set a percentage min width', function () {
    div.className = 'minwp-50'
    expect(div.computedStyle.minWidth).to.equal('50%')
  })

  it('should set a percentage max width', function () {
    div.className = 'maxwp-50'
    expect(div.computedStyle.maxWidth).to.equal('50%')
  })

  it('should set a fixed height', function () {
    div.className = 'h-5'
    expect(div.computedStyle.height).to.equal(16*5 + 'px')
  })

  it('should set a fixed min height', function () {
    div.className = 'minh-5'
    expect(div.computedStyle.minHeight).to.equal(16*5 + 'px')
  })

  it('should set a fixed max height', function () {
    div.className = 'maxh-5'
    expect(div.computedStyle.maxHeight).to.equal(16*5 + 'px')
  })

  it('should set a percentage height', function () {
    div.parentElement.style.height = '500px'
    div.className = 'hp-50'
    expect(div.computedStyle.height).to.equal('250px')
  })

  it('should set a percentage min height', function () {
    div.className = 'minhp-50'
    expect(div.computedStyle.minHeight).to.equal('50%')
  })

  it('should set a percentage max height', function () {
    div.className = 'maxhp-50'
    expect(div.computedStyle.maxHeight).to.equal('50%')
  })


})
