import React from 'react';
import styled from 'styled-components';


class Fees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Format>
        <div>
          <Aleft>
            ${this.props.fees.price}
            {' '}
            x
            {' '}
            {this.props.fees.days}
            {' '}
            nights
          </Aleft>
          <Aright>
            $
            {this.props.fees.price * this.props.fees.days}
          </Aright>
        </div>
        {/* <hr class="clear" /> */}
        <Border>
          <Aleft>
            Cleaning fee
            {' '}
            <img src="rbi.png" alt="" width="17" height="17" />
          </Aleft>
          <Aright>
            $
            {this.props.fees.cleaning}
          </Aright>
        </Border>
        <Border>
          <Aleft>
            Service fee
            {' '}
            <img src="rbi.png" alt="" width="17" height="17" />
          </Aleft>
          <Aright>
            ${this.props.fees.service}
          </Aright>
        </Border>
        <Border>
          <Aleft>
            Occupancy taxes and fees
            {' '}
            <img src="rbi.png" alt="" width="17" height="17" />
          </Aleft>
          <Aright>
            $
            {this.props.fees.tax}
          </Aright>
        </Border>
        <Total>
          <Aleft>
            Total
          </Aleft>
          <Aright>
            $
            {this.props.fees.total}
          </Aright>
        </Total>
        <Clear />
      </Format>
    );
  }
}

export default Fees;

const Clear = styled.div`
  clear: both;
`;

const Border = styled.div`
border-bottom-style: solid !important;
border-bottom-width: var(--border-rule-border-width, 1px) !important;
border-bottom-color: var(--color-divider, #EBEBEB) !important;
clear: both;
`;

const Total = styled.div`
border-bottom-style: solid !important;
border-bottom-width: var(--border-rule-border-width, 1px) !important;
border-bottom-color: var(--color-divider, #EBEBEB) !important;
font-weight: 600 !important;
clear: both;
`;


const Format = styled.div`
  overflow-wrap: break-word !important;
  font-family: "Circular", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif !important;
  font-size: 14px !important;
  font-weight: 300 !important;
  line-height: 1.28571em !important;
  color: rgb(72, 72, 72) !important;
`;

const Aleft = styled.p`
  float: left;
`;

const Aright = styled.p`
  float: right;
`;
