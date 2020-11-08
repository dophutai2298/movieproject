import React, { Component } from "react";
import CarouselDetail from "../../components/detailfilm/CarouselDetail";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { connect } from "react-redux";
import {
  fetchFilmDetail,
  fetchFilmShowTime,
} from "../../redux/actions/film.action";
//Tab
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import useStyle from "../../components/detailfilm/style";
// import Showtimes from "../../components/detailfilm/Showtimes";
// import Information from "../../components/detailfilm/Information";
// import Review from "../../components/detailfilm/Review";
// import { makeStyles } from "@material-ui/core";
import SimpleTabs from "../../components/detailfilm/BookingMovieDetail";
import HeaderMobile from "../../components/layout/HeaderMobile";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     color: "#fb4226",
//     backgroundColor: theme.palette.background.paper,
//     width: "80%",
//     marginLeft: "10%",
//     background: "#0a2029",
//   },
// }));

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// function TabMovie(props) {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <section className="introduce">
//       <div className="container">
//         <div className={classes.root}>
//           <AppBar position="static">
//             <Tabs
//               style={{ background: "#0a2029" }}
//               value={value}
//               onChange={handleChange}
//               aria-label="simple tabs example"
//             >
//               <Tab
//                 className="link__notification"
//                 label="Lịch chiếu"
//                 {...a11yProps(0)}
//               />
//               <Tab
//                 className="link__notification"
//                 label="Thông tin"
//                 {...a11yProps(1)}
//               />
//               <Tab
//                 className="link__evaluate"
//                 label="Đánh giá"
//                 {...a11yProps(2)}
//               />
//             </Tabs>
//           </AppBar>
//           <TabPanel value={value} index={0}>
//             <Showtimes />
//           </TabPanel>
//           <TabPanel value={value} index={1}>
//             <Information />
//           </TabPanel>
//           <TabPanel value={value} index={2}>
//             <Review />
//           </TabPanel>
//         </div>
//       </div>
//     </section>
//   );
// }

class DetailMovieScreen extends Component {
  render() {
    const { movieDetail } = this.props;
    const { isLoading } = this.props;
    const { movieShowTime } = this.props;
    if (isLoading) {
      return (
        <div>
          <Header />
          <div className="loader">Loading...</div>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <HeaderMobile />
        <CarouselDetail movieDetail={movieDetail} />
        {/* <TabMovie movieDetail={movieDetail} /> */}
        <SimpleTabs movieShowTime={movieShowTime} movieDetail={movieDetail} />
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchFilmDetail(this.props.match.params.movieID));
    this.props.dispatch(fetchFilmShowTime(this.props.match.params.movieID));
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.commonReducer.isLoading,
    movieShowTime: state.filmReducer.movieShowTime,
    movieDetail: state.filmReducer.movieDetail || {
      lichChieu: {
        thongTinRap: {
          maRap: "",
          tenRap: "",
          maCumRap: "",
          tenCumRap: "",
          maHeThongRap: "",
          tenHeThongRap: "",
        },
        maLichChieu: "",
        maRap: "",
        maPhim: "",
        tenPhim: "",
        ngayChieuGioChieu: "",
        giaVe: "",
        thoiLuong: "",
      },
    },
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "",
    moTa: "",
    maNhom: "",
    ngayKhoiChieu: "",
    danhGia: "",
  };
};

export default connect(mapStateToProps)(DetailMovieScreen);
