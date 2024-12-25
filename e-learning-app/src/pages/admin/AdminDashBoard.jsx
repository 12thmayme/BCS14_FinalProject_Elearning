import React, { useState } from "react";
import UserManagement from "./UserManangement";
import CourseManagement from "./CourseManagement";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("users"); // Default tab

  const renderTabContent = () => {
    switch (activeTab) {
      case "users":
        return <UserManagement />;
      case "courses":
        return <CourseManagement />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/10 bg-gray-200 p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveTab("users")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "users"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              User Management
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("courses")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "courses"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Course Management
            </button>
          </li>
        </ul>
        <button
          onClick={() => {
            localStorage.removeItem("accessToken");
            window.location.href = "/login";
          }}
          className="mt-10 w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">{renderTabContent()}</main>
    </div>
  );
};

export default AdminDashboard;
