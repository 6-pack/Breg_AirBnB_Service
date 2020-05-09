/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Price from './Price.jsx';
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';
import Fees from './Fees.jsx';
import Button from './Button.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: {
        price: 104,
        rating: 4.96,
        reviews: 191,
      },
      dates: {
        startDate: 'Check-in',
        endDate: 'Checkout',
      },
      guests: 4,
      fees: {
        price: 104,
        days: 2,
        cleaning: 100,
        service: 43,
        tax: 51,
        total: 402,
      },
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const that = this;
    const stay = that.state.fees.days;
    axios.get('/data')
      .then(({ data }) => {
        const res = data[0];
        const total = res.cleaning_fee + res.service_fee + res.tax + (res.price * stay);
        this.setState({
          price: {
            price: res.price,
            rating: res.rating,
            reviews: res.reviews,
          },
          guests: res.guest_limit,
          fees: {
            price: res.price,
            days: stay,
            cleaning: res.cleaning_fee,
            service: res.service_fee,
            tax: res.tax,
            total,
          },
        });
        console.log(that.state);
      });
  }

  clearDates() {
    console.log("RAN");
    this.setState({
      dates: {
        startDate: 'Check-in',
        endDate: 'Checkout',
      },
    });
  }


  render() {
    return (
      <Main>
        <Boxed>
          <Price price={this.state.price} />
          <br />
          <Dates dates={this.state.dates} clear={this.clearDates.bind(this)} />
          {/* <br /> */}
          <Guests guests={this.state.guests} />
          {/* <br /> */}
          <Fees fees={this.state.fees} />
          <br />
          <Button />
        </Boxed>
      </Main>
    );
  }
}

export default App;

const Main = styled.div`
  width: 425px;
`;

const Boxed = styled.section`
  padding: 2em;
  background: white;
  border: 1px solid;
  border-color: lightgray;
  border-radius: 1px;
`;

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
