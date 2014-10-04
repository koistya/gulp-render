/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var SampleComponent = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.name}!</p>
    )
  }
});

module.exports = SampleComponent;
