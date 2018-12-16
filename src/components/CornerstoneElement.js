import React, { Component } from "react";
import styled from "styled-components";

import * as cornerstone from "cornerstone-core";
import * as cornerstoneMath from "cornerstone-math";
import * as cornerstoneTools from "cornerstone-tools";
import * as cornerstoneWebImageLoader from "cornerstone-web-image-loader";

cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;

const CornerstoneWrapper = styled.div`
  width: calc((968px / 3) - 15px);
  height: 300px;
  margin: 0 auto 16px;
  .viewportElement {
    width: 100%;
    height: 100%;
  }
`;

class CornerStoneElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: props.imageId
    };
  }

  componentDidMount() {
    const element = this.element;

    cornerstone.enable(element);

    cornerstone.loadImage(this.state.imageId).then(image => {
      cornerstone.displayImage(element, image);

      cornerstoneTools.mouseInput.enable(element);
      cornerstoneTools.mouseWheelInput.enable(element);
      cornerstoneTools.wwwc.activate(element, 1);
      cornerstoneTools.pan.activate(element, 2);
      cornerstoneTools.zoom.activate(element, 4);
      cornerstoneTools.zoomWheel.activate(element);
    });
  }
  render() {
    return (
      <CornerstoneWrapper>
        <div
          className="viewportElement"
          ref={input => {
            this.element = input;
          }}
        />
      </CornerstoneWrapper>
    );
  }
}

export default CornerStoneElement;
