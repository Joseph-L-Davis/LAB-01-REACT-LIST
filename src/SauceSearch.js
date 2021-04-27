import { Component } from 'react';
import './SauceSearch.css';

export default class SauceSearch extends Component {
  
  render() {
    return (
      <form className="SauceSearch">

        <input/>

        <select>
          <option value='name'>By Name</option>
          <option value='location'>By Region</option>
        </select>

        <button>Search</button>
      </form>
    );
  }

}