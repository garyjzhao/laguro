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
      imageId: props.stack.imageIds[0]
    };
  }

  componentDidMount() {
    const element = this.element;

    // Enable the DOM Element for use with Cornerstone
    cornerstone.enable(element);

    // Load the first image in the stack
    cornerstone.loadImage(this.state.imageId).then(image => {
      // Display the first image
      cornerstone.displayImage(element, image);

      cornerstoneTools.mouseInput.enable(element);
      cornerstoneTools.mouseWheelInput.enable(element);
      cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
      cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
      cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
      cornerstoneTools.zoomWheel.activate(element); // zoom is the default tool for middle mouse wheel
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
