import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import  {firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

import { startSetExpenses } from './actions/expenses'

import AppRouter, { history } from './routers/AppRouter';
import { login, logout } from './actions/auth';

const store = configureStore()

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

let hasRendered = false
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(app, document.getElementById('root'));
    hasRendered = true;
  }
}



firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses())
    .then(() => {
      renderApp()
      if(history.location.pathname === "/") {
        history.push("/dashboard")
      }
    
    })
  }else {
    store.dispatch(logout())
    renderApp();
    history.push('/')
  }
})