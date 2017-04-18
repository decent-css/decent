var addElement = require('./util/add-element')

describe('flexbox', () => {
  var div = addElement('div')

  it('should set display flex', function () {
    div.className = 'flex'
    expect(div.computedStyle.display).to.equal('flex')
  })

  it('should set display inline-flex', function () {
    div.className = 'inline-flex'
    expect(div.computedStyle.display).to.equal('inline-flex')
  })

  it('should set flex direction column', function () {
    div.className = 'flex-column'
    expect(div.computedStyle.flexDirection).to.equal('column')
  })

  it('should set flex direction column reverse', function () {
    div.className = 'flex-column-reverse'
    expect(div.computedStyle.flexDirection).to.equal('column-reverse')
  })

  it('should set flex direction row', function () {
    div.className = 'flex-row'
    expect(div.computedStyle.flexDirection).to.equal('row')
  })

  it('should set flex direction row reverse', function () {
    div.className = 'flex-row-reverse'
    expect(div.computedStyle.flexDirection).to.equal('row-reverse')
  })

  it('should set flex wrap', function () {
    div.className = 'flex-wrap'
    expect(div.computedStyle.flexWrap).to.equal('wrap')
  })

  it('should set flex nowrap', function () {
    div.className = 'flex-nowrap'
    expect(div.computedStyle.flexWrap).to.equal('nowrap')
  })

  it('should set flex grow', function () {
    div.className = 'flex-grow'
    expect(div.computedStyle.flexGrow).to.equal('1')
  })

  it('should set flex grow 0', function () {
    div.className = 'flex-grow-0'
    expect(div.computedStyle.flexGrow).to.equal('0')
  })

  it('should set flex grow 1', function () {
    div.className = 'flex-grow-1'
    expect(div.computedStyle.flexGrow).to.equal('1')
  })

  it('should set flex grow 2', function () {
    div.className = 'flex-grow-2'
    expect(div.computedStyle.flexGrow).to.equal('2')
  })

  it('should set flex grow 3', function () {
    div.className = 'flex-grow-3'
    expect(div.computedStyle.flexGrow).to.equal('3')
  })

  it('should set flex shrink', function () {
    div.className = 'flex-shrink'
    expect(div.computedStyle.flexShrink).to.equal('1')
  })

  it('should set flex shrink 0', function () {
    div.className = 'flex-shrink-0'
    expect(div.computedStyle.flexShrink).to.equal('0')
  })

  it('should set flex shrink 1', function () {
    div.className = 'flex-shrink-1'
    expect(div.computedStyle.flexShrink).to.equal('1')
  })

  it('should set flex shrink 2', function () {
    div.className = 'flex-shrink-2'
    expect(div.computedStyle.flexShrink).to.equal('2')
  })

  it('should set flex shrink 3', function () {
    div.className = 'flex-shrink-3'
    expect(div.computedStyle.flexShrink).to.equal('3')
  })

  it('should set align-items flex-start', function () {
    div.className = 'items-start'
    expect(div.computedStyle.alignItems).to.equal('flex-start')
  })

  it('should set align-items flex-end', function () {
    div.className = 'items-end'
    expect(div.computedStyle.alignItems).to.equal('flex-end')
  })

  it('should set align-items center', function () {
    div.className = 'items-center'
    expect(div.computedStyle.alignItems).to.equal('center')
  })

  it('should set align-items baseline', function () {
    div.className = 'items-baseline'
    expect(div.computedStyle.alignItems).to.equal('baseline')
  })

  it('should set align-items stretch', function () {
    div.className = 'items-stretch'
    expect(div.computedStyle.alignItems).to.equal('stretch')
  })

  it('should set justify-content flex-start', function () {
    div.className = 'justify-start'
    expect(div.computedStyle.justifyContent).to.equal('flex-start')
  })

  it('should set justify-content flex-end', function () {
    div.className = 'justify-end'
    expect(div.computedStyle.justifyContent).to.equal('flex-end')
  })

  it('should set justify-content center', function () {
    div.className = 'justify-center'
    expect(div.computedStyle.justifyContent).to.equal('center')
  })

  it('should set justify-content space-between', function () {
    div.className = 'justify-between'
    expect(div.computedStyle.justifyContent).to.equal('space-between')
  })

  it('should set justify-content space-around', function () {
    div.className = 'justify-around'
    expect(div.computedStyle.justifyContent).to.equal('space-around')
  })

  it('should set align-self flex-start', function () {
    div.className = 'self-start'
    expect(div.computedStyle.alignSelf).to.equal('flex-start')
  })

  it('should set align-self flex-end', function () {
    div.className = 'self-end'
    expect(div.computedStyle.alignSelf).to.equal('flex-end')
  })

  it('should set align-self center', function () {
    div.className = 'self-center'
    expect(div.computedStyle.alignSelf).to.equal('center')
  })

  it('should set align-self baseline', function () {
    div.className = 'self-baseline'
    expect(div.computedStyle.alignSelf).to.equal('baseline')
  })

  it('should set align-self stretch', function () {
    div.className = 'self-stretch'
    expect(div.computedStyle.alignSelf).to.equal('stretch')
  })

  it('should set align-content flex-start', function () {
    div.className = 'content-start'
    expect(div.computedStyle.alignContent).to.equal('flex-start')
  })

  it('should set align-content flex-end', function () {
    div.className = 'content-end'
    expect(div.computedStyle.alignContent).to.equal('flex-end')
  })

  it('should set align-content center', function () {
    div.className = 'content-center'
    expect(div.computedStyle.alignContent).to.equal('center')
  })

  it('should set align-content space-between', function () {
    div.className = 'content-between'
    expect(div.computedStyle.alignContent).to.equal('space-between')
  })

  it('should set align-content space-around', function () {
    div.className = 'content-around'
    expect(div.computedStyle.alignContent).to.equal('space-around')
  })

  it('should set align-content space-around', function () {
    div.className = 'content-around'
    expect(div.computedStyle.alignContent).to.equal('space-around')
  })

  it('should set order 0', function () {
    div.className = 'flex-order-0'
    expect(div.computedStyle.order).to.equal('0')
  })

  it('should set order 1', function () {
    div.className = 'flex-order-1'
    expect(div.computedStyle.order).to.equal('1')
  })

  it('should set order 2', function () {
    div.className = 'flex-order-2'
    expect(div.computedStyle.order).to.equal('2')
  })

  it('should set order 3', function () {
    div.className = 'flex-order-3'
    expect(div.computedStyle.order).to.equal('3')
  })

  it('should set order 4', function () {
    div.className = 'flex-order-4'
    expect(div.computedStyle.order).to.equal('4')
  })

})

// Sources:
// 1. Basscss (https://github.com/basscss/basscss/blob/master/test/test.js)
