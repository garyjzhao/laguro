import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import CornerstoneElement from "../components/CornerstoneElement";

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

const imageId = "../images/test.jpg";
const stack = {
  imageIds: [imageId],
  currentImageIdIndex: 0
};

class App extends Component {
  render() {
    return (
      <Layout>
        <Wrapper>
          <h1>Hello World</h1>
          <CornerstoneElement stack={{ ...stack }} />
        </Wrapper>
      </Layout>
    );
  }
}

export default App;
