import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path='/' component={() => <>Hola</>} />
    <Route exact path='/countries' component={() => <>Countries</>} />
    <Route exact path='/countries/:code' component={() => <>Countries with code</>} />
  </Switch>
);

export default Routes;