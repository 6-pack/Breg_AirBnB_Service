import React from 'react';


class Price extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return (
      <div class="bb">
        <div>
          <span class="price">${this.props.price.price} </span>
          <span class="label">per night</span>
        </div>
        <div>
          <span class="star">★</span>
          <span class ="label">{this.props.price.rating}</span>
          <span class ="rating">({this.props.price.reviews} reviews)</span>
        </div>
        <br class="bb"></br>
      </div>
    );
  }
}

export default Price;
