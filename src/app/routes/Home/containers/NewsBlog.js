import React, { Component } from "react";
import Article from "app/components/Article";
import ReviewCarousel from "./ReviewCarousel";
class NewsBlog extends Component {
  render() {
    return (
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-9">
            <section className="news-blog">
              <h2 className="heading-secondary pb-4">Tin tức & Blog</h2>
              <div className="row">
                <div className="col-md-6">
                  <Article />
                </div>
                <div className="col-md-6">
                  <Article />
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-3">
            <ReviewCarousel />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsBlog;
