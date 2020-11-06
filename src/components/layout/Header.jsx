import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { Button, Menu, MenuItem } from "@material-ui/core";

function Header() {
  let user = useSelector((state) => state.userReducer.credentials);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();

  return (
    <header className="header">
      <NavLink className="header__brand" exact to="/">
        <img src="/images/logoTT.png" alt />
      </NavLink>
      <div className="header__nav">
        <div className="header__nav--menu">
          <ul className="menu--navbar">
            <li>
              <a href="#lichchieu">Lịch chiếu</a>
            </li>
            <li>
              <a href="#cumrap">Cụm rạp</a>
            </li>
            <li>
              <a href="#tintuc">Tin tức</a>
            </li>
            <li>
              <a href="#ungdung">Ứng dụng</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__login">
        {user ? (
          <>
            <Button onClick={handleClick}>
              <i
                style={{
                  color: "#fb4226",
                  fontSize: "30px",
                  marginRight: "5px",
                }}
                class="fa fa-id-card"
              ></i>
              <span
                style={{
                  color: "#fb4226",
                  fontStyle: "italic",
                  fontSize: "18px",
                }}
              >
                Hi! {user.hoTen}
              </span>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link
                style={{
                  display: "block",
                  fontSize: "18px",
                  textDecoration: "none",
                  color: "#444",
                  margin: "20px auto",
                  padding: "5px",
                }}
                onClick={handleClose}
              >
                Thông tin tài khoản
              </Link>
              <Link
                to="/logout"
                style={{
                  display: "block",
                  fontSize: "18px",
                  textDecoration: "none",
                  color: "#444",
                  margin: "20px auto",
                  padding: "5px",
                }}
                onClick={async () => {
                  localStorage.removeItem("creadentials");
                  window.location.replace("/");
                }}
              >
                <i class="fa fa-sign-in-alt"></i> Đăng xuất
              </Link>
            </Menu>
          </>
        ) : (
          <>
            <NavLink exact to="/sign-in">
              <i className="fa fa-user-circle" />
              <span>Đăng nhập</span>
            </NavLink>
            <NavLink exact to="/sign-up">
              <span>Đăng ký</span>
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}

// const mapStateToProps = (state) => ({
//   credentials: state.userReducer.credentials,
// });

export default connect()(Header);
