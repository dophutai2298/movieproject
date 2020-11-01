import Axios from "axios";

export class CinemaService {
  fetchCinemaSystem() {
    return Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    });
  }
  fetchCinemaInfoInSystem(id) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`,
      method: "GET",
    });
  }
}
