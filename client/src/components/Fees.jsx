import React from 'react';
// import styled from 'styled-components';


class Fees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>$108 x 2 nights .......... $215</div>
        <hr />
        <div>Cleaning fee .......... $215</div>
        <hr />
        <div>Service fee .......... $215</div>
        <hr />
        <div>Occupancy taxes and fees .......... $52</div>
        <hr />
        <div>Total .......... $411</div>
      </div>
    );
  }
}

export default Fees;
