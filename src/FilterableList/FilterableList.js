import React from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

export default class FilterableList extends React.Component {
  render() {

    const list = this.props.files.map((file, index) => 
      <ListItem {...file} key={index}/>
    )

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

// files e.g.
// {
//   "fileType":"jpg",
//   "size":"4.3MB",
//   "name":"me on skis.jpg",
//   "status":"Synced"
// }