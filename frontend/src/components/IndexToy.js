import React, { Component } from 'react';
import ToyService from './ToyService';
import axios from 'axios';
import ToyRow from './ToyRow';

class IndexToy extends Component {
	constructor(props) {
		super(props);
		this.state = {value: '', toys: ''};
		this.addToyService = new ToyService();
	}
	componentDidMount() {
		axios.get('http://localhost:4200/toys')
		.then(response => {
			this.setState({ toys: response.data });
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	tRow() {
		if(this.state.toys instanceof Array) {
			return this.state.toys.map(function(object, i) {
				return <ToyRow obj={object} key={i} />;
			})
		}
	}

	render() {
		return (
				<div className="container">
					<table className="table table-striped">
						<thead>
							<tr>
								<td>No.</td>
								<td>Toy</td>
							</tr>
						</thead>
						<tbody>
							{this.tRow()}
						</tbody>
					</table>
				</div>
			);
	}

}
export default IndexToy;