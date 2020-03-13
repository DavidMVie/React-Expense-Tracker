import React from 'react';

import ExpensesFilters from './ExpensesFilters';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DashboardPage = () => {

  return (
    <div>
      <ExpensesFilters />
      <ExpensesSummary />
      <ExpensesList />      
    </div>
  )
}

export { DashboardPage as default }