import React, { Component } from "react";
import Branch from "./Branch";
import CinemaReserve from "./CinemaReserve";
import FilmReserve from "./FilmReserve";
import { connect } from "react-redux";
import {
  fetchCinemaInfoInSystem,
  fetchCinemaSystem,
} from "../../../redux/actions/cinema.action";

class ReserveCinema extends Component {
  renderBranch = () => {
    const { cinemaList } = this.props;
    return cinemaList.map((cinema, index) => {
      return (
        <div key={index}>
          <Branch cinema={cinema} />
        </div>
      );
    });
  };
  renderCinemaReserse = () => {
    const { cinemaInfo } = this.props;
    if (cinemaInfo.length < 1) {
      return (
        <div className="cinema__rap--detail ">
          <div className="cimena__rap--titile">
            <p>
              <span style={{ fontSize: "18px" }}>
                Vui lòng chọn Hệ thống Rạp !!!
              </span>
            </p>
          </div>
        </div>
      );
    }
    return cinemaInfo.map((cinemaInfo, index) => {
      return (
        <div key={index}>
          <CinemaReserve cinemaInfo={cinemaInfo} />
        </div>
      );
    });
  };

  renderFilm = () => {
    const { movieFowllowCinema } = this.props;

    if (movieFowllowCinema.length < 1) {
      return (
        <div className="cinema__section--film">
          <p
            style={{
              color: "#fb4226",
              fontSize: "18px",
              fontWeight: " 700",
              marginLeft: "2%",
            }}
          >
            Vui lòng chọn Hệ thống Rạp !!!
          </p>
        </div>
      );
    }
    return movieFowllowCinema.map((movie, index) => {
      console.log("ten:", movie.tenHeThongRap.lstCumRap);
      // return movie.tenHeThongRap.lstCumRap.map((item, index) => {
      //   <div>{item.maCumRap}</div>;
      // });
      // return (
      //   <div key={index}>
      //     <p>DS:{movie.tenHeThongRap}</p>
      //     <FilmReserve movie={movie} />
      //   </div>
      // );
    });
  };
  render() {
    return (
      <section className="container" id="cumrap">
        <div className="cinema__section">
          {/* branch */}
          <div className="scroll scroll1">
            <div className="cinema__section--branch">{this.renderBranch()}</div>
          </div>
          {/* Cinema */}
          <div className="scroll scroll2">
            <div className="cinema__section--rap">
              {this.renderCinemaReserse()}
            </div>
          </div>
          {/* Film */}
          <div className="scroll scroll3">
            <div className="cinema__section--film">{this.renderFilm()}</div>
          </div>
        </div>
      </section>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCinemaSystem());
    this.props.dispatch(
      fetchCinemaInfoInSystem(this.props.cinemaList.maHeThongRap)
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //Danh sách hệ thống rạp
    cinemaList: state.cinemaReducer.cinemaList,

    //Danh sách cụm hệ thống rạp
    cinemaInfo: state.cinemaReducer.cinemaInfo,

    //Danh sách phim theo cụm rạp
    movieFowllowCinema: state.cinemaReducer.movieFowllowCinema,
  };
};
export default connect(mapStateToProps)(ReserveCinema);
