import React, { Component } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  label {
    margin-bottom: 5px;
  }
  input {
    margin-bottom: 16px;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #000;
    border-radius: var(--radius);
  }
`;

class Input extends Component {
  render() {
    return (
      <InputWrapper>
        <label htmlFor={this.props.id}>{this.props.id}</label>
        <input type={this.props.type} id={this.props.id} />
      </InputWrapper>
    );
  }
}
export default Input;
