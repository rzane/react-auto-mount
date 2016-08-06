var render = require('react-dom').render;
var createElement = require('react').createElement;

function mountComponent (element, components) {
  var name = element.getAttribute('data-component');
  var props = JSON.parse(element.getAttribute('data-props') || '{}');

  if (!components[name]) {
    return console.error('Failed to mount "' + name + '". No such component.');
  }

  render(createElement(components[name], props), element);
};

module.exports = function reactAutoMount (components) {
  var elements = document.querySelectorAll('[data-component]');

  for (var i = 0, len = elements.length; i < len; i++) {
    mountComponent(elements[i], components);
  }
};
