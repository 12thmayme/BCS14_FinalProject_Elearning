// import { useQuery } from "@tanstack/react-query";
// import React, { useEffect, useState } from "react";
// import { getCourseList } from "../../../../util/API/Product/ProductAPI";

// const CourseList = () => {
//   const { data, error, isPending } = useQuery({
//     queryKey: ["getCourseList"],
//     queryFn: getCourseList,
//     staleTime: 1000 * 60 * 5,
//     cacheTime: 1000 * 60 * 6,
//   });
//   console.log(data, error, isPending);
//   if (isPending) {
//     return <div>Loading...</div>;
//   } else if (error) {
//     return <div className="alert alert-danger">{error.message}</div>;
//   }
//   return (
//     <section className="course_list">
//       <h2 className="carouse_title">Course List</h2>
//       <div className="row">
//         {data.map((product) => {
//           return (
//             <>
//               <div className="col-3">
//                 <div className="card text-start">
//                   <img
//                     className="card-img-top"
//                     src={product.hinhAnh}
//                     alt="Title"
//                   />
//                   <div className="card-body">
//                     <h4 className="card-title">{product.tenKhoaHoc}</h4>
//                     <p className="card-text">{product.luotXem}</p>
//                   </div>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default CourseList;
