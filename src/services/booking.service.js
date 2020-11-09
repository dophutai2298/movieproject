import Axios from "axios";
import Swal from "sweetalert2";
export class BookingService {
  fetchTicketRoom(maLichChieu) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    });
  }
}

// ĐẶT VÉ
export function postBookingRequest(maLichChieu, danhSachVe) {
  return async function (dispatch) {
    try {
      // getlocal
      const user = JSON.parse(localStorage.getItem("creadentials"));
      // call api
      const res = await Axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        data: {
          maLichChieu,
          danhSachVe,
          taiKhoanNguoiDung: user.taiKhoan,
        },
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });

      if (res.status === 200 || res.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Login successfully",
        });
      }
    } catch (error) {
      alert("Thcdsfwvrw");
    }
  };
}
