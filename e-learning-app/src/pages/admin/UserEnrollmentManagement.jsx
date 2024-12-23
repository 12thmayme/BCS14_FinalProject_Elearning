import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";

const UserEnrollmentManagement = () => {
  const { userId } = useParams(); // User ID passed as a parameter
  const [notEnrolledCourses, setNotEnrolledCourses] = useState([]);
  const [pendingApprovalCourses, setPendingApprovalCourses] = useState([]);
  const [approvedCourses, setApprovedCourses] = useState([]);

  useEffect(() => {
    loadUserEnrollments(userId);
  }, [userId]);

  const loadUserEnrollments = async (userId) => {
    try {
      const notEnrolled = await api.getCoursesNotEnrolled(userId);
      const pendingApproval = await api.getCoursesPendingApproval(userId);
      const approved = await api.getCoursesApproved(userId);

      setNotEnrolledCourses(notEnrolled.data);
      setPendingApprovalCourses(pendingApproval.data);
      setApprovedCourses(approved.data);
    } catch (error) {
      console.error("Error fetching user enrollments:", error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">User Enrollment Management</h2>

      {/* Courses Not Enrolled */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Courses Not Enrolled</h3>
        <ul>
          {notEnrolledCourses.map((course) => (
            <li key={course.maKhoaHoc}>{course.tenKhoaHoc}</li>
          ))}
        </ul>
      </div>

      {/* Courses Pending Approval */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Courses Pending Approval</h3>
        <ul>
          {pendingApprovalCourses.map((course) => (
            <li key={course.maKhoaHoc}>{course.tenKhoaHoc}</li>
          ))}
        </ul>
      </div>

      {/* Approved Courses */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Approved Courses</h3>
        <ul>
          {approvedCourses.map((course) => (
            <li key={course.maKhoaHoc}>{course.tenKhoaHoc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserEnrollmentManagement;
