import Axios from "axios";

export class UserService {
  signIn(user) {
    return Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    });
  }
  signUp(data) {
    return Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data,
    });
  }
  fetchInFoBooking(user) {
    console.log("axios", user);
    return Axios({
      method: "POST",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: {
        taiKhoan: user,
      },
    });
  }
}
