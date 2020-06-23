import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";

const useStyles = makeStyles({
  table: {
    minWidth: 750,
  },
});

function createData(quizname, analysequiz, editquiz, deletequiz) {
  return { quizname, analysequiz, editquiz, deletequiz };
}

const rows = [
  createData("Quiz 1", "Analyse", "Edit", "Delete"),
  createData("Quiz 2", "Analyse", "Edit", "Delete"),
  createData("Quiz 3", "Analyse", "Edit", "Delete"),
  createData("Quiz 4", "Analyse", "Edit", "Delete"),
  createData("Quiz 5", "Analyse", "Edit", "Delete"),
];

export default function ViewClass() {
  const classes = useStyles();

  return (
    <div className="pt-3 pb-3">
      <div className="pb-3 d-flex justify-content-center">
        <Button variant="primary">Create Quiz</Button>
      </div>
      <div className="container p-0">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Quiz List</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.quizname}>
                  <TableCell component="th" scope="row">
                    {row.quizname}
                  </TableCell>
                  <TableCell align="right" style={{ color: "Blue" }}>
                    <Link to="/viewclass">{row.analysequiz}</Link>
                  </TableCell>
                  <TableCell align="right" style={{ color: "Blue" }}>
                    <Link to="/viewclass">{row.editquiz}</Link>
                  </TableCell>
                  <TableCell align="left" style={{ color: "Blue" }}>
                    <Link to="/viewclass">{row.deletequiz}</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
