import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

Amplify.configure(awsconfig);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
