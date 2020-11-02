import React, { Component } from "react";
import Advertise from "../../components/home/Advertise";
import Carousel from "../../components/home/Carousel";
import Line from "../../components/home/Line";
import ListFilm from "../../components/listfilm/ListFilm";
import News from "../../components/home/News/News";
import ReserveCinema from "../../components/home/ReserveCinema/ReserveCinema";

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <ListFilm />
        <Line />
        <ReserveCinema />
        <Line />
        <News />
        <Advertise />
      </div>
    );
  }
}

export default HomeScreen;
