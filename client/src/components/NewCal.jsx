/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class NewCal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,

    };
  }


  render() {
    return (
      <div>
        <p>IM RENDERING</p>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => this.setState({ focusedInput })}
        />
      </div>
    );
  }
}

export default NewCal;
