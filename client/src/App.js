import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewEditLog from "./pages/NewEditLog";
import Profile from "./pages/DiverProfile";
import Social from "./pages/SocialHome";
import Login from "./pages/Login";
import Certs from "./pages/EditCerts";
import Acct from "./pages/CreateEditAcct";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={NewEditLog} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/log/:id" component={NewEditLog} />
        <Route exact path="/social" component={Social} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Acct" component={Acct} />
        <Route exact path="/certs" component={Certs} />
        {/*Non-Specific Links for Editing Pages to be removed later*/}
        <Route exact path="/log" component={NewEditLog} />
      </Switch>
    </div>
  </Router>
);

export default App;
