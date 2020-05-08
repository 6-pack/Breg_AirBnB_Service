/* eslint-disable import/extensions */
import React from 'react';
import Dropdown from './Guest-dropdown.jsx';


class Guests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      Adults: 1,
      Children: 0,
      Infants: 0,
      max: 4,
      guests: 1
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

  guestHandler(action, ele) {
    const that = this;
    console.log(action, ele);
    if (ele === 'Adults') {
      if (action === '-') {
        if (that.state.Adults > 1) {
          const newVal = that.state.Adults - 1;
          const newGuest = that.state.guests - 1;
          that.setState({ Adults: newVal });
          that.setState({ guests: newGuest });
        }
      } else if (that.state.guests < that.state.max) {
        const newVal = that.state.Adults + 1;
        const newGuest = that.state.guests + 1;
        that.setState({ Adults: newVal });
        that.setState({ guests: newGuest });
      }
    }
    if (ele === 'Children') {
      if (action === '-') {
        if (that.state.Children > 1) {
          const newVal = that.state.Children - 1;
          const newGuest = that.state.guests - 1;
          that.setState({ Children: newVal });
          that.setState({ guests: newGuest });
        }
      } else if (that.state.guests < that.state.max) {
        const newVal = that.state.Children + 1;
        const newGuest = that.state.guests + 1;
        that.setState({ Children: newVal });
        that.setState({ guests: newGuest });
      }
    }
    if (ele === 'Infants') {
      if (action === '-') {
        if (that.state.Infants > 0) {
          const newVal = that.state.Infants - 1;
          that.setState({ Infants: newVal });
        }
      } else if (that.state.Infants < 5) {
        const newVal = that.state.Infants + 1;
        that.setState({ Infants: newVal });
      }
    }
    console.log(that.state);
  }

  render() {
    return (
      <div>
        <div className="label">Guests</div>
        <div className="dates box grid guests" onClick={this.clickHandler.bind(this)}>
          3 guests
        </div>
        <Dropdown open={this.state.open} click={this.guestHandler.bind(this)} nums={this.state} close={this.clickHandler.bind(this)} />
        <br className="clear" />
      </div>
    );
  }
}

export default Guests;
