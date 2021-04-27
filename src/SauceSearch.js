import { Component } from 'react';
import './SauceSearch.css';

export default class SauceSearch extends Component {
  
    state = { nameFilter: '', sortField: '', locationFilter: '' }

    handleNameFilter = ({ target }) => {
      this.setState({ nameFilter: target.value });
    }

    handleLocationFilter = ({ target }) => {
      this.setState({ locationFilter: target.value });
    }

    handleSortField = ({ target }) => {
      this.setState({ sortField: target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSearch(this.state);
    }

    render() {
      const { nameFilter, sortField, locationFilter } = this.state;

      return (
        <form className="SauceSearch" onSubmit={this.handleSubmit}> 
          
          <input name='nameFilter'
            value={nameFilter}
            onChange={ this.handleNameFilter }
          />

          <select name='sortField' 
            value={sortField}
            onChange={ this.handleSortField }>

            <option value=''>Sort By...</option>
            <option value='name'>By Name</option>
            <option value='location'>By Region</option>

          </select>

          <button>Search</button>
        </form>
      );
    }

}