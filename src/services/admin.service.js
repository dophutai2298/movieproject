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
    const users = JSON.parse(localStorage.getItem("creadentials"));
    return Axios({
      method: "POST",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data,
      headers: {
        Authorization: `Bearer ${users.accessToken}`,
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
      method: "PUT",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",

      data,
      headers: {
        Authorization: `Bearer ${users.accessToken}`,
      },
    });
  }

  //Tìm kiếm User
  searchUser(keyword) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP08&tuKhoa=${keyword}`,
      method: "GET",
    });
  }

  //Tìm phim
  searchFilm(keyword) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10&tenPhim=${keyword}`,
      method: "GET",
    });
  }

  //Thêm phim
  addFilm(data) {
    const users = JSON.parse(localStorage.getItem("creadentials"));
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim`,
      method: "POST",
      data,
      headers: {
        Authorization: `Bearer ${users.accessToken}`,
      },
    });
  }

  deleteMovie(id) {
    const users = JSON.parse(localStorage.getItem("creadentials"));
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${users.accessToken}`,
      },
    });
  }

  //Upload hình phim
  uploadImage() {
    return Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim",
      method: "POST",
    });
  }
}
