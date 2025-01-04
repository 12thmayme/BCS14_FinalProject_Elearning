import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CourseManagement from "./pages/admin/CourseManagement";
import UserManagement from "./pages/admin/UserManangement";
import Auth from "./components/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashBoard";
import UserEnrollmentManagement from "./pages/admin/UserEnrollmentManagement";
import CourseEnrollmentManagement from "./pages/admin/CourseEnrollmentManagement";
import AdminTemplate from "./templates/adminTemplate";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route
          path="/login"
          element={<Auth setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/register" element={<Auth isRegister />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AdminTemplate />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />{" "}
          {/* Redirect to dashboard */}
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="course-management" element={<CourseManagement />} />
          <Route
            path="user-enrollments/:userId"
            element={<UserEnrollmentManagement />}
          />
          <Route
            path="course-enrollments/:courseId"
            element={<CourseEnrollmentManagement />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
