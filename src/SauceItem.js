import React, { Component } from 'react';
import './SauceItem.css';

class SauceItem extends Component {

  render() {
    const sauce = this.props.sauce;

    return (
        
      <li className='SauceItem'>
        <h2> {sauce.name} </h2>
      </li>
    );
  }
}

export default SauceItem;