import React from 'react';
import ReactDOM from 'react-dom';

const divStyle = {
  color: 'red',
  backgroundColor: 'black',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div style={divStyle}>
        <h1>HI IM WORKING!</h1>
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
