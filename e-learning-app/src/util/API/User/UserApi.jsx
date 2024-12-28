import { localService } from "../../../api/localService";
import { DOMAIN, http } from "../../Setting/Setting";

export const registerApi = async (userRegister) => {
  const res = await http.post(
    `${DOMAIN}/api/QuanLyNguoiDung/DangKy`,
    userRegister
  );
  return res.data;
};
export const loginApi = async (userLogin) => {
  const res = await http.post(
    `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
    userLogin
  );
  return res.data;
};
export const getProfile = async () => {
  const res = await http.post(
    `${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
    userLogin,
    {
      header: {
        Authorization: `Bearer + ${localService.getAccessToken()}`,
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};