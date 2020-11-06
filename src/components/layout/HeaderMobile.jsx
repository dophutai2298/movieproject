import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  appBar: {
    backgroundColor: "#fff",
    color: "#000",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  logo: {
    width: "90px",
    height: "40px",
  },
  login: {
    textDecoration: "none",
    color: "#000",
  },
  draw: {
    width: "250px",
    height: "100%",
  },
}));

export default function HeaderMobile() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(true);
  };

  const handleLink = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title}>
            <NavLink exact to="/">
              <img className={classes.logo} src="/images/logoTT.png" alt />
            </NavLink>
          </Typography>
          <NavLink
            className={classes.login}
            exact
            to="/sign-in"
            color="inherit"
          >
            Login
          </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.draw}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="menu__mobile">
          <div className="menu__mobile--item">
            <NavLink className="menu__mobile--branch" exact to="/">
              <img src="/images/logoTT.png" alt />
            </NavLink>
            <ul className={classes.menuitem}>
              <li>
                <a onClick={handleLink} href="#">
                  Lịch chiếu
                </a>
              </li>
              <li>
                <a onClick={handleLink} href="#cumrap">
                  Cụm rạp
                </a>
              </li>
              <li>
                <a onClick={handleLink} href="#tintuc">
                  Tin tức
                </a>
              </li>
              <li>
                <a onClick={handleLink} href="#ungdung">
                  Ứng dụng
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
