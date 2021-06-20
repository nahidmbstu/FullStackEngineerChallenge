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

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

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

const AssignEmployee = () => {
  const [emp, setEmp] = React.useState("");
  const [rev, setRev] = React.useState("");

  const handleSubmit = () => {
    alert("demo review submited");
  };

  return (
    <div className={"assign_container"}>
      <FormControl>
        <label id="demo-simple-select-label">Employee Reviewed</label>
        <Select
          className="select_emp"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={emp}
          onChange={(e) => setEmp(e.target.value)}
        >
          {employees.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <br />
        <label>Reviewer</label>
        <Select
          className="select_emp"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rev}
          onChange={(e) => setRev(e.target.value)}
        >
          {employees.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <br />
        <Button onClick={handleSubmit} variant="contained">
          Assign For Review
        </Button>
      </FormControl>
    </div>
  );
};

export default AssignEmployee;
