import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";

const UserEnrollmentManagement = () => {
  const { userId } = useParams(); // User ID passed as a parameter
  const [notEnrolledCourses, setNotEnrolledCourses] = useState([]);
  const [pendingApprovalCourses, setPendingApprovalCourses] = useState([]);
  const [approvedCourses, setApprovedCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadUserEnrollments(userId);
  }, [userId]);

  const loadUserEnrollments = async (userId) => {
    try {
      setIsLoading(true);
      const notEnrolled = await api.getCoursesNotEnrolled(userId);
      const pendingApproval = await api.getCoursesPendingApproval(userId);
      const approved = await api.getCoursesApproved(userId);

      setNotEnrolledCourses(notEnrolled.data);
      setPendingApprovalCourses(pendingApproval.data);
      setApprovedCourses(approved.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching user enrollments:", error);
      setError("Failed to load enrollments. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnroll = async (courseId, userId) => {
    const data = {
      maKhoaHoc: courseId,
      taiKhoan: userId, // Admin specifies the user ID
    };

    try {
      console.log({ data });
      const response = await api.enroll(data);
      alert("Enrollment successful!");
      loadUserEnrollments(userId); // Refresh the enrollments
    } catch (error) {
      console.error(
        "Error enrolling user:",
        error.response?.data || error.message
      );
      alert(
        error.response?.data?.message ||
          "Failed to enroll the user in the course."
      );
    }
  };

  const handleUnenroll = async (courseId, userId) => {
    const data = {
      maKhoaHoc: courseId,
      taiKhoan: userId, // Admin specifies the user ID
    };

    try {
      setIsLoading(true);
      await api.unenroll(data);
      alert("Unenrollment successful!");
      loadUserEnrollments(userId);
    } catch (error) {
      console.error(
        "Error unenrolling user:",
        error.response?.data || error.message
      );
      alert("Failed to unenroll the user from the course.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderCourseList = (courses, actionButton) => {
    if (courses.length === 0) {
      return <p>No courses available in this category.</p>;
    }

    return (
      <ul>
        {courses.map((course) => (
          <li
            key={course.maKhoaHoc}
            className="flex justify-between items-center mb-2"
          >
            <span>{course.tenKhoaHoc}</span>
            {actionButton(course)}
          </li>
        ))}
      </ul>
    );
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">User Enrollment Management</h2>

      {/* Courses Not Enrolled */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Courses Not Enrolled</h3>
        {renderCourseList(notEnrolledCourses, (course) => (
          <button
            onClick={() => {
              console.log({ course });
              handleEnroll(course.maKhoaHoc, userId);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Enroll
          </button>
        ))}
      </div>

      {/* Courses Pending Approval */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Courses Pending Approval</h3>
        {renderCourseList(pendingApprovalCourses, (course) => (
          <button
            onClick={() => handleUnenroll(course.maKhoaHoc, userId)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Unenroll
          </button>
        ))}
      </div>

      {/* Approved Courses */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Approved Courses</h3>
        {renderCourseList(approvedCourses, (course) => (
          <button
            onClick={() => handleUnenroll(course.maKhoaHoc, userId)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Unenroll
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserEnrollmentManagement;
