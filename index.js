var ReactDOM = require('react-dom');
var createElement = require('react').createElement;

function forEachDOMNode (callback) {
  var elements = document.querySelectorAll('[data-component]');

  for (var i = 0, len = elements.length; i < len; i++) {
    callback(elements[i]);
  }
}

function mountComponent (element, components) {
  var name = element.getAttribute('data-component');
  var props = JSON.parse(element.getAttribute('data-props') || '{}');

  if (!components[name]) {
    return console.error('Failed to mount "' + name + '". No such component.');
  }

  ReactDOM.render(createElement(components[name], props), element);
};

function unmountAll () {
  forEachDOMNode(function (element) {
    ReactDOM.unmountComponentAtNode(element);
  });
}

function reactAutoMount (components) {
  forEachDOMNode(function (element) {
    mountComponent(element, components);
  });
};

module.exports = reactAutoMount;
module.exports.mount = mountComponent;
module.exports.unmountAll = unmountAll;
