import React, {Component} from 'react';

class Search extends Component {
  render() {
    return(
<div className="input-group input-group-lg pt-5">
  <div className="input-group-prepend">
    <span className="input-group-text">Search</span>
  </div>
  <input type="text" className="form-control"/>
</div>
    )
  }
}
export default Search;
