import React from 'react';
import { Router as RootRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const Router = () => {
  const history = createBrowserHistory();

  return (
    <RootRouter history={history}>
      <Switch>
        {/* <Route path="/" component={Map} /> */}
      </Switch>
    </RootRouter>
  );
};

export default Router;
