import React, { Component } from 'react';
import { List } from 'antd-mobile';

export default class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text, lists } = this.props.search;
    return (
      <div>
        <h1>{text}</h1>
        <List>
          {lists.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}
