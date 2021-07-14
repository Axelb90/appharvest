/* src/App.js */
import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const App = () => (
  <div>
    <AmplifySignOut />
    My App
  </div>
);
export default withAuthenticator(App);
