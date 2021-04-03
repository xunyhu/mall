import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes";
import NoPage from '@component/404'

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((k, i) => {
          return (
            <Route
              key={i}
              path={k.path}
              render={(props) => <k.component {...props} />}
            />
          );
        })}
        <Redirect exact from="/" to="/home" />
        <Route path="*" component={NoPage} />
      </Switch>
    </Router>
  );
};

export default App;
