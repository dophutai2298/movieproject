import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchInFoBooking } from "../../../redux/actions/user.action";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#4a90e2",
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #fff",
    width: "60%",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btnHistory: { border: "1px solid #964040", color: "#964040" },
  divBtn: {
    marginTop: "3%",
  },
  title: {
    textAlign: "center",
    color: "#4a90e2",
  },
  imgNoData: {
    width: "10%",
  },
}));

export default function ModalHistoryUser(props) {
  const classes = useStyles();
  const { user } = props;
  const [open, setOpen] = React.useState(false);
  const infoUser = useSelector((state) => state.userReducer.userInfoBooking);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const renderInfo = () => {
    let dateFormat = require("dateformat");
    if (infoUser.length > 0) {
      return infoUser.map((phim) => {
        return (
          <>
            <StyledTableCell align="center">{phim.maVe}</StyledTableCell>
            <StyledTableCell align="center">{phim.tenPhim}</StyledTableCell>
            <StyledTableCell align="center">
              {dateFormat(phim.ngayDat, "dd-mm-yyyy")}
            </StyledTableCell>
            <StyledTableCell align="center">{phim.giaVe}</StyledTableCell>
          </>
        );
      });
    }
    return (
      <StyledTableCell colSpan="7" align="center">
        <img
          className={classes.imgNoData}
          src="/images/noData.png"
          alt="No Data"
        />
        <p>Không có dữ liệu !!!</p>
      </StyledTableCell>
    );
  };
  const renderInfoBooking = () => {
    let dateFormat = require("dateformat");
    if (infoUser.length > 0) {
      return infoUser.map((phim) => {
        return phim.danhSachGhe.map((ghe) => {
          return (
            <>
              <StyledTableCell align="center">{phim.maVe}</StyledTableCell>
              <StyledTableCell align="center">{phim.tenPhim}</StyledTableCell>
              <StyledTableCell align="center">
                {dateFormat(phim.ngayDat, "dd-mm-yyyy")}
              </StyledTableCell>
              <StyledTableCell align="center">{phim.giaVe}</StyledTableCell>
              <StyledTableCell align="center">
                {ghe.tenHeThongRap}
              </StyledTableCell>
              <StyledTableCell align="center">{ghe.tenRap}</StyledTableCell>
              <StyledTableCell align="center">{ghe.tenGhe}</StyledTableCell>
            </>
          );
        });
      });
    }

    return (
      <StyledTableCell colSpan="7" align="center">
        <img
          className={classes.imgNoData}
          src="/images/noData.png"
          alt="No Data"
        />
        <p>Không có dữ liệu !!!</p>
      </StyledTableCell>
    );
  };
  return (
    <>
      <Button
        className={classes.btnHistory}
        onClick={() => {
          handleOpen();
          dispatch(fetchInFoBooking(user.taiKhoan));
        }}
      >
        Lịch sử
      </Button>
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
            <h2 className={classes.title}>
              Lịch sử đặt vé - Tài khoản {user.taiKhoan}
            </h2>
            <div className={classes.divBtn}>
              <TableContainer className={classes.tablecontainer}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">Mã vé</StyledTableCell>
                      <StyledTableCell align="center">Tên phim</StyledTableCell>
                      <StyledTableCell align="center">Ngày đặt</StyledTableCell>
                      <StyledTableCell align="center">Gía vé</StyledTableCell>
                      <StyledTableCell align="center">Tên Rạp</StyledTableCell>
                      <StyledTableCell align="center">Phòng</StyledTableCell>
                      <StyledTableCell align="center">Số Ghế</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>{renderInfoBooking()}</StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Button
                onClick={() => {
                  handleClose();
                }}
              >
                Thoát
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
