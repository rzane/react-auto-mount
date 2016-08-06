var React = require('react');
var reactAutoMount = require('../index');
var div = React.createFactory('div');

function HelloWorld (props) {
  return div({ id: 'foo' }, 'Hello ' + props.name);
}

function insertMarker (componentName, props) {
  var marker = document.createElement('div');
  marker.setAttribute('data-component', componentName);
  marker.setAttribute('data-props', JSON.stringify(props));
  document.body.appendChild(marker);
  return marker;
}

describe('react-auto-mount', () => {
  beforeEach(function () {
    Array.prototype.forEach.call(document.body.children, (el) =>
      document.body.removeChild(el)
    );
  });

  it('mounts a react component', () => {
    insertMarker('HelloWorld', { name: 'Ray' });
    reactAutoMount({ HelloWorld: HelloWorld });
    expect(document.getElementById('foo')).to.exist;
  });

  it('passes props to the component', () => {
    insertMarker('HelloWorld', { name: 'Ray' });
    reactAutoMount({ HelloWorld: HelloWorld });

    var mounted = document.getElementById('foo');
    expect(mounted.textContent).to.eql('Hello Ray');
  });
});
