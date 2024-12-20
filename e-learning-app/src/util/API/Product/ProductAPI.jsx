import { DOMAIN, http } from "../../Setting/Setting";
import {
  BE,
  DESIGN,
  FE,
  FULL_STACK,
  GROUP_CODE,
  MOBILE,
  THINKING,
} from "../constants/Constants";

export const getCourseList = async () => {
  const res = await http.get(
    `${DOMAIN}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_CODE}`
  );
  return res.data;
};

export const getCourseCatalog = async () => {
  const res = await http.get(`${DOMAIN}/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
  return res.data.content;
};
export const getMobileCourse = async () => {
  const res = await http.get(
    `${DOMAIN}/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${MOBILE}&MaNhom=${GROUP_CODE}`
  );
  console.log(res);
  return res.data;
};
export const getFECourse = async () => {
  const res = await http.get(
    `${DOMAIN}/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${FE}&MaNhom=${GROUP_CODE}`
  );
  return res.data;
};
export const getBECourse = async () => {
  const res = await http.get(
    `${DOMAIN}/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${BE}&MaNhom=${GROUP_CODE}`
  );
  return res.data;
};
export const getFullTackCourse = async () => {
  const res = await http.get(
    `${DOMAIN}/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${FULL_STACK}&MaNhom=${GROUP_CODE}`
  );
  return res.data;
};
export const getDesignCourse = async () => {
  const res = await http.get(
    `${DOMAIN}/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${DESIGN}&MaNhom=${GROUP_CODE}`
  );
  return res.data;
};
export const getThinkingCourse = async () => {
  const res = await http.get(
    `${DOMAIN}/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${THINKING}&MaNhom=${GROUP_CODE}`
  );
  return res.data;
};
