import React, {Component} from 'react';

class Form extends Component {
  render() {
    return(
      <form className="pt-5">
        <div className="form-row">
          <div className='col-md-3'>
            <div className="form-group">
              <label for="inputEmail4">Name</label>
              <input type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group">
              <label for="inputState">Position</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group">
              <label for="inputEmail4">Age</label>
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
