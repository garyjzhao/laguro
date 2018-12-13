import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

class App extends Component {
  render() {
    return (
      <Layout>
        <Wrapper>
          <h1>Hello World</h1>
        </Wrapper>
      </Layout>
    );
  }
}

export default App;
