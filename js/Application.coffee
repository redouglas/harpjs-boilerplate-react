React = require 'react'
rootDOM = 'body' # DOM id for Application to be inserted into

Application = React.createClass
  render: ->
    {div} = React.DOM

    div className: 'application', 'Hello World'


module.exports =
  init: ->
    React.render(React.createElement(Application, null), document.getElementById(rootDOM))
