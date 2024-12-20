import React from "react";
import { getThinkingCourse } from "../../../../util/API/Product/ProductAPI";
import { useQuery } from "@tanstack/react-query";
import CourseCarousel from "./CourseCarousel";
const ProgrammingThinkingCourse = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["getThinkingCourse"],
    queryFn: getThinkingCourse,
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
      <h2>Thinking Course</h2>
      <CourseCarousel data={data} />
    </div>
  );
};

export default ProgrammingThinkingCourse;
