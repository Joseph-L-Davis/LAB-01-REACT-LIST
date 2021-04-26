import React, { Component } from 'react';
import './SauceItem.css';

class SauceItem extends Component {

  render() {

    return (
      <li className='SauceItem'>
        <h2>Aardvark</h2>
        <img src="Assets/aardvark.jpg" alt='Aardvark'/>
        <p className='scoville'>Scoville: 5,000</p>
        <p className='location'>Oregon</p>
      </li>

    );
  }
}

export default SauceItem;