import React, { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { makeStyles } from "@material-ui/core/styles";
import ModalAdd from "./ModalAdd";
import { TextField, Button } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPage, searchUser } from "../../../redux/actions/admin.action";
import Swal from "sweetalert2";
const useStyles = makeStyles({
  input: {
    width: "70%",
    height: "50px",
  },
  btnSearch: {
    height: "60px",
  },
});

export default function ManagerUser() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.adminReducer.listUser);
  const notify = useSelector((state) => state.adminReducer.notify);
  const search = useSelector((state) => state.adminReducer.searchUser);
  useEffect(() => {
    dispatch(fetchUserPage(1));
  }, []);

  const [key, setKey] = useState("");
  const handleChangeSearch = (event) => {
    let key = event.target.value;
    setKey(key);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchUser(key));
  };
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    if (notify === "Xóa thành công!") {
      dispatch(fetchUserPage(page));
    }
  }, [notify]);
  if (page === 1) {
    dispatch(fetchUserPage(1));
  }

  const renderPagination = () => {
    if (search.length < 1) {
      return (
        <div className="manager__pagination">
          <Pagination
            count={listUser.totalPages}
            page={page}
            onClick={() => {
              dispatch(fetchUserPage(page));
            }}
            color="primary"
            onChange={handleChange}
          />
        </div>
      );
    }
  };

  return (
    <div className="manageruser dashboard">
      <h1>Quản lý người dùng</h1>
      <div className="manageruser__action">
        <div className="manageruser__action--item">
          <TextField
            className={classes.input}
            onChange={handleChangeSearch}
            value={key}
            id="txtSearchUser"
            label="Tìm kiếm..."
          />
          <Button onClick={handleSearch} className={classes.btnSearch}>
            <i
              className="fa fa-search"
              style={{ fontSize: "16px", color: "#4a90e2" }}
            ></i>
          </Button>
        </div>

        <div className="manageruser__action--item">
          <ModalAdd />
        </div>
      </div>
      <div className="manageruser__table">
        <Typography>
          <TableUser listUser={listUser} search={search} />
        </Typography>
      </div>
      {renderPagination()}
    </div>
  );
}
