import React from 'react';
import styled from 'styled-components';

const Btn = styled.section`
  background-color: rgb(255, 90, 95) !important;;
  color: white;
  border-radius: 3px;
  text-align: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 16px;
  font-weight: 700 !important;
  padding: 15px;
`;

// const Center = styled.section`
//   text-align: center;
//   font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
//   color: grey;
// `;

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
        {/* <br /> */}
        <div className="text">You wont be charged yet</div>
      </div>
    );
  }
}

export default Button;
