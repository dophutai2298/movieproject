import React, { Component } from "react";
import NewsFilm from "./NewsFilm";

class News extends Component {
  render() {
    return (
      <section className="container" id="tintuc">
        <div className="news__section">
          <div className="news__section--title">
            <span data-filter=".dienanh" className="active">
              Tin tức
            </span>
          </div>
          <div className="news__section--content">
            <div className="news__content--detail">
              <NewsFilm />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
