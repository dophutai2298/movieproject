import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderAdmin() {
  return (
    <header className="header__admin">
      <NavLink className="header__admin--brand" exact to="/admin">
        <p>
          TTMovie<span>Admin</span>
        </p>
      </NavLink>
    </header>
  );
}
