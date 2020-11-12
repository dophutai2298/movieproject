import React, { useEffect, useState } from "react";
import "../../styles/page/booking.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTicketRoom,
  fetchTicketRoomChair,
} from "../../redux/actions/booking.actions";
import Swal from "sweetalert2";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import useStyles from "./style";
import { postBookingRequest } from "../../services/booking.service";
import BookRight from "../../components/booking/BookRight";

export default function Booking() {
  /* jss */
  const { maLichChieu } = useParams();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /* jss */
  // console.log("maLichChieu", maLichChieu);
  const dispatch = useDispatch();
  const listChair = useSelector((state) => state.bookingReducer.danhSachGhe);
  const infoMovie = useSelector((state) => state.bookingReducer.infoMovie);
  const amountMoney = useSelector((state) => state.bookingReducer.amountMoney);
  let isLoading = useSelector((state) => state.commonReducer.isLoading);

  useEffect(() => {
    dispatch(fetchTicketRoom(maLichChieu));
    dispatch(fetchTicketRoomChair(maLichChieu));
  }, []);

  function trangThaiGhe(daDat, dangChon, type) {
    if (daDat) return classes.daDat;
    else if (dangChon) {
      return classes.dangChon;
    } else if (type === "Thuong") {
      return classes.chuaDatGheThuong;
    } else if (type === "Vip") {
      return classes.chuaDatGheVip;
    }
  }

  const renderAmount = () => {
    if (amountMoney) {
      return <span>{amountMoney.toLocaleString()} đ</span>;
    }
    return <span>0đ</span>;
  };

  const renderChair = () => {
    return listChair.map((ghe, index) => {
      if (index < 160) {
        return (
          <button
            key={index}
            onClick={() => {
              dispatch({
                type: "SELECT_CHAIR",
                payload: ghe,
              });
            }}
            className={trangThaiGhe(ghe.daDat, ghe.dangChon, ghe.loaiGhe)}
          >
            {ghe.tenGhe}
          </button>
        );
      }
    });
  };
  const renderInFo = () => {
    return (
      <div className="left--title">
        <div className="title--logocinema">
          <img src={infoMovie.hinhAnh} alt />
        </div>
        <div className="title-content">
          <p style={{ color: "#ce3017" }}>{infoMovie.tenCumRap}</p>
          <p>
            {infoMovie.ngayChieu} - {infoMovie.gioChieu} - {infoMovie.tenRap}
          </p>
        </div>
      </div>
    );
  };

  const [danhSachVe, setDanhSachVe] = useState([]);

  function handleBooking() {
    //
    let danhSachVe = listChair.filter((ghe) => ghe.dangChon);
    setDanhSachVe({
      ...danhSachVe,
      danhSachVe: danhSachVe.map((ghe) => ({
        maGhe: ghe.maGhe,
        giaVe: ghe.giaVe,
      })),
    });

    dispatch(postBookingRequest(maLichChieu, danhSachVe));
  }

  // console.log(danhSachVe);
  if (isLoading) {
    return (
      <div>
        <div className="loader">Loading...</div>
      </div>
    );
  }
  return (
    <>
      <section className="container-fluid book__section">
        <div className="row book__row">
          <div className="col-sm-12 col-md-8 section--left">
            <div className="book__section--left">
              <div className="book__left-header">
                <Paper className={classes.root1}>
                  <Tabs
                    className={classes.root2}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                  >
                    <Tab label="Chọn Ghế & Thanh Toán" />
                    <Tab label="Đã Đặt" />
                  </Tabs>
                </Paper>
              </div>
              <div className="book__left--body">
                <div className="book__body--title">
                  {renderInFo()}
                  <div className="right--title">
                    <p>Thời gian giữ chỗ</p>
                    <p>
                      <span>MM</span> : <span>SS</span>
                    </p>
                  </div>
                </div>
                <div className="book__body--seatmap">
                  <div className="book__seatmap--resever">
                    <div className="book__resever--screen">
                      <div className="namescreen">
                        <img src="../images/screen.png" alt />
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className="day">
                        <Button>A</Button>
                        <Button>B</Button>
                        <Button>C</Button>
                        <Button>D</Button>
                        <Button>E</Button>
                        <Button>F</Button>
                        <Button>G</Button>
                        <Button>H</Button>
                        <Button>I</Button>
                        <Button>K</Button>
                      </div>
                      <div className="book__resever--listseat">
                        <div className="book__listseat--rowseat ">
                          <div>{renderChair()}</div>
                        </div>
                      </div>

                      <div className="right" style={{ width: "5%" }}></div>
                    </div>
                  </div>
                  <div className="book__seatmap-typeseat">
                    <span className="typeseat colorseat colorvip">Vip</span>
                    <span className="typeseat colorseat colordeluxe">
                      Thường
                    </span>
                    <span className="typeseat colorseat colorchosen">
                      Đang chọn
                    </span>
                    <span className="typeseat colorseat colornotchosen">
                      Đã đặt
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 section--right">
            <div className="book__section--right">
              {/* TÍNH TỔNG TIỀN */}
              <div className="book__right--amount">
                <span style={{ fontSize: "16px", color: "#000" }}>
                  Tổng tiền:
                </span>
                {renderAmount()}
              </div>
              <div className="book__right--name">
                <p>
                  <span className="book__name--age">C16</span>
                  {infoMovie.tenPhim}
                </p>
                <p>{infoMovie.diaChi} </p>
                <p>
                  {infoMovie.ngayChieu} - {infoMovie.gioChieu} -{" "}
                  {infoMovie.tenRap}
                </p>
              </div>
              <div className="book__right--chair">
                <div className="book__chair--number">
                  <span>Ghế</span>
                </div>
                <div className="book__chair--price">
                  <span>0 đ</span>
                </div>
              </div>
              <div className="book__right--combo">
                <div className="book__combo--title">
                  {/* GỌI BẮP NƯỚC */}
                  <BookRight />
                </div>
                <div className="book__combo--price">
                  <span>0 đ</span>{" "}
                </div>
              </div>
              {/* <div className="book__right--input input--email">
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    style={{ marginTop: "20px" }}
                  />
                  <TextField
                    style={{ marginTop: "30px" }}
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                  />
                </form>
              </div> */}

              <div className="book__right--input input--discount">
                <div className="input__discount--text">
                  <TextField
                    id="outlined-basic"
                    label="Mã Giảm Giá"
                    variant="outlined"
                  />
                </div>
                <div className="input__discount--btn">
                  <button className="btn--discount">Áp dụng</button>
                </div>
              </div>
              <div className="book__right--checkout">
                <div className="book__right--typeCheckout">
                  <p>Hình thức thanh toán</p>
                  <div className="input-checkout">
                    <input type="radio" id="checkout1" name="checkout-online" />
                    <label htmlFor="checkout1">
                      <img src="../images/checkout1.png" alt />
                    </label>
                  </div>
                  <div className="input-checkout">
                    <input type="radio" id="checkout2" name="checkout-online" />
                    <label htmlFor="checkout2">Chuyển khoản</label>
                  </div>
                </div>
                <div className="book__right--note">
                  <i className="fa fa-exclamation-circle" />
                  <span>Vé đã mua không thể đổi hoặc hoàn tiền</span>
                </div>
                <div className="book__right--btn">
                  <button className="btn--book" onClick={handleBooking}>
                    Đặt vé
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
