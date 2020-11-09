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
    marginTop: "20px",
  },
  chuaDat: {
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  chuaDatGheThuong: {
    backgroundColor: "blue",
    "&:hover": {
      backgroundColor: "aqua",
    },
  },
  chuaDatGheVip: {
    backgroundColor: "yellow",
    "&:hover": {
      backgroundColor: "aqua",
    },
  },

  daDat: {
    backgroundColor: "blue",
  },

  dangChon: {
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "aqua",
    },
  },
}));

export default useStyles;
