import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import Header from "./navigation/header";
import Footer from "./navigation/footer";
ReactDOM.render(
  <React.StrictMode>
    <div className="w-full h-full flex flex-col relative">
      <Header />
      <BrowserRouter>
        <Wrapper />
      </BrowserRouter>
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

function Wrapper() {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
