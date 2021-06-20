import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  TextField,
  Card,
  CardContent,
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const reviews = [
  {
    id: 2,
    emp_name: "jhon",
    reviewer: "fang",
    review_details: "",
    time: Date.now(),
    submited: false,
  },
  {
    id: 3,
    emp_name: "jhon",
    reviewer: "xio",
    review_details: "he is a good worker",
    time: Date.now(),
    submited: true,
  },
  {
    id: 4,
    emp_name: "jhon",
    reviewer: "yang",
    review_details: "he is a good worker",
    time: Date.now(),
    submited: true,
  },
];

const employees = [
  { id: 1, name: "dan", designation: "developer" },
  { id: 2, name: "fang", designation: "developer" },
  { id: 3, name: "xio", designation: "developer" },
  { id: 4, name: "yang", designation: "developer" },
];

const Home = () => (
  <div>
    <div className="Landing_container">
      <div className={"display_container"}>
        <h3> Smart Review </h3>
        <h2 style={{ fontSize: "64px" }}>Write Review to Work Smarter !</h2>

        <Button variant="contained" color="secondary">
          View Demo
        </Button>
      </div>
      <div className={"action_container"}>
        <Link to="/admin">
          <Button variant="contained" color="primary" id={"action_button_one"}>
            Admin Login
          </Button>
        </Link>
        <Link to="/employee">
          <Button variant="outlined" color="primary" id={"action_button_two"}>
            Employees Login
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
