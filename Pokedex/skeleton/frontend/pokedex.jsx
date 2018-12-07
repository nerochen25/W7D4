import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';
import { fetchOnePokemon } from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.fetchOnePokemon = fetchOnePokemon;
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
});



