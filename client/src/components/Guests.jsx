/* eslint-disable import/extensions */
import React from 'react';
import Dropdown from './Guest-dropdown.jsx';


class Guests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  clickHandler () {
    const that = this;
    console.log('CLICK!!');
    if (that.state.open) {
      that.setState({ open: false });
    } else {
      that.setState({ open: true });
    }
    console.log(that.state);
  }

  render() {
    return (
      <div onClick={this.clickHandler.bind(this)}>
        <div className="label">Guests</div>
        <div className="dates box grid guests">
          3 guests
        </div>
        <Dropdown open={this.state.open} />
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
