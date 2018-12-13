import React, { Component } from "react";
import Header from "./Header";
import styled from "styled-components";

const globalStyles = {
  darkBackground: "#282c34"
};

const AppStyles = styled.div`
  min-height: 100vh;
  --dark-bg: ${props => props.globalStyles.darkBackground};
`;

class Layout extends Component {
  render() {
    return (
      <AppStyles globalStyles={globalStyles}>
        <Header />
        {this.props.children}
      </AppStyles>
    );
  }
}
export default Layout;
