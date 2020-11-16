import React from "react";
import Swal from "sweetalert2";
import "../../styles/page/booking.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Admin from "../../assets/admin.jpg";
import { fetchInFoBooking } from "../../redux/actions/user.action";
export default function HistorySet() {
  const nguoiDatVe = useSelector((state) => state.userReducer.userInfoBooking);
  const dispatch = useDispatch();
  const renderUserBooking = () => {
    return nguoiDatVe.map((tenPhim) => {
      return <td>{tenPhim.tenPhim}</td>;
    });
  };

  const renderUserBooking1 = () => {
    return nguoiDatVe.map((phim) => {
      return phim.danhSachGhe.map((ghe, index) => {
        return (
          <tr key={index}>
            <td>{ghe.tenHeThongRap}</td>
            <td>{ghe.tenGhe}</td>
            <td>{ghe.tenRap}</td>
          </tr>
        );
      });
    });
  };

  // lấy thông tin user
  function handleUser() {
    if (JSON.parse(localStorage.getItem("creadentials")) !== "") {
      return JSON.parse(localStorage.getItem("creadentials"));
    } else {
      Swal.fire({
        title: "Bạn chưa đăng nhập tài khoản",
        confirmButtonText: `OK`,
      });
    }
  }

  // xử lí lấy thông tin vé được đặt
  function handleInfoBooking() {
    dispatch(fetchInFoBooking(handleUser().taiKhoan));
  }
  return (
    <div className="book__infoUser">
      <div className="book__infoUser__logo">
        <div className="admin">
          <div className="admin__avata">
            <img src={Admin} alt="admin" />
          </div>
          <div className="admin__sidebar">
            <p>{handleUser() !== null ? handleUser().hoTen : handleUser()}</p>
            <ul>
              <li>
                <Link onClick={handleUser() !== null ? handleInfoBooking : ""}>
                  <i className="fa fa-universal-access" />
                  Thông Tin Đặt Vé
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="info">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th scope="row" colSpan="2">
                  Email
                </th>
                <td colSpan="2">
                  {handleUser() !== null
                    ? handleUser().email
                    : "chưa đăng nhập tài khoảng"}
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan="2">
                  Số điện thoại
                </th>
                <td colSpan="2">
                  {handleUser() !== null
                    ? handleUser().soDT
                    : "chưa đăng nhập tài khoảng"}
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan="4" style={{ textAlign: "center" }}>
                  Thông tin vé
                </th>
              </tr>
              <tr>
                <th>Tên Phim</th>

                {handleUser() !== null ? renderUserBooking() : "chưa có phim"}
              </tr>
              <tr>
                <th>Hệ Thống Rạp</th>
                <th>Số ghế</th>
                <th>Tên Rạp</th>
              </tr>
              {nguoiDatVe.length > 0 ? renderUserBooking1() : "chưa có phim"}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
