// Functional Component
import React from 'react';
import { Component } from 'react';

function FunctionalComponent(props) {
  return (
    <div>
      <h1>This is a test</h1>
      <h2>{props.message}</h2>
    </div>
  );
}

// Class Component

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}


class StateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}


class EventComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}
// We only render one Component. We only use <div> and any number of child componenets. 
function App() {
  return (
    <>   
      <FunctionalComponent message="testing props in functional component" />
      <ClassComponent message="testing props in class component" />
      <StateComponent/>
      <EventComponent />

    </>
  );
}

export default App;