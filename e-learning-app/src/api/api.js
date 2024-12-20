import { apiInstance } from "./config";

export const api = {
    // Login
    login: (credentials) => apiInstance.post("/QuanLyNguoiDung/DangNhap", credentials),

    // User Management
    getUserList: () => apiInstance.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"),
    addUser: (userData) => apiInstance.post("/QuanLyNguoiDung/ThemNguoiDung", userData),
    updateUser: (userData) => apiInstance.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", userData),
    deleteUser: (taiKhoan) => apiInstance.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`),

    // Course Management
    getCourseList: () => apiInstance.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"),
    getCourseDetails: (courseId) => apiInstance.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`),
    addCourse: (courseData) => apiInstance.post("/QuanLyKhoaHoc/ThemKhoaHoc", courseData),
    updateCourse: (courseId, courseData) => apiInstance.put(`/QuanLyKhoaHoc/CapNhatKhoaHoc?maKhoaHoc=${courseId}`, courseData),
    deleteCourse: (courseId) => apiInstance.delete(`/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${courseId}`),

    // Enrollment Management
    getEnrollments: () => apiInstance.get("/QuanLyKhoaHoc/LayDanhSachGhiDanh?MaNhom=GP01"),
};