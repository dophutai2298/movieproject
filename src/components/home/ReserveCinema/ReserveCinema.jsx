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
    const { cinemaInfo } = this.props;
    console.log(cinemaList.maHeThongRap);
    return cinemaList.map((cinema, index) => {
      return (
        <div key={index}>
          <Branch cinema={cinema} cinemaInfo={cinemaInfo} />
        </div>
      );
    });
  };
  renderCinemaReserse = (id) => {
    const { cinemaInfo } = this.props;

    return cinemaInfo.map((cinameInfo, index) => {
      return (
        <div key={index}>
          <CinemaReserve cinameInfo={cinameInfo} />
        </div>
      );
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
            {this.renderCinemaReserse(this.props.cinemaList.maHeThongRap)}
          </div>
          {/* Film */}
          <div className="scroll scroll3">
            <FilmReserve />
          </div>
        </div>
      </section>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCinemaSystem());
    this.props.dispatch(fetchCinemaInfoInSystem());
  }
}

const mapStateToProps = (state) => {
  return {
    cinemaList: state.cinemaReducer.cinemaList,
    cinemaInfo: state.cinemaReducer.cinemaInfo,
  };
};
export default connect(mapStateToProps)(ReserveCinema);
