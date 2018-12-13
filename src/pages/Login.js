import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Input from "../components/login/Input";

const FullDarkBg = styled.div`
  background-color: var(--dark-bg);
  min-height: 100vh;
  padding-top: 50px;
`;

const LoginWrapper = styled.div`
  background-color: #fff;
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #000;
  border-radius: var(--radius);
  h2 {
    text-align: center;
  }
`;

class Login extends Component {
  render() {
    return (
      <Layout>
        <FullDarkBg>
          <LoginWrapper>
            <h2>Login!</h2>
            <Input id="Username" type="text" />
            <Input id="Password" type="password" />
          </LoginWrapper>
        </FullDarkBg>
      </Layout>
    );
  }
}
export default Login;
