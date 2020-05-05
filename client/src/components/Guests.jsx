import React from 'react';


class Guests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>Guests</div>
        <select id="Guests">
          <option value="Adults">Adults</option>
          <option value="Infants">Children</option>
          <option value="Infants">Infants</option>
        </select>
      </div>
    );
  }
}

export default Guests;
