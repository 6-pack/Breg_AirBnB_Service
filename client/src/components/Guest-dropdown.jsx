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
            <Item name="Adults" click={this.props.click} nums = {this.props.nums} />
            <Item name="Children" click={this.props.click} nums = {this.props.nums} />
            <Item name="Infants" click={this.props.click} nums = {this.props.nums} />
          </div>
          <div className="margin wide">6 guests maximum. Infants don’t count toward the number of guests.</div>
          <div className="right margin" onClick={this.props.close}>Close</div>
        </div>
      );
    }
    return null;
  }
}

const Item = function ({ name, click, nums}) {
  let text = '';
  if (name === "Children") {
    text = 'Ages 2–12';
  } else if (name === "Infants") {
    text = 'Under 2';
  }

  return (
    <div className="grid2 margin">
      <div className="grid3 centfl">
        <div className="centfl">{name}</div>
        <div className=" normal">{text}</div>
      </div>
      <div className="autom">
        <button className="asde" onClick={()=>{click('-', name)}}>—</button>
        <span className="margin">{nums[name]}</span>
        <button className="asde" onClick={()=>{click('+', name)}}>＋</button>
      </div>
    </div>
  );
};

export default Dropdown;
