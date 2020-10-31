import React, { Component } from "react";

class Review extends Component {
  render() {
    return (
      <div className="introduce__title1__content2">
        <div className="avaluate">
          <div className="media media-comment">
            <div className="media-avatar">
              <img src="./images/film1.png" alt />
            </div>

            <div className="media-body">
              <h3>Tây</h3>
              <div className="media-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam, possimus! Quibusdam voluptas quisquam debitis quam?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
