export default function validateInfo(user) {
  let errors = {};

  //TaiKhoan
  if (!user.taiKhoan.trim()) {
    errors.taiKhoan = "Username required";
  }

  //MatKhau
  if (!user.matKhau) {
    errors.matKhau = "Password required";
  } else if (user.matKhau.length < 5) {
    errors.matKhau = "Password needs to be 5 charaters or more";
  }
  return errors;
}
