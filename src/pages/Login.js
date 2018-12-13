import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const LoginWrapper = styled.div`
  max-width: 500px;
  padding: 16px;
  border: 1px solid #000;
  border-radius: 3px;
  /* background-color: var(--dark-bg); */
`;
const FullDarkBg = styled.div`
  background-color: var(--dark-bg);
  min-height: 100vh;
`;

class Login extends Component {
  render() {
    return (
      <Layout>
        <FullDarkBg>
          <LoginWrapper>
            <h2>Login</h2>
          </LoginWrapper>
        </FullDarkBg>
      </Layout>
    );
  }
}
export default Login;
