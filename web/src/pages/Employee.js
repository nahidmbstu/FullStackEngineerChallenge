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

const Employee = () => {
  const [currentEmp, setCurrentEmp] = React.useState("");
  const [assignReviews, setAssignedReview] = React.useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);

    let filter_review = reviews.filter(
      (emp) => emp.reviewer === event.target.value
    );

    console.log(filter_review);
    setAssignedReview(filter_review);
    setCurrentEmp(event.target.value);
  };
  return (
    <div className="emp_container">
      {currentEmp ? (
        <div>
          <h3>Your Review task </h3>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>review_details</TableCell>
                  <TableCell>reviewer</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {assignReviews.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.emp_name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.review_details}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.reviewer}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.submited ? (
                        "Completed"
                      ) : (
                        <Link to="/">
                          <Button> Submit FeedBack </Button>
                        </Link>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <div>
          <h3>Select Your Name</h3>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Employee name</InputLabel>
            <Select
              className="select_emp"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currentEmp}
              onChange={handleChange}
            >
              {employees.map((item) => (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}
    </div>
  );
};

export default Employee;
