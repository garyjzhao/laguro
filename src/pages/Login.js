import React, { Component } from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  max-width: 500px;
  padding: 16px;
  border: 1px solid #000;
  border-radius: 3px;
`;

class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <h2>Login</h2>
      </LoginWrapper>
    );
  }
}
export default Login;
