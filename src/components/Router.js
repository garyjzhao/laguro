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
      isLoggedIn: true
    };
  }

  getUsername = username => {
    this.setState({
      user: username,
      isLoggedIn: true
    });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Login getUsername={this.getUsername} {...props} />
            )}
          />
          <Route
            path="/App"
            render={props => (
              <App
                user={this.state.user}
                isLoggedIn={this.state.isLoggedIn}
                logout={this.state.logout}
                {...props}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
