import React, { Component } from 'react';
import axios from 'axios'
import { Link} from 'react-router-dom';


  const url = "http://localhost:3333/smurfs";
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = a => {
    a.preventDefault();

  axios
  .post(url, {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
    .then((response)=>{
      this.setState({smurfs: response.data})
    })
    .catch(err => {
      console.log(err);
    })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
        <Link to="/" > Home</Link><br/>
        <Link to="/smurfs"> See the village</Link>
      </div>
    );
  }
}

export default SmurfForm;
