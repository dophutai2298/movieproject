import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
import { Button, Container } from "@material-ui/core";
import TableDetailCinema from "./TableDetailCinema";

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
  show: {
    display: "block",
  },
  hide: {
    display: "none",
  },
  btnDelete: {
    border: "1px solid #f7b500",
    color: "#f7b500",
    outline: "none",
    fontSize: "18px",
  },
});

export default function TableCinema() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((open) => !open);
  };
  // const handlelDrawer = () => {
  //   setOpen(true);
  // };
  // const handleLink = () => {
  //   setOpen(false);
  // };
  return (
    <TableContainer className={classes.tablecontainer}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Logo</StyledTableCell>
            <StyledTableCell align="center">Mã cụm rạp</StyledTableCell>
            <StyledTableCell align="center">Tên cụm rạp</StyledTableCell>
            <StyledTableCell align="center">Bí danh</StyledTableCell>
            <StyledTableCell align="center">Chi tiết cụm Rạp</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Demo
            </StyledTableCell>
            <StyledTableCell align="center">Demo</StyledTableCell>
            <StyledTableCell align="center">Demo</StyledTableCell>
            <StyledTableCell align="center">Demo</StyledTableCell>

            <StyledTableCell align="center">
              <Button className={classes.btnDelete} onClick={handleToggle}>
                {open ? (
                  <i className="fa fa-angle-down"></i>
                ) : (
                  <i className="fa fa-angle-up"></i>
                )}
              </Button>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>

      <div>
        {open && (
          <>
            <TableDetailCinema />
          </>
        )}
      </div>
    </TableContainer>
  );
}
