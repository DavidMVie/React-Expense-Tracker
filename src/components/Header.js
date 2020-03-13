import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => { 

  return (
    <header>
      <h1>Expensify</h1>
      <p>Track Your Expenses</p>
      <nav>
        <NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink>
        <NavLink to="/create" activeClassName="is-active"> | Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active"> | Help</NavLink>
      </nav>
    </header>
  )
}


export { Header as default }