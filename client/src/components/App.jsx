/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import Price from './Price.jsx';
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';
import Fees from './Fees.jsx';
import Button from './Button.jsx';

const Boxed = styled.section`
  padding: 2em;
  background: white;
  border: 1px solid;
  border-color: grey;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Boxed>
          <Price />
          <hr />
          <Dates />
          <br />
          <Guests />
          <br />
          <Fees />
          <br />
          <Button />
        </Boxed>
      </div>
    );
  }
}

export default App;

// const divStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: white;
//   border: 2px solid;
//   border-color: black;
//   border-radius: 7px;
// `;
