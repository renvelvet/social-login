import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./redux/reducers";
import { Login } from "./pages";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./helpers/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
