import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import Alert from "../../components/Alert";

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [courseData, setCourseData] = useState({
    maKhoaHoc: "",
    tenKhoaHoc: "",
    moTa: "",
    ngayTao: "",
    luotXem: 0,
    danhMucKhoaHoc: { maDanhMucKhoahoc: "default", tenDanhMucKhoaHoc: "" },
    maNhom: "GP01",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "", show: false });

  useEffect(() => {
    loadCourses();
  }, []);

  // Fetch course list from API
  const loadCourses = async () => {
    try {
      const response = await api.getCourseList();
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      showAlert("error", "Failed to fetch courses.");
    }
  };

  // Handle input changes in the modal form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  // Show alert
  const showAlert = (type, message) => {
    setAlert({ type, message, show: true });
    setTimeout(() => setAlert({ ...alert, show: false }), 3000);
  };

  // Open modal for adding or editing a course
  const openModal = (course = null) => {
    if (course) {
      setCourseData(course);
      setIsEditing(true);
    } else {
      resetForm();
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  // Add or update a course
  const handleAddOrUpdateCourse = async () => {
    if (!courseData.maKhoaHoc || !courseData.tenKhoaHoc || !courseData.moTa) {
      showAlert("warning", "Please fill out all required fields.");
      return;
    }

    try {
      if (isEditing) {
        const _courseData = {
          ...courseData,
          "maDanhMucKhoaHoc": courseData.danhMucKhoaHoc.maDanhMucKhoahoc,
          "taiKhoanNguoiTao": courseData.nguoiTao.taiKhoan,
        }
        await api.updateCourse(courseData.maKhoaHoc, _courseData);
        showAlert("success", "Course updated successfully!");
      } else {
        await api.addCourse(courseData);
        showAlert("success", "Course added successfully!");
      }
      closeModal();
      loadCourses();
    } catch (error) {
      console.error("Error saving course:", error.response?.data || error.message);
      showAlert("error", "Failed to save course.");
    }
  };

  // Delete course
  const handleDeleteCourse = async (maKhoaHoc) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await api.deleteCourse(maKhoaHoc);
        showAlert("success", "Course deleted successfully!");
        loadCourses();
      } catch (error) {
        console.error("Error deleting course:", error);
        showAlert("error", "Failed to delete course.");
      }
    }
  };

  // Reset form
  const resetForm = () => {
    setCourseData({
      maKhoaHoc: "",
      tenKhoaHoc: "",
      moTa: "",
      ngayTao: "",
      luotXem: 0,
      danhMucKhoaHoc: { maDanhMucKhoahoc: "default", tenDanhMucKhoaHoc: "" },
      maNhom: "GP01",
    });
  };

  return (
    <div className="container mx-auto px-4">
      {/* Alert */}
      {alert.show && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}

      <div className="flex flex-col">
        <main className="w-full">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Course Management
          </h2>

          {/* Add Course Button */}
          <button
            onClick={() => openModal()}
            className="mb-4 px-6 py-2 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded shadow"
          >
            Add Course
          </button>

          {/* Course List */}
          <div className="bg-white p-4 rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Course List
            </h3>
            <div className="overflow-x-auto">
              <table className="table-fixed w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300">
                    <th className="w-1/5 px-4 py-2 text-center text-sm font-medium text-gray-600">
                      ID
                    </th>
                    <th className="w-1/5 px-4 py-2 text-center text-sm font-medium text-gray-600">
                      Name
                    </th>
                    <th className="w-2/5 px-4 py-2 text-center text-sm font-medium text-gray-600">
                      Description
                    </th>
                    <th className="w-1/5 px-4 py-2 text-center text-sm font-medium text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr
                      key={course.maKhoaHoc}
                      className="border-b border-gray-300"
                    >
                      <td className="px-2 py-2 text-sm text-gray-700">
                        {course.maKhoaHoc}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-700">
                        {course.tenKhoaHoc}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-700">
                        {course.moTa}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-700 flex justify-center space-x-2">
                        <button
                          onClick={() => openModal(course)}
                          className="px-2 py-1 text-white bg-yellow-500 hover:bg-yellow-600 rounded shadow"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteCourse(course.maKhoaHoc)}
                          className="px-2 py-1 text-white bg-red-500 hover:bg-red-600 rounded shadow"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h3 className="text-xl font-semibold mb-4">
              {isEditing ? "Edit Course" : "Add Course"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="maKhoaHoc"
                value={courseData.maKhoaHoc}
                onChange={handleInputChange}
                placeholder="Course ID"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                name="tenKhoaHoc"
                value={courseData.tenKhoaHoc}
                onChange={handleInputChange}
                placeholder="Course Name"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <textarea
                name="moTa"
                value={courseData.moTa}
                onChange={handleInputChange}
                placeholder="Description"
                className="border border-gray-300 rounded px-4 py-2 col-span-2"
              />
            </div>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={handleAddOrUpdateCourse}
                className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseManagement;
