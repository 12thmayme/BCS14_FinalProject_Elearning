import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CourseManagement from "./pages/admin/CourseManagement";
import UserManagement from "./pages/admin/UserManangement";
import Auth from "./components/Auth";
import ProtectedRoute from "./components/ProtectedRoute"; // For authenticated routes
import AdminDashboard from "./pages/admin/AdminDashBoard";
import UserEnrollmentManagement from "./pages/admin/UserEnrollmentManagement";
import CourseEnrollmentManagement from "./pages/admin/CourseEnrollmentManagement";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage authentication state

  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Auth isRegister />} />

        {/* Admin Dashboard */}
        <Route
          path="/AdminDashboard"
          element={<ProtectedRoute isAuthenticated={isAuthenticated}><AdminDashboard /></ProtectedRoute>}
        />

        {/* User Management */}
        <Route
          path="/user-management"
          element={<ProtectedRoute isAuthenticated={isAuthenticated}><UserManagement /></ProtectedRoute>}
        />

        {/* Course Management */}
        <Route
          path="/course-management"
          element={<ProtectedRoute isAuthenticated={isAuthenticated}><CourseManagement /></ProtectedRoute>}
        />

        {/* Enrollment Management */}
        <Route
          path="/user-enrollments/:userId"
          element={<ProtectedRoute isAuthenticated={isAuthenticated}><UserEnrollmentManagement /></ProtectedRoute>}
        />
        <Route
          path="/course-enrollments/:courseId"
          element={<ProtectedRoute isAuthenticated={isAuthenticated}><CourseEnrollmentManagement /></ProtectedRoute>}
        />

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
