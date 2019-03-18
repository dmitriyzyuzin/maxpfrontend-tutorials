import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import initialState from './store/initialState';

const store = configureStore(initialState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        empty
      </Provider>
    );
  }
}

export default App;
