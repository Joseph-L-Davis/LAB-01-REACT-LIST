import React, { Component } from 'react';
import request from 'superagent';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import SauceSearch from './SauceSearch';
import './App.css';

class App extends Component {

state = {
  sauces: []
}

componentDidMount() {
  this.handleSearch({});
}

  handleSearch = async ({ nameFilter, sortField, locationFilter })=> {
    const nameRegex = new RegExp(nameFilter, 'i');
    const response = await request.get('https://hot-sauces-2.herokuapp.com/api/sauces');
    const newSauces = response.body
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
