import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import Alert from "../../components/Alert";
import { useNavigate } from "react-router-dom";

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
      setFilteredCourses(response.data);
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

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = courses.filter(
      (course) =>
        course.maKhoaHoc.toLowerCase().includes(value.toLowerCase()) ||
        course.tenKhoaHoc.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCourses(filtered);
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

    // Check for duplicate Course ID
    if (
      !isEditing &&
      courses.some((course) => course.maKhoaHoc === courseData.maKhoaHoc)
    ) {
      showAlert("warning", "Course ID already exists. Please use a unique ID.");
      return;
    }

    try {
      if (isEditing) {
        await api.updateCourse(courseData.maKhoaHoc, courseData);
        showAlert("success", "Course updated successfully!");
      } else {
        await api.addCourse(courseData);
        showAlert("success", "Course added successfully!");
      }
      closeModal();
      loadCourses();
    } catch (error) {
      console.error(
        "Error saving course:",
        error.response?.data || error.message
      );
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

  const navigate = useNavigate();

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

          {/* Search Input */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by Id or Name"
            className="mb-4 w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
          />

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
            <div
              className="overflow-y-auto"
              style={{ maxHeight: "400px" }} // Limit height for scrolling
            >
              <table className="table-fixed w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300 ">
                    <th className="w-1/5 px-2 py-2 text-start text-sm font-bold text-gray-600">
                      ID
                    </th>
                    <th className="w-1/5 px-2 py-2 text-start text-sm font-bold text-gray-600">
                      Name
                    </th>
                    <th className="w-2/5 px-2 py-2 text-start text-sm font-bold text-gray-600">
                      Description
                    </th>
                    <th className="w-1/5 px-2 py-2 text-center text-sm font-bold text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCourses.map((course) => (
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
                      <td
                        className="px-2 py-2 text-sm text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis"
                        style={{ maxWidth: "200px" }}
                      >
                        {course.moTa}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-700 flex justify-center space-x-4">
                        {/* Edit Button */}
                        <button
                          onClick={() => openModal()}
                          className="p-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded shadow"
                          style={{ zIndex: 10 }}
                        >
                          <i className="fas fa-edit"></i>
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDeleteCourse(course.maKhoaHoc)}
                          className="p-2 text-white bg-red-500 hover:bg-red-600 rounded shadow"
                          style={{ zIndex: 10 }}
                        >
                          <i className="fas fa-trash"></i>
                        </button>

                        {/* View Enrollments Button */}
                        <button
                          onClick={() =>
                            navigate(`/course-enrollments/${course.maKhoaHoc}`)
                          }
                          className="p-2 text-white bg-orange-500 hover:bg-orange-600 rounded shadow"
                          style={{ zIndex: 10 }}
                        >
                          <i className="fas fa-users"></i>
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
    </div>
  );
};

export default CourseManagement;
