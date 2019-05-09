import React from "react";
import introImageLeft from "images/home-page/intro-left.jpg";
import introImageRight from "images/home-page/intro-right.png";

const Intro = () => {
  return (
    <section className="intro">
      <img
        className="intro__image intro__image--left"
        src={introImageLeft}
        alt=""
      />
      <img
        className="intro__image intro__image--right"
        src={introImageRight}
        alt=""
      />
      <div className="container">
        <h2 className="heading-secondary">Giới thiệu</h2>
        <div className="intro__description">
          <p>
            Mriure dolor in hendrerit in vulputate velit esse molestie
            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
            et accumsan et iusto odio dignissim qui blandit praesent luptatum
            zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber
            tempor cum soluta nobis eleifend option congue nihil imperdiet
            doming id quod mazim placerat facer possim assum. Typi non habent
            claritatem insitam; est usus legentis in iis qui faciteorum
            claritatem. Investigtiones demonstraverunt lectores legere me lius
            quod ii legunt saepius.Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam
            littera gothica, quam nunc putam
          </p>
          <button className="btn btn-primary">xem thêm</button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
