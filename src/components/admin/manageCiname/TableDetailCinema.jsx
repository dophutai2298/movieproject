import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
import { Button, Container } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#fafafa",
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  tablecontainer: {
    width: "100%",
  },
  table: {
    width: "94%",
    marginLeft: "3%",
  },
  btnUpdate: { border: "1px solid #3e515d", color: "#3e515d" },
  btnDelete: { border: "1px solid #f7b500", color: "#f7b500" },
});

export default function TableDetailCinema() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tablecontainer}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Tên cụm rạp</StyledTableCell>
            <StyledTableCell align="center">Địa chỉ</StyledTableCell>
            <StyledTableCell align="center">Chức năng</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Demo
            </StyledTableCell>
            <StyledTableCell align="center">Demo</StyledTableCell>

            <StyledTableCell align="center">
              <Button className={classes.btnUpdate}>Phim chiếu</Button>
              <Button className={classes.btnDelete}>Thông tin Rạp</Button>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}