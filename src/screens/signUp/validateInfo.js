import awl from "sweetalert2";
const validateinfomation = [
  "Account required",
  "Password required",
  "Email required",
  "Phone required",
  "Name required",
  "Password number",
  "Email incorrect format",
  "Id group required",
  "User Type Id required",
];

export default function validateInfo(values) {
  let ktramatkhau = /^[0-9]$/;
  let email = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
  let error = {};
  if (!values.taiKhoan.trim()) {
    error.taiKhoan = validateinfomation[0];
  }
  if (!values.matKhau.trim()) {
    error.matKhau = validateinfomation[1];
  } else if (!ktramatkhau.test(values.matKhau)) {
    error.matKhau = validateinfomation[5];
  }
  if (!values.email.trim()) {
    error.email = validateinfomation[2];
  } else if (!email.test(values.email)) {
    error.email = validateinfomation[6];
  }
  if (!values.hoTen.trim()) {
    error.hoTen = validateinfomation[4];
  }
  if (!values.soDt.trim()) {
    error.soDt = validateinfomation[3];
  }
  if (values.maNhom === "") {
    error.maNhom = validateinfomation[7];
  }
  if (values.maLoaiNguoiDung === "") {
    error.maLoaiNguoiDung = validateinfomation[8];
  }
  return error;
}
