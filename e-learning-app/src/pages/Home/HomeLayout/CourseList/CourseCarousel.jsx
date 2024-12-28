import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { BsXLg } from "react-icons/bs";
import FallbackImage from "./FallbackImage";
import { NavLink } from "react-router-dom";

const CourseCarousel = (props) => {
  const { data } = props;
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600"
        onClick={onClick}
      >
        <FaAngleRight />
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600"
        onClick={onClick}
      >
        <FaAngleLeft />
      </button>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div className="container mx-auto px-4 py-8">
      <Slider {...settings}>
        {data?.map((course) => (
          <div key={course.maKhoaHoc} className="p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <FallbackImage
                src={
                  course.hinhAnh
                    ? course.hinhAnh
                    : "./public/fontend_image.jpeg"
                }
                alt={course.tenKhoaHoc}
                className="w-full h-48 object-cover"
              />
              <NavLink to={`/detail/${course.maKhoaHoc}`} className="p-4 block">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {course.tenKhoaHoc}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>View:</strong> {course.luotXem}
                </p>
                <p className="text-sm text-gray-600">
                  {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                </p>
              </NavLink>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseCarousel;
