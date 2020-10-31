import React, { Component } from "react";

class NewsFilm extends Component {
  render() {
    return (
      <div>
        <div className="news__content--large">
          <div className="news__large--1">
            <a href>
              <div className="news__large--img">
                <img src="./images/tindienanh1.png" alt />
              </div>
              <p className="news__large--title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, inventore.
              </p>
              <p className="news__large--detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem necessitatibus...
              </p>
            </a>
          </div>
          <div className="news__large--1">
            <a href>
              <div className="news__large--img">
                <img src="./images/tindienanh2.png" alt />
              </div>
              <p className="news__large--title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, inventore.
              </p>
              <p className="news__large--detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem necessitatibus...
              </p>
            </a>
          </div>
        </div>
        <div className="new__content--medium">
          <div className="news__medium--1">
            <a href>
              <div className="news__medium--img">
                <img src="./images/tindienanh3.png" alt />
              </div>
              <p className="news__medium--title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, inventore.
              </p>
              <p className="news__medium--detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem necessitatibus ...
              </p>
            </a>
          </div>
          <div className="news__medium--1">
            <a href>
              <div className="news__medium--img">
                <img src="./images/tindienanh4.png" alt />
              </div>
              <p className="news__medium--title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, inventore.
              </p>
              <p className="news__medium--detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem necessitatibus ...
              </p>
            </a>
          </div>
          <div className="news__medium--1">
            <a href>
              <div className="news__medium--img">
                <img src="./images/tindienanh5.png" alt />
              </div>
              <p className="news__medium--title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, inventore.
              </p>
              <p className="news__medium--detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem necessitatibus ...
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

export default NewsFilm;
