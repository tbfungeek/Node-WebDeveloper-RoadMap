import { Component } from 'react';

export default class Id extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.match.params.id}</div>;
  }
}
