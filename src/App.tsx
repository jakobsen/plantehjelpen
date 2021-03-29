import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Home from "./components/Home";
import PlantInfo from "./components/PlantInfo"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/plant/:plantName">
          <PlantInfo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <GlobalStyles />
    </Router>
  );
}

export default App;
