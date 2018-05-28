import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "./scenes/Search";
import Favorite from "./scenes/Favorites";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/favorite" component={Favorite} />
    </Switch>
  );
};

export default Routes;
