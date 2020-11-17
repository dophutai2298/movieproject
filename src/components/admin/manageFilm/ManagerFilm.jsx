import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddFilm from "./AddFilm";
import TableFilm from "./TableFilm";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  input: {
    width: "90%",
  },
});

export default function ManagerFilm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="managerfilm dashboard">
      <h1>Quản lý Phim</h1>
      <div className="managerfilm__action">
        <div className="managerfilm__action--item">
          <TextField
            className={classes.input}
            id="key"
            onChange={handleChange}
            value={value}
            label="Tìm kiếm..."
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
