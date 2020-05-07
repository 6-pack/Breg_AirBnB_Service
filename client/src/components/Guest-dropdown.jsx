import React from 'react';


class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    if (this.props.open) {
      return (
        <div className="dropdown">
          <div className="margin1">
            <div className="grid2">
              <span className="margin">Adults</span>
              <span>
                <button className="asde">—</button>
                <span className="margin">0</span>
                <button className="asde">＋</button>
              </span>
            </div>
            <div className="grid2">
              <span className="margin">Children</span>
              <span>
                <button className="asde">—</button>
                <span className="margin">0</span>
                <button className="asde">＋</button>
              </span>
            </div>
            <div className="grid2">
              <span className="margin">Infants</span>
              <span>
                <button className="asde">—</button>
                <span className="margin">0</span>
                <button className="asde">＋</button>
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Dropdown;
