import React from 'react';
import styled from 'styled-components';

const rightStyle = {
  alignSelf: 'stretch',
};

const Left = styled.section`
  border-radius: 3px;
  text-align: right;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 13px;
`;
const Right = styled.section`
  border-radius: 3px;
  text-align: left;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 13px;
`;

class Fees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div class="format">
        <div>
          <p class="alignleft">
            ${this.props.fees.price} x {this.props.fees.days} nights
          </p>
          <p class="alignright">
            ${this.props.fees.price * this.props.fees.days}
          </p>
        </div>
        {/* <hr class="clear" /> */}
        <div class="bb clear">
          <p class="alignleft">
            Cleaning fee <img src="rbi.png" width="17" height="17" />
          </p>
          <p class="alignright">
            ${this.props.fees.cleaning}
          </p>
        </div>
        <div class="bb clear">
          <p class="alignleft">
            Service fee <img src="rbi.png" width="17" height="17" />
          </p>
          <p class="alignright">
            ${this.props.fees.service}
          </p>
        </div>
        <div class="bb clear">
          <p class="alignleft">
            Occupancy taxes and fees <img src="rbi.png" width="17" height="17" />
          </p>
          <p class="alignright">
            ${this.props.fees.tax}
          </p>
        </div>
        <div class="bb clear total">
          <p class="alignleft">
            Total
          </p>
          <p class="alignright">
            ${this.props.fees.total}
          </p>
        </div>
        <br class="clear"></br>
      </div>
    );
  }
}

export default Fees;
