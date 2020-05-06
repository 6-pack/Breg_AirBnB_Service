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
      <div>
        <div>
          <p class="alignleft">left</p>
          <p class="alignright">right</p>
        </div>
        <hr class="clear" />
        <div>
          <p class="alignleft">
          $108 x {this.props.fees.days} nights
          </p>
          <p class="alignright">
            ${this.props.fees.price * this.props.fees.days}
          </p>
        </div>
        <hr class="clear" />
        <div class="clear">
          $108 x {this.props.fees.days} nights .......... $
          {this.props.fees.price * this.props.fees.days}
        </div>
        <hr class="clear" />
        <div>
          <Right>Cleaning fee ..........</Right>
          <Left>${this.props.fees.cleaning}</Left>
        </div>
        <hr />
        <div>
          Service fee .......... $
          {this.props.fees.service}
        </div>
        <hr />
        <div>
          Occupancy taxes and fees .......... $
          {this.props.fees.tax}
        </div>
        <hr />
        <div>
          Total .......... $
          {this.props.fees.total}
        </div>
      </div>
    );
  }
}

export default Fees;
