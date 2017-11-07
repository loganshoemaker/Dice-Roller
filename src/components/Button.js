import React from 'react';
export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className={this.props.class} onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    )
  }
}
