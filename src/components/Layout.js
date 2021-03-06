import React, { Component } from "react";
import Header from "./Header";
import styled from "styled-components";

const globalStyles = {
  darkBackground: "#282c34",
  borderRadius: "3px"
};

const AppStyles = styled.div`
  min-height: 100vh;
  --dark-bg: ${props => props.globalStyles.darkBackground};
  --radius: ${props => props.globalStyles.borderRadius};
`;

class Layout extends Component {
  render() {
    return (
      <AppStyles globalStyles={globalStyles}>
        <Header isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} />
        {this.props.children}
      </AppStyles>
    );
  }
}
export default Layout;
