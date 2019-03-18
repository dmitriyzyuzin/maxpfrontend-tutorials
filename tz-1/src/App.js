import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import configureStore from './store/configureStore';
import initialState from './store/initialState';
import News from './components/News';
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";
import LoginForm from "./components/LoginForm/LoginForm";
import NavBar from "./components/NavBar/NavBar";
import { navBarItems } from './config';

const store = configureStore(initialState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavBar items={navBarItems} />

          <Switch>
            <Route path='/login' component={LoginForm} />
            <Route path='/news' component={News} />
            <Route path='/profile' component={Profile} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
