import React from 'react';


class Price extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return (
      <div>
        <div> {this.props.price.price}/ per night </div>
        <div>★{this.props.price.rating}({this.props.price.reviews} reviews)</div>
      </div>
    );
  }
}

export default Price;
