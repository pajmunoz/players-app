import React, {Component} from 'react';

class Form extends Component {
  render() {
    return(
      <form className="col-md-4">
        <div className="form-row">
          <div className='col'>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group">
              <label>Position</label>
              <select className="form-control">
                <option>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group">
              <label>Age</label>
              <input type="text" className="form-control" placeholder="Age"/>
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
    )
  }
}
export default Form;
