import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
  render() {
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
          <NavLink exact to="/sign-in">
            <i className="fa fa-user-circle" />
            <span>Đăng nhập</span>
          </NavLink>

          <NavLink exact to="/sign-up">
            <span>Đăng ký</span>
          </NavLink>
        </div>
      </header>
    );
  }
}

export default Header;
