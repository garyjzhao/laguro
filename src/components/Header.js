import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../images/logo.svg";
import { Link } from "react-router-dom";

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
          <Link to="/App" id="logo">
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </Link>
          {this.props.isLoggedIn ? (
            <div>
              <Link to="/App">My X-Rays</Link>
              <Link to="/" onClick={this.props.logout}>
                Log Off
              </Link>
            </div>
          ) : (
            <Link to="/">Login</Link>
          )}
        </Wrapper>
      </FullDarkBg>
    );
  }
}
export default Header;
