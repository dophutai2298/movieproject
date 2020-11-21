import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, TextareaAutosize, TextField, Grid } from "@material-ui/core";

import clsx from "clsx";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginRight: theme.spacing(18),
  },
  formControlright: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #fff",
    width: "50%",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btnAdd: {
    width: "100%",
    height: "50px",
    border: "2px solid #30a5ff",
    color: "#30a5ff",
    fontSize: "18px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "50%",
  },
  title: {
    textAlign: "center",
    color: "#4a90e2",
  },
  divInput: {
    width: "90%",
    margin: "3% 0%",
  },
  divBtn: {
    marginTop: "3%",
  },
  error: {
    margin: "0",
    fontSize: "13px",
    fontStyle: "italic",
    color: "red",
  },
}));

export default function AddFilm() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = useState({
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "",
    moTa: "",
    maNhom: "GP10",
    ngayKhoiChieu: "",
    danhGia: "10",
  });
  const [error, setError] = useState({
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "",
    moTa: "",
    ngayKhoiChieu: "",
  });

  const resetForm = () => {
    setValues({
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: "",
      moTa: "",
      maNhom: "GP10",
      ngayKhoiChieu: "",
      danhGia: "10",
    });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  function handleSubmit(event) {
    // let regexPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    // let email = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
    event.preventDefault();
    // setError(validation(values));
    // if (
    //   values.taiKhoan !== "" &&
    //   values.taiKhoan.length > 5 &&
    //   values.matKhau.length > 5 &&
    //   values.matKhau !== "" &&
    //   values.email !== "" &&
    //   values.xacNhanMatKhau !== "" &&
    //   values.soDt !== "" &&
    //   values.hoTen !== "" &&
    //   values.maLoaiNguoiDung !== "" &&
    //   email.test(values.email) &&
    //   regexPhone.test(values.soDt) &&
    //   values.matKhau === values.xacNhanMatKhau
    // ) {

    console.log(values);
    handleClose();
    resetForm();
    //}
  }
  return (
    <div>
      <button type="button" className={classes.btnAdd} onClick={handleOpen}>
        <i className="fa fa-plus"></i> Thêm Phim
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className={classes.title}>Thêm Phim</h2>
            <form className={classes.root} onSubmit={handleSubmit} noValidate>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    className={clsx(classes.margin, classes.divInput)}
                  >
                    <InputLabel htmlFor="standard-adornment-maPhim">
                      Mã phim
                    </InputLabel>
                    <Input
                      id="standard-adornment-maPhim"
                      value={values.maPhim}
                      onChange={handleChange("maPhim")}
                    />
                    <p className={classes.error}>{error.maPhim}</p>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    className={clsx(classes.margin, classes.divInput)}
                  >
                    <InputLabel htmlFor="standard-adornment-tenPhim">
                      Tên phim
                    </InputLabel>
                    <Input
                      id="standard-adornment-tenPhim"
                      value={values.tenPhim}
                      onChange={handleChange("tenPhim")}
                    />
                    <p className={classes.error}>{error.tenPhim}</p>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    className={clsx(classes.margin, classes.divInput)}
                  >
                    <InputLabel htmlFor="standard-adornment-biDanh">
                      Bí danh
                    </InputLabel>
                    <Input
                      id="standard-adornment-biDanh"
                      value={values.biDanh}
                      onChange={handleChange("biDanh")}
                    />
                    <p className={classes.error}>{error.biDanh}</p>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    className={clsx(classes.margin, classes.divInput)}
                  >
                    <InputLabel htmlFor="standard-adornment-trailer">
                      Trailer
                    </InputLabel>
                    <Input
                      placeholder="Vui lòng nhập link.."
                      id="standard-adornment-trailer"
                      value={values.trailer}
                      onChange={handleChange("trailer")}
                    />
                    <p className={classes.error}>{error.trailer}</p>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl
                    className={clsx(classes.margin, classes.divInput)}
                  >
                    <label htmlFor="standard-adornment-hinhAnh">Hình ảnh</label>
                    <input
                      type="file"
                      id="standard-adornment-hinhAnh"
                      value={values.hinhAnh}
                      onChange={handleChange("hinhAnh")}
                    />
                    <p className={classes.error}>{error.hinhAnh}</p>
                  </FormControl>
                </Grid>
                <Grid item xs={8}>
                  <img
                    style={{ width: "40%" }}
                    src="/images/imgFilmDemo.jpg"
                    alt="demo"
                  />
                </Grid>
                <FormControl className={clsx(classes.margin, classes.divInput)}>
                  <label htmlFor="standard-adornment-moTa">Mô tả</label>
                  <TextareaAutosize
                    id="standard-adornment-moTa"
                    aria-label="empty textarea"
                    value={values.moTa}
                    onChange={handleChange("moTa")}
                    rowsMin={4}
                    placeholder="Nhập mô tả Phim.."
                  />
                  <p className={classes.error}>{error.moTa}</p>
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.divInput)}>
                  <TextField
                    id="standard-adornment-ngayKhoiChieu"
                    label="Ngày khởi chiếu"
                    type="datetime-local"
                    value={values.ngayKhoiChieu}
                    // defaultValue="2020-05-24T10:30"
                    className={classes.textField}
                    onChange={handleChange("ngayKhoiChieu")}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <p className={classes.error}>{error.ngayKhoiChieu}</p>
                </FormControl>
              </Grid>
              <div className={classes.divBtn}>
                <Button
                  onClick={() => {
                    handleClose();
                    resetForm();
                  }}
                >
                  Thoát
                </Button>
                <Button
                  type="submit"
                  style={{ marginLeft: "10px" }}
                  color="primary"
                  variant="contained"
                >
                  Thêm mới
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
