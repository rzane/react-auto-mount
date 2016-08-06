# React Auto Mount

A really tiny module to unobtrusively mount your components.

## Usage

Throw a div in your template with a `data-component` attribute.

```html
<div
  data-component='HelloWorld'
  data-props='{"name": "Ray"}'
/>
```

Then, invoke the `reactAutoMount`.

```javascript
import React from 'react';
import reactAutoMount from 'react-auto-mount';

const HelloWorld = ({ name }) => (
  <h1>{`Hello ${name}!`}</h1>
);

document.addEventListener('DOMContentLoaded', () => {
  reactAutoMount({ HelloWorld });
});
```
