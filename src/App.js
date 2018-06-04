import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <MyComponent />
  }
}


class MyComponent extends Component {
  render() {
    return <Input />
  }
}

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Welcome!"
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const value = event.target.value

    this.setState(prevState => ({
      message: value
    }))
  }

  render() {
    return (
      <div>
      <h1>{ this.state.message }</h1>
      <label htmlFor="myInput">Talk to me: </label>
        <input type="text" id="myInput" onChange={(e) => this.handleChange(e)} autoFocus="true">
      </input>
      </div>
    )
  }
}

export default App;
