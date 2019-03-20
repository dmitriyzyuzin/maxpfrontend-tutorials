import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import configureStore from './store/configureStore';
import News from './components/News/News';
import PageNotFound from "./components/PageNotFound";
import LoginFormContainer from "./containers/LoginFormContainer";
import ProfileContainer from "./containers/ProfileContainer";
import Home from "./components/Home";
import NavBarContainer from "./containers/NavBarContainer";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavBarContainer />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LoginFormContainer} />
            <Route path='/news' component={News} />
            <Route path='/profile' component={ProfileContainer} />
            <Route path="/logout" render={() => (<Redirect to="/" />)} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
