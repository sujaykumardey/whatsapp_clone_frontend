import React from 'react';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Signin from '../src/Components/Signin';
import Chat from '../src/Components/Chat';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <PersistGate persistor={persistor}>
            <Switch>
              <Route exact path="/" component={Signin} />
              <Route exact path="/chat" component={Chat} />
              <Route path="/" component={Chat} />
            </Switch>
          </PersistGate>
        </Router>
      </Provider>
    </>
  );
}

export default App;
