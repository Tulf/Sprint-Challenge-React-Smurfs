import React, { Component } from 'react';
import axios from 'axios';
import { Route,} from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

const Home = () => {
  return(
    <div className = "home">
    <Header />
  </div>
  )
}

const url = "http://localhost:3333/smurfs";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount(){

    axios
    .get(url)
    .then(response =>{
    this.setState({
      smurfs: response.data
    })
  })
  .catch(err => {
    console.log(err)
  })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="container App">
        <Route exact path= "/" component={Home}/>
        <Route path = "/add" component = {SmurfForm}/>
        <Route  path = "/smurfs" render ={props =>(
          <Smurfs {...props} smurfs={this.state.smurfs} />
        )} />
      </div>
    );
  }
}




export default App;
