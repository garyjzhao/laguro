import React, { Component } from "react";

import * as cornerstone from "cornerstone-core";
import * as cornerstoneMath from "cornerstone-math";
import * as cornerstoneTools from "cornerstone-tools";
import * as cornerstoneWebImageLoader from "cornerstone-web-image-loader";

cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;

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
      <div>
        <div
          className="viewportElement"
          ref={input => {
            this.element = input;
          }}
          style={{
            width: "500px",
            height: "500px"
          }}
        />
      </div>
    );
  }
}

export default CornerStoneElement;
