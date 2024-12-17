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
};