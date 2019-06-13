import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './styles/reset.scss';
import './styles/index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

ReactDOM.render(
    <Provider store={configureStore()}>
  <App />
 </Provider>,
 document.getElementById('root')
 );
 
 serviceWorker.unregister();