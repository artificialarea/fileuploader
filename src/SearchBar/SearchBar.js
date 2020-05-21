import React from 'react';
import './SearchBar.css';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';


export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchbBar__heading">
          <h1>File Uploader</h1>
        </div>
        <div className="SearchBar__controls">
          <SearchBox searchTerm={this.props.searchTerm}/>
          <FilterOptions filterOption={this.props.filterOption}/>
        </div>
      </div>
    );
  }
}