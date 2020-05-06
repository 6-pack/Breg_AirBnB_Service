import React from 'react';
import styled from 'styled-components';

const Boxed = styled.section`
  padding: 2em;
  background: white;
  border: 1px solid;
  border-color: grey;
`;

class Dates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div class="format">
        <div class="label">Dates</div>
        <div class="dates box grid">
          <span class="leftbox">{this.props.dates.startDate}</span>
          <span class="leftbox"><img src="arrow.png" width="30px" height="25px" /></span>
          <span class="leftbox">{this.props.dates.endDate}</span>
        </div>
        <br class="clear" />
      </div>
    );
  }
}

export default Dates;


{/* <Boxed class="alignleft">{this.props.dates.startDate}</Boxed>
<Boxed class="alignright">{this.props.dates.endDate}</Boxed> */}