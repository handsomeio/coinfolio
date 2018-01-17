import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { TabNav } from './src/navigation/router';
import SearchList from './src/screens/SearchList';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SearchList />
      </Provider>
    );
  }
}
