import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Input from "../components/login/Input";
import CountrySelect from "../components/login/CountrySelect";

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

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border-radius: var(--radius);
  font-size: 1.25em;
  font-weight: bold;
  border: 1px solid #000;
  &:hover {
    background-color: var(--dark-bg);
    color: #fff;
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.userName = React.createRef();

    this.goToApp = this.goToApp.bind(this);
  }

  goToApp(event) {
    event.preventDefault();
    console.log(this.userName.value);
    this.props.history.push(`/App`);
  }

  render() {
    return (
      <Layout>
        <FullDarkBg>
          <LoginWrapper>
            <h2>Login!</h2>
            <form onSubmit={this.goToApp}>
              <Input id="Username" type="text" ref={this.userName} />
              <Input id="Password" type="password" />
              <CountrySelect />
              <Button type="submit">Login</Button>
            </form>
          </LoginWrapper>
        </FullDarkBg>
      </Layout>
    );
  }
}
export default Login;
