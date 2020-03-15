import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate} from '../actions/filters'


class ExpensesFilters extends React.Component  {

  constructor(props) {
    super(props)

    this.state = {
      focusedInput: null
    }

    this.onTextChange = this.onTextChange.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
  }

  onDatesChange({startDate, endDate}) {
    console.log('on dates change fired ', startDate, endDate)
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  onTextChange(e) {
    const text = e.target.value;
    this.props.setTextFilter(text)
  }

  onSortChange(e) {
    if(e.target.value === 'date') {
      this.props.sortByDate();
    }else if(e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">        
            <input
              className="text-input"
              type="text" 
              placeholder="Search expenses"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker 
              startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
              startDateId="start-date" // PropTypes.string.isRequired,
              endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
              endDateId="end-date" // PropTypes.string.isRequired,
              onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              numberOfMonths={1}
              showClearDates={true} 
              isOutsideRange= {() => false}
            />
          </div>
        </div>



      </div>
    )
  }
 
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesFilters)