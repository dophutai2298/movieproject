import awl from "sweetalert2";
const validateinfomation = [
  "Tài khoản không được bỏ trống",
  "Mật khẩu không được bỏ trống",
  "Email không được bỏ trống",
  "SDT không được bỏ trống",
  "Tên không được bỏ trống",
  "ít nhất 6 kí tự ,có số và chữ",
  "Email không hợp lệ",
  "mã nhóm không bỏ trống",
  "Người Dùng không được bỏ trống",
];

export default function validateInfo(values) {
  let ktramatkhau = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{6,}$/;
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
