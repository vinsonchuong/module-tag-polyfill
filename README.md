# Module Tag Polyfill
[![Build Status](https://travis-ci.org/vinsonchuong/module-tag-polyfill.svg?branch=master)](https://travis-ci.org/vinsonchuong/module-tag-polyfill)

A polyfill for [`<script type="module">`](https://github.com/whatwg/html/pull/443)

## Installing
`module-tag-polyfill` is available as an
[npm package](https://www.npmjs.com/package/module-tag-polyfill).

## Usage
The `module-tag-polyfill` should be imported early either:

In a JavaScript entry point.
```js
import 'module-tag-polyfill'
```

Or in each HTML file of a [jspm](http://jspm.io) project.
```html
<script>
  System.import('module-tag-polyfill')
</script>
```

Once loaded, the polyfill will listen for the `DOMContentLoaded` event and if
the [Web Components Polyfill](https://github.com/webcomponents/webcomponentsjs)
is also loaded, the `WebComponentsReady` event. The polyfill will then find all
`<script type="module">` tags and evaluate them using
[SystemJS](https://github.com/systemjs/systemjs).

## Development
### Getting Started
The application requires the following external dependencies:
* Node.js

The rest of the dependencies are handled through:
```bash
npm install
```

Run tests with:
```bash
npm test
```
