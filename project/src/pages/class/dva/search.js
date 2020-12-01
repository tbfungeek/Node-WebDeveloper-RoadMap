import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = value => {
    this.setState({
      value,
    });
  };

  handleSubmit = () => {
    this.props.dispatch({
      type: 'search/getListAsync',
      payload: this.state.value,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          autoFocus
          values={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
