import React from 'react';
import styled from 'styled-components';

const Btn = styled.section`
  background-color: #ED5252;
  color: white;
  border-radius: 3px;
  text-align: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 20px;
  padding: 10px;
`;

const Center = styled.section`
  text-align: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  color: grey;
`;

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Btn>Reserve</Btn>
        <br />
        <Center>You wont be charged yet</Center>
      </div>
    );
  }
}

export default Button;
