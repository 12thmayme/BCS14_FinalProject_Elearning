import React, { useState, useEffect } from "react";
import { api } from "../../api/api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDt: "",
    matKhau: "",
    maLoaiNguoiDung: "HV", // Default user type
    maNhom: "GP01",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch users on component load
  useEffect(() => {
    loadUsers();
  }, []);

  // Load user list from API
  const loadUsers = async () => {
    try {
      const response = await api.getUserList();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Handle input change for user form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Add a new user
  const handleAddUser = async () => {
    if (!userData.taiKhoan || !userData.email || !userData.matKhau) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      await api.addUser(userData);
      alert("User added successfully!");
      resetForm();
      loadUsers();
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user.");
    }
  };

  // Edit an existing user
  const handleEditUser = (user) => {
    setUserData(user);
    setIsEditing(true);
  };

  // Update a user
  const handleUpdateUser = async () => {
    if (!userData.taiKhoan) {
      alert("User account is required to update.");
      return;
    }

    try {
      await api.updateUser(userData);
      alert("User updated successfully!");
      resetForm();
      loadUsers();
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  // Delete a user
  const handleDeleteUser = async (taiKhoan) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await api.deleteUser(taiKhoan);
        alert("User deleted successfully!");
        loadUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user.");
      }
    }
  };

  // Reset form
  const resetForm = () => {
    setUserData({
      taiKhoan: "",
      hoTen: "",
      email: "",
      soDt: "",
      matKhau: "",
      maLoaiNguoiDung: "HV",
      maNhom: "GP01",
    });
    setIsEditing(false);
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6 text-center">User Management</h1>

      {/* Add/Edit User Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">{isEditing ? "Edit User" : "Add User"}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="taiKhoan"
            placeholder="Account"
            value={userData.taiKhoan}
            onChange={handleInputChange}
            className="border rounded px-3 py-2"
          />
          <input
            type="text"
            name="hoTen"
            placeholder="Full Name"
            value={userData.hoTen}
            onChange={handleInputChange}
            className="border rounded px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleInputChange}
            className="border rounded px-3 py-2"
          />
          <input
            type="password"
            name="matKhau"
            placeholder="Password"
            value={userData.matKhau}
            onChange={handleInputChange}
            className="border rounded px-3 py-2"
          />
          <input
            type="text"
            name="soDt"
            placeholder="Phone"
            value={userData.soDt}
            onChange={handleInputChange}
            className="border rounded px-3 py-2"
          />
          <select
            name="maLoaiNguoiDung"
            value={userData.maLoaiNguoiDung}
            onChange={handleInputChange}
            className="border rounded px-3 py-2"
          >
            <option value="HV">Student</option>
            <option value="GV">Instructor</option>
          </select>
        </div>
        <div className="mt-4">
          <button
            onClick={isEditing ? handleUpdateUser : handleAddUser}
            className={`px-4 py-2 text-white rounded ${
              isEditing ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isEditing ? "Update User" : "Add User"}
          </button>
          {isEditing && (
            <button
              onClick={resetForm}
              className="ml-4 px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* User List */}
      <h3 className="text-lg font-semibold mb-4">User List</h3>
      {users.length > 0 ? (
        users.map((user) => (
          <div
            key={user.taiKhoan}
            className="bg-white p-4 mb-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{user.hoTen}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.soDt}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleEditUser(user)}
                className="px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteUser(user.taiKhoan)}
                className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No users found.</p>
      )}
    </div>
  );
};

export default UserManagement;
