# [gulp](http://gulpjs.com)-render &nbsp; [![Build Status](http://img.shields.io/travis/koistya/gulp-render/master.svg?style=flat)](http://travis-ci.org/koistya/gulp-render) [![Dependency Status](https://david-dm.org/koistya/gulp-render.svg?style=flat)](https://david-dm.org/koistya/gulp-render) [![Tips](http://img.shields.io/gratipay/koistya.svg?style=flat)](https://gratipay.com/koistya) [![Gitter](http://img.shields.io/badge/chat-online-brightgreen.svg?style=flat)](https://gitter.im/kriasoft/react-starter-kit)

> Pre-render [React](https://facebook.github.io/react/) components at compile time.

## How to Install

[![NPM](https://nodei.co/npm/gulp-render.png?compact=true)](https://www.npmjs.org/package/gulp-render)

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
    .pipe(render({template: 'src/pages/_template.html'}))
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

#### React Component Sample (`src/pages/SomePage.jsx`)

```jsx
var React = require('react');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');

var SomePage = React.createClass({
  getDefaultProps() {
    return {
      title: 'Some Page',
      layout: DefaultLayout
    }
  },
  render() {
    return (
      <div className="container">
        <h1>React Component Sample</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    );
  }
});

module.exports = SomePage;
```

## API

#### `render(options)`

option      | values                                                  | default
------------|---------------------------------------------------------|---------
`template`  | [Lo-Dash template](http://lodash.com/docs#template) string or filename | `null`
`harmony`   | `true`: enable ES6 features                             | `true`
`hyphenate` | `true`: SomePage.jsx -> some-page.html                  | `true`

## Related Projects

[React.js Starter Kit](https://github.com/kriasoft/react-starter-kit)

## License

The MIT License (MIT) @ Konstantin Tarkus ([@koistya](https://twitter.com/koistya))
