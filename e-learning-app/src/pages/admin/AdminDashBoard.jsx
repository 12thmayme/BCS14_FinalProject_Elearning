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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem("accessToken");
            window.location.href = "/login";
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </header>

      {/* Tabs */}
      <nav className="bg-gray-100 shadow-md">
        <ul className="flex justify-center space-x-6 py-4">
          <li>
            <button
              onClick={() => setActiveTab("users")}
              className={`px-4 py-2 rounded ${
                activeTab === "users"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              User Management
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("courses")}
              className={`px-4 py-2 rounded ${
                activeTab === "courses"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Course Management
            </button>
          </li>
       
        </ul>
      </nav>

      {/* Tab Content */}
      <main className="flex-1 p-6 bg-gray-50">{renderTabContent()}</main>
    </div>
  );
};

export default AdminDashboard;
