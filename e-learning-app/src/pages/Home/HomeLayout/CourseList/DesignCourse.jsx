import React from "react";
import { getDesignCourse } from "../../../../util/API/Product/ProductAPI";
import { useQuery } from "@tanstack/react-query";
import CourseCarousel from "./CourseCarousel";
const DesignCourse = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["getDesignCourse"],
    queryFn: getDesignCourse,
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
      <h2>Design Course</h2>
      <CourseCarousel data={data} />
    </div>
  );
};

export default DesignCourse;
