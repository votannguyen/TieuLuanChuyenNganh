import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import DefaultLayout from './container/defaultLayout';


function App() {
  return (
    <Switch>
      <Route path="/" component={DefaultLayout} />
    </Switch>
    
  );
}

export default App;
