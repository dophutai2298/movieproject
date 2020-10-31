import React, { Component } from "react";

class NewsKhuyenMai extends Component {
  render() {
    return (
      <div>
        <div className="news__content--large">
          <div className="news__large--1">
            <a href>
              <div className="news__large--img">
                <img src="./images/km1.jpg" alt />
              </div>
              <p className="news__large--title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, inventore.
              </p>
              <p className="news__large--detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem necessitatibus aspernatur magnam veniam doloribus
                quia officiis error, aperiam rerum? Quas, sint totam! Numquam,
                eum iusto!
              </p>
            </a>
          </div>
          <div className="news__large--1">
            <a href>
              <div className="news__large--img">
                <img src="./images/km2.png" alt />
              </div>
              <p className="news__large--title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, inventore.
              </p>
              <p className="news__large--detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem necessitatibus aspernatur magnam veniam doloribus
                quia officiis error, aperiam rerum? Quas, sint totam! Numquam,
                eum iusto!
              </p>
            </a>
          </div>
        </div>
        <div className="new__content--medium">
          <div className="news__medium--1">
            <a href>
              <div className="news__medium--img">
                <img src="./images/km3.jpg" alt />
              </div>
              <p className="news__medium--title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, inventore.
              </p>
              <p className="news__medium--detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem necessitatibus aspernatur magnam veniam doloribus
                quia officiis error, aperiam rerum? Quas, sint totam! Numquam,
                eum iusto!
              </p>
            </a>
          </div>
          <div className="news__medium--1">
            <a href>
              <div className="news__medium--img">
                <img src="./images/km4.jpg" alt />
              </div>
              <p className="news__medium--title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, inventore.
              </p>
              <p className="news__medium--detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem necessitatibus aspernatur magnam veniam doloribus
                quia officiis error, aperiam rerum? Quas, sint totam! Numquam,
                eum iusto!
              </p>
            </a>
          </div>
          <div className="news__medium--1">
            <a href>
              <div className="news__medium--img">
                <img src="./images/km5.jpg" alt />
              </div>
              <p className="news__medium--title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, inventore.
              </p>
              <p className="news__medium--detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem necessitatibus aspernatur magnam veniam doloribus
                quia officiis error, aperiam rerum? Quas, sint totam! Numquam,
                eum iusto!
              </p>
            </a>
          </div>
        </div>
        <div className="news__btn--view">
          <button className="btn--view viewMore" id="viewMore">
            Xem thêm
          </button>
          <button className="btn--view hideNews" id="hideNews">
            Thu gọn
          </button>
        </div>
      </div>
    );
  }
}

export default NewsKhuyenMai;
