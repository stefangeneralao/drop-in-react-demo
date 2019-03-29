import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      lastname: '',
      age: '',
    };
  }
  
  onClickHandler() {
    axios.get('http://localhost:3001/user-information')
      .then((res) => {
        this.setState({
          name: res.data.name,
          lastname: res.data.lastname,
          age: res.data.age,
        });
      })
  }
  
  render() {
    return (
      <div className="App" onClick={() => this.onClickHandler()}>
        <Header name={ this.state.name } />
        <Main
          lastname={ this.state.lastname }
          age={ this.state.age }
        />
      </div>
    );
  }
}

export default App;
