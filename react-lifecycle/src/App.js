import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      clicked: false
    };
  }

  setCount(number) {
    console.log('setCount')
    this.setState({
      count: number
    })
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setCount(this.state.count + 1)}>
          Click me
        </button>
      </div>
    );
  }
}

export default App;
