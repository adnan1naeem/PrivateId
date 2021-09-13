import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { AboutUs } from "./pages/aboutUs";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      overflow: "hidden clip",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
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
