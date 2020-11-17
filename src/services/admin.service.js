import Axios from "axios";

export class AdminService {
  //Lấy danh sách user phân trang
  fetchUserPage(page) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP08&soTrang=${page}&soPhanTuTrenTrang=8`,
      method: "GET",
    });
  }

  //Thêm người dùng
  addUser(data) {
    const user = JSON.parse(localStorage.getItem("creadentials"));
    return Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
  }

  //Xóa người dùng
  deleteUser(user) {
    const users = JSON.parse(localStorage.getItem("creadentials"));
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${users.accessToken}`,
      },
    });
  }

  //Cập nhật thông tin người dùng
  updateUser(data) {
    const users = JSON.parse(localStorage.getItem("creadentials"));
    return Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data,
      headers: {
        Authorization: `Bearer ${users.accessToken}`,
      },
    });
  }

  //Tìm kiếm
  searchUser(keyword) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP08&tuKhoa=${keyword}`,
      method: "GET",
    });
  }
}
