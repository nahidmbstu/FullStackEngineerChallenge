import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Input,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { emp_add } from "./../apis/index";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [deg, setDeg] = useState("");

  useEffect(() => {}, []);

  async function addNewEmp(event) {
    //  prevent auto submit

    event.preventDefault();

    // need to add redux-form or formic to add input validation , Further development

    // payload

    const data = { name, designation: deg };

    fetch(emp_add, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("user added");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className={"emp_add"}>
      <h3>Add Employee</h3>
      <FormControl>
        <TextField
          type="text"
          name="name"
          placeholder={"name"}
          value={name}
          onChange={(event) => setName(event.target.value)}
          id="standard-basic"
          label="name"
        />
        <TextField
          type="text"
          name="Designation"
          placeholder="Designation"
          value={deg}
          onChange={(event) => setDeg(event.target.value)}
          id="standard-basic"
          label="designation"
        />
        <br />
        <Button variant="contained" color="primary" onClick={addNewEmp}>
          Add
        </Button>
      </FormControl>
    </div>
  );
};

export default AddEmployee;
