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
        <div className="label">Guests</div>
        <div className="dates box grid guests">
          3 guests
        </div>
        <br className="clear" />
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
