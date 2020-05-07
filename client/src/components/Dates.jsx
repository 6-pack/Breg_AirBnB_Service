import React from 'react';

class Dates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="format">
        <div className="label">Dates</div>
        <div className="dates box grid">
          <span className="leftbox">{this.props.dates.startDate}</span>
          <span className="leftbox">
            <img src="arrow.png" alt="" width="35px" height="20px" />
          </span>
          <span className="leftbox">{this.props.dates.endDate}</span>
        </div>
        <br className="clear" />
      </div>
    );
  }
}

export default Dates;
