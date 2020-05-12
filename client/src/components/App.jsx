/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-bind */
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
import NewCal from './NewCal.jsx';

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
      calOpen: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const that = this;
    const stay = that.state.fees.days;
    axios.get('http://localhost:3002/data')
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

  toggleOpen() {
    const tar = event.target.innerHTML;
    const that = this;
    // console.log('EVENT', event.target.tagName);
    // console.log(tar);
    if (tar === 'Check-in' || tar === 'Checkout') {
      // console.log('RANN');
      const current = that.state.calOpen;
      that.setState({ calOpen: !current });
    }
    // else {
    //   console.log("NNAR");
    //   that.setState({ calOpen: false });
    // }
    // that.setState({ calOpen: true });
    // console.log('Open:', that.state.calOpen);
  }

  toggleClose() {
    const that = this;
    // this.setState({ calOpen: false });
    // console.log(that.state.calOpen);
  }

  clearDates() {
    console.log('RAN');
    this.setState({
      dates: {
        startDate: 'Check-in',
        endDate: 'Checkout',
      },
    });
  }


  render() {
    // const toggleClose = this.toggleClose.bind(this);
    const toggleOpen = this.toggleOpen.bind(this);
    const clearDates = this.clearDates.bind(this);
    const {
      price, dates, calOpen, guests, fees,
    } = this.state;

    return (
      <Main onClick={toggleOpen}>
        <Boxed>
          <Price price={price} />
          <Br />
          <NewCal />
          <Br />
          {/* <Dates
            dates={dates}
            open={calOpen}
            click={toggleOpen}
            clear={clearDates}
          /> */}
          {/* <br /> */}
          <Guests guests={guests} />
          {/* <br /> */}
          <Fees fees={fees} />
          <br />
          <Button />
        </Boxed>
      </Main>
    );
  }
}

export default App;

const Br = styled.div`
  height: 10px;
`;


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
