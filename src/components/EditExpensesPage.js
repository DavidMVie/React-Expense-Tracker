import React from 'react';
import { connect } from 'react-redux';
import ExpensesForm from './ExpensesForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensesPage = (props) => {

  const onRemove = () => {
    props.startRemoveExpense(props.expense.id)
    props.history.push('/')
  }

  const onSubmit = (updatedExpense) => {
    props.startEditExpense(props.expense.id, updatedExpense)
    props.history.push('/')
  }
  
  return (
    <div>
      <h1> Edit Expense </h1>
      <ExpensesForm 
        expense={props.expense} 
        onSubmit={onSubmit}
      />
      <button onClick={onRemove}>Delete Expense</button>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => {
    return expense.id === props.match.params.id
  })
}) 

const mapDispatchToProps = (dispatch) => {
  return {
    startEditExpense: (id, updatedExpense) => {
      dispatch(startEditExpense(id, updatedExpense))
    },
    startRemoveExpense: (id) => {
      dispatch(startRemoveExpense(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensesPage)