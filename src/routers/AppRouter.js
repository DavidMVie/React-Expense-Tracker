import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddExpensesPage from '../components/AddExpensesPage';
import DashboardPage from '../components/DashboardPage';
import EditExpensesPage from '../components/EditExpensesPage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensesPage} />
        <Route path="/help" component={HelpPage}/>
        <Route path="/edit/:id" component={EditExpensesPage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export { AppRouter as default }