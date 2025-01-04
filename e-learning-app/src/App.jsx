import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Admin Pages
import CourseManagement from "./pages/admin/CourseManagement";
import UserManagement from "./pages/admin/UserManangement";
import AdminDashboard from "./pages/admin/AdminDashBoard";
import UserEnrollmentManagement from "./pages/admin/UserEnrollmentManagement";
import CourseEnrollmentManagement from "./pages/admin/CourseEnrollmentManagement";
import AdminTemplate from "./templates/adminTemplate";

// Public Pages
import HomeMaster from "./pages/pageMaster/HomeMaster";
import HomePage from "./pages/Home/HomePage";
import UserMaster from "./pages/pageMaster/UserMaster";
import Login from "./pages/account/Login";
import Signup from "./pages/account/Signup";
import Detail from "./pages/detail/Detail";
import Profile from "./pages/account/profile/Profile";
import Contact from "./pages/contact/contact";
import Course from "./pages/courses/Course";
import CourseCatalog from "./pages/courses/CourseCatalog";
import Profiles from "./pages/user/Profile";
import FromProfile from "./pages/account/profile/FromProfile";

// Shared Components
import Auth from "./components/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import CustomsIsPending from "./util/customs/CustomsIsPending";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./sass/main.scss";
import "./main.js";

const queryClient = new QueryClient();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
        <Routes>
          {/* Authentication Routes */}
          <Route
            path="/login"
            element={<Auth setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/register" element={<Auth isRegister />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/sign-up" element={<Signup />} />

          {/* Public Routes */}
          <Route path="/" element={<HomeMaster />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="course" element={<Course />} />
            <Route path="course-catalog" element={<CourseCatalog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="detail/:productID" element={<Detail />} />
          </Route>

          {/* User Routes */}
          <Route path="/users" element={<UserMaster />}>
            <Route path="profile" element={<Profile />}>
              <Route index element={<FromProfile />} />
            </Route>
            <Route path="profile-s" element={<Profiles />} />
          </Route>

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AdminTemplate />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
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

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
