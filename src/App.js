import React, { Component } from "react";
import Header from "./components/Header";
import Toast from "./components/Toast";
import Routes from "./Routes";
import { injectGlobal } from "react-emotion";

injectGlobal`
  body{
    font-family: "PT Sans", arial, "Noto Sans Japanese", sans-serif;
    margin: 0;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    -webkit-font-smoothing: antialiased;
    background-color: white;
    background-image: linear-gradient(90deg,rgba(245, 245, 245, 0.1) 50%,transparent 50%),linear-gradient(rgba(245, 245, 245, 0.1) 50%,transparent 50%);
    background-size: 5px 5px;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
        <Toast />
      </div>
    );
  }
}

export default App;
