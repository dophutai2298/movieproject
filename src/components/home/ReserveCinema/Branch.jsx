import React, { Component } from "react";

class Branch extends Component {
  render() {
    return (
      <div className="cinema__section--branch">
        <div className="cinema__section--logo active">
          <span className="btn_cgv">
            <img src="./images/branch1.png" alt />
          </span>
        </div>
        <div className="cinema__section--logo">
          <span className="btn_galaxy">
            <img src="./images/branch2.png" alt />
          </span>
        </div>
        <div className="cinema__section--logo">
          <span className="btn_lotte">
            <img src="./images/branch3.png" alt />
          </span>
        </div>
        <div className="cinema__section--logo">
          <span className="btn_bhd">
            <img src="./images/branch4.png" alt />
          </span>
        </div>
      </div>
    );
  }
}

export default Branch;
