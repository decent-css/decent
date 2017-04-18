var addElement = function (el, parent) {
  var $el = document.createElement(el)
  parent = parent || document.body
  parent.appendChild($el)
  $el.computedStyle = window.getComputedStyle($el)
  return $el
}

module.exports = addElement

// Sources:
// 1. Basscss (https://github.com/basscss/basscss/blob/master/test/test.js)
