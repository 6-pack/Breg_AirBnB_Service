import React from 'react';


class Price extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return (
      <div className="bb">
        <div>
          <span className="price">${this.props.price.price} </span>
          <span className="label">per night</span>
        </div>
        <div>
          <span className="star">★</span>
          <span className="label">{this.props.price.rating}</span>
          <span className="rating">({this.props.price.reviews} reviews)</span>
        </div>
        <br className="bb" />
      </div>
    );
  }
}

export default Price;
