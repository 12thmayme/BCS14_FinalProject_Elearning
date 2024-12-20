import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import Alert from "../../components/Alert";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDt: "",
    matKhau: "",
    maLoaiNguoiDung: "HV",
    maNhom: "GP01",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "", show: false });

  // Load users on component mount
  useEffect(() => {
    loadUsers();
  }, []);

  // Fetch user list from API
  const loadUsers = async () => {
    try {
      const response = await api.getUserList();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      showAlert("error", "Failed to fetch users.");
    }
  };

  // Handle input changes in the modal form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Show alert
  const showAlert = (type, message) => {
    setAlert({ type, message, show: true });
    setTimeout(() => setAlert({ ...alert, show: false }), 3000);
  };

  // Open modal for adding or editing a user
  const openModal = (user = null) => {
    if (user) {
      setUserData(user);
      setIsEditing(true);
    } else {
      resetForm();
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  // Add or update a user
  const handleAddOrUpdateUser = async () => {
    if (!userData.taiKhoan || !userData.email || !userData.matKhau) {
      showAlert("warning", "Please fill out all required fields.");
      return;
    }
  
    console.log("Payload:", userData); // Debugging payload
  
    try {
      if (isEditing) {
        await api.updateUser(userData);
        showAlert("success", "User updated successfully!");
      } else {
        await api.addUser(userData);
        showAlert("success", "User added successfully!");
      }
      closeModal();
      loadUsers();
    } catch (error) {
      console.error("Error saving user:", error.response?.data || error.message);
      showAlert("error", "Failed to save user.");
    }
  };
  

  // Delete user
  const handleDeleteUser = async (taiKhoan) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await api.deleteUser(taiKhoan); // Delete API
        showAlert("success", "User deleted successfully!");
        loadUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
        showAlert("error", "Failed to delete user.");
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
  };

  return (
    <div className="container mx-auto px-4">
      {/* Alert */}
      {alert.show && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}

      <div className="flex flex-col">
        <main className="w-full">
          <h2 className="text-3xl font-bold mb-8 text-center">
            User Management
          </h2>

          {/* Add User Button */}
          <button
            onClick={() => openModal()}
            className="mb-4 px-6 py-2 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded shadow"
          >
            Add User
          </button>

          {/* User List */}
          <div className="bg-white p-4 rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              User List
            </h3>
            <div className="overflow-x-auto">
              <table className="table-fixed w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300">
                    <th className="w-1/5 px-4 py-2 text-center text-sm font-medium text-gray-600">
                      Account
                    </th>
                    <th className="w-1/5 px-4 py-2 text-center text-sm font-medium text-gray-600">
                      Full Name
                    </th>
                    <th className="w-1/5 px-4 py-2 text-center text-sm font-medium text-gray-600">
                      Email
                    </th>
                    <th className="w-1/5 px-4 py-2 text-center text-sm font-medium text-gray-600">
                      Phone
                    </th>
                    <th className="w-1/5 px-4 py-2 text-center text-sm font-medium text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.taiKhoan}
                      className="border-b border-gray-300"
                    >
                      <td className="px-2 py-2 text-sm text-gray-700">
                        {user.taiKhoan}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-700">
                        {user.hoTen}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-700">
                        {user.email}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-700">
                        {user.soDt}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-700 flex justify-center space-x-2">
                        <button
                          onClick={() => openModal(user)}
                          className="px-2 py-1 text-white bg-yellow-500 hover:bg-yellow-600 rounded shadow"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.taiKhoan)}
                          className="px-2 py-1 text-white bg-red-500 hover:bg-red-600 rounded shadow"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h3 className="text-xl font-semibold mb-4">
              {isEditing ? "Edit User" : "Add User"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="taiKhoan"
                value={userData.taiKhoan}
                onChange={handleInputChange}
                placeholder="Account"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                name="hoTen"
                value={userData.hoTen}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="password"
                name="matKhau"
                value={userData.matKhau}
                onChange={handleInputChange}
                placeholder="Password"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                name="soDt"
                value={userData.soDt}
                onChange={handleInputChange}
                placeholder="Phone"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <select
                name="maLoaiNguoiDung"
                value={userData.maLoaiNguoiDung}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2"
              >
                <option value="HV">Student</option>
                <option value="GV">Instructor</option>
              </select>
            </div>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={handleAddOrUpdateUser}
                className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
