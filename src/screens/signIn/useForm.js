import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../redux/actions/user.action";
import { Redirect } from "react-router-dom";

const useForm = (validateInfo) => {
  // const history = useHistory();
  // const handleUrl = () => {
  //   if (errors.length < 0) {
  //     history.push("/");
  //   }
  // };
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const [errors, setError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //Để đủ thuộc tính
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    <Redirect to="/" />;
    setError(validateInfo(user));
    //Post to API
    dispatch(loginRequest(user));
  };

  return { handleChange, user, handleSubmit, errors };
};

export default useForm;
