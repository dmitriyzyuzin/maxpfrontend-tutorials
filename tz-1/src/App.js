import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import configureStore from './store/configureStore';
import News from './components/News';
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";
import LoginFormContainer from "./containers/LoginFormContainer";
import NavBar from "./components/NavBar/NavBar";
import { navBarItems } from './config';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavBar items={navBarItems} />

          <Switch>
            <Route path='/login' component={LoginFormContainer} />
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
