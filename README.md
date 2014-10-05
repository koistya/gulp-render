# [gulp](http://gulpjs.com)-render &nbsp; [![Build Status](http://img.shields.io/travis/koistya/gulp-render/master.svg?style=flat)](http://travis-ci.org/koistya/gulp-render) [![Dependency Status](https://david-dm.org/koistya/gulp-render.svg?style=flat)](https://david-dm.org/koistya/gulp-render) [![Tips](http://img.shields.io/gratipay/koistya.svg?style=flat)](https://gratipay.com/koistya) [![Gitter](http://img.shields.io/badge/chat-online-brightgreen.svg?style=flat)](https://gitter.im/kriasoft/react-starter-kit)

> Pre-render [React](https://facebook.github.io/react/) components at compile time.

[![NPM](https://nodei.co/npm/gulp-render.png?compact=true)](https://www.npmjs.org/package/gulp-render)

## How to Install

```sh
$ npm install gulp-render --save-dev
```

## How to Use

#### Example 1:
```js
var gulp = require('gulp');
var render = require('gulp-render');

gulp.task('default', function() {
  return gulp.src('src/pages/**/*.jsx')
    .pipe(render({template: 'src/index.html'}))
    .pipe(gulp.dest('build'));
});
```

#### Example 2:
```js
var gulp = require('gulp');
var render = require('gulp-render');

gulp.task('default', function() {
  return gulp.src('src/pages/**/*.jsx')
    .pipe(render({
      template:
        '<!doctype html>' +
        '<html><head><title><%=title%></title></head>' +
        '<body><%=body%></body></html>',
      harmony: false
    }))
    .pipe(gulp.dest('build'));
});
```

#### Sampe React Component (`src/pages/SomePage.jsx`)
```jsx
/**
 * @jsx React.DOM
 */

var React = require('react');

var SomePage = React.createClass({
  getDefaultProps() {
    return {
      title: 'Some Page'
    }
  },
  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        <p>This is a demo page.</p>
      </div>
    );
  }
});

module.exports = SomePage;
```

## API

#### `render(options)`

option | values | default
-------|--------|---------
`template` | [Lo-Dash template](http://lodash.com/docs#template) string or filename | `null`
`harmony` | `true`: enable ES6 features | `true`
`hyphenate` | `true`: AboutUs.jsx -> about-us.html | `true`

## Related Projects

[React.js Starter Kit](https://github.com/kriasoft/react-starter-kit)

## License

The MIT License (MIT) @ Konstantin Tarkus ([@koistya](https://twitter.com/koistya))
