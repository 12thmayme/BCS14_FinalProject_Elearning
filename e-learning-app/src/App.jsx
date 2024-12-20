import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CourseManagement from "./pages/admin/CourseManagement";
import UserManagement from "./pages/admin/UserManangement";
import Auth from "./components/Auth";
import ProtectedRoute from "./components/ProtectedRoute"; // For authenticated routes
import AdminDashboard from "./pages/admin/AdminDashBoard";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth isRegister />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        {/* Protected Admin Routes */}
        <Route
          path="/course-management"
          element={
            <ProtectedRoute>
              <CourseManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-management"
          element={
            <ProtectedRoute>
              <UserManagement />
            </ProtectedRoute>
          }
        />

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
