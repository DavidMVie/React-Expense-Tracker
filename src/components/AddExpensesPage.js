import React from 'react';
import { connect } from 'react-redux';
import ExpensesForm  from './ExpensesForm';
import { startAddExpense } from '../actions/expenses';

// This is quite a funny place you probably wouldn't even know

const AddExpensesPage = (props) => {

  const onSubmit = (expense) => {
    props.startAddExpense(expense)
    props.history.push('/')
  }

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpensesForm 
        onSubmit={onSubmit}
      />
    </div>
  )

}

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensesPage)