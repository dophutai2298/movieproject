// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { useDispatch, useSelector } from "react-redux";

// import clsx from "clsx";
// import {
//   FormControl,
//   InputLabel,
//   Input,
//   InputAdornment,
// } from "@material-ui/core";
// import { createAvatar, fetchAvatar } from "../../redux/actions/user.action";
// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//     marginRight: theme.spacing(18),
//   },

//   btnAdd: {
//     width: "100%",
//     height: "50px",
//     border: "2px solid #30a5ff",
//     color: "#30a5ff",
//     fontSize: "18px",
//     [theme.breakpoints.down("sm")]: {
//       fontSize: "16px",
//     },
//   },

//   error: {
//     margin: "0",
//     fontSize: "13px",
//     fontStyle: "italic",
//     color: "red",
//   },
// }));
// export default function Avatar(props) {
//   const classes = useStyles();
//   const { taiKhoan } = props;
//   const renderavatar = useSelector((state) => state.userReducer.avatar);
//   //Duyệt tìm đúng tài khoản
//   let index = renderavatar?.find((user) => user.taiKhoan === taiKhoan);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchAvatar());
//   }, []);

//   const [uploadImg, setUploadImg] = useState({});
//   const [avatar, setAvatar] = useState({
//     taiKhoan: taiKhoan,
//     image: uploadImg,
//   });

//   const handleChange = (event) => {
//     //
//     setAvatar({
//       ...avatar,
//       image: event.target.files[0],
//     });
//     setUploadImg(event.target.files[0]);
//     // convertBase64(event.target.files[0]);
//   };
//   const convertBase64 = (file) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       let base64 = fileReader.result;
//       console.log(base64);
//     };
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const frm = new FormData();
//     for (let key in avatar) {
//       frm.append(key, avatar[key]);
//       console.log(key + ":", avatar[key]);
//     }
//     //dispatch(createAvatar(avatar));
//   };

//   return (
//     <div className="avatar">
//       {index?.image ? (
//         <img src={index.image} alt="avatar user" />
//       ) : (
//         <img src="/images/avatardefault.png" alt="avatar user" />
//       )}

//       <div>
//         <form onSubmit={handleSubmit}>
//           <FormControl className={clsx(classes.margin, classes.divInput)}>
//             <input
//               type="file"
//               name="hinhAnh"
//               id="standard-adornment-hinhAnh"
//               onChange={handleChange}
//             />

//             {/* <p className={classes.error}>{error.hinhAnh}</p> */}
//           </FormControl>
//           <button className="btnAddAvatar">Thêm ảnh đại điện</button>
//         </form>
//       </div>
//     </div>
//   );
// }
