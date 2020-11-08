import Axios from "axios";

export class FilmService {
  //Lấy danh sách phim
  fetchFilm() {
    return Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10",
      method: "GET",
    });
  }

  //Lấy danh sách phim theo ngày
  fetchFilmFollowDay() {
    return Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP10&soTrang=1&soPhanTuTrenTrang=10&tuNgay=20%2F09%2F2020&denNgay=30%2F12%2F2020",
      method: "GET",
    });
  }

  //Lấy chi tiết phim
  fetchFilmDetail(id) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
    });
  }

  //Lấy danh sách carousel
  fetchBannerFilm() {
    return Axios({
      url: "https://5fa04305e21bab0016dfd001.mockapi.io/api/v1/banner",
      method: "GET",
    });
  }

  //Lấy thông tin lịch chiếu phim
  fetchFilmShowTime(id) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
      method: "GET",
    });
  }
}
