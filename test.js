/*!
 * gulp-render | https://github.com/koistya/gulp-render
 *
 * Copyright (c) Konstantin Tarkus (@koistya).  See LICENSE.txt
 */

/* global require, Buffer, it */

'use strict';

var assert = require('assert');
var gutil = require('gulp-util');
var render = require('./');

it('Should render a React component', function(cb) {

  var stream = render();

  stream.on('data', function(file) {
    assert.fail('TODO: Add unit tests.');
  });

  stream.on('end', cb);

  stream.write(new gutil.File({
    path: 'SampleComponent.jsx',
    contents: new Buffer(
      '/** @jsx React.DOM */ ' +
      'var React = require("react"); ' +
      'var SampleComponent = require("./SampleComponent.jsx");' +
      'var HelloMessage = React.createClass({' +
      '  render: function() {return React.DOM.div(null, "Hello world!");}' +
      '}); '+
      'module.exports = HelloMessage;'
    )
  }));

});
