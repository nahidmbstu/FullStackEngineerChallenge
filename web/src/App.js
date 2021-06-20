import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import the pages here for navigation

import AddEmployee from "./pages/addEmployee";
import Employee from "./pages/Employee";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import SubmitReview from "./pages/submitReview";
import AssignEmployee from "./pages/AssignEmp";

// main navigation of App router, need to implement Authentication, nested navigation etc,

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/submit_review">
            <SubmitReview />
          </Route>
          <Route path="/employee">
            <Employee />
          </Route>
          <Route path="/assign_employee">
            <AssignEmployee />
          </Route>
          <Route path="/add_employee">
            <AddEmployee />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
