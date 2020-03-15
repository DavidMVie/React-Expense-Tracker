import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import AddExpensesPage from '../components/AddExpensesPage';
import DashboardPage from '../components/DashboardPage';
import EditExpensesPage from '../components/EditExpensesPage';
import Footer from '../components/Footer';
import LoginPage from '../components/LoginPage';
import PageNotFound from '../components/PageNotFound';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => {

  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create" component={AddExpensesPage} />
        <PrivateRoute path="/edit/:id" component={EditExpensesPage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  )
}

export { AppRouter as default }