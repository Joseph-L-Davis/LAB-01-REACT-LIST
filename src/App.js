import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import sauces from './sauces';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
  
        <Header/>
        <main>
          <List sauces = {sauces}/>
        </main>
        <Footer/>
      
      </div>
    );
  }
}

export default App;
