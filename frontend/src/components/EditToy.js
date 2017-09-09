import React, { Component } from 'react';
import axios from 'axios';
import ToyService from './ToyService';

class EditToy extends Component {

  constructor(props) {
      super(props);
      this.addToyService = new ToyService();
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {toy: '' };
  }

  componentDidMount(){
    axios.get('http://localhost:4200/toys/edit/'+this.props.match.params.id)
    .then(response => {
      this.setState({ toy: response.data.toy});
      console.log('the state of toy', this.state.toy);
      console.log('the response.data', response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleChange(event) {
    this.setState({toy: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addToyService.updateData(this.state.toy,this.props.match.params.id);
    this.props.history.push('/index');
  }

  render() {
    return (
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <label>
                Edit Toy:
                <input type="text" value={this.state.toy} onChange={this.handleChange}  className="form-control"/>
              </label><br/>
              <input type="submit" value="Update" className="btn btn-primary"/>
            </form>
        </div>
    );
  }
}

export default EditToy;
