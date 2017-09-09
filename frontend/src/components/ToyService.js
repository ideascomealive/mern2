import axios from 'axios';

class ToyService {
	sendData(data) {
    axios.post('http://localhost:4200/toys/add/post', {
      toy: data
    })
    .then(res => this.setState({ toys: res.data }))
    .catch(err => console.log(err))
  }

  updateData(data, id){
    axios.post('http://localhost:4200/toys/update/'+id, {
      toy: data
    })
    .then(res => this.setState({ toys: res.data }))
    .catch(err => console.log(err))
  }

  deleteData(id){
    axios.get('http://localhost:4200/toys/delete/'+id)
    .then().catch(err => console.log(err))
  }
}
export default ToyService;