import { apiInstance } from "./config";

export const api = {
    // User Login
    login: (credentials) => {
        return apiInstance.post("/QuanLyNguoiDung/DangNhap", credentials);
    },

    // Get Course List
    getCourseList: () => {
        return apiInstance.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01");
    },

    // Get Course Details
    getCourseDetails: (courseId) => {
        return apiInstance.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`);
    },

    // Register for Course
    registerCourse: (registrationData) => {
        return apiInstance.post("/QuanLyKhoaHoc/DangKyKhoaHoc", registrationData);
    },

    // Get User Profile
    getUserProfile: () => {
        return apiInstance.post("/QuanLyNguoiDung/ThongTinNguoiDung");
    },

    // Add a Course
    addCourse: (courseData) => {
        return apiInstance.post("/QuanLyKhoaHoc/ThemKhoaHoc", courseData);
    },

    // Delete a Course
    deleteCourse: (courseId) => {
        return apiInstance.delete(`/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${courseId}`);
    },

    // Update Course
    updateCourse: (courseId, courseData) => {
        return apiInstance.put(`/QuanLyKhoaHoc/CapNhatKhoaHoc?maKhoaHoc=${courseId}`, courseData);
    },

    // Create a New Course
    createCourse: (courseData) => {
        return apiInstance.post("/QuanLyKhoaHoc/TaoKhoaHoc", courseData);

    },

    // Get User List
    getUserList: () => {
        return apiInstance.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
    },

    // Add User
    addUser: (userData) => {
        return apiInstance.post("/QuanLyNguoiDung/ThemNguoiDung", userData);
    },

    // Update User
    updateUser: (userData) => {
        return apiInstance.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", userData);
    },

    // Delete User
    deleteUser: (taiKhoan) => {
        return apiInstance.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
    },
};