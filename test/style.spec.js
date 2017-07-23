var addElement = require('./util/add-element')

describe('style', () => {
  var div = addElement('div')

  it('should set a border', function () {
    div.className = 'b-1'
    expect(div.computedStyle.borderWidth).to.equal('1px')
  })

})