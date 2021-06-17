
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from "../pages/Home/Home"

const AppRouter = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
  )
}


export default AppRouter;
