import React, { Component } from 'react';
import SauceItem from './SauceItem';
import './List.css';

class List extends Component {
  render() {
    const sauces = this.props.sauces;
    
    return (
      <ul>
        <SauceItem/>
      </ul>
    );
  }
}

export default List;