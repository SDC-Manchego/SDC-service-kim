import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: 'Hello World!'
    }
  }

  render() {
    return(
      <div>
        <h1>{this.state.initial}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

