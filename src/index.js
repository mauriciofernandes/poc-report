import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Content from "./Content";
import Content2 from "./Content2";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: "page1"
    };
  }

  changePage = e => {
    this.setState({
      activePage: e.target.name
    });
  };

  render() {
    const {
      state: { activePage },
      changePage
    } = this;
    return (
      <div className="App">
        <Header changePage={changePage} />
        {activePage === "page1" && <Content />}
        {activePage === "page2" && <Content2 />}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
