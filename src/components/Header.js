import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../images/logo.svg";

const FullDarkBg = styled.div`
  background-color: var(--dark-bg);
`;

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  color: #fff;

  a {
    text-decoration: none;
    font-size: 1em;
    font-weight: bold;
    color: #fff;
    padding-bottom: 2px;
    margin-right: 15px;
    &:hover {
      border-bottom: 2px solid #fff;
      padding-bottom: 0;
    }
    &#logo:hover {
      border-bottom: 0;
      padding-bottom: 2px;
    }
  }
`;

const LogoWrapper = styled.div`
  max-width: 88px;
`;

class Header extends Component {
  render() {
    return (
      <FullDarkBg>
        <Wrapper>
          <a href="/App" id="logo">
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </a>
          {this.props.isLoggedIn ? (
            <div>
              <a href="/App">My X-Rays</a>
              <a href="/" onClick={this.props.logout}>
                Log Off
              </a>
            </div>
          ) : (
            <a href="/">Login</a>
          )}
        </Wrapper>
      </FullDarkBg>
    );
  }
}
export default Header;
