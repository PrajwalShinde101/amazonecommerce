import React from "react";
import Header from "./Header.js";
import Home from "./home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Checkout from "./checkout.js";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
