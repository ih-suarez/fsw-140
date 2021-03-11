import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import SeasonOne from './components/seasonOne/SeasonOne';
import SeasonTwo from './components/seasonTwo/SeasonTwo';

export default function App() {
  return (
    <main>
      <Nav />
      <Switch>
        <Route exact path={['/', '/Home']} component={Home} />
        <Route path='/Season1' component={SeasonOne} />
        <Route path='/Season2' component={SeasonTwo} />
      </Switch>
    </main>
  );
}

