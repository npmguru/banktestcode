import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';

import Loading from './component/loading/Loading';
import Login from './component/login/Login'
import App from './component/App';
import Dashboard from './component/dashboard/Dashboard'
import PrivateRoute from './core/utils/PrivateRoute';
import "bootstrap/dist/css/bootstrap.css";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { APP_STORE, PERSIST_STORE } from './persistence/store';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={APP_STORE}>
      <PersistGate persistor={PERSIST_STORE}>
          <BrowserRouter>
              <App>
                  <Route path="/" exact component={Loading} />
                  <Route path="/login" exact component={Login} />
                  <PrivateRoute path="/dashboard" >
                      <Dashboard />
                  </PrivateRoute>
              </App>
            </BrowserRouter>
          </PersistGate>
       </Provider>     
  </React.StrictMode>,
  document.getElementById('root')
);
