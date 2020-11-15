import React from "react";
import { NavLink } from "react-router-dom";

export default function DashBoard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard__manage">
        <div className="dashboard__manage--list">
          <NavLink
            className="dashboard__manage--item "
            exact
            to="/admin/manager-user"
          >
            <div className="lineR">
              <div className="dashboard__item--content ">
                <i class="fa fa-user" style={{ color: "#1ebfae" }}></i>
                <p>120</p>
                <span>QUẢN LÝ NGƯỜI DÙNG</span>
              </div>
            </div>{" "}
          </NavLink>
          <NavLink
            exact
            to="/admin/manager-film"
            className="dashboard__manage--item"
          >
            {" "}
            <div className="lineR">
              <div className="dashboard__item--content ">
                <i class="fa fa-film" style={{ color: "#ffb53e" }}></i>
                <p>120</p>
                <span>QUẢN LÝ PHIM</span>
              </div>
            </div>
          </NavLink>
          <NavLink
            className="dashboard__manage--item"
            exact
            to="/admin/manager-cinema"
          >
            <div>
              <div className="dashboard__item--content">
                <i class="fa fa-tv" style={{ color: "#f9243f" }}></i>
                <p>120</p>
                <span>QUẢN LÝ RẠP</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
