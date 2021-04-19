import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';

function App() {

  return (
    <Switch>
      <Route path='/posts' component={Posts}></Route>
      <Route path='/' component={Home}></Route>
    </Switch>
  );
}

export default App;
