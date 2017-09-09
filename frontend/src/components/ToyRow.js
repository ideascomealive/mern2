import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ToyService from './ToyService';

class ToyRow extends Component {
	constructor(props) {
      super(props);
      this.addToyService = new ToyService();
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addToyService.deleteData(this.props.obj._id);
  }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.toy}
          </td>
          <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
          <td>
            <form onSubmit={this.handleSubmit}>
              <input type="submit" value="Delete" className="btn btn-danger"/>
            </form>
          </td>
        </tr>
    );
  }

}
export default ToyRow;