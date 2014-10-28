/*
 * gulp-render
 * https://github.com/koistya/gulp-render
 *
 * Copyright (c) 2014 Konstantin Tarkus
 * Licensed under the MIT license
 */

/* global require, Buffer, it */

'use strict';

var assert = require('assert');
var gutil = require('gulp-util');
var render = require('./');

it('Should render a simple React component', function(cb) {

  var stream = render();

  stream.on('data', function(file) {
    var contents = file.contents.toString('utf8');
    assert(contents.indexOf('Hello world!') != -1);
    cb();
  });

  stream.write(new gutil.File({
    path: 'SampleComponent.jsx',
    contents: new Buffer(
      'var React = require("./node_modules/react"); ' +
      'var SampleComponent = require("./SampleComponent.jsx");' +
      'var HelloMessage = React.createClass({' +
      '  render: function() {return React.DOM.div(null, "Hello world!");}' +
      '}); '+
      'module.exports = HelloMessage;'
    )
  }));

});

it('Should render a React component with a layout', function(cb) {

  var stream = render();

  stream.on('data', function(file) {
    var contents = file.contents.toString('utf8');
    assert(contents.indexOf('Layout') != -1);
    assert(contents.indexOf('Test') != -1);
    assert(contents.indexOf('Hello world!') != -1);
    cb();
  });

  stream.write(new gutil.File({
    path: 'SampleComponent.jsx',
    contents: new Buffer(
      'var React = require("./node_modules/react"); ' +
      'var SampleComponent = require("./SampleComponent.jsx");' +
      'var Layout = React.createClass({' +
      '  render: function() {return React.DOM.div(null, ["Layout", this.props.title, this.props.children]);}' +
      '}); '+
      'var HelloMessage = React.createClass({' +
      '  getDefaultProps() {' +
      '    return {' +
      '      "title": "Test",' +
      '      "layout": Layout' +
      '    }' +
      '  },' +
      '  render: function() {return React.DOM.div(null, "Hello world!");}' +
      '}); '+
      'module.exports = HelloMessage;'
    )
  }));

});
