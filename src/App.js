import React, { Component } from "react";
import "./css/App.css";

import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <h1>Hello World</h1>
        </header>
      </div>
    );
  }
}

export default App;
