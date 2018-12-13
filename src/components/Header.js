import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  a {
    text-decoration: none;
    font-size: 1em;
    font-weight: bold;
    color: #000;
    padding-bottom: 2px;
    &:hover {
      border-bottom: 2px solid #000;
      padding-bottom: 0;
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Laguro</h1>
        <a href="#">Login</a>
      </Wrapper>
    );
  }
}
export default Header;
