import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';


export default class App extends React.Component {
  render() {
    return (
      <main className="App">
        <SearchBar />
        <FilterableList files={this.props.files} />
      </main>
    );
  }
}