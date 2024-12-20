import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../sass/layout/_CourseCarousel.scss";

const CourseCarousel = (props) => {
  const { data } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {data.map((data) => (
          <div key={data.maKhoaHoc} className="course-card">
            <img
              src={data.hinhAnh}
              alt={data.tenKhoaHoc}
              className="course-image"
            />
            <div className="course-info">
              <h3 className="course-title">{data.tenKhoaHoc}</h3>
              <p className="course-author">View: {data.luotXem}</p>
              <p className="course-category">
                {data.danhMucKhoaHoc.tenDanhMucKhoaHoc}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseCarousel;
