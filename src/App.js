import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import Valentine from "./containers/valentine/Valentine";

function App() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/valentine" component={Valentine} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
