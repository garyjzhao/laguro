import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../pages/App";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      isLoggedIn: false
    };
  }

  getUsername = username => {
    this.setState({
      user: username,
      isLoggedIn: true
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Login
                user={this.state.user}
                getUsername={this.getUsername}
                isLoggedIn={this.state.isLoggedIn}
                {...props}
              />
            )}
          />
          <Route
            path="/App"
            render={() => (
              <App user={this.state.user} isLoggedIn={this.state.isLoggedIn} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
