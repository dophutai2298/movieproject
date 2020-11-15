import Axios from "axios";

export class AdminService {
  //Lấy danh sách user phân trang
  fetchUserPage(page) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=20`,
      method: "GET",
    });
  }
}
