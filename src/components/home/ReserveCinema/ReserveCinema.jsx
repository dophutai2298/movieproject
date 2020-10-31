import React, { Component } from "react";
import Branch from "./Branch";
import CinemaReserve from "./CinemaReserve";
import FilmReserve from "./FilmReserve";

class ReserveCinema extends Component {
  render() {
    return (
      <section className="container" id="cumrap">
        <div className="cinema__section">
          {/* branch */}
          <div className="scroll scroll1">
            <Branch />
          </div>
          {/* Cinema */}
          <div className="scroll scroll2">
            <CinemaReserve />
          </div>
          {/* Film */}
          <div className="scroll scroll3">
            <FilmReserve />
          </div>
        </div>
      </section>
    );
  }
}

export default ReserveCinema;
