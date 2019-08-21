import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'components/pages/Home';
import Countries from 'components/pages/Countries';
import Country from 'components/pages/Country';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/countries' component={Countries} />
    <Route exact path='/countries/:code' component={Country} />
  </Switch>
);

export default Routes;