import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Login, Home } from "./pages";
import PrivateRoute from "./helpers/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <PrivateRoute exact path="/profile">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
