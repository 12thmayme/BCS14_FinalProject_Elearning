import React, { useState, useEffect } from "react";
import { api } from "../../api/api";

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [courseData, setCourseData] = useState({
    maKhoaHoc: "",
    tenKhoaHoc: "",
    moTa: "",
    maNhom: "GP01",
    ngayTao: "",
    soLuongHocVien: 0,
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch courses on component load
  useEffect(() => {
    loadCourses();
  }, []);

  // Load course list from API
  const loadCourses = async () => {
    try {
      const response = await api.getCourseList();
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Handle input change for course form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  // Add a new course
  const handleAddCourse = async () => {
    if (!courseData.tenKhoaHoc || !courseData.moTa || !courseData.maKhoaHoc) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      await api.addCourse(courseData);
      alert("Course added successfully!");
      setCourseData({
        maKhoaHoc: "",
        tenKhoaHoc: "",
        moTa: "",
        maNhom: "GP01",
        ngayTao: "",
        soLuongHocVien: 0,
      });
      loadCourses();
    } catch (error) {
      console.error("Error adding course:", error);
      alert("Failed to add course.");
    }
  };

  // Edit an existing course
  const handleEditCourse = (course) => {
    setCourseData(course);
    setIsEditing(true);
  };

  // Update a course
  const handleUpdateCourse = async () => {
    if (!courseData.maKhoaHoc) {
      alert("Course ID is required to update.");
      return;
    }

    try {
      await api.updateCourse(courseData.maKhoaHoc, courseData);
      alert("Course updated successfully!");
      setIsEditing(false);
      setCourseData({
        maKhoaHoc: "",
        tenKhoaHoc: "",
        moTa: "",
        maNhom: "GP01",
        ngayTao: "",
        soLuongHocVien: 0,
      });
      loadCourses();
    } catch (error) {
      console.error("Error updating course:", error);
      alert("Failed to update course.");
    }
  };

  // Delete a course
  const handleDeleteCourse = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await api.deleteCourse(courseId);
        alert("Course deleted successfully!");
        loadCourses();
      } catch (error) {
        console.error("Error deleting course:", error);
        alert("Failed to delete course.");
      }
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Course Management</h1>

      {/* Add/Edit Course Form */}
      <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
        <h3>{isEditing ? "Edit Course" : "Add Course"}</h3>
        <input
          type="text"
          name="maKhoaHoc"
          placeholder="Course ID"
          value={courseData.maKhoaHoc}
          onChange={handleInputChange}
          style={{ marginRight: "10px", padding: "5px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <input
          type="text"
          name="tenKhoaHoc"
          placeholder="Course Name"
          value={courseData.tenKhoaHoc}
          onChange={handleInputChange}
          style={{ marginRight: "10px", padding: "5px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <input
          type="text"
          name="moTa"
          placeholder="Course Description"
          value={courseData.moTa}
          onChange={handleInputChange}
          style={{ marginRight: "10px", padding: "5px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <button
          onClick={isEditing ? handleUpdateCourse : handleAddCourse}
          style={{ padding: "5px 10px", backgroundColor: isEditing ? "#FFC107" : "#007BFF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          {isEditing ? "Update Course" : "Add Course"}
        </button>
      </div>

      {/* Course List */}
      <h3>Courses List</h3>
      {courses.length > 0 ? (
        courses.map((course) => (
          <div
            key={course.maKhoaHoc}
            style={{ border: "1px solid #ddd", marginBottom: "10px", padding: "10px", borderRadius: "5px" }}
          >
            <strong>{course.tenKhoaHoc}</strong>
            <p>{course.moTa}</p>
            <button
              onClick={() => handleEditCourse(course)}
              style={{ padding: "5px 10px", backgroundColor: "#FFC107", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginRight: "10px" }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteCourse(course.maKhoaHoc)}
              style={{ padding: "5px 10px", backgroundColor: "#FF4D4D", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
};

export default CourseManagement;
