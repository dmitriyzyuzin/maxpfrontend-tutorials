import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import configureStore from './store/configureStore';
import initialState from './store/initialState';
import News from './components/News';
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";

const store = configureStore(initialState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to='/'>Главная</Link>
              </li>
              <li>
                <Link to='/login'>Войти</Link>
              </li>
              <li>
                <Link to='/news'>Новости</Link>
              </li>
              <li>
                <Link to='/profile'>Профиль</Link>
              </li>
            </ul>
          </nav>

          <Switch>
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
