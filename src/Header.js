import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (

      <header className='Header'>
        <img
          className='logo'
          alt='guy fieri hot ones'
          src='Assets/guy.jpeg'>   
        </img>

        <h1>Hot Sauce Sorter</h1>
      </header>
    );
  }
}

export default Header;