import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from "@material-ui/core";
import {useSelector,useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #fff",
    width: "40%",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btnHistory: { border: "1px solid #964040", color: "#964040" },
  divBtn: {
    marginTop: "3%",
  },
}));

export default function ModalHistoryUser() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const infoUser = useSelector((state) => state.userReducer.userInfoBooking);
 const dispatch= useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
       <Button className={classes.btnHistory} onClick={handleOpen} >Lịch sử</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div>

            </div>
            <div className={classes.divBtn}>
                <Button
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Thoát
                </Button>
                
              </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
