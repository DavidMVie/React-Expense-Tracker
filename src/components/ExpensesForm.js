import React from 'react';
import { SingleDatePicker } from "react-dates"
import moment from "moment"


class ExpensesForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      focused: false,
      error: ''
    }

    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this)
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onDescriptionChange(e) {
    const description = e.target.value
    this.setState(() => {
      return {
        description
      }
    })
  }

  onNoteChange(e) {
    const note = e.target.value;
    this.setState(() => {
      return {
        note
      }
    })
  }

  onAmountChange(e) {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  onDateChange(createdAt) {
    this.setState(() => ({ createdAt }));
  }

  onSubmit(e) {
    e.preventDefault()
    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please include description and amount to get started'  }))
    }else  {
      this.setState(() => ({ error: ''}))
      const expense = {
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      }
      this.props.onSubmit(expense)
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>} 
        <input 
          className="text-input"
          placeholder="description"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input 
          className="text-input"
          placeholder="amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker 
          date={this.state.createdAt} // momentPropTypes.momentObj or null

          onDateChange={this.onDateChange} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          id="your_unique_id" // PropTypes.string.isRequired,
          numberOfMonths={1}
          isOutsideRange= {() => false}
        />
        <textarea 
          className="textarea"
          placeholder="Add a note (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        >          
        </textarea>
        <div>
          <button className="button">Add Expense</button>
        </div>
      </form>
    )
  }
 
}

export { ExpensesForm as default }