import React, { useEffect, useState } from "react";
import { api } from "../../api/api";

const EnrollmentManagement = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    loadEnrollments();
  }, []);

  const loadEnrollments = async () => {
    try {
      const response = await api.getEnrollments(); // API call to fetch enrollments
      setEnrollments(response.data);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Enrollment Management</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Enrollment ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Course Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                User Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Enrollment Date
              </th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => (
              <tr key={enrollment.id} className="border-b border-gray-300">
                <td className="px-4 py-2 text-sm text-gray-700">
                  {enrollment.id}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {enrollment.courseName}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {enrollment.userName}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {enrollment.enrollmentDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrollmentManagement;
