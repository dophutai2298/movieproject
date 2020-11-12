import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      width: "33ch",
    },
  },
  root1: {
    flexGrow: 1,
  },
  root2: {
    marginTop: "5px",
  },

  chuaDat: {
    backgroundColor: "transparent",
    border: "1px solid #333",
    "&:hover": {
      backgroundColor: "transparent",
      border: "1px solid #333",
    },
  },
  chuaDatGheThuong: {
    backgroundColor: "#4a90e2",
    "&:hover": {
      backgroundColor: "#4a90e2",
    },
  },
  chuaDatGheVip: {
    backgroundColor: "#f7b500",
    "&:hover": {
      backgroundColor: "#f7b500",
    },
  },

  daDat: {
    backgroundColor: "#c5c5c5",
    "&:hover": {
      cursor: "no-drop",
    },
  },

  dangChon: {
    backgroundColor: "#fb4226",
    "&:hover": {
      backgroundColor: "#fb4226",
    },
  },
}));

export default useStyles;
