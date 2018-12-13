import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../pages/App";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/App" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
