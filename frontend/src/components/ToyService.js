import axios from 'axios';

class ToyService {
	sendData(data) {
		axios.post('http://localhost:4200/toys/add/post', { toy:data 
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}
}
export default ToyService;