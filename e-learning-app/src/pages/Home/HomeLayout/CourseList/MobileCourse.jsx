import React from "react";
import { useQuery } from "@tanstack/react-query";
import CourseCarousel from "./CourseCarousel";
import { getMobileCourse } from "../../../../util/API/Product/ProductAPI";
const MobileCourse = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["getMobileCourse"],
    queryFn: getMobileCourse,
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
      <h2>Mobile Course</h2>
      <CourseCarousel data={data} />
    </div>
  );
};

export default MobileCourse;
