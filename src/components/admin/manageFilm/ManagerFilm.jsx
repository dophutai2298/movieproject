import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddFilm from "./AddFilm";
import TableFilm from "./TableFilm";

const useStyles = makeStyles({
  input: {
    width: "90%",
  },
});

export default function ManagerFilm() {
  const classes = useStyles();
  return (
    <div className="managerfilm dashboard">
      <h1>Quản lý Phim</h1>
      <div className="managerfilm__action">
        <div className="managerfilm__action--item">
          <TextField
            className={classes.input}
            id="txtSearchName"
            label="Tìm theo Tên Phim"
          />
        </div>
        <div className="managerfilm__action--item">
          <AddFilm />
        </div>
      </div>
      <div className="managerfilm__table">
        <TableFilm />
      </div>
    </div>
  );
}
