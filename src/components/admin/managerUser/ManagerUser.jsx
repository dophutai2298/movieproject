import React from "react";
import TableUser from "./TableUser";
import { makeStyles } from "@material-ui/core/styles";
import ModalAdd from "./ModalAdd";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  input: {
    width: "90%",
  },
});

export default function ManagerUser() {
  const classes = useStyles();
  return (
    <div className="manageruser dashboard">
      <h1>Quản lý người dùng</h1>
      <div className="manageruser__action">
        <div className="manageruser__action--item">
          <TextField
            className={classes.input}
            id="txtSearchUser"
            label="Tìm theo Tài khoản"
          />
        </div>
        <div className="manageruser__action--item">
          <TextField
            className={classes.input}
            id="txtSearchName"
            label="Tìm theo Tên"
          />
        </div>
        <div className="manageruser__action--item">
          <ModalAdd />
        </div>
      </div>
      <div className="manageruser__table">
        <TableUser />
      </div>
    </div>
  );
}
