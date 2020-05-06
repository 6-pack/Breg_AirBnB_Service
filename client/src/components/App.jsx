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
      price: {
        price: 108,
        rating: 4.96,
        reviews: 191,
      },
      dates: {
        startDate: 'Select-Date',
        endDate: 'Select-Date',
      },
      guests: 4,
      fees: {
        price: 108,
        days: 2,
        cleaning: 215,
        service: 215,
        tax: 52,
        total: 410,
      },
    };
  }

  render() {
    return (
      <div>
        <Boxed>
          <Price price={this.state.price} />
          <hr />
          <Dates dates={this.state.dates} />
          <br />
          <Guests guest-limit={this.state.guests} />
          <br />
          <Fees fees={this.state.fees} />
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
