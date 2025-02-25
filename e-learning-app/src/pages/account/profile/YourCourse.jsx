import {
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useMemo } from "react";
import { FaRegEye, FaRegTrashCan } from "react-icons/fa6";
import { localService } from "../../../api/localService";
import {
  cancelCourse,
  getDetailCourse,
} from "../../../util/API/Product/ProductAPI";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../util/customs/CustomAlert";
import CustomsIsPending from "../../../util/customs/CustomsIsPending";
import { NavLink, useNavigate } from "react-router-dom";
import { getInfo } from "../../../util/API/User/UserApi";

const YourCourse = () => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["getInfo"],
    queryFn: getInfo,
    staleTime: 0,
  });

  if (isLoading) return <CustomsIsPending />;
  if (error) return <div className="alert alert-danger">{error.message}</div>;

  const codeCourseList = useMemo(
    () => data?.chiTietKhoaHocGhiDanh?.map((item) => item.maKhoaHoc) || [],
    [data]
  );

  const courseQueries = useQueries({
    queries: codeCourseList.map((maKhoaHoc) => ({
      queryKey: ["getDetailCourse", maKhoaHoc],
      queryFn: () => getDetailCourse(maKhoaHoc),
      enabled: !!maKhoaHoc,
    })),
  });

  const mutation = useMutation({
    mutationFn: (values) => cancelCourse(values),
    onSuccess: (_, variables) => {
      showSuccessToast("Cancel course successfully!");
      queryClient.invalidateQueries(["getInfo"]);
    },
    onError: (err) => {
      showErrorToast(err.message || "Cancel course failed!");
    },
  });

  const isPending = courseQueries.some((query) => query.isLoading);
  const hasError = courseQueries.some((query) => query.error);

  if (isPending) return <CustomsIsPending />;
  if (hasError) {
    return (
      <div className="alert alert-danger">
        {courseQueries.find((query) => query.error)?.error.message ||
          "Error loading course datac!"}
      </div>
    );
  }

  const user = localService.getUser();

  const handleCancelCourse = (maKhoaHoc) => {
    mutation.mutate({
      maKhoaHoc,
      taiKhoan: user?.taiKhoan,
    });
  };

  return (
    <div className="mx-auto md:mt-5 w-[100%] ">
      <h2 className="pb-3 lg:pb-5">
        Your <span>Courses</span>
      </h2>

      {codeCourseList.length === 0 ? (
        <p className="text-center text-gray-500 mt-2 md:mt-5 lg:text-xl">
          You have not registered for any course...
        </p>
      ) : (
        <table className="w-full lg:w-[90%] mx-auto">
          <thead>
            <tr className="text-sm">
              <th className={styles.th}>#</th>
              <th className={styles.th}>Course Name</th>
              <th className={styles.th}>Course ID</th>
              <th className={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courseQueries.map((result, index) => (
              <tr key={codeCourseList[index]} className={styles.tr}>
                <td className={styles.td}>{index + 1}</td>
                <td className={styles.td}>
                  {result.data?.tenKhoaHoc || "N/A"}
                </td>
                <td className={styles.td}>{result.data?.maKhoaHoc || "N/A"}</td>
                <td className="text-sm md:text-base lg:text-lg flex justify-center items-center border-b-2 py-2">
                  <NavLink
                    to={`/detail/${result.data?.maKhoaHoc}`}
                    className={styles.button}
                  >
                    <FaRegEye />
                  </NavLink>
                  <button
                    className={styles.buttonDelete}
                    onClick={() => handleCancelCourse(result.data?.maKhoaHoc)}
                  >
                    <FaRegTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  th: "bg-gray-100 p-2 border border-gray-300 text-left text-sm md:text-base lg:text-lg",
  td: "p-2 border border-gray-300 text-xs md:text-sm lg:text-base",
  tr: "odd:bg-white even:bg-gray-100",
  button:
    "px-3 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600",
  buttonDelete:
    "ml-2 px-3 py-2 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700",
};

export default YourCourse;
