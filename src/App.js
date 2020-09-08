import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      counter: 0,
      error: false
    }
  }

  incrementCountByOne=()=> {
    if(this.state.counter==0 && this.state.error==true) {
      this.setState({
        error: false,
        counter: 1
      })
    } else {
    this.setState((prevState, props) => ({
        counter: prevState.counter + 1
    }))
  }
  }

  decrementCountByOne=()=> {
    if(this.state.counter==0) {
        this.setState({
          error: true
        })
    } else {
    this.setState((prevState, props)=> ({
      counter: prevState.counter -1
    }))
  }
  }

  render() {
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
      {this.state.error==true ? <h1 className="redfont" data-test="error-display">The counter cannot go below 0</h1> : ""}
      <button data-test="increment-button" onClick={this.incrementCountByOne}>Increment counter</button>
      <button data-test="decrement-button" onClick={this.decrementCountByOne}>Decrement counter</button>
    </div>
  )
}
}

export default App;
