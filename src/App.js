import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Home } from "./pages/home";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <BrowserRouter>
        <Switch path="/" component={Home} />
        <Switch path="/home" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
