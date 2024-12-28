import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import CustomsIsPending from "../../util/customs/CustomsIsPending";
import { getDetailCourse } from "../../util/API/User/UserApi";
import { showErrorToast } from "../../util/customs/CustomAlert";
const Detail = () => {
  const param = useParams();
  const id = param.productID;
  console.log(id);
  const { data, error, isPending } = useQuery({
    queryKey: ["getDetailCourse", id],
    queryFn: () => getDetailCourse(id),
    enabled: !!id,
  });
  if (isPending) {
    return <CustomsIsPending />;
  }
  if (error) {
    console.log(error);
    return showErrorToast({ error });
  }
  console.log(data);
  return (
    <>
      <section>
        <div className="relative bg-gray-300">
          <img
            className="w-full h-[50vh]"
            src="../public/learning-path-detail-background.png"
            alt=""
          />
        </div>
      </section>
      <h2 className="pt-20 text-3xl">Detail</h2>
    </>
  );
};

export default Detail;
