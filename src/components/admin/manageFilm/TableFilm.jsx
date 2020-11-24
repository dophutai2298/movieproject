import React, { memo } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import ModalTrailer from "./ModalTrailer";
import { deleteFilm, resetNotify } from "../../../redux/actions/admin.action";
import { fetchFilmFollowPage } from "../../../redux/actions/film.action";
import UpdateFilm from "./UpdateFilm";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#4a90e2",
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  body: {
    fontSize: 13,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  tablecontainer: {
    width: "100%",
  },
  table: {
    width: "90%",
    marginLeft: "5%",
  },
  btnHistory: {
    border: "1px solid #00ac4d",
    color: "#00ac4d",
  },

  btnDelete: { border: "1px solid #f7b500", color: "#f7b500" },
});

function TableFilm(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  let dateFormat = require("dateformat");
  const { movieList } = props;
  const { search } = props;
  const { page } = props;

  const renderFilmSearch = () => {
    return search?.map((movie, index) => {
      return (
        <StyledTableRow key={index}>
          <StyledTableCell component="th" scope="row">
            {movie.maPhim}
          </StyledTableCell>
          <StyledTableCell align="center">{movie.tenPhim}</StyledTableCell>
          <StyledTableCell align="center">{movie.biDanh}</StyledTableCell>
          <StyledTableCell
            // className="manageCinema__img"
            style={{ width: "15%" }}
            align="center"
          >
            <img style={{ width: "60%" }} src={movie.hinhAnh} alt="poster" />
            {/* <div className="manageCinema__img__full">
              <img src={movie.hinhAnh} alt="poster" />
            </div> */}
          </StyledTableCell>
          <StyledTableCell className="manageCinema__discrible" align="left">
            {movie.moTa.slice(0, 50) + "..."}
            <div className="manageCinema__discrible__full">
              <p>{movie.moTa}</p>
            </div>
          </StyledTableCell>
          <StyledTableCell align="center">
            <ModalTrailer trailer={movie.trailer} />
          </StyledTableCell>
          <StyledTableCell align="center" style={{ width: "10%" }}>
            {dateFormat(movie.ngayChieuGioChieu, "dd-mm-yyyy")}
          </StyledTableCell>
          <StyledTableCell align="center">{movie.danhGia}</StyledTableCell>
          <StyledTableCell style={{ width: "15%" }} align="center">
            <UpdateFilm movie={movie} page={page} />
            <Button
              className={classes.btnDelete}
              onClick={() => {
                dispatch(deleteFilm(parseInt(movie.maPhim), page));
                dispatch(fetchFilmFollowPage(page));
              }}
            >
              Xóa
            </Button>
          </StyledTableCell>
        </StyledTableRow>
      );
    });
  };

  const renderListFilm = () => {
    return movieList.items?.map((movie, index) => {
      return (
        <StyledTableRow key={index}>
          <StyledTableCell component="th" scope="row">
            {movie.maPhim}
          </StyledTableCell>
          <StyledTableCell align="center">{movie.tenPhim}</StyledTableCell>
          <StyledTableCell align="center">{movie.biDanh}</StyledTableCell>
          <StyledTableCell
            // className="manageCinema__img"
            style={{ width: "15%" }}
            align="center"
          >
            <img style={{ width: "60%" }} src={movie.hinhAnh} alt="poster" />
            {/* <div className="manageCinema__img__full">
              <img src={movie.hinhAnh} alt="poster" />
            </div> */}
          </StyledTableCell>
          <StyledTableCell className="manageCinema__discrible" align="left">
            {movie.moTa.slice(0, 50) + "..."}
            <div className="manageCinema__discrible__full">
              <p>{movie.moTa}</p>
            </div>
          </StyledTableCell>
          <StyledTableCell align="center">
            <ModalTrailer trailer={movie.trailer} />
          </StyledTableCell>
          <StyledTableCell align="center" style={{ width: "10%" }}>
            {dateFormat(movie.ngayKhoiChieu, "dd-mm-yyyy")}
          </StyledTableCell>
          <StyledTableCell align="center">{movie.danhGia}</StyledTableCell>
          <StyledTableCell style={{ width: "15%" }} align="center">
            <UpdateFilm movie={movie} page={page} />
            <Button
              className={classes.btnDelete}
              onClick={() => {
                dispatch(deleteFilm(parseInt(movie.maPhim), page));
                dispatch(fetchFilmFollowPage(page));
              }}
            >
              Xóa
            </Button>
          </StyledTableCell>
        </StyledTableRow>
      );
    });
  };

  if (search.length > 0) {
    return (
      <div>
        <TableContainer className={classes.tablecontainer}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Mã phim</StyledTableCell>
                <StyledTableCell align="center">Tên phim</StyledTableCell>
                <StyledTableCell align="center">Bí danh</StyledTableCell>
                <StyledTableCell align="center">Hình ảnh</StyledTableCell>
                <StyledTableCell align="center">Mô tả</StyledTableCell>
                <StyledTableCell align="center">Trailer</StyledTableCell>
                <StyledTableCell align="center">Ngày chiếu</StyledTableCell>
                <StyledTableCell align="center">Đánh giá</StyledTableCell>
                <StyledTableCell align="center">Chức năng</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderFilmSearch()}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }

  return (
    <div>
      <TableContainer className={classes.tablecontainer}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Mã phim</StyledTableCell>
              <StyledTableCell align="center">Tên phim</StyledTableCell>
              <StyledTableCell align="center">Bí danh</StyledTableCell>
              <StyledTableCell align="center">Hình ảnh</StyledTableCell>
              <StyledTableCell align="center">Mô tả</StyledTableCell>
              <StyledTableCell align="center">Trailer</StyledTableCell>
              <StyledTableCell align="center">Ngày chiếu</StyledTableCell>
              <StyledTableCell align="center">Đánh giá</StyledTableCell>
              <StyledTableCell align="center">Chức năng</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderListFilm()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default memo(TableFilm);
