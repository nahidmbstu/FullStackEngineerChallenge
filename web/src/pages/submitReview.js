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

// import the pages here for navigation

const SubmitReview = () => {
  return (
    <div>
      <TextField id="standard-basic" label="Standard" multiline rowsMax={4} />
      <Button variant="outlined" color="primary">
        Submit
      </Button>
    </div>
  );
};

export default SubmitReview;
