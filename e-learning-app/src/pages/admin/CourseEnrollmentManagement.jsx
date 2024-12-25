import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";

const CourseEnrollmentManagement = () => {
  const { courseId } = useParams(); // Course ID passed as a parameter
  const [notEnrolledUsers, setNotEnrolledUsers] = useState([]);
  const [pendingApprovalUsers, setPendingApprovalUsers] = useState([]);
  const [approvedUsers, setApprovedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCourseEnrollments(courseId);
  }, [courseId]);

  const loadCourseEnrollments = async (courseId) => {
    try {
      setIsLoading(true);
      const notEnrolled = await api.getUsersNotEnrolled(courseId);
      const pendingApproval = await api.getStudentsPendingApproval(courseId);
      const approved = await api.getStudentsInCourse(courseId);

      setNotEnrolledUsers(notEnrolled.data);
      setPendingApprovalUsers(pendingApproval.data);
      setApprovedUsers(approved.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching course enrollments:", error);
      setError("Failed to load enrollments. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnroll = async (userId) => {
    const data = {
      maKhoaHoc: courseId,
      taiKhoan: userId, // User ID to enroll
    };

    try {
      await api.enroll(data);
      alert("Enrollment successful!");
      loadCourseEnrollments(courseId); // Refresh enrollments
    } catch (error) {
      console.error(
        "Error enrolling user:",
        error.response?.data || error.message
      );
      alert("Failed to enroll the user.");
    }
  };

  const handleUnenroll = async (userId) => {
    const data = {
      maKhoaHoc: courseId,
      taiKhoan: userId, // User ID to unenroll
    };

    try {
      await api.unenroll(data);
      alert("Unenrollment successful!");
      loadCourseEnrollments(courseId); // Refresh enrollments
    } catch (error) {
      console.error(
        "Error unenrolling user:",
        error.response?.data || error.message
      );
      alert("Failed to unenroll the user.");
    }
  };

  const renderUserList = (users, actionButton) => {
    if (users.length === 0) {
      return <p>No users available in this category.</p>;
    }

    return (
      <ul>
        {users.map((user) => (
          <li
            key={user.taiKhoan}
            className="flex justify-between items-center mb-2"
          >
            <span>{user.hoTen}</span>
            {actionButton(user)}
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
      <h2 className="text-3xl font-bold mb-6">Course Enrollment Management</h2>

      {/* Users Not Enrolled */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          Users Not Enrolled
        </h3>
        {notEnrolledUsers.length > 0 ? (
          <ul>
            {notEnrolledUsers.map((user) => (
              <li
                key={user.taiKhoan}
                className="flex justify-between items-center mb-2 p-2 border-b border-gray-300"
              >
                <span className="font-medium">
                  {user.hoTen} ({user.taiKhoan})
                </span>
                <button
                  onClick={() => handleEnroll(user.taiKhoan)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Enroll
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No users available in this category.</p>
        )}
      </div>

      {/* Users Pending Approval */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 text-yellow-600">
          Users Pending Approval
        </h3>
        {pendingApprovalUsers.length > 0 ? (
          <ul>
            {pendingApprovalUsers.map((user) => (
              <li
                key={user.taiKhoan}
                className="flex justify-between items-center mb-2 p-2 border-b border-gray-300"
              >
                <span className="font-medium">
                  {user.hoTen} ({user.taiKhoan})
                </span>
                <button
                  onClick={() => handleUnenroll(user.taiKhoan)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Unenroll
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No users pending approval.</p>
        )}
      </div>

      {/* Approved Users */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-green-600">
          Approved Users
        </h3>
        {approvedUsers.length > 0 ? (
          <ul>
            {approvedUsers.map((user) => (
              <li
                key={user.taiKhoan}
                className="flex justify-between items-center mb-2 p-2 border-b border-gray-300"
              >
                <span className="font-medium">
                  {user.hoTen} ({user.taiKhoan})
                </span>
                <button
                  onClick={() => handleUnenroll(user.taiKhoan)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Unenroll
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No approved users in this course.</p>
        )}
      </div>
    </div>
  );
};

export default CourseEnrollmentManagement;
