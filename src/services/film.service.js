import Axios from "axios";

export class FilmService {
  fetchFilm() {
    return Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10",
      method: "GET",
    });
  }
  fetchFilmFollowDay() {
    return Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP10&soTrang=1&soPhanTuTrenTrang=10&tuNgay=20%2F09%2F2020&denNgay=30%2F12%2F2020",
      method: "GET",
    });
  }
  fetchFilmDetail(id) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
    });
  }
  fetchBannerFilm() {
    return Axios({
      url: "https://5fa04305e21bab0016dfd001.mockapi.io/api/v1/banner",
      // method: "GET",
    });
  }
}
