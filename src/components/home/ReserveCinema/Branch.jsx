import React, { Component } from "react";

class Branch extends Component {
  render() {
    const { cinema } = this.props;
    const { cinemaInfo } = this.props;
    return (
      <div
        className="cinema__section--logo active"
        onClick={cinemaInfo.maHeThongRap}
      >
        <button>
          <img src={cinema.logo} alt />
        </button>
      </div>
    );
  }
}

export default Branch;
