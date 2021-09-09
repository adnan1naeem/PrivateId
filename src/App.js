import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { AboutUs } from "./pages/aboutUs";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={AboutUs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
