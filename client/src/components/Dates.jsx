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
      <div>
        <div>Dates</div>
        <Boxed><span>{this.props.dates.startDate}</span></Boxed>
        <Boxed><span>{this.props.dates.endDate}</span></Boxed>
      </div>
    );
  }
}

export default Dates;
