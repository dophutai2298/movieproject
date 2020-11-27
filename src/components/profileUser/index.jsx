import admin from "../../assets/admin.jpg";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import "../../App.scss";

import { changeUserInFo } from "../../redux/actions/user.action";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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
  table: {
    minWidth: 700,
  },
});

export default function ProfileUser() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const profile = useSelector((state) => state.userReducer.credentials);
  const [updateProfile, setUpDateProfile] = useState({
    taiKhoan: profile.taiKhoan,
    matKhau: profile.matKhau,
    email: profile.email,
    soDt: profile.soDT,
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: profile.hoTen,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUpDateProfile({
      ...updateProfile,
      [name]: value,
    });
  }

  function handleSubmit() {
    dispatch(changeUserInFo(updateProfile));
  }

  return (
    <div className="profile">
      <h3>Thông Tin Cá Nhân</h3>
      <div className="profile__content">
        <div className="profile__content__left">
          <div>
            <img src={admin} alt="adminprofile" />
          </div>
          <div>
            <p>{profile.hoTen}</p>
          </div>
        </div>

        <div className="profile__content__right">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Tài Khoản</StyledTableCell>
                  <StyledTableCell align="center">Email</StyledTableCell>
                  <StyledTableCell align="center">
                    Số Điện Thoại
                  </StyledTableCell>
                  <StyledTableCell align="center">Họ Tên</StyledTableCell>
                  <StyledTableCell align="center">Mã nhóm</StyledTableCell>
                  <StyledTableCell align="center">
                    Loại người dùng
                  </StyledTableCell>
                  <StyledTableCell align="center">Sửa</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell align="center">
                    {profile.taiKhoan}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {profile.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {profile.soDT}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {profile.hoTen}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    {profile.maNhom}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {profile.maLoaiNguoiDung}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <i
                      type="button"
                      class="btn btn-info btn-lg"
                      data-toggle="modal"
                      data-target="#myModal"
                      class="fa fa-edit"
                    ></i>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <div class="editProfile">
            <button
              class="btn btn-dark"
              data-toggle="modal"
              data-target="#myModal"
              onClick={() => handleSubmit}
            >
              Sửa thông tin
            </button>
          </div>
          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog" style={{ maxWidth: "550px" }}>
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Sửa Thông Tin</h4>
                  <button
                    type="button"
                    className="close close-dark"
                    data-dismiss="modal"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <TextField
                      id="outlined-basic"
                      onChange={handleChange}
                      name="matKhau"
                      value={updateProfile.matKhau}
                      label="matKhau"
                      variant="outlined"
                    />

                    <TextField
                      id="outlined-basic"
                      onChange={handleChange}
                      name="soDt"
                      label="soDT"
                      value={updateProfile.soDt}
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      onChange={handleChange}
                      name="hoTen"
                      label="hoTen"
                      value={updateProfile.hoTen}
                      variant="outlined"
                    />
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-success"
                    data-dismiss="modal"
                    onClick={() => handleSubmit()}
                  >
                    Lưu
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
