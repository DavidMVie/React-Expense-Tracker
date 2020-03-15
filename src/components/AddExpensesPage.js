import React from 'react';
import { connect } from 'react-redux';
import ExpensesForm  from './ExpensesForm';
import { startAddExpense } from '../actions/expenses';

// This is quite a funny place you probably wouldn't even know

const AddExpensesPage = (props) => {

  const onSubmit = (expense) => {
    props.startAddExpense(expense)
    props.history.push('/dashboard')
  }

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title"> Save Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpensesForm 
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )

}

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensesPage)