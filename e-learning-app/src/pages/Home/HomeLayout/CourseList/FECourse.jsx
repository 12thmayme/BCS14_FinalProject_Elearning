import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getFECourse,
  getMobileCourse,
} from "../../../../util/API/Product/ProductAPI";
import CourseCarousel from "./CourseCarousel";
const FECourse = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["getFECourse"],
    queryFn: getFECourse,
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
      <h2>Font End Course</h2>
      <CourseCarousel data={data} />
    </div>
  );
};

export default FECourse;
