/* src/App.js */
import React from "react";
import Amplify from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import awsExports from "./aws-exports";
import Dashboard from "./components/dashboard/dashboard";
import AppBar from "@material-ui/core/AppBar";
import { Grid } from "@material-ui/core";

Amplify.configure(awsExports);

const renderAppBar = () => {
  return (
    <AppBar position="static">
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        style={{
          backgroundColor: `rgb(232,232,238)`,
          background: `linear-gradient(90deg, rgba(232,232,238,1) 0%, rgba(37,210,40,1) 0%, rgba(157,140,4,1) 72%, rgba(255,153,0,1) 85%)`,
        }}
      >
        <AmplifySignOut />
      </Grid>
    </AppBar>
  );
};
const App = () => {
  return (
    <div>
      {renderAppBar()}

      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default withAuthenticator(App);
