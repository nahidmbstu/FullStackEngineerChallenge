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
import { emp_list, review_list } from "./../apis/index";

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

const Admin = () => {
  const [emp, setEmp] = useState(employees);
  const [revs, setRevs] = useState(reviews);

  useEffect(() => {
    getEmployes();
    getReviews();
  }, []);

  async function getEmployes() {
    let req = await fetch(emp_list);
    console.log(req);

    let data = await req.json();
    console.log(data);
    setEmp(data);
  }

  async function getReviews() {
    let req = await fetch(review_list);
    console.log(req);

    let data = await req.json();
    console.log(data);
    setRevs(data);
  }

  return (
    <div className={"admin_con"}>
      <div className="left-menu">
        <Link to="/add_employee">
          <Button>Add Employee</Button>
        </Link>
        <Link to="/assign_employee">
          <Button>Assign employees For Review</Button>
        </Link>
      </div>
      <div className="right-content">
        <div className="row">
          <h3>Employee List</h3>
        </div>
        <br />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>designation</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {emp.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.designation}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Button>update</Button>
                    <Button>delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <h3>Reviews</h3>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>review_details</TableCell>
                <TableCell>reviewer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {revs.map((row) => (
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Admin;
