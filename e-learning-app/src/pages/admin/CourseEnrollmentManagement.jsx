import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";


const CourseEnrollmentManagement = () => {
  const { courseId } = useParams(); // Course ID passed as a parameter
  const [notEnrolledUsers, setNotEnrolledUsers] = useState([]);
  const [pendingApprovalUsers, setPendingApprovalUsers] = useState([]);
  const [approvedUsers, setApprovedUsers] = useState([]);

  useEffect(() => {
    loadCourseEnrollments(courseId);
  }, [courseId]);

  const loadCourseEnrollments = async (courseId) => {
    try {
      const notEnrolled = await api.getUsersNotEnrolled(courseId);
      const pendingApproval = await api.getStudentsPendingApproval(courseId);
      const approved = await api.getStudentsInCourse(courseId);

      setNotEnrolledUsers(notEnrolled.data);
      setPendingApprovalUsers(pendingApproval.data);
      setApprovedUsers(approved.data);
    } catch (error) {
      console.error("Error fetching course enrollments:", error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Course Enrollment Management</h2>

      {/* Users Not Enrolled */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Users Not Enrolled</h3>
        <ul>
          {notEnrolledUsers.map((user) => (
            <li key={user.taiKhoan}>{user.hoTen}</li>
          ))}
        </ul>
      </div>

      {/* Users Pending Approval */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Users Pending Approval</h3>
        <ul>
          {pendingApprovalUsers.map((user) => (
            <li key={user.taiKhoan}>{user.hoTen}</li>
          ))}
        </ul>
      </div>

      {/* Approved Users */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Approved Users</h3>
        <ul>
          {approvedUsers.map((user) => (
            <li key={user.taiKhoan}>{user.hoTen}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseEnrollmentManagement;
