import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { AboutUs } from "./pages/aboutUs";

function App() {
  return (
    <div style={{ overflowX: "hidden", overflowY: "clip" }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutUs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
