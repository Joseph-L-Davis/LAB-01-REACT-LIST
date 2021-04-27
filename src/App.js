import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import sauces from './sauces';
import SauceSearch from './SauceSearch';
import './App.css';

class App extends Component {

state = {
  sauces: sauces
}

  handleSearch = ({ nameFilter, sortField, locationFilter })=> {
    const nameRegex = new RegExp(nameFilter, 'i');
    const newSauces = sauces
      .filter(sauce => {
        return !nameFilter || sauce.name.match(nameRegex);
      })
      .filter(sauce => {
        return !locationFilter || sauce.location === locationFilter;
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] < b[sortField]) return 1;
        return 0;
      });
    this.setState({ sauces: newSauces });
  }

  render() {
    const { sauces } = this.state;
    return (
      <div className="App">
  
        <Header/>
        <main>
          <SauceSearch onSearch={ this.handleSearch }/>
        
          <List sauces = {sauces} />
        </main>
        <Footer/>
      
      </div>
    );
  }
}

export default App;
