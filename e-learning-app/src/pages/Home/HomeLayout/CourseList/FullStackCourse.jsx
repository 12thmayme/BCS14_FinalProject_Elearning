import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getFullTackCourse } from "../../../../util/API/Product/ProductAPI";
import CourseCarousel from "./CourseCarousel";
const FullStackCourse = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["getFullTackCourse"],
    queryFn: getFullTackCourse,
    staleTime: 5 * 60 * 1000,
    cacheTime: 6 * 60 * 1000,
  });
  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div className="alert alert-danger">{error.message}</div>;
  }
  return (
    <div className="container">
      <h2>Full Stack Course</h2>
      <CourseCarousel data={data} />
    </div>
  );
};

export default FullStackCourse;
