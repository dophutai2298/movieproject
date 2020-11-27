import React, { useState } from "react";
import Swal from "sweetalert2";
import "../../styles/page/booking.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Admin from "../../assets/admin.jpg";
import {
  changeUserInFo,
  fetchInFoBooking,
} from "../../redux/actions/user.action";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function HistorySet(props) {
  let { user } = props;

  const [state, setstate] = useState({
    taiKhoan: user.taiKhoan,
    matKhau: user.matKhau,
    email: user.email,
    soDt: user.soDT,
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",

    hoTen: user.hoTen,
  });
  const classes = useStyles();
  const nguoiDatVe = useSelector((state) => state.userReducer.userInfoBooking);
  const dispatch = useDispatch();
  const renderUserBooking = () => {
    return nguoiDatVe.map((tenPhim, index) => {
      return (
        <TableRow key={index}>
          <TableCell align="center">{tenPhim.tenPhim}</TableCell>
          <TableCell align="center">{tenPhim.ngayDat}</TableCell>
          <TableCell align="center">{tenPhim.thoiLuongPhim}</TableCell>
          <TableCell align="center">{tenPhim.giaVe}</TableCell>
          <TableCell style={{ color: "red" }} align="center">
            <i class="fa fa-trash"></i>
          </TableCell>
        </TableRow>
      );
    });
  };

  function handleChange(event) {
    let { name, value } = event.target;

    setstate({
      ...state,
      [name]: value,
    });
  }
  // xử lí lấy thông tin vé được đặt
  function handleInfoBooking() {
    dispatch(fetchInFoBooking(user.taiKhoan));
  }

  function handleSubmit() {
    // event.preventDefault();
    dispatch(changeUserInFo(state));
  }

  return (
    <div className="book__infoUser" id="thongTin">
      <div className="book__infoUser__logo">
        <div style={{ width: "20%" }}>
          <div className="admin">
            <div className="admin__avata">
              <img src={Admin} alt="admin" />
            </div>
            <div className="admin__sidebar">
              <p>{user.hoTen}</p>
              <ul>
                <li>
                  <Link onClick={handleInfoBooking}>
                    <i className="fa fa-universal-access" />
                    Thông Tin Đặt Vé
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ width: "80%" }}>
          <div className="info">
            <h3>Thông Tin Tài Khoản</h3>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Tài Khoản</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Số Điện Thoại</TableCell>
                    <TableCell align="center">Sửa</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">{user.taiKhoan}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>

                    <TableCell align="center">{user.soDT}</TableCell>
                    <TableCell align="center" style={{ color: "blue" }}>
                      <i
                        type="button"
                        class="btn btn-info btn-lg"
                        data-toggle="modal"
                        data-target="#myModal"
                        class="fa fa-edit"
                      ></i>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
                        disabled
                        id="outlined-basic"
                        onChange={handleChange}
                        name="taiKhoan"
                        value={state.taiKhoan}
                        label="taiKhoan"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        onChange={handleChange}
                        name="matKhau"
                        value={state.matKhau}
                        label="matKhau"
                        variant="outlined"
                      />
                      <TextField
                        disabled
                        id="outlined-basic"
                        onChange={handleChange}
                        name="email"
                        value={state.email}
                        label="email"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        onChange={handleChange}
                        name="soDt"
                        label="soDT"
                        value={state.soDt}
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        onChange={handleChange}
                        name="hoTen"
                        label="hoTen"
                        value={state.hoTen}
                        variant="outlined"
                      />
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
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

            <h3>Thông Tin Đặt Vé</h3>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Tên Phim</TableCell>
                    <TableCell align="center">Ngày Giờ</TableCell>
                    <TableCell align="center">Thời Lượng</TableCell>
                    <TableCell align="center">Giá Vé</TableCell>
                    <TableCell align="center">Hủy</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{renderUserBooking()}</TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
