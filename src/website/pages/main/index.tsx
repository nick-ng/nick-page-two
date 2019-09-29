import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "../../nav";

const Main = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/test">
          <div>Test</div>
        </Route>
        <Route path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default Main;
