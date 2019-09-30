import React from "react";
import { useEffect } from "react";
import { FocusStyleManager } from "@blueprintjs/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllMessages } from "../actions/messages";
import { Header } from "./molecules/header/header";
import { Inbox } from "./pages/inbox";
import { EditMessage } from "./pages/editMessage";
import { Pages } from "../constants/pages";

FocusStyleManager.onlyShowFocusOnTabs();

function App({ dispatch }) {
  // only run fetchAllMessages when app did mount
  // we don't want to run it when app unmounts so
  // we pass an empty array of dependencies
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    dispatch(fetchAllMessages());
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <Router>
      <Header pages={Pages}></Header>
      <Route exact path="/" component={Inbox}></Route>
      <Route exact path="/compose" component={EditMessage}></Route>
    </Router>
  );
}

export default connect()(App);
