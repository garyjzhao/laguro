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

const imageId =
  "https://raw.githubusercontent.com/garyjzhao/laguro/master/shot1-2.jpg";

class App extends Component {
  render() {
    return (
      <Layout isLoggedIn={this.props.isLoggedIn}>
        <Wrapper>
          {this.props.isLoggedIn ? (
            <>
              <h1>Hello{!!this.props.user ? `, ${this.props.user}` : "!"}!</h1>
              <CornerstoneElement imageId={imageId} />
            </>
          ) : (
            <h1>
              <a href="/">Please Log In.</a>
            </h1>
          )}
        </Wrapper>
      </Layout>
    );
  }
}

export default App;
