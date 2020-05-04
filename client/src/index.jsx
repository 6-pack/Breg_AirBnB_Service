/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const divStyle = {
  color: 'red',
  backgroundColor: 'black',
};

class Other extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <App />
        <h1 style={divStyle}>IM RENDERING</h1>
      </div>
    );
  }
}


ReactDOM.render(<Other />, document.getElementById('app'));
