import React from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

export default class FilterableList extends React.Component {
  render() {
    const { searchTerm, filterOption } = this.props;
    const list = this.props.files
      .filter(file => 
        file.name.toLowerCase().includes(searchTerm.toLowerCase()) 
        && (filterOption === 'All' || file.status === filterOption)
      )
      .map((file, index) => 
        // use spread operator {...file} 
        // to pass all the file props without having to write them out explicitly
        <ListItem {...file} key={index}/>
      )
    console.log(list)
    return (
      <div className="FilterableList">
        {list}
      </div>
    );
  }
}

FilterableList.defaultProps = {
  files: []
}
