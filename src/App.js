import React from 'react';
import store from "./store"
import {Provider} from "react-redux"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from '../src/Components/Signin';
import Chat from '../src/Components/Chat';
import './App.css';


function App() {  
  return (
    <>
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/chat" component={Chat} />      
      </Switch>
    </Router>
    </Provider>
  </>
  );
}

export default App;
