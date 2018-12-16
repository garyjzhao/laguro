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
  text-align: center;
  .dcm-images {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }
`;

const images = [
  "https://raw.githubusercontent.com/garyjzhao/laguro/master/public/images/IO000000.jpg",
  "https://raw.githubusercontent.com/garyjzhao/laguro/master/public/images/IO000001.jpg",
  "https://raw.githubusercontent.com/garyjzhao/laguro/master/public/images/IO000002.jpg"
];

class App extends Component {
  render() {
    return (
      <Layout isLoggedIn={this.props.isLoggedIn} logout={this.props.logout}>
        <Wrapper>
          {this.props.isLoggedIn ? (
            <>
              <h1>Hello{!!this.props.user ? `, ${this.props.user}` : "!"}!</h1>
              <p>
                Scroll to Zoom. Click and Drag to Increase/Decrease Contrast
              </p>
              <div className="dcm-images">
                {images.map(data => (
                  <CornerstoneElement imageId={data} />
                ))}
              </div>
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
