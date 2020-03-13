import React from 'react';
import { connect } from 'react-redux'

import ExpenseItem from './ExpenseItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpensesList = (props) => {

  return props.expenses.map((expense) => {
    return <ExpenseItem key={expense.id} {...expense} />
  })
}

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpensesList);