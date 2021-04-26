import React, { Component } from 'react';
import './SauceItem.css';

class SauceItem extends Component {

  render() {
    const sauce = this.props.sauce;

    return (
      <li className='SauceItem'>
        <h2>Aardvark</h2>
        <img url='Assets/aardvark.jpg' alt='Aardvark'/>
        <p className='scoville'>5,000</p>
        <p className='location'>Oregon</p>
      </li>
    );
  }
}

export default SauceItem;