var React = require('react');
var ReactDOM = require('react-dom');


var Picture = React.createClass({
  render: function() {
    return (
      <img src={this.props.picture} />
    )
  }
})

var Github = React.createClass({
  render: function() {
    return (
      <a href={'https://github.com/' + this.props.github} >
        NathanReginato
      </a>
    )
  }
})

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.username}</h1>
        <Picture picture={this.props.picture}/>
        <Github github={this.props.github}/>
      </div>
    )
  }
})


ReactDOM.render(<Avatar username="NathanReginato" picture="https://avatars3.githubusercontent.com/u/14594278?v=3&s=460" github="NathanReginato" />, document.getElementById('app'));
