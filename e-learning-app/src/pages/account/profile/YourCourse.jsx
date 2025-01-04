import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import React from "react";
import {
  cancelCourse,
  getDetailCourse,
} from "../../../util/API/Product/ProductAPI";
import CustomsIsPending from "../../../util/customs/CustomsIsPending";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../util/customs/CustomAlert";
import { localService } from "../../../api/localService";

const YourCourse = (props) => {
  const { chiTietKhoaHocGhiDanh } = props.data;
  const queryClient = useQueryClient();

  const codeCourseList = chiTietKhoaHocGhiDanh?.map((item) => item.maKhoaHoc);

  const courseQueries = useQueries({
    queries: codeCourseList.map((maKhoaHoc) => ({
      queryKey: ["getDetailCourse", maKhoaHoc],
      queryFn: () => getDetailCourse(maKhoaHoc),
      enabled: !!maKhoaHoc,
    })),
  });

  const mutation = useMutation({
    mutationFn: (values) => cancelCourse(values),
    onSuccess: () => {
      showSuccessToast("Course cancel successfully!");
      queryClient.invalidateQueries({ queryKey: ["getDetailCourse"] }); // Làm mới dữ liệu
    },
    onError: (err) => {
      showErrorToast({ error: err.message });
    },
  });

  const isPending = courseQueries.some((query) => query.isPending);
  const hasError = courseQueries.some((query) => query.error);

  if (isPending) {
    return <CustomsIsPending />;
  }

  if (hasError) {
    const error = courseQueries.find((query) => query.error)?.error;
    console.log(error);
    return showErrorToast({ error });
  }
  const user = localService.getUser();
  const handleCancelCourse = (maKhoaHoc) => {
    mutation.mutate({
      maKhoaHoc,
      taiKhoan: user?.taiKhoan,
    });
  };

  return (
    <div className="mt-10">
      <h2>
        Your <span>Courses</span>
      </h2>
      <table width="100%">
        <thead>
          <tr>
            <th style={styles.th}>#</th>
            <th style={styles.th}>Course Name</th>
            <th style={styles.th}>Course ID</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courseQueries.map((result, index) => (
            <tr key={codeCourseList[index]} style={styles.tr}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{result.data?.tenKhoaHoc || "N/A"}</td>
              <td style={styles.td}>{result.data?.maKhoaHoc || "N/A"}</td>
              <td style={styles.td}>
                <button style={styles.button}>View Details</button>
                <button
                  style={styles.buttonDelete}
                  onClick={() => handleCancelCourse(result.data?.maKhoaHoc)}
                >
                  Delete Course
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  th: {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
  },
  tr: {
    ":nth-child(even)": {
      backgroundColor: "#f9f9f9",
    },
  },
  button: {
    padding: "5px 10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonDelete: {
    marginLeft: "5px",
    padding: "5px 10px",
    backgroundColor: "#FF0033",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default YourCourse;
